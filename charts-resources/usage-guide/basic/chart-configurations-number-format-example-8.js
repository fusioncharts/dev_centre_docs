{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subcaption": "Last year",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In USD)",
            "yAxisMaxValue": "1500000",
            "numberPrefix": "$",
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#000000",
            //Format numbar scale
            "formatNumberScale": "1",
            //Theme
            "theme": "fint"
        },
        "data": [{
            "label": "Q1",
            "value": "1252322"
        }, {
            "label": "Q2",
            "value": "857023"
        }, {
            "label": "Q3",
            "value": "903753"
        }, {
            "label": "Q4",
            "value": "1082357"
        }]
    }
}
