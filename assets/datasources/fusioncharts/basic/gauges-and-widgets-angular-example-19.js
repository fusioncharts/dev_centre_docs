{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Average Customer Satisfaction Score",
            "subcaption": "Last year vs Current year",
            "lowerLimit": "0",
            "upperLimit": "100",
            "gaugeFillMix": "{dark-40},{light-40},{dark-20}",
            "theme": "fusion"
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
                "value": "67",
                "showValue": "1",
                "valueX": "200",
                "valueY": "180",
                "bgAlpha": "10",
                "tooltext": "Last year's average : $value",
                "rearExtension": "15"
            }, {
                "value": "78",
                "showValue": "1",
                "valueX": "250",
                "valueY": "220",
                "tooltext": "Current year's average : $value",
                "rearExtension": "15"
            }]
        }
    }
}
