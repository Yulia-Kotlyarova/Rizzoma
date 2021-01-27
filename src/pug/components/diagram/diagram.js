$(document).ready(function() {
    let ctx = document.getElementById('myChart').getContext('2d');
    document.getElementById('myChart').style.width = '100%';
    document.getElementById('myChart').style.height = '100%';

    let excellent = ['#FFE39C', '#FFBA9C'];
    let good = ['#6FCF97', '#66D2EA'];
    let passably = ['#BC9CFF', '#66D2EA'];
    let disappointed = ['#909090', '#3D4975'];

    let gradientExcellent = ctx.createLinearGradient(0, 0, 0, 400);
    gradientExcellent.addColorStop(0, excellent[0]);   
    gradientExcellent.addColorStop(1, excellent[1]);

    let gradientGood = ctx.createLinearGradient(0, 0, 0, 400);
    gradientGood.addColorStop(0, good[0]);   
    gradientGood.addColorStop(1, good[1]);

    let gradientPassably = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPassably.addColorStop(0, passably[0]);   
    gradientPassably.addColorStop(1, passably[1]);

    let gradientDisappointed = ctx.createLinearGradient(0, 0, 0, 400);
    gradientDisappointed.addColorStop(0, disappointed[0]);   
    gradientDisappointed.addColorStop(1, disappointed[1]);

    let data = {
        datasets: [{
            data: [50, 25, 25, 0],
            backgroundColor: [gradientExcellent, gradientGood, gradientPassably, gradientDisappointed]

        }],
        labels: [
            'Великолепно',
            'Хорошо',
            'Удовлетворительно',
            'Разочарован'
        ]
    };
    let options = {

        legend: {
            display: true,
            position: 'right',
            align: 'start',

            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }

    let myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
})
