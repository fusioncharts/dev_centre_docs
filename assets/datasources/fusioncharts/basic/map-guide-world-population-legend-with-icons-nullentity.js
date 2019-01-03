{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Global Sales Tracker",
            "theme": "fusion",
            "formatNumberScale": "0",
            "numberSuffix": "M",
            "showLabels": "1",
            "nullEntityColor": "#C2C2D6",
            "nullEntityAlpha": "50",
            "hoverOnNull": "0",
            "useSNameInLabels": "0"
        },
        "colorrange": {
            "color": [{
                "minvalue": "0",
                "maxvalue": "100",
                "code": "#D0DFA3",
                "displayValue": "Below 100M"
            }, {
                "minvalue": "100",
                "maxvalue": "500",
                "code": "#B0BF92",
                "displayValue": "100-500M"
            }, {
                "minvalue": "500",
                "maxvalue": "1000",
                "code": "#91AF64",
                "displayValue": "500-1000M"
            }]
        },
        "data": [{
                "id": "NA",
                "value": "515"
            }, {
                "id": "SA",
                "value": "373"
            },

            {
                "id": "EU",
                "value": "727"
            }, {
                "id": "AU",
                "value": "37"
            }

        ]
    }
}
