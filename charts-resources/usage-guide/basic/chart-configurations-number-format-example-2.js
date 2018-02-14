{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Weekly Sales (In '000 USD)",
            "subcaption": "Last 7 weeks",
            "numberPrefix": "$",
            "xaxisname": "Week #",
            "yaxisname": "Sales (in '000 USD)",
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#000000",
            //Configuring Decimal Places
            "decimals": "2",
            //Allow to add trailing zeros in decimal part
            "forceDecimals": "1",
            //Theme
            "theme": "fint"
        },
        "data": [{
            "label": "Week 1",
            "value": "8"
        }, {
            "label": "Week 2",
            "value": "7.22"
        }, {
            "label": "Week 3",
            "value": "6.23"
        }, {
            "label": "Week 4",
            "value": "8"
        }, {
            "label": "Week 5",
            "value": "6.25"
        }, {
            "label": "Week 6",
            "value": "7.5"
        }, {
            "label": "Week 7",
            "value": "7.37"
        }]
    }
}
