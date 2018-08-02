{
    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subcaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            //Horizontal band color and alpha configuration
            "showAlternateHGridColor": "1",
            "alternateHGridColor": "#99ccff",
            "alternateHGridAlpha": "30",
            //Theme
            "theme": "fusion"
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
