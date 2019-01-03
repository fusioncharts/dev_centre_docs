{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "captionPadding": "0",
            "numberSuffix": "%",
            "valueAbovePointer": "0",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "chartBottomMargin": "20",
            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40"
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
            "pointer": [{
                //Adding custom tooltext
                "toolText": "Customer satisfaction $value%",
                //Adding external url
                "link": "http://www.fusioncharts.com",
                "value": "75"
            }]
        }
    }
}
