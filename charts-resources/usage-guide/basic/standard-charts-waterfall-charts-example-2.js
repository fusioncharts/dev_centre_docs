{
    type: 'waterfall2d',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total Profit Calculation",
            "subcaption": "Last month",
            "yAxisname": "Amount (In USD)",
            "numberprefix": "$",
            "connectordashed": "1",
            "sumlabel": "Total {br} Profit",
            "positiveColor": "#1aaf5d",
            "negativeColor": "#c02d00",
            //Cosmetics
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "showBorder": "0",
            "bgColor": "#ffffff",
            "showShadow": "0",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "usePlotGradientColor": "0",
            "showplotborder": "0",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
        },
        "data": [{
            "label": "Online sales",
            "value": "420000"
        }, {
            "label": "Store Sales",
            "value": "710000"
        }, {
            "label": "Total Sales",
            "issum": "1"
        }, {
            "label": "Fixed Costs",
            "value": "-250000"
        }, {
            "label": "Variable Costs",
            "value": "-156000"
        }, {
            "label": "COGS",
            "value": "-310000"
        }, {
            "label": "Promotion Costs",
            "value": "-86000"
        }, {
            "label": "Total Costs",
            "issum": "1",
            "cumulative": "0"
        }]
    }
}
