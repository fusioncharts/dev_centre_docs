{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '190',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "40",
            "valueFontSize": "11",
            "valueFontBold": "0",

            //Configuring hover effects on pointer
            "showHoverAnimation": "1",
            "pointerBgHoverColor": "#0075c2",
            "pointerBgHoverAlpha": "100",
            "showBorderOnHover": "1",
            "pointerBorderHoverThickness": "2",
            "pointerBorderHoverColor": "#333333",
            "pointerBorderHoverAlpha": "100",
            "pointerHoverRadius": "11",

            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "75"
            }]
        }
    }
}
