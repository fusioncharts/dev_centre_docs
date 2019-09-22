{
    type: 'errorline',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "xaxisname": "Category",
            "yaxisname": "Item (%)",
            "numberSuffix": "%",
            "caption": "Estimated Procurement from Top 2 Suppliers",
            "subcaption": "(Next Year)",
            "showvalues": "0",
            "halferrorbar": "0",
            "plottooltext": "$seriesname, $label: $value%"
        },
        "categories": [{
            "category": [{
                "label": "Food & Beverage"
            }, {
                "label": "Apparel"
            }, {
                "label": "Electronics"
            }, {
                "label": "Baby Products"
            }]
        }],
        "dataset": [{
            "seriesname": "MB Suppliers",
            "data": [{
                "value": "28",
                "errorvalue": "2"
            }, {
                "value": "16",
                "errorvalue": "2"
            }, {
                "value": "24",
                "errorvalue": "3"
            }, {
                "value": "32",
                "errorvalue": "2"
            }]
        }, {
            "seriesname": "VST Group Co Ltd ",
            "data": [{
                "value": "12",
                "errorvalue": "2"
            }, {
                "value": "30",
                "errorvalue": "4"
            }, {
                "value": "35",
                "errorvalue": "5"
            }, {
                "value": "14",
                "errorvalue": "2"
            }]
        }]
    }
}
