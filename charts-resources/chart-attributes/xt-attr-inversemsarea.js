{
    type: 'inversemsarea',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Daily bounce rate",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Percentage",
            "numberSuffix": "%",
            "showBorder": "0",
            "paletteColors": "#0075c2,#1aaf5d",
            "bgColor": "#ffffff",
            'usePlotGradientColor': "0",
            "plotFillAlpha": "50",
            "showCanvasBorder": "0",
            "LegendShadow": "0",
            "legendBorderAlpha": "0",
            "showXAxisLine": "1",
            "axisLineAlpha": "40",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineDashed": "1",
            "divLineDashLen": "1",
            "showAlternateHgridColor": "0",
            "showValues": "0",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
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
            "seriesname": "food.hsm.com",
            "data": [{
                "value": "27"
            }, {
                "value": "22"
            }, {
                "value": "25"
            }, {
                "value": "27"
            }, {
                "value": "21"
            }, {
                "value": "29"
            }, {
                "value": "22"
            }]
        }, {
            "seriesname": "cloth.hsm.com",
            "data": [{
                "value": "42"
            }, {
                "value": "38"
            }, {
                "value": "39"
            }, {
                "value": "36"
            }, {
                "value": "43"
            }, {
                "value": "44"
            }, {
                "value": "35"
            }]
        }]
    }
}
