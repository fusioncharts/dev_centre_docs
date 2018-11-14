{
    type: 'hled',
    renderAt: 'chart-container',
    width: '400',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Fuel Level Indicator",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",

            /* Tick Marks auto adjustment off */
            "adjustTM": "0",

            /* Positions */
            "ticksBelowGauge": "0",
            "tickMarkDistance": "5",
            "tickValueDistance": "2",

            /* Major Tick Marks */
            "majorTMNumber": "9",
            "majorTMHeight": "12",

            /* Minor Tick Marks */
            "minorTMNumber": "4",
            "minorTMHeight": "7",

            /* Tick value step */
            "tickValueStep": "2",

            "chartBottomMargin": "20",
            "ledSize": "4",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "45",
                "code": "#e44a00"
            }, {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }]
        },
        "value": "92"
    }
}
