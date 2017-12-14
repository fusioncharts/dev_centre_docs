{
    type: 'MSColumnLine3D',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "showvalues": "0",
            "caption": "Cost Analysis",
            "numberprefix": "$",
            "xaxisname": "Quarters",
            "yaxisname": "Cost",
            "showBorder": "0",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "bgColor": "#ffffff",
            "canvasBgColor": "#ffffff",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
            "legendBgColor": "#ffffff",
            "legendBorderAlpha": '0',
            "legendShadow": '0',
            "legendItemFontSize": '10',
            "legendItemFontColor": '#666666'
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
            }]
        }],
        "dataset": [{
            "seriesname": "Fixed Cost",
            "data": [{
                "value": "235000"
            }, {
                "value": "225100"
            }, {
                "value": "222000"
            }, {
                "value": "230500"
            }]
        }, {
            "seriesname": "Variable Cost",
            "data": [{
                "value": "230000"
            }, {
                "value": "143000"
            }, {
                "value": "198000"
            }, {
                "value": "327600"
            }]
        }, {
            "seriesname": "Budgeted cost",
            "renderas": "Line",
            "data": [{
                "value": "455000"
            }, {
                "value": "334000"
            }, {
                "value": "426000"
            }, {
                "value": "403000"
            }]
        }]
    }
}
