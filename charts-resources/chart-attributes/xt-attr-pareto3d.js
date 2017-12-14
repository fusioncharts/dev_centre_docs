{
    type: 'pareto3d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Employee late arrivals by reported cause",
            "subCaption": "Last month",
            "paletteColors": "#0075c2",
            "lineColor": "#1aaf5d",
            "xAxisName": "Reported Cause",
            "pYAxisName": "No. of Occurrence",
            "sYAxisname": "Cumulative Percentage",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "showHoverEffect": "1",
            "showValues": "0",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14"
        },
        "data": [{
            "label": "Traffic",
            "value": "5680"
        }, {
            "label": "Family Engagement",
            "value": "1036"
        }, {
            "label": "Public Transport",
            "value": "950"
        }, {
            "label": "Weather",
            "value": "500"
        }, {
            "label": "Emergency",
            "value": "140"
        }, {
            "label": "Others",
            "value": "68"
        }]
    }
}
