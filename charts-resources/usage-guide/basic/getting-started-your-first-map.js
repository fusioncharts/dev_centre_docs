{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '800',
    height: '550',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1955-2015",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
        },
        "colorrange": {
            "minvalue": "0",
            "code": "#FFE0B2",
            "gradient": "1",
            "color": [
                {
                    "minvalue": "0.5",
                    "maxvalue": "1.0",
                    "color": "#FFD74D"
                }, {
                    "minvalue": "1.0",
                    "maxvalue": "2.0",
                    "color": "#FB8C00"
                }, {
                    "minvalue": "2.0",
                    "maxvalue": "3.0",
                    "color": "#E65100"
                }
            ]
        },
        "data": [{
                "id": "NA",
                "value": ".82",
                "showLabel": "1",
                "link": "newchart-json-NAM"
            }, {
                "id": "SA",
                "value": "2.04",
                "showLabel": "1",
                "link": "newchart-json-SAM"
            }, {
                "id": "AS",
                "value": "1.78",
                "showLabel": "1",
                "link": "newchart-json-ASI"
            }, {
                "id": "EU",
                "value": ".40",
                "showLabel": "1",
                "link": "newchart-json-EUP"
            }, {
                "id": "AF",
                "value": "2.58",
                "showLabel": "1",
                "link": "newchart-json-AFC"
            }, {
                "id": "AU",
                "value": "1.30",
                "showLabel": "1",
                "link": "newchart-json-AUS"
            }
        ]
    }
}