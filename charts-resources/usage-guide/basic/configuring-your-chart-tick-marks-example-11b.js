{
    type: 'hled',
    renderAt: 'chart-container',
    id: 'myChart',
    width: '500',
    height: '160',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Footfall vs Conversion ratio",
            "numberSuffix": "%",
            //Distance bbetween tick mark scale and gauge
            "tickMarkDistance": "4",
            "majorTMNumber": "5",
            "minorTMNumber": "4",
            //Cosmetics for major tick marks
            "majorTMColor": "#666666",
            "majorTMAlpha": "70",
            "majorTMHeight": "10",
            "majorTMThickness": "2",
            //Cosmetics for minor tick marks
            "minorTMColor": "#cccccc",
            "minorTMAlpha": "100",
            "minorTMHeight": "6",
            "minorTMThickness": "1",
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
