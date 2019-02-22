{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '190',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Target CSAT Index",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "40",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40",
            "editMode": "1"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
                "code": "#e44a00"
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
                "code": "#f8bd19"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
                "code": "#6baa01"
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "0"
            }]
        }
    }
}
