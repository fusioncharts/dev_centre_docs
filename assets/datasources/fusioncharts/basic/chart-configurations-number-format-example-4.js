{
    type: 'bar2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Quarterly Revenue",
            "subcaption": "Last year",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In USD)",
            "numberPrefix": "$",
            //Deviation from theme
            "placeValuesInside": "1",
            "showValues": "1",
            "valueFontColor": "#000000",
            "valueBgColor": "#FFFFFF",
            "valueBgAlpha": "50",
            "formatNumber": "0"
        },
        "data": [{
            "label": "Q1",
            "value": "12523"
        }, {
            "label": "Q2",
            //Decimal values as below are automatically formatted for output
            "value": "14570.231"
        }, {
            "label": "Q3",
            "value": "17375"
        }, {
            "label": "Q4",
            "value": "18235.79"
        }]
    }
}
