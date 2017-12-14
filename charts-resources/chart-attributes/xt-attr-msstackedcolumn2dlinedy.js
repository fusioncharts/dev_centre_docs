{
    type: 'msstackedcolumn2dlinedy',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales vs. Profit % in Last Year",
            "subcaption": "Product-wise Break-up - Harry's SuperMart",
            "xAxisName": "Quarter",
            "pYAxisName": "Sales",
            "sYAxisName": "Profit %",

            "numberPrefix": "$",
            "numbersuffix": "M",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "25",

            //Cosmetics
            "paletteColors": "#5598c3,#2785c3,#31cc77,#1aaf5d,#f45b00",
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
            "valueFontColor": "#ffffff",
            "placeValuesInside": "1",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
            "legendBgAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666"

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
            "dataset": [{
                "seriesname": "Processed Food",
                "data": [{
                    "value": "30"
                }, {
                    "value": "26"
                }, {
                    "value": "33"
                }, {
                    "value": "31"
                }]
            }, {
                "seriesname": "Un-Processed Food",
                "data": [{
                    "value": "21"
                }, {
                    "value": "28"
                }, {
                    "value": "39"
                }, {
                    "value": "41"
                }]
            }]
        }, {
            "dataset": [{
                "seriesname": "Electronics",
                "data": [{
                    "value": "27"
                }, {
                    "value": "25"
                }, {
                    "value": "28"
                }, {
                    "value": "26"
                }]
            }, {
                "seriesname": "Apparels",
                "data": [{
                    "value": "17"
                }, {
                    "value": "15"
                }, {
                    "value": "18"
                }, {
                    "value": "16"
                }]
            }]
        }],
        "lineset": [{
            "seriesname": "Profit %",
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
