{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Monthly Sales",
            "subCaption": "January to June 2026",
            "xAxisName": "Month",
            "yAxisName": "Sales",
            "numberSuffix": "$",
            "showValues": "1",
            "theme": "fusion"
        },
        // Chart Data
        "data": [{
            "label": "January",
            "value": "42000"
        }, {
            "label": "February",
            "value": "55000"
        }, {
            "label": "March",
            "value": "48000"
        }, {
            "label": "April",
            "value": "67000"
        }, {
            "label": "May",
            "value": "72000"
        }, {
            "label": "June",
            "value": "81000"
        }]
    }
}
