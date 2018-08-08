{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Busiest Routes from Heathrow Airport",
            "subcaption": "For the year 2014",
            "theme": "fusion",
            "markerBgColor": "#FF0000",
            "markerRadius": "10",
            "connectorColor": "#0CB2B0",
            "connectorHoverColor": "#339933",
            "entityFillColor": "#CECED2",
            "entityFillHoverColor": "#E5E5E9"

        },
        "markers": {
            "items": [{
                    "id": "London",
                    "shapeid": "triangle",
                    "x": "340.23",
                    "y": "125.9",
                    "label": "LHR",
                    "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
                    "labelpos": "left"
                }, {
                    "id": "New York",
                    "shapeid": "triangle",
                    "x": "178.14",
                    "y": "154.9",
                    "label": "JFK",
                    "tooltext": "John F Kennedy Airport {br}IACL Code : KJFK",
                    "labelpos": "bottom"
                }, {
                    "id": "Dubai",
                    "shapeid": "triangle",
                    "x": "458.14",
                    "y": "203.9",
                    "label": "DXB",
                    "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
                    "labelpos": "bottom"
                }, {
                    "id": "Singapore",
                    "shapeid": "triangle",
                    "x": "558.14",
                    "y": "255.9",
                    "label": "SIN",
                    "tooltext": "Singapore International Airport {br} IACL Code : WSSS",
                    "labelpos": "bottom"
                }, {
                    "id": "Hong Kong",
                    "shapeid": "triangle",
                    "x": "573.14",
                    "y": "202.9",
                    "label": "HKG",
                    "tooltext": "Hong Kong International Airport {br} IACL Code : VHHH",
                    "labelpos": "bottom"
                }

            ],
            "connectors": [{
                "from": "London",
                "to": "Hong Kong",
                "tooltext": "&lt;b&gt;London to Hong Kong&lt;/b&gt;{br} Total Passengers: 1,801,520",
                "label": "LHR to HKK"
            }, {
                "from": "London",
                "to": "Singapore",
                "tooltext": "&lt;b&gt;London to Singapore&lt;/b&gt;{br} Total Passengers: 1,507,032",
                "label": "LHR to SIN"
            }, {
                "from": "London",
                "to": "New York",
                "tooltext": "&lt;b&gt;London to New York{br} Total Passengers: 2,551,276",
                "label": "LHR to NYC"
            }, {
                "from": "London",
                "to": "Dubai",
                "tooltext": "&lt;b&gt;London to Dubai&lt;/b&gt;{br} Total Passengers: 1,974,078",
                "label": "LHR to DXB"
            }]
        }
    },
    "events": {
        "beforeRender": function(evt, args) {
            var textArea = document.createElement("textarea");
            textArea.setAttribute("id", "message-marker");
            textArea.setAttribute("rows", "4");
            textArea.setAttribute("cols", "35");
            textArea.style.cssText = "margin-left:15px;text-align:center;display:block;";
            textArea.innerHTML = "Rollover or click on a marker or connector";
            args.container.appendChild(textArea);
        },
        "connectorRollover": function(evt, data) {
            document.getElementById('message-marker').value = data.label;
        },
        "connectorRollout": function(evt, data) {
            document.getElementById('message-marker').value =
                "Rollover or click on a marker or connector";
        },
        "connectorClick": function(evt, data) {
            alert("You have selected the connector from " + data.label + ". \n Click on OK to continue.");

        },
        "markerRollover": function(evt, data) {
            document.getElementById('message-marker').value = "" + data.label;
        },
        "markerRollout": function(evt, data) {
            document.getElementById('message-marker').value =
                "Rollover or click on a marker or connector";
        },
        "markerClick": function(evt, data) {
            alert("You have selected " + data.label + " Airport" + ". \n Click on OK to continue.");

        },

    }

}
