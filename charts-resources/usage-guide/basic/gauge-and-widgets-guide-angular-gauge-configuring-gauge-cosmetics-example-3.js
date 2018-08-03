{
    type: 'angulargauge',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Customer Satisfaction Score",
            "subcaption": "Last week",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showGaugeBorder": "1",
            "gaugeBorderThickness": "5",
            "showValue": "1",
            "valueBelowPivot": "1",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "borderColor": "#780101",
                "borderAlpha": "100"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19",
                "borderColor": "#696840",
                "borderAlpha": "100"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01",
                "borderColor": "#409C40",
                "borderAlpha": "100"
            }]
        },
        "dials": {
            "dial": [{
                "value": "67"
            }]
        }
    }
}
