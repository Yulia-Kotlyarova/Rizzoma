$(document).ready(function() {
    let ctx = document.getElementById('myChart').getContext('2d');
    document.getElementById('myChart').style.width = '100%';
    document.getElementById('myChart').style.height = '100%';
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';

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

    Chart.pluginService.register({
        beforeDraw: function(chart) {
            if (chart.config.options.elements.center) {
                // Get ctx from string
                let ctx = chart.chart.ctx;
    
                // Get options from the center object in options
                let centerConfig = chart.config.options.elements.center;
                let fontStyle = centerConfig.fontStyle || 'Arial';
                let txt = centerConfig.text;
                let color = centerConfig.color || '#000';
                let maxFontSize = centerConfig.maxFontSize || 75;
                let sidePadding = centerConfig.sidePadding || 20;
                let sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
                // Start with a base font of 30px
                ctx.font = "30px " + fontStyle;
    
                // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
                let stringWidth = ctx.measureText(txt).width;
                let elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
    
                // Find out how much the font can grow in width.
                let widthRatio = elementWidth / stringWidth;
                let newFontSize = Math.floor(30 * widthRatio);
                let elementHeight = (chart.innerRadius * 2);
    
                // Pick a new font size so it will not be larger than the height of label.
                let fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
                let minFontSize = centerConfig.minFontSize;
                let lineHeight = centerConfig.lineHeight || 25;
                let wrapText = false;
    
                if (minFontSize === undefined) {
                minFontSize = 20;
                }
    
                if (minFontSize && fontSizeToUse < minFontSize) {
                fontSizeToUse = minFontSize;
                wrapText = true;
                }
    
                // Set font settings to draw it correctly.
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                let centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
                let centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
                ctx.font = fontSizeToUse + "px " + fontStyle;
                ctx.fillStyle = color;
    
                if (!wrapText) {
                ctx.fillText(txt, centerX, centerY);
                return;
                }
    
                let words = txt.split(' ');
                let line = '';
                let lines = [];
    
                // Break words up into multiple lines if necessary
                for (let n = 0; n < words.length; n++) {
                let testLine = line + words[n] + ' ';
                let metrics = ctx.measureText(testLine);
                let testWidth = metrics.width;
                if (testWidth > elementWidth && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
                }
    
                // Move the center up depending on line height and number of lines
                centerY -= (lines.length / 2) * lineHeight;
    
                for (let n = 0; n < lines.length; n++) {
                ctx.fillText(lines[n], centerX, centerY);
                centerY += lineHeight;
                }
                //Draw text in center
                ctx.fillText(line, centerX, centerY);
            }
            }
      });

    let data = {
        datasets: [{
            data: [50, 25, 25, 0],
            backgroundColor: [gradientExcellent, gradientGood, gradientPassably, gradientDisappointed],
            borderWidth: 2,
            // borderAlign: 'inner',
            // weight: 4

        }],
        labels: [
            'Великолепно',
            'Хорошо',
            'Удовлетворительно',
            'Разочарован'
        ]
    };
    let options = {
        cutoutPercentage: 90,

        legend: {
            display: true,
            position: 'right',
            align: 'end',
            labels: {
                fontSize: 14,
                fontColor: '#1F2041',
                usePointStyle:true,
                boxWidth: 9
            },
        },
        elements: {
            center: {
              text: '260 голосов',
              color: '#BC9CFF',
              fontStyle: 'Montserrat, Arial',
            //   sidePadding: 20, 
              fontSize: 24,
              fontWeight: '700',
              lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
        },
        tooltips: {
            enabled: false
        }
    }

    let myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
})
