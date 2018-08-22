{
    type: 'vbullet',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberPrefix": "$",
            "numberSuffix": "K",
            "colorRangeFillMix": "{light}",
            "chartBottomMargin": "20",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "70"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f2c500",
                "alpha": "70"
            }, {
                "minValue": "75",
                "maxValue": "120",
                "code": "#1aaf5d",
                "alpha": "70"
            }]
        },
        "value": "82",
        "target": "90"
    }
}
