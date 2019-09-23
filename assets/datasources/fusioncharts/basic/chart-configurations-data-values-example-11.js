{
    type: 'column2d',
    renderAt: 'chart-container',
    id: 'myChart',
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
            "showValues": "1",
            "valueFont": "Arial",
            "valueFontSize": "12",
            "valueBgAlpha": "90"
        },
        "data": [{
            "label": "Q1",
            "value": "1950000",
            "valueFontColor": "#ff0000"
        }, {
            "label": "Q2",
            "value": "1450000",
            "valueFontColor": "#ffffff",
            "valueBgColor": "#000000",
            "valueBorderColor": "#ff0000"
        }, {
            "label": "Q3",
            "value": "1730000"
        }, {
            "label": "Q4",
            "value": "2120000"
        }]
    }
}
