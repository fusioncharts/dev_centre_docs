{
    type: 'angularGauge',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        // chart configuration
        "chart": {
            "caption": "Customer Satisfaction Score",
            "subcaption": "Los Angeles Topanga",
            "plotToolText": "Current Score: $value",
            "theme": "fusion",
            "chartBottomMargin": "50",
            "showValue": "1"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "90",
                "code": "#e44a00"
            }, {
                "minValue": "90",
                "maxValue": "150",
                "code": "#f8bd19"
            }, {
                "minValue": "150",
                "maxValue": "250",
                "code": "#6baa01"
            }]
        },
        "dials": {
            "dial": [{
                "value": "70",
                "id": "dial1"
            }]
        }
    },

    events: {
        "beforeRender": function(evt, args) {
            var controls = document.createElement('div'),
                chartRef = evt.sender;
            chartRef.getRandomNumber = function() {
                var max = 250,
                    min = 0;
                return Math.round(((max - min) * Math.random()) + min);
            }

            window.updateData = function() {
                //clones data
                var data = Object.assign({}, chartRef.getJSONData());
                data.dials.dial[0].id = 'dial1';
                data.dials.dial[0].value = chartRef.getRandomNumber();


                chartRef.setJSONData(data);
            };
            controls.innerHTML = '<button style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;" onClick="updateData()" >Update chart data</button>';
            controls.style.cssText = 'text-align: center; width: 100%;';
            args.container.appendChild(controls);
        }
    }
}
