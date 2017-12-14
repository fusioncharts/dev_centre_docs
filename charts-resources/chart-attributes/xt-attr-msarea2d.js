{
    type: 'msarea',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales of Liquor",
            "subCaption": "Previous week vs current week",
            "xAxisName": "Day",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2,#1aaf5d",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "plotBorderAlpha": "10",
            "usePlotGradientColor": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "plotFillAlpha": "60",
            "showXAxisLine": "1",
            "axisLineAlpha": "25",
            "showValues": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "divlineColor": "#999999",
            "divLineDashed": "1",
            "divLineDashLen": "1",
            "showAlternateHGridColor": "0",
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
            "seriesname": "Previous Week",
            "data": [{
                "value": "13000"
            }, {
                "value": "14500"
            }, {
                "value": "13500"
            }, {
                "value": "15000"
            }, {
                "value": "15500"
            }, {
                "value": "17650"
            }, {
                "value": "19500"
            }]
        }, {
            "seriesname": "Current Week",
            "data": [{
                "value": "8400"
            }, {
                "value": "9800"
            }, {
                "value": "11800"
            }, {
                "value": "14400"
            }, {
                "value": "18800"
            }, {
                "value": "24800"
            }, {
                "value": "30800"
            }]
        }]
    }
}
