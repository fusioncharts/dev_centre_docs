{
    type: 'hled',
    renderAt: 'chart-container',
    width: '400',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Fuel Level Indicator",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": "%",
            "valueFontSize": "14",
            "showhovereffect": "1",
            /* Hiding Value */
            "showValue": "0",
            "ledSize": "4",
            "chartBottomMargin": "20",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "45"
            }, {
                "minValue": "45",
                "maxValue": "75",
            }, {
                "minValue": "75",
                "maxValue": "100"
            }]
        },
        "value": "92"
    }
}
