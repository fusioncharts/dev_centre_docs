{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "caption": "Quarterly Revenue of the largest retailer",
            "subcaption": "In the region",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In USD)",
            "numberPrefix": "$",
            "formatNumberScale": "1",
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#000000",
            "valueBgColor": "#FFFFFF",
            "valueBgAlpha": "50",
            "yaxismaxvalue": "1400000000",
            //Adding billion to default number scale
            "numberScaleValue": "1000,1000,1000",
            //Customizing number scale units
            "numberScaleUnit": "K,M,B"
        },
        "data": [{
            "label": "Q1",
            "value": "1252322000"
        }, {
            "label": "Q2",
            "value": "857023000"
        }, {
            "label": "Q3",
            "value": "903753500"
        }, {
            "label": "Q4",
            "value": "982357900"
        }]
    }
}
