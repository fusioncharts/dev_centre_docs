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
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fusion",
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
