{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Global Population Density",
            "theme": "fint",
            "showLabels": "1",
            "formatNumberScale": "0"
        },
        "colorrange": {
            "minvalue": "0",
            "startlabel": "Low",
            "endlabel": "High",
            "code": "#FF4411",
            "gradient": "1",
            "color": [{
                "maxvalue": "25",
                "code": "#FFDD44",
                "displayValue": "Median"
            }, {
                "maxvalue": "100",
                "code": "#6baa01"
            }]
        },
        "data": [{
            "id": "NA",
            "value": "22.1",
            "showLabel": "1",
            "displayValue": "Moderate"


        }, {
            "id": "SA",
            "value": "22.0",
            "showLabel": "1",
            "displayValue": "Moderate"
        }, {
            "id": "AS",
            "value": "95.0",
            "showLabel": "1",
            "displayValue": "Dense"
        }, {
            "id": "EU",
            "value": "72.5",
            "showLabel": "1",
            "displayValue": "Dense"
        }, {
            "id": "AF",
            "value": "33.7",
            "showLabel": "1",
            "displayValue": "Moderate"
        }, {
            "id": "AU",
            "value": "3.2",
            "showLabel": "1",
            "displayValue": "Sparse"
        }]
    }
}
