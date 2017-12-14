{
    type: 'stackedarea2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Product-wise quarterly revenue in current year",
            "xAxisname": "Quarter",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "paletteColors": "#0075c2,#1aaf5d",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "plotFillAlpha": "50",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "showValues": "0",
            "showBorder": "0",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "1",
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14"
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
        }]
    }
}
