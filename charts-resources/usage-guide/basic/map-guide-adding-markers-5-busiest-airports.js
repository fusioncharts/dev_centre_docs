{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 5 Busiest Airports in the World",
            "subcaption": "Based on Passenger Traffic",
            "theme": "fint",
            "markerBgColor": "#FF0000",
            "markerRadius": "10",
            "showMarkerLabels": "1",
            "entityFillColor": "#A8A8A8",
            "entityFillHoverColor": "#E5E5E9"
        },
        "markers": {
            "items": [{
                    "id": "lon",
                    "shapeid": "triangle",
                    "x": "340.23",
                    "y": "125.9",
                    "label": "LHR",
                    "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
                    "labelpos": "left"
                }, {
                    "id": "alt",
                    "shapeid": "triangle",
                    "x": "160.14",
                    "y": "164.9",
                    "label": "ATL",
                    "tooltext": "Hartsfield Jackson Atlanta International Airport {br}IACL Code : KATL",
                    "labelpos": "bottom"
                }, {
                    "id": "dub",
                    "shapeid": "triangle",
                    "x": "458.14",
                    "y": "203.9",
                    "label": "DXB",
                    "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
                    "labelpos": "bottom"
                }, {
                    "id": "tok",
                    "shapeid": "triangle",
                    "x": "628.14",
                    "y": "165.9",
                    "label": "HND",
                    "tooltext": "Tokyo Haneda Airport{br} IACL Code : RJTT",
                    "labelpos": "bottom"
                }, {
                    "id": "beij",
                    "shapeid": "triangle",
                    "x": "573.14",
                    "y": "161.9",
                    "label": "PEK",
                    "tooltext": "Beijing Capital International Airport {br} IACL Code : ZBAA",
                    "labelpos": "bottom"
                }

            ]

        }
    }
}
