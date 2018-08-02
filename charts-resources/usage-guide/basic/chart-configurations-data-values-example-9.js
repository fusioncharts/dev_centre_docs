{
    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Quarterly Revenue",
            "subcaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFont": "Arial",
            "valueFontColor": "#6699cc",
            "valueFontSize": "12",
            "valueBorderColor": "#666666",
            "valueBorderAlpha": "100",
            "valueBorderPadding": "5",
            "valueBorderRadius": "6",
            "valueBorderThickness": "0.5",
            "valueBorderDashed": "1",
            "valueBorderDashLen": "4",
            "valueBorderDashGap": "2"
        },
        "data": [{
            "label": "Q1",
            "value": "1950000"
        }, {
            "label": "Q2",
            "value": "1450000"
        }, {
            "label": "Q3",
            "value": "1730000"
        }, {
            "label": "Q4",
            "value": "2120000"
        }]
    }
}