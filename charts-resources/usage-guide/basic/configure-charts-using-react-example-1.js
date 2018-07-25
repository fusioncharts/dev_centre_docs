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
    }
    events: {
        "beforeRender": function(evt, args) {
            var controls = document.createElement('div'),
                chartRef = evt.sender;
            updateData = function() {
                var newData = {
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
                        "value": "200"
                    }, {
                        "label": "Saudi",
                        "value": "260"
                    }, {
                        "label": "Canada",
                        "value": "210"
                    }, {
                        "label": "Iran",
                        "value": "190"
                    }, {
                        "label": "Russia",
                        "value": "115"
                    }, {
                        "label": "UAE",
                        "value": "120"
                    }, {
                        "label": "US",
                        "value": "30"
                    }, {
                        "label": "China",
                        "value": "30"
                    }]
                };
                chartRef.setJSONData(newData);
            };
            controls.innerHTML = '<button onClick="updateData()" >Update chart data</button>';
            controls.style.cssText = 'text-align: center; width: 400px; padding-left: 200px;';
            args.container.appendChild(controls);
        }
    }
}