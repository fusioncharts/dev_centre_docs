{
    type: 'mscolumn3dlinedy',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
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
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "legendBorderAlpha": "0",
            "legendBgAlpha": "0",
            "legendShadow": "0",
            "showHoverEffect": "1",
            "valueFontColor": "#ffffff",
            "rotateValues": "1",
            "placeValuesInside": "1",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "canvasBgColor": "#ffffff",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0"
        },
        "categories": [{
            "category": [{
                    "label": "Q1"
                },
                {
                    "label": "Q2"
                },
                {
                    "label": "Q3"
                },
                {
                    "label": "Q4"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "Food Products",
                "data": [{
                        "value": "11000"
                    },
                    {
                        "value": "14000"
                    },
                    {
                        "value": "10500"
                    },
                    {
                        "value": "15000"
                    }
                ]
            },
            {
                "seriesname": "Non-Food Products",
                "data": [{
                        "value": "14400"
                    },
                    {
                        "value": "14800"
                    },
                    {
                        "value": "8300"
                    },
                    {
                        "value": "11800"
                    }
                ]
            },
            {
                "seriesname": "Profit %",
                "renderAs": "line",
                "parentYAxis": "S",
                "showValues": "0",
                "data": [{
                        "value": "14"
                    },
                    {
                        "value": "16"
                    },
                    {
                        "value": "15"
                    },
                    {
                        "value": "17"
                    }
                ]
            }
        ]
    }
}