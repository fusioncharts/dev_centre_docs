{
    type: 'stackedbar3d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise quarterly revenue in last year",
            "subCaption": "Harry's SuperMart",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "121000"
            }, {
                "value": "135000"
            }, {
                "value": "123500"
            }, {
                "value": "145000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "131400"
            }, {
                "value": "154800"
            }, {
                "value": "98300"
            }, {
                "value": "131800"
            }]
        }]
    }
}
