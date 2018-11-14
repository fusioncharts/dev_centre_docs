{
    type: 'hbullet',
    renderAt: 'chart-container',
    width: '500',
    height: '100',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "lowerLimit": "0",
            "subCaptionFontSize": "11",
            "upperLimit": "120",
            "caption": "Last Month Revenue",
            "subcaption": "Actual vs Target (Bakersfield Central)",
            "numberPrefix": "$",
            "numberSuffix": "K",
            "chartBottomMargin": "25",
            // Percent of width occupied by the plot
            "plotfillpercent": "30",
            // Percent of canvas width occupied by target bar
            "targetFillPercent": "30"
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