{
    type: 'column2d',
    renderAt: 'chart-container',
    id: 'myChart',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subcaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "yaxismaxvalue": "2720000",
            "numberPrefix": "$",
            "theme": "fint",
            "placeValuesInside": "0",
            "rotateValues": "0",
            //Changing font
            "valueFont": "Arial",
            //Changing font color
            "valueFontColor": "#6699cc",
            //Changing font size
            "valueFontSize": "12",
            //Changing font weight
            "valueFontBold": "1",
            //Changing font style
            "valueFontItalic": "0"
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
