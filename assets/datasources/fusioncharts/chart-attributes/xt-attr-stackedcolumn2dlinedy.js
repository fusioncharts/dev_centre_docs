{
    type: 'stackedcolumn2dlinedy',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise Quarterly Revenue vs. Profit %",
            "subCaption": "Harry's SuperMart - Last Year",
            "xAxisname": "Quarter",
            "pYAxisName": "Sales",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "25",
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
                "value": "11000"
            }, {
                "value": "15000"
            }, {
                "value": "13500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "11400"
            }, {
                "value": "14800"
            }, {
                "value": "8300"
            }, {
                "value": "11800"
            }]
        }, {
            "seriesname": "Profit %",
            "renderAs": "line",
            "parentYAxis": "S",
            "showValues": "0",
            "data": [{
                "value": "14"
            }, {
                "value": "16"
            }, {
                "value": "15"
            }, {
                "value": "17"
            }]
        }]
    }
}
