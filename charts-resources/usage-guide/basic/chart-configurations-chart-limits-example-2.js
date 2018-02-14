{
    type: 'column2d',
    renderAt: 'chart-container',
    id: 'myChart',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subcaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fint",
            //Setting adaptive y-axis min
            "setAdaptiveYMin": "1"
        },
        "data": [{
            "label": "Q1",
            "value": "1950000"
        }, {
            "label": "Q2",
            "value": "1750000"
        }, {
            "label": "Q3",
            "value": "1930000"
        }, {
            "label": "Q4",
            "value": "2120000"
        }]
    }
}
