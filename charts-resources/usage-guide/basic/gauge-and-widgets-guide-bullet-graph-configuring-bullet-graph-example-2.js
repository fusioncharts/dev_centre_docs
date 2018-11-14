{
    type: 'hbullet',
    renderAt: 'chart-container',
    width: '500',
    height: '90',
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
            "showPlotBorder": "1",
            "plotBorderColor": "#333333",
            "plotBorderThickness": "1",
            "plotBorderAlpha": "100"
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
