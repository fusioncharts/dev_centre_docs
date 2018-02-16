{
    type: 'hled',
    renderAt: 'chart-container',
    id: 'myChart',
    width: '500',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Footfall vs Conversion ratio",
            "numberSuffix": "%",
            //Configuring ticks to appear above gauge
            "ticksBelowGauge": "0",
            "theme": "fint"
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
