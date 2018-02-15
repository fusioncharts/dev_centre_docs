{
    type: 'hbullet',
    renderAt: 'chart-container',
    width: '500',
    height: '90',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "lowerLimit": "0",
            "subCaptionFontSize": "11",
            "upperLimit": "120",
            "caption": "Last Month Revenue",
            "subcaption": "Actual vs Target (Bakersfield Central)",
            "numberPrefix": "$",
            "numberSuffix": "K",
            "chartBottomMargin": "25",
            //Defining color range fill mix formula
            "colorRangeFillMix": "{light-10},{light-70},{dark-10}",
            //Defining color range fill ratio
            "colorRangeFillRatio": "10,70,20",
            //Showing color range borders
            "showColorRangeBorder": "1",
            //Customizing color range borders (Color, Thickness and Alpha)
            "colorRangeBorderColor": "#CCCCCC",
            "colorRangeBorderThickness": "1",
            "colorRangeBorderAlpha": "100"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "50"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19",
                "alpha": "50"
            }, {
                "minValue": "75",
                "maxValue": "120",
                "code": "#6baa01",
                "alpha": "50"
            }]
        },
        "value": "82",
        "target": "90"
    }
}
