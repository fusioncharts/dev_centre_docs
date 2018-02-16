{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fint",
            //Hiding all labels across chart
            "showLabels": "0"
        },
        "data": [{
            "label": "Quarter 1",
            "value": "1950000"
        }, {
            "label": "Quarter 2",
            "value": "1450000",
            //Over-riding the chart-level showLabels to show this particular label.
            "showLabel": "1"
        }, {
            "label": "Quarter 3",
            "value": "1730000"
        }, {
            "label": "Quarter 4",
            "value": "2120000"
        }]
    }
}
