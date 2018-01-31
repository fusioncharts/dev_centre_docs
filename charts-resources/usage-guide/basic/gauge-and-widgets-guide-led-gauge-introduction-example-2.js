{
    type: 'vled',
    renderAt: 'chart-container',
    width: '150',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Fuel Level Indicator",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": "%",
            "showValue": "1",
            "valueFontSize": "12",
            "showhovereffect": "1",
            "chartBottomMargin": "20",
            "theme": "fint"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "45",
                "code": "#e44a00"
            }, {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }]
        },
        "value": "92"
    }

}
