{
    type: 'vbullet',
    renderAt: 'chart-container',
    id: 'rev-bullet-2',
    width: '140',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "lowerLimit": "0",
            "subCaptionFontSize": "11",
            "upperLimit": "120",
            "caption": "Last Month Revenue",
            "subcaption": "Actual vs Target<br>Bakersfield Central",
            "numberPrefix": "$",
            "numberSuffix": "K",
            "chartBottomMargin": "25"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "25"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19",
                "alpha": "25"
            }, {
                "minValue": "75",
                "maxValue": "120",
                "code": "#6baa01",
                "alpha": "25"
            }]
        },
        "value": "82",
        "target": "90"
    }
}
