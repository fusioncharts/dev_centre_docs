{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Average Customer Satisfaction Score",
            "subcaption": "Actual vs target",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showValue": "1",
            "trendValueDistance": "2",
            "valueBelowPivot": "1",
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
                "value": "67"
            }]
        },
        "trendpoints": {
            "point": [{
                "startValue": "80",
                "endValue": "100",
                "radius": "180",
                "innerRadius": "5",
                "displayValue": "Target",
                "color": "#0075c2",
                "showBorder": "1",
                "borderColor": "#000000",
                "alpha": "40"
            }]
        }
    }
}
