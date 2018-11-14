{
    
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 5 stores in last month by revenue",
            "subCaption": "Harry's SuperMart",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "data": [{
            "label": "Bakersfield Central",
            "value": "880000"
        }, {
            "label": "Garden Groove harbour",
            "value": "730000"
        }, {
            "label": "Los Angeles Topanga",
            "value": "590000"
        }, {
            "label": "Compton-Rancho Dom",
            "value": "520000"
        }, {
            "label": "Daly City Serramonte",
            "value": "330000"
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var controls = document.createElement('div'),
                chartRef = evt.sender;
            updateData = function() {
                var newData = {
                    "chart": {
                        "caption": "Top 5 stores in last month by revenue",
                        "subCaption": "Harry's SuperMart",
                        "numberPrefix": "$",
                        "theme": "fusion"
                    },
                    "data": [{
                        "label": "Bakersfield Central",
                        "value": "880000"
                    }, {
                        "label": "Garden Groove harbour",
                        "value": "730000"
                    }, {
                        "label": "This Label is Updated",
                        "value": "420000"
                    }, {
                        "label": "This Label is Updated as well",
                        "value": "320000"
                    }, {
                        "label": "Daly City Serramonte",
                        "value": "330000"
                    }]
                };
                chartRef.setJSONData(newData);
            };
            controls.innerHTML = '<button onClick="updateData()">Update chart data</button>';
            controls.style.cssText = 'text-align: center; width: 400px; ';
            args.container.appendChild(controls);
        }
    }
}
