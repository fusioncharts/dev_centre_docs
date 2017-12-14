{
    type: 'mscolumn3d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Sales by quarter",
            "xAxisName": "Quarter",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "legendBorderAlpha": "0",
            "legendBgAlpha": "0",
            "legendShadow": "0",
            "showHoverEffect": "1",
            "valueFontColor": "#ffffff",
            "rotateValues": "1",
            "placeValuesInside": "1",
            "divlineColor": "#999999",
            "divLineDashed": "1",
            "divLineDashLen": "1",
            "canvasBgColor": "#ffffff",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0"
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
