{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Global Population Density",
            "showBorder": "1",
            "borderThickness": "3",
            "theme": "fusion",
            "formatNumberScale": "0"
        },
        "colorrange": {
            "color": [{
                "minvalue": "0",
                "maxvalue": "10",
                "code": "#A9FF8D",
                "displayValue": "Sparse"
            }, {
                "minvalue": "10",
                "maxvalue": "35",
                "code": "#D0DFA3",
                "displayValue": "Moderate"
            }, {
                "minvalue": "35",
                "maxvalue": "100",
                "code": "#91AF64",
                "displayValue": "Dense"
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
