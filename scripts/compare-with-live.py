#!/usr/bin/env python3
"""Compare a local docs build (_site/) with the published site.

HTML pages are loaded in headless Chrome on both sides and the rendered DOM is
compared (after highlight.js and other scripts run), ignoring whitespace between
tags. Other files are compared byte for byte, except feed.xml (<updated> differs
every build) and CSS source maps (only `sources` paths may differ).

Usage:
    npm run build:docs
    python3 scripts/compare-with-live.py [--live https://app-ui.nextcommerce.com] [--site _site]

Requires Google Chrome or Chromium (override the binary with CHROME=/path/to/chrome).
Exits non-zero if anything differs.
"""
import argparse
import difflib
import functools
import http.server
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import threading
import urllib.error
import urllib.request
from pathlib import Path


def find_chrome():
    for name in (os.environ.get("CHROME"), "google-chrome", "google-chrome-stable", "chromium", "chromium-browser"):
        if name and shutil.which(name):
            return shutil.which(name)
    sys.exit("Chrome/Chromium not found; set CHROME=/path/to/chrome")


def render(chrome, url, profile_dir):
    result = subprocess.run(
        [chrome, "--headless=new", "--disable-gpu", "--no-sandbox", f"--user-data-dir={profile_dir}",
         "--virtual-time-budget=8000", "--dump-dom", url],
        capture_output=True, text=True, timeout=120,
    )
    return result.stdout


def normalize(html):
    return re.sub(r"\s+", " ", re.sub(r">\s+<", "><", html)).strip()


def fetch(url):
    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            return response.read()
    except urllib.error.HTTPError as error:
        return f"HTTP {error.code}".encode()


def compare_file(rel, local_bytes, live_bytes):
    if rel.endswith("feed.xml"):
        strip = lambda b: re.sub(rb"<updated>[^<]*</updated>", b"", b)
        return strip(local_bytes) == strip(live_bytes)
    if rel.endswith(".css.map"):
        try:
            local_map, live_map = json.loads(local_bytes), json.loads(live_bytes)
        except ValueError:
            return False
        local_map.pop("sources", None)
        live_map.pop("sources", None)
        return local_map == live_map
    return local_bytes == live_bytes


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--live", default="https://app-ui.nextcommerce.com")
    parser.add_argument("--site", default="_site")
    args = parser.parse_args()

    site = Path(args.site)
    if not site.is_dir():
        sys.exit(f"{site} not found; run `npm run build:docs` first")
    live = args.live.rstrip("/")
    chrome = find_chrome()

    class QuietHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass

    handler = functools.partial(QuietHandler, directory=str(site))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    local = f"http://127.0.0.1:{server.server_address[1]}"

    failures = 0
    with tempfile.TemporaryDirectory() as profile_dir:
        for path in sorted(site.rglob("*")):
            if not path.is_file():
                continue
            rel = path.relative_to(site).as_posix()
            if rel.endswith("index.html"):
                url_path = "/" + rel[: -len("index.html")]
                live_dom = normalize(render(chrome, live + url_path, profile_dir))
                local_dom = normalize(render(chrome, local + url_path, profile_dir))
                if live_dom == local_dom:
                    print(f"  same     {url_path}")
                    continue
                failures += 1
                print(f"  DIFFERS  {url_path}")
                split = lambda s: re.split(r"(?=<)", s)
                diff = [line for line in difflib.unified_diff(split(live_dom), split(local_dom), "live", "local", lineterm="", n=0)
                        if line[:1] in "+-" and line[:3] not in ("+++", "---")]
                for line in diff[:10]:
                    print(f"           {line[:160]}")
            else:
                if compare_file(rel, path.read_bytes(), fetch(f"{live}/{rel}")):
                    print(f"  same     /{rel}")
                else:
                    failures += 1
                    print(f"  DIFFERS  /{rel}")

    server.shutdown()
    print(f"\n{failures} difference(s)" if failures else "\nNo differences")
    sys.exit(1 if failures else 0)


if __name__ == "__main__":
    main()
