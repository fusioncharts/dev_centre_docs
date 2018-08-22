{
    type: 'stackedcolumn2dline',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise quarterly revenue Vs profit in last year",
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
                "value": "110000"
            }, {
                "value": "150000"
            }, {
                "value": "135000"
            }, {
                "value": "150000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "114000"
            }, {
                "value": "148000"
            }, {
                "value": "83000"
            }, {
                "value": "118000"
            }]
        }, {
            "seriesname": "Profit",
            "renderAs": "line",
            "showValues": "0",
            "data": [{
                "value": "24000"
            }, {
                "value": "45000"
            }, {
                "value": "23000"
            }, {
                "value": "38000"
            }]
        }]
    }
}
