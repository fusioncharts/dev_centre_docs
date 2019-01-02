{
    type: 'hled',
    renderAt: 'chart-container',
    width: '400',
    height: '180',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Fuel Level Indicator",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",

            /* Tick Limits Display Values */
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",

            "majorTMNumber": "5",
            "minorTMNumber": "5",
            "tickMarkDistance": "5",

            /* Major Tick Marks */
            "majorTMColor": "#0000CC",
            "majorTMAlpha": "60",
            "majorTMThickness": "2",


            /* Minor Tick Marks */
            "minorTMColor": "#0000CC",
            "minorTMAlpha": "30",
            "minorTMThickness": "2",



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
