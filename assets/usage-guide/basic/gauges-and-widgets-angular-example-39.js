{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Average Customer Satisfaction Score",
            "subcaption": "Actual vs Expected",
            "lowerLimit": "0",
            "upperLimit": "100",
            "theme": "fusion",
            "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
            "gaugeFillRatio": "15",
            "chartBottomMargin": "25",
            "valueFontSize": "18",
            "valueFontColor": "#ffffff"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }]
        },
        "dials": {
            "dial": [{
                "editMode": "1",
                "value": "85",
                "showValue": "1",
                "valueX": "250",
                "valueY": "240",
                "bgColor": "#0075c2",
                "tooltext": "Expected : $value",
                "rearExtension": "15"
            }, {
                "value": "68",
                "showValue": "1",
                "valueX": "150",
                "valueY": "240",
                "bgColor": "#1aaf5d",
                "tooltext": "Actual : $value",
                "rearExtension": "15"
            }]
        }
    }
}
