{
    type: 'mscolumn2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "subCaption": "Last year Vs This year",
            "xAxisname": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fint",
            //Set legend to appear at right side of chart
            "legendPosition": "right",
            //Set a text caption for legend
            "legendCaption": "Which year?",
            "legendCaptionBold": "1",
            "legendCaptionFont": "Arial",
            "legendCaptionFontSize": "14",
            "legendCaptionFontColor": "#333333",
            //Configuration for legend font
            "legendItemFontBold": "0",
            "legendItemFont": "Arial",
            "legendItemFontSize": "11",
            "legendItemFontColor": "#666666",
            "legendItemHoverFontColor": "#000000",
            "legendCaptionAlignment": "left",
            //Color of hidden legend item
            "legendItemHiddenColor": "#e8e8e8"
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
