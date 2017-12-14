{
    type: 'hled',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Customer satisfaction score",
            "subcaption": "Current week - Bakersfield Central",
            "subcaptionFontBold": "0",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "Bad",
            "upperLimitDisplay": "Good",
            "numberSuffix": "%",
            "showValue": "0",
            "showBorder": "0",
            "bgColor": "#ffffff",
            "showShadow": "0",
            "tickMarkDistance": "5"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "45",
                "code": "#8e0000"
            }, {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f2c500"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#1aaf5d"
            }]
        },
        "value": "92"
    }
}
