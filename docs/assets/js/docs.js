// JS file for docs features and ui demos

// main nav
(function () {
    const myCollapsible = document.getElementById('components')
    myCollapsible.addEventListener('shown.bs.collapse', event => {
        location.href = '/components/alerts/';
    })
});

// charts
var lineComparison = document.getElementById('lineComparison');

if (typeof Chart !== 'undefined' && lineComparison) {
    new Chart(lineComparison, {
        type: 'line',
        data: {
            labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 5', 'Jan 12', 'Jan 15', 'Jan 18', 'Jan 20', 'Jan 21', 'Jan 22', 'Jan 23', 'Jan 25'],
            datasets: [
                {
                    label: 'Jan 1 - Jan 25, 2019',
                    order: 1,
                    data: [100, 110, 120, 122, 127, 150, 134, 145, 155, 130, 155, 145],
                    borderColor: '#E3EBF6'
                }, {
                    label: 'Jan 1 - Jan 25, 2020',
                    order: 0,
                    data: [150, 170, 180, 160, 174, 256, 230, 250, 225, 234, 240, 240],
                    borderColor: '#2C7BE5'
                }]
        }
    });
}

var stackedBar = document.getElementById('stackedBar');

if (typeof Chart !== 'undefined' && stackedBar) {
    new Chart(stackedBar, {
        type: 'bar',
        options: {
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        },
        data: {
            labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 5', 'Jan 12', 'Jan 15', 'Jan 18', 'Jan 20', 'Jan 21', 'Jan 22', 'Jan 23', 'Jan 25'],
            datasets: [
                {
                    type: "bar",
                    label: 'Account Updater',
                    data: [1, 11, 12, 10, 6, 17, 7, 20, 6, 18, 3, 10],
                    backgroundColor: '#00D97E'
                },
                {
                    type: "bar",
                    label: 'Retry',
                    data: [11, 0, 4, 4, 12, 3, 12, 17, 5, 10, 20, 3],
                    backgroundColor: '#ccf7e5'
                },
                {
                    type: "bar",
                    label: 'Email',
                    data: [18, 2, 8, 7, 5, 4, 14, 20, 17, 3, 15, 11],
                    backgroundColor: '#3266ff'
                },
                {
                    type: "bar",
                    label: 'Storefront',
                    data: [15, 17, 16, 16, 15, 5, 4, 11, 13, 4, 15, 14],
                    backgroundColor: '#84a3ff'
                },
                {
                    type: "bar",
                    label: 'Dashboard',
                    data: [13, 5, 1, 11, 14, 20, 7, 17, 2, 10, 16, 10],
                    backgroundColor: '#d6e0ff'
                }
            ]
        }
    });
}


var barLineChart = document.getElementById('barLineCombo');

if (typeof Chart !== 'undefined' && barLineChart) {
    new Chart(barLineChart, {
        type: 'bar',
        options: {
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            },
        },
        data: {
            labels: ['Jul 1', 'Jul 2', 'Jul 3', 'Jul 5', 'Jul 12', 'Jul 15', 'Jul 18', 'Jul 20', 'Jul 21', 'Jul 22', 'Jul 23', 'Jul 25', 'Jul 27', 'Jul 29', 'Jul 31'],
            datasets: [
                {
                    type: 'line',
                    label: 'Net Revenue',
                    data: [125.00, 75.00, 42.00, -52.00, 331.00, -81.00, -28.00, -33.00, 9.00, 43.00, 0.00, 63.00, 125.00, 75.00, 42.00],
                    borderColor: '#2c7be5'
                },
                {
                    type: "bar",
                    label: 'Sales',
                    data: [350.00, 300.00, 200.00, 120.00, 710.00, 210.00, 148.00, 136.00, 198.00, 163.00, 210.00, 232.00, 350.00, 300.00, 200.00],
                    backgroundColor: '#00D97E'
                },

                {
                    type: "bar",
                    label: 'Refunds',
                    data: [-125.00, -120.00, -130.00, -232.00, -173.00, -363.00, -332.00, -232.00, -165.00, -126.00, -230.00, -133.00, -125.00, -120.00, -130.00],
                    backgroundColor: '#f6c343'
                }
            ]
        }
    });
}
