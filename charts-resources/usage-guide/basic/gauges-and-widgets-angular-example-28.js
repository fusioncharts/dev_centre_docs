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
            "showValue": "1",
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
                "startValue": "62",
                "displayValue": "Last Year",
                "color": "#0075c2",
                "thickness": "2",
                "radius": "180",
                "innerRadius": "82",
                "alpha": "100"
            }]
        }
    }
}
