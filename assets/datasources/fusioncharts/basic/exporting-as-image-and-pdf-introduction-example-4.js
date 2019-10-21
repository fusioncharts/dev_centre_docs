{
    type: 'stackedcolumn2d',
    renderAt: 'chart-container1',
    id: 'chart2',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Yearly Energy Production Rate",
            "subCaption": " Top 5 Developed Countries",
            "numbersuffix": " TWh",
            "showSum": "1",
            "plotToolText": "$label produces <b>$dataValue</b> of energy from $seriesName",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Canada"
            }, {
                "label": "China"
            }, {
                "label": "Russia"
            }, {
                "label": "Australia"
            }, {
                "label": "United States"
            }, {
                "label": "France"
            }]
        }],
        "dataSet": [{
            "seriesName": "Coal",
            "data": [{
                "value": "400"
            }, {
                "value": "830"
            }, {
                "value": "500"
            }, {
                "value": "420"
            }, {
                "value": "790"
            }, {
                "value": "380"
            }]
        }, {
            "seriesName": "Hydro",
            "data": [{
                "value": "350"
            }, {
                "value": "620"
            }, {
                "value": "410"
            }, {
                "value": "370"
            }, {
                "value": "720"
            }, {
                "value": "310"
            }]
        }, {
            "seriesName": "Nuclear",
            "data": [{
                "value": "210"
            }, {
                "value": "400"
            }, {
                "value": "450"
            }, {
                "value": "180"
            }, {
                "value": "570"
            }, {
                "value": "270"
            }]
        }, {
            "seriesName": "Gas",
            "data": [{
                "value": "180"
            }, {
                "value": "330"
            }, {
                "value": "230"
            }, {
                "value": "160"
            }, {
                "value": "440"
            }, {
                "value": "350"
            }]
        }, {
            "seriesName": "Oil",
            "data": [{
                "value": "60"
            }, {
                "value": "200"
            }, {
                "value": "200"
            }, {
                "value": "50"
            }, {
                "value": "230"
            }, {
                "value": "150"
            }]
        }]
    },
    events: {
        "beforerender": function(evt, args){
            var controls = document.createElement('div');

            window.exportChart = function() {
                FusionCharts.batchExport({
                    exportFormat: 'pdf',
                     charts:[{
                            "id":"chart1"
                        },{
                            "id":"chart2"
                    }]
                });
            };

            controls.innerHTML = '<button style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;" onClick="exportChart()" >Export both Charts in Single PDF</button>';
            controls.style.cssText = 'text-align: center; width: 100%;';
            args.container.appendChild(controls);
        }
    }
}
