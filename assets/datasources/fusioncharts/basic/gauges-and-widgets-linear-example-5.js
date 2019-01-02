{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '170',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "subcaption": "Transaction Server & Web Server",
            "subcaptionFontBold": "0",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "valueAbovePointer": "0",
            "chartBottomMargin": "20",
            "valueFontSize": "11",
            "valueFontBold": "0"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
                "code": "#6baa01"
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
                "code": "#f8bd19"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
                "code": "#e44a00"
            }]
        },
        "pointers": {
            //Multiple pointers defined here
            "pointer": [{
                "value": "75",
                "bgColor": "#0044DD",
                "bgAlpha": "80",
                "tooltext": "Transaction Server: $value%"
            }, {
                "value": "92",
                "bgColor": "#0077CC",
                "bgAlpha": "80",
                "tooltext": "Web Server: $value%"
            }]
        }
    }
}
