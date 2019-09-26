{
    type: 'mscolumn2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "yAxisName": "Revenues (In USD)",
            "xaxisName": "Quarter",
            "numberPrefix": "$",
            "plotFillAlpha": "80",
            "legendCaption": "Comparsion",
            "legendPosition": "RIGHT",
            "legendItemFontBold": "1",
            "legendItemFontSize": "16",
            "legendItemFontColor": "000000",
            "theme": "fusion"
        },
        "categories": [{
            "category": [
                {
                    "label": "Q1"
                }, {
                    "label": "Q2"
                }, {
                    "label": "Q3"
                }, {
                    "label": "Q4"
                }
            ]
        }],
        "dataset": [{
            "seriesname": "Previous Year",
            "data": [{
                "value": "10000"
            }, {
                "value": "11500"
            }, {
                "value": "12500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "Current Year",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "26800"
            }]
        }]
    }
}