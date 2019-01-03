{
    type: 'mssplinearea',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of Footfalls Last Week",
            "subCaption": "Garden Groove harbour vs Crompton-Rancho Dom",
            "xAxisName": "Day",
            "yAxisName": "No. of Footfalls",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "subcaptionFontBold": "0",
            "paletteColors": "#6baa01,#008ee4",
            "usePlotGradientColor": "0",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showPlotBorder": "0",
            "showValues": "0",
            "showShadow": "0",
            "showAlternateHGridColor": "0",
            "showCanvasBorder": "0",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "canvasBgColor": "#ffffff",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },

        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "vline": "true",
                "lineposition": "0",
                "color": "#6baa01",
                "labelHAlign": "right",
                "labelPosition": "0",
                "label": "National holiday"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "dataset": [{
            "seriesname": "Garden Groove harbour",
            "data": [{
                "value": "15123"
            }, {
                "value": "14233"
            }, {
                "value": "21507"
            }, {
                "value": "9110"
            }, {
                "value": "14829"
            }, {
                "value": "17503"
            }, {
                "value": "20202"
            }]
        }, {
            "seriesname": "Crompton-Rancho Dom",
            "data": [{
                "value": "11400"
            }, {
                "value": "12800"
            }, {
                "value": "17800"
            }, {
                "value": "10400"
            }, {
                "value": "11800"
            }, {
                "value": "13100"
            }, {
                "value": "20800"
            }]
        }]
    }
}
