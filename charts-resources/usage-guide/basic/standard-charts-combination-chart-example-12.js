{
    type: 'mscombi2d',
    renderAt: 'chart-container',
    width: '600',
    height: '450',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Sales analysis of last year",
            "xAxisname": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "showBorder": "0",
            "showValues": "0",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "bgColor": "#ffffff",
            "showCanvasBorder": "0",
            "canvasBgColor": "#ffffff",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "showAlternateHGridColor": "0",
            "usePlotGradientColor": "0",
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
            "category": [
                {
                    "label": "Jan"
                },
                {
                    "label": "Feb"
                },
                {
                    "label": "Mar"
                },
                {
                    "label": "Apr"
                },
                {
                    "label": "May"
                },
                {
                    "label": "Jun"
                },
                {
                    "label": "Jul"
                },
                {
                    "label": "Aug"
                },
                {
                    "label": "Sep"
                },
                {
                    "label": "Oct"
                },
                {
                    "label": "Nov"
                },
                {
                    "label": "Dec"
                }
            ]
        }],
        "dataset": [{
            "seriesName": "Actual Revenue",
            "showValues": "1",
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
            }]
        },
        {
            "seriesName": "Projected Revenue",
            "renderAs": "spline",
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
            }]
        },
        {
            "seriesName": "Profit",
            "renderAs": "splineArea",
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
            }]
        }]
    }
}