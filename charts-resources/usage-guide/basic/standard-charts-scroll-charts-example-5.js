{
    type: 'scrollcombi2d',
    renderAt: 'chart-container',
    width: '550',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Actual Revenue, Targeted Revenues & Profits",
            "subCaption": "FY 2012 - FY 2013",
            "xAxisname": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "numVisiblePlot": "12",

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
            "showValues": "0",
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
            "legendItemFontColor": "#666666",
            "scrollheight": "10",
            "flatScrollBars": "1",
            "scrollShowButtons": "0",
            "scrollColor": "#cccccc",
            "showHoverEffect": "1",
        },
        "categories": [{
            "category": [{
                    "label": "Jan 2012"
                },
                {
                    "label": "Feb 2012"
                },
                {
                    "label": "Mar 2012"
                },
                {
                    "label": "Apr 2012"
                },
                {
                    "label": "May 2012"
                },
                {
                    "label": "Jun 2012"
                },
                {
                    "label": "Jul 2012"
                },
                {
                    "label": "Aug 2012"
                },
                {
                    "label": "Sep 2012"
                },
                {
                    "label": "Oct 2012"
                },
                {
                    "label": "Nov 2012"
                },
                {
                    "label": "Dec 2012"
                },
                {
                    "label": "Jan 2013"
                },
                {
                    "label": "Feb 2013"
                },
                {
                    "label": "Mar 2013"
                },
                {
                    "label": "Apr 2013"
                },
                {
                    "label": "May 2013"
                },
                {
                    "label": "Jun 2013"
                },
                {
                    "label": "Jul 2013"
                },
                {
                    "label": "Aug 2013"
                },
                {
                    "label": "Sep 2013"
                },
                {
                    "label": "Oct 2013"
                },
                {
                    "label": "Nov 2013"
                },
                {
                    "label": "Dec 2013"
                }
            ]
        }],
        "dataset": [{
                "seriesName": "Actual Revenue",
                "data": [{
                        "value": "16000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "18000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "15000"
                    },
                    {
                        "value": "21000"
                    },
                    {
                        "value": "16000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "17000"
                    },
                    {
                        "value": "25000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "23000"
                    },
                    {
                        "value": "22000"
                    },
                    {
                        "value": "25000"
                    },
                    {
                        "value": "21000"
                    },
                    {
                        "value": "23000"
                    },
                    {
                        "value": "27000"
                    },
                    {
                        "value": "26000"
                    },
                    {
                        "value": "24000"
                    },
                    {
                        "value": "28000"
                    },
                    {
                        "value": "26000"
                    },
                    {
                        "value": "27000"
                    },
                    {
                        "value": "29000"
                    },
                    {
                        "value": "26000"
                    }

                ]
            },
            {
                "seriesName": "Projected Revenue",
                "renderAs": "line",
                "showValues": "0",
                "data": [{
                        "value": "15000"
                    },
                    {
                        "value": "16000"
                    },
                    {
                        "value": "17000"
                    },
                    {
                        "value": "18000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "21000"
                    },
                    {
                        "value": "22000"
                    },
                    {
                        "value": "23000"
                    },
                    {
                        "value": "24000"
                    },
                    {
                        "value": "22000"
                    },
                    {
                        "value": "23000"
                    },
                    {
                        "value": "25000"
                    },
                    {
                        "value": "22000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "24000"
                    },
                    {
                        "value": "25000"
                    },
                    {
                        "value": "27000"
                    },
                    {
                        "value": "24000"
                    },
                    {
                        "value": "23000"
                    },
                    {
                        "value": "25000"
                    }

                ]
            },
            {
                "seriesName": "Profit",
                "renderAs": "area",
                "showValues": "0",
                "data": [{
                        "value": "4000"
                    },
                    {
                        "value": "5000"
                    },
                    {
                        "value": "3000"
                    },
                    {
                        "value": "4000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "7000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "4000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "8000"
                    },
                    {
                        "value": "2000"
                    },
                    {
                        "value": "7000"
                    },
                    {
                        "value": "6000"
                    },
                    {
                        "value": "5000"
                    },
                    {
                        "value": "7000"
                    },
                    {
                        "value": "8000"
                    },
                    {
                        "value": "8000"
                    },
                    {
                        "value": "9000"
                    },
                    {
                        "value": "7000"
                    },
                    {
                        "value": "10000"
                    },
                    {
                        "value": "9000"
                    },
                    {
                        "value": "7000"
                    },
                    {
                        "value": "8000"
                    },
                    {
                        "value": "11000"
                    }
                ]
            }
        ]
    }
}