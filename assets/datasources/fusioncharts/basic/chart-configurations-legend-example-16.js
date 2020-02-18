{
    type: 'mscolumn2d',
    renderAt: 'chart-container',
    width: '700',
    height: '420',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "subCaption": "Last year vs This year",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "showLegend": "1",
            "legendPosition": "top-right",
            "legendAllowDrag": "1",
            "interactiveLegend": "0",
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
            "seriesname": "Last Year",
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
            "seriesname": "This Year",
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