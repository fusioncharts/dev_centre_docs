{
    type: 'mscombidy2d',
    renderAt: 'chart-container',
    width: '550',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product A-Sales Details",


            "pYAxisName": "Revenue",
            "sYAxisName": "Quantity (In Units) %",
            "numberPrefix": "$",
            "formatNumberScale": "0",
            "showValues": "0",
            "decimals": "0",

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
            "showAlternateVGridColor": "0",
            "legendBgAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666"
        },
        "categories": [{
            "category": [{
                    "label": "Quarter 1"
                }, {
                    "label": "Quarter 2"
                }, {
                    "label": "Quarter 3"
                }, {
                    "label": "Quarter 4"
                }

            ]
        }],
        "dataset": [{
            "seriesName": "Revenue",
            "data": [{
                    "value": "576000"
                }, {
                    "value": "448000"
                }, {
                    "value": "956000"
                }, {
                    "value": "734000"
                }

            ]
        }, {
            "seriesName": "Quantity",
            "parentYAxis": "S",
            "renderAs": "line",
            "showValues": "0",

            "data": [{
                    "value": "576"
                }, {
                    "value": "448"
                }, {
                    "value": "956"
                }, {
                    "value": "734"
                }

            ]
        }]
    }
}
