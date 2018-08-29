{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var controls = document.createElement('div'),
            var clicks = document.createElement('a'),
                chartRef = evt.sender;

            chartRef.getRandomNumber = function() {
                var max = 300,
                    min = 50;
                return Math.round(((max - min) * Math.random()) + min);
            }
            updateData = function() {

                //clones data
                var data = Object.assign({}, chartRef.getJSONData());
                data.data[2].label = 'Canada';
                data.data[2].value = chartRef.getRandomNumber();

                data.data[3].label = 'Iran';
                data.data[3].value = chartRef.getRandomNumber();
                chartRef.setJSONData(data);
            };
            controls.innerHTML = '<button onClick="updateData()" >Update chart data</button>';
            controls.style.cssText = 'text-align: center; width: 400px; padding-left: 200px;';
            clicks.innerHTML = '<button onClick="updateData()" >Update chart data</button>';
            clicks.style.cssText = 'background-color: #6957da; border: none; display: inline-block; color: white; padding: 15px 32px;';
            args.container.appendChild(controls);
            args.container.appendChild(clicks);
        }
    }
}