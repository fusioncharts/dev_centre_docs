{
    type: 'logmscolumn2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store footfall vs Online visitors ",
            "subCaption": "Last Year",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "xAxisName": "Quarter",
            "yAxisName": "No of visitors",
            "paletteColors": "#0075c2,#1aaf5d",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "showPlotBorder": "0",
            "showAlternateHgridColor": "0",
            "showXAxisLine": "1",
            "usePlotGradientcolor": "0",
            "valueFontColor": "#ffffff",
            "placeValuesInside": "1",
            "rotateValues": "1",
            "LegendShadow": "0",
            "legendBorderAlpha": "0",
            "base": "10",
            "axisLineAlpha": "10",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
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
            "seriesname": "Total footfalls",
            "data": [{
                "value": "126734"
            }, {
                "value": "159851"
            }, {
                "value": "197393"
            }, {
                "value": "168560"
            }, {
                "value": "199428"
            }]
        }, {
            "seriesname": "Online Visits",
            "data": [{
                "value": "1126059"
            }, {
                "value": "1292145"
            }, {
                "value": "1496849"
            }, {
                "value": "1460249"
            }, {
                "value": "1083962"
            }]
        }]
    }
}
