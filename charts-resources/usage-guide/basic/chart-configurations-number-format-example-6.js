{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Quarterly Revenue (in INR)",
            "subcaption": "Last year",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In INR)",
            "numberPrefix": "INR ",
            "formatNumberScale": "0",
            "showValues": "1",
            "rotateValues": "0",
            "placeValuesInside": "0",
            "valueFontColor": "#000000",
            "valueBgColor": "#FFFFFF",
            "valueBgAlpha": "50",
            //Customizing thousand separator position
            //(first block of 3 digits from right, and then in blocks of 2)
            "thousandSeparatorPosition": "2,3"
        },
        "data": [{
            "label": "Q1",
            "value": "1252322"
        }, {
            "label": "Q2",
            "value": "2570230"
        }, {
            "label": "Q3",
            "value": "2037535"
        }, {
            "label": "Q4",
            "value": "1823579"
        }]
    }
}
