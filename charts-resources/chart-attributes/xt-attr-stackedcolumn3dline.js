{
    type: 'stackedcolumn3dline',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "showvalues": "1",
            "caption": "Cost Analysis",
            "subcaption": "Last Year",
            "numberprefix": "$",
            "xaxisname": "Quarter",
            "yaxisname": "Cost",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendBgAlpha": "0",
            "valueFontColor": "#ffffff",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "1",
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14",
            "showHoverEffect": "1"
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
            "renderAs": "Line",
            "showValues": "0",
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
