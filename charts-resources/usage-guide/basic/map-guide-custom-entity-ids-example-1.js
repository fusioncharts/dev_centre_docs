{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Global Population",
            "theme": "fint",
            "formatNumberScale": "0",
            "numberSuffix": "M",
            "showLabels": "1",
            "useSNameInToolTip": "1",
            "useSNameInLabels": "1"
        },
        "entityDef": [{
            "internalId": "NA",
            "newId": "NAM"

        }, {
            "internalId": "SA",
            "newId": "SAM"

        }, {
            "internalId": "EU",
            "newId": "EUR"
        }, {
            "internalId": "AS",
            "newId": "ASI"
        }, {
            "internalId": "AF",
            "newId": "AFR"
        }, {
            "internalId": "AU",
            "newId": "AUS"
        }],
        "colorrange": {
            "color": [{
                "minvalue": "0",
                "maxvalue": "100",
                "code": "#D1D9C5",
                "displayValue": "< 100M"
            }, {
                "minvalue": "100",
                "maxvalue": "500",
                "code": "#C9DEA9",
                "displayValue": "100-500M"
            }, {
                "minvalue": "500",
                "maxvalue": "1000",
                "code": "#91AF64",
                "displayValue": "500M-1B"
            }, {
                "minvalue": "1000",
                "maxvalue": "5000",
                "code": "#5A9502",
                "displayValue": "> 1B"
            }]
        },
        "data": [{
            "id": "NAM",
            "value": "515"
        }, {
            "id": "SAM",
            "value": "373"
        }, {
            "id": "ASI",
            "value": "3875"
        }, {
            "id": "EUR",
            "value": "727"
        }, {
            "id": "AFR",
            "value": "885"
        }, {
            "id": "AUS",
            "value": "32"
        }]
    }
}
