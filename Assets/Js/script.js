const ctx = document.getElementsByClassName('bar');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 18, 6, 12, 20, 13, 9, 5, 10, 4, 20],
            borderWidth: 0.5
        }]
    },
});

const ctx2 = document.getElementsByClassName('bar2');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '',],
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 18, 6, 12, 20],
            borderWidth: 0.5
        }]
    },
});

const ctx3 = document.getElementsByClassName('bar3');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '',],
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 18, 6, 12, 20],
            borderWidth: 0.5
        }]
    },
});

const ctx4 = document.getElementsByClassName('bar4');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '',],
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 18, 6, 12, 20],
            borderWidth: 0.5
        }]
    },
});


