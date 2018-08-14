{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subcaption": "For Las Topanas",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In USD)",
            "yAxisMaxValue": "20000",
            "showValues": "1",
            //Deviation from theme
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#000000",
            "numberPrefix": "$",
            //Rouending to 2 decimal places
            "decimals": "2",
            //Theme
            "theme": "fusion"
        },
        "data": [{
            "label": "Quarter 1",
            "value": "12534"
        }, {
            "label": "Quarter 2",
            "value": "14057"
        }, {
            "label": "Quarter 3",
            "value": "17375"
        }, {
            "label": "Quarter 4",
            "value": "18235"
        }]
    }
}
