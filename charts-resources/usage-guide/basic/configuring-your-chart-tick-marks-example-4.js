{
        type: 'hled',
        renderAt: 'chart-container',
        
        width: '500',
        height: '170',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Harry's Supermart - Bakersfield Central",
                "subCaption": "Footfall vs Conversion ratio", 
                "tickMarkDistance": "10", //Distance between the gauge and the tick marks
                "tickValueDistance": "10", //Distance between tick values and tick marks
                "numberSuffix":"%",               
                "showTickMarks":"1",
                "showTickValues":"1",                
                "theme": "fint"
            },
            "colorrange": {
                "color": [
                    {
                        "minvalue": "100",
                        "maxvalue": "76.444",
                        "label": "Bad",
                        "code": "#00FF00"
                    }, 
                    {
                        "minvalue": "75",
                        "maxvalue": "36",
                        "label": "Average",
                        "code": "#FFFF00"
                    }, 
                    {
                        "minvalue": "0",
                        "maxvalue": "35",
                        "label": "Good",
                        "code": "#FF0000"
                    }
                ]
            },
            "value": "62"
        }
    }