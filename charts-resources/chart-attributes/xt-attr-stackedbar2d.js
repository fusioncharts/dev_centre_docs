{
    type: 'stackedbar2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise quarterly revenue in current year",
            "subCaption": "Harry's SuperMart",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2,#1aaf5d",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "valueFontColor": "#ffffff",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "1",
            "showAlternateVGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14",
            "showHoverEffect": "1"

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
