{
    type: 'mscombidy2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenues and Profits",
            "subCaption": "For last year",
            "xAxisname": "Month",
            "pYAxisName": "Amount (In USD)",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "50",

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
            "divLineDashed": "1",
            "divLineDashLen": "1",
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
                "label": "Jan"
            }, {
                "label": "Feb"
            }, {
                "label": "Mar"
            }, {
                "label": "Apr"
            }, {
                "label": "May"
            }, {
                "label": "Jun"
            }, {
                "label": "Jul"
            }, {
                "label": "Aug"
            }, {
                "label": "Sep"
            }, {
                "label": "Oct"
            }, {
                "label": "Nov"
            }, {
                "label": "Dec"
            }]
        }],
        "dataset": [{
            "seriesName": "Revenues",
            "data": [{
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "15000"
            }, {
                "value": "21000"
            }, {
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "17000"
            }, {
                "value": "22000"
            }, {
                "value": "19000"
            }, {
                "value": "23000"
            }]
        }, {
            "seriesName": "Profits",
            "renderAs": "area",
            "showValues": "0",
            "data": [{
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "7000"
            }, {
                "value": "1000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "8000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }]
        }, {
            "seriesName": "Profit %",
            "parentYAxis": "S",
            "renderAs": "line",
            "showValues": "0",
            "data": [{
                "value": "25"
            }, {
                "value": "25"
            }, {
                "value": "16.66"
            }, {
                "value": "21.05"
            }, {
                "value": "6.66"
            }, {
                "value": "33.33"
            }, {
                "value": "6.25"
            }, {
                "value": "25"
            }, {
                "value": "5.88"
            }, {
                "value": "36.36"
            }, {
                "value": "10.52"
            }, {
                "value": "30.43"
            }]
        }]
    }
}
