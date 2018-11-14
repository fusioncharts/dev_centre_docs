{
    "type": "maps/world",
    "renderAt": "chart-container",
    "width": "600",
    "height": "400",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "Busiest Routes from Heathrow Airport",
            "subcaption": "2014",
            "theme": "fusion",
            "markerBgColor": "#FF0000",
            "markerRadius": "10",
            "showMarkerLabels": "1",
            "connectorColor": "#0CB2B0",
            "connectorHoverColor": "#339933",
            "entityFillColor": "#CECED2",
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
                "id": "nyc",
                "shapeid": "triangle",
                "x": "178.14",
                "y": "154.9",
                "label": "JFK",
                "tooltext": "John F Kennedy Airport {br}IACL Code : KJFK",
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
                "id": "sg",
                "shapeid": "triangle",
                "x": "558.14",
                "y": "255.9",
                "label": "SIN",
                "tooltext": "Singapore International Airport {br} IACL Code : WSSS",
                "labelpos": "bottom"
            }, {
                "id": "hk",
                "shapeid": "triangle",
                "x": "573.14",
                "y": "202.9",
                "label": "HKG",
                "tooltext": "Hong Kong International Airport {br} IACL Code : VHHH",
                "labelpos": "bottom"
            }],
            "connectors": [{
                "from": "lon",
                "to": "hk",
                "tooltext": "&lt;b&gt;London to Hong Kong&lt;/b&gt;{br} Total Passengers: 1,801,520"
            }, {
                "from": "lon",
                "to": "sg",
                "tooltext": "&lt;b&gt;London to Singapore&lt;/b&gt;{br} Total Passengers: 1,507,032"
            }, {
                "from": "lon",
                "to": "nyc",
                "tooltext": "&lt;b&gt;London to New York{br} Total Passengers: 2,551,276"
            }, {
                "from": "lon",
                "to": "dub",
                "tooltext": "&lt;b&gt;London to Dubai&lt;/b&gt;{br} Total Passengers: 1,974,078"
            }]
        }
    }
}
