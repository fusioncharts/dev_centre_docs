{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 5 Busiest Airports in the World",
            "subcaption": "Based on Passenger Traffic in 2014",
            "theme": "fint",
            "markerBgColor": "#3399FF",

            "entityFillColor": "#A8A8A8",
            "entityFillHoverColor": "#E5E5E9",
            "showMarkerLabels": "1",
            "showvalue": "0",
            "labsepchar": "<br/>",
            "markerTooltext": "$label",
            "numbersuffix": "M"
        },
        "markers": {
            "items": [{
                    "id": "lon",
                    "shapeid": "circle",
                    "x": "340.23",
                    "y": "125.9",
                    "label": "LHR",
                    "value": "16.0",

                    "tooltext": "Heathrow International Airport {br} Total Passengers: $value M{br} IACL Code : EGLL",

                    "labelpos": "left"
                }, {
                    "id": "atl",
                    "shapeid": "circle",
                    "x": "160.14",
                    "y": "164.9",
                    "label": "ATL",
                    "value": "21.6",
                    "tooltext": "Hartsfield Jackson Atlanta International Airport {br} Total Passengers: $value M{br} IACL Code : KATL",
                    "labelpos": "bottom"
                }, {
                    "id": "dub",
                    "shapeid": "circle",
                    "x": "458.14",
                    "y": "203.9",
                    "label": "DXB",
                    "value": "18.3",
                    "tooltext": "Dubai International Airport {br} Total Passengers: $value M{br} IACL Code : OMDB",
                    "labelpos": "bottom"
                }, {
                    "id": "tok",
                    "shapeid": "circle",
                    "x": "628.14",
                    "y": "165.9",
                    "label": "HND",
                    "value": "16.6",
                    "tooltext": "Tokyo Haneda Airport {br} Total Passengers: $value M{br} IACL Code : RJTT",
                    "labelpos": "bottom"
                }, {
                    "id": "beij",
                    "shapeid": "circle",
                    "x": "573.14",
                    "y": "161.9",
                    "label": "PEK",
                    "value": "20.5",
                    "tooltext": "Beijing Capital International Airport {br} Total Passengers: $value M{br} IACL Code : ZBAA",
                    "labelpos": "bottom"
                }

            ]

        }
    }
}
