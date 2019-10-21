{

    type: 'column2d',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
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
                chartRef = evt.sender,
                btn = document.createElement('button');

            var updateData = function() {
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

            btn.style.cssText = "background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;";
            btn.innerText = "Update chart data";
            btn.onclick = updateData;

            controls.style.cssText = 'text-align: center; ';
            controls.appendChild(btn);
            args.container.appendChild(controls);
        }
    }
}
