{
    type: 'stackedcolumn3dlinedy',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise Quarterly Revenue vs. Profit %",
            "subCaption": "Harry's SuperMart - Last Year",
            "xAxisname": "Quarter",
            "pYAxisName": "Sales",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "25",
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
        }, {
            "seriesname": "Profit %",
            "renderAs": "line",
            "parentYAxis": "S",
            "showValues": "0",
            "data": [{
                "value": "14"
            }, {
                "value": "16"
            }, {
                "value": "15"
            }, {
                "value": "17"
            }]
        }]
    }
}
