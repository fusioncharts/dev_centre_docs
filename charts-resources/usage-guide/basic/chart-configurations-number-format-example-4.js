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
            //Deviation from theme
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#000000",
            "valueBgColor": "#FFFFFF",
            "valueBgAlpha": "50"
        },
        "data": [{
            "label": "Q1",
            "value": "12523"
        }, {
            "label": "Q2",
            //Decimal values as below are automatically formatted for output
            "value": "14570.230"
        }, {
            "label": "Q3",
            "value": "17375"
        }, {
            "label": "Q4",
            "value": "18235.79"
        }]
    }
}
