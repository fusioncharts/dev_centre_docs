{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    id: 'font-chart',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fusion",
            "rotateValues": "1"
        },

        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    },
    events: {
        'beforeRender': function(evt, args) {
            // Create container div for caption, subcaption and update button
            var controls = document.createElement('div');
            controls.innerHTML = '<span>Font size:</span><input type = "button" value = "+" id="font-size+"/><input type = "button" value = "-" id="font-size-"/>';

            // Append controls to document
            args.container.appendChild(controls);

            // set css styles for "span" elements in controls div
            var span = controls.getElementsByTagName('span');
            for (var i = 0; i < span.length; i++) {
                span[i].style.cssText = 'margin:2px; font-size:11px;';
            }

            // set css styles for "input" elements in controls div
            var input = controls.getElementsByTagName('input');
            for (var i = 0; i < input.length; i++) {
                input[i].style.cssText = 'margin:2px; font-size:11px;';
            }
        },
        'renderComplete': function() {
            // Get chart object
            var revenueChart = FusionCharts.items['font-chart'];

            // listener to Increase font size button which updates the baseFontSize property
            // by using the setChartAttribute function
            document.getElementById('font-size+').onclick = function() {
                revenueChart.setChartAttribute('baseFontSize', (Number(revenueChart.getChartAttribute('baseFontSize')) || 12) + 2);
            };

            // listener to Decrease font size button which updates the baseFontSize proeprty 
            // by using the setChartAttribute function
            document.getElementById('font-size-').onclick = function() {
                revenueChart.setChartAttribute('baseFontSize', (Number(revenueChart.getChartAttribute('baseFontSize')) || 12) - 2);
            };
        }
    }
}
