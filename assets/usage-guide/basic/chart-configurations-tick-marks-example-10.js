{
    type: 'hled',
    renderAt: 'chart-container',
    
    width: '500',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Footfall vs Conversion ratio",
            "numberSuffix": "%",
            "ticksBelowGauge": "0",
            //Setting number of major tick marks to 11
            "majorTMNumber": "11",
            "minorTMNumber": "4",
            //Show tick value for every 2nd major tick mark
            "tickValueStep": "2",
            "theme": "fusion"
        },
        "colorrange": {
            "color": [{
                "minvalue": "100",
                "maxvalue": "76",
                "label": "Bad",
                "code": "#00FF00"
            }, {
                "minvalue": "75",
                "maxvalue": "36",
                "label": "Average",
                "code": "#FFFF00"
            }, {
                "minvalue": "0",
                "maxvalue": "35",
                "label": "Good",
                "code": "#FF0000"
            }]
        },
        "value": "62"
    }
}
