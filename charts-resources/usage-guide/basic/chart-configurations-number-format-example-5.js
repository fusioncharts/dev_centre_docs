{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "caption": "Quarterly Revenue",
            "subcaption": "Last year",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In USD)",
            "numberPrefix": "$",
            "rotateValues": "0",
            "placeValuesInside": "0",
            "valueFontColor": "#000000",
            "valueBgColor": "#FFFFFF",
            "valueBgAlpha": "50",
            //Disabling number scale compression
            "formatNumberScale": "0",
            //Defining custom decimal separator
            "decimalSeparator": ",",
            //Defining custom thousand separator
            "thousandSeparator": ".",
            "yaxismaxvalue": "22000"
        },
        "data": [{
            "label": "Q1",
            "value": "12523.22"
        }, {
            "label": "Q2",
            "value": "14570.230"
        }, {
            "label": "Q3",
            "value": "16375.35"
        }, {
            "label": "Q4",
            "value": "18235.79"
        }]
    }
}
