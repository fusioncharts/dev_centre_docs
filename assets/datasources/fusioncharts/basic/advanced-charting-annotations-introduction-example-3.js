{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '250',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Customer Satisfaction Score",
            "subcaption": "Last week",
            "lowerLimit": "0",
            "upperLimit": "100",
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
                "value": "67"
            }]
        },
        "annotations": {
            "showbelow": "1",
            "groups": [{
                "id": "transarc",
                "items": [{
                    "type": "arc",
                    "radius": "200",
                    "innerRadius": "165",
                    "color": "#8CBB2C",
                    "alpha": "90",
                    "x": "200",
                    "y": "235",
                    "startangle": "0",
                    "endangle": "45"
                }]
            }]
        }
    }
}
