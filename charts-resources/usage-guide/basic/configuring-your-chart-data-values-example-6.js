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
            "numDivLines": "2",
            "theme": "fint",
            //Hiding all data values to show value of a specific data plot
            "showValues": "0"
        },
        "data": [{
            "label": "Q1",
            "value": "1950000",
            //Showing the data value for this data plot only
            "showValue": "1"
        }, {
            "label": "Q2",
            "value": "1450000"
        }, {
            "label": "Q3",
            "value": "1730000"
        }, {
            "label": "Q4",
            "value": "2120000",
            //Showing the data value for this data plot only
            "showValue": "1"
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "1750000",
                "color": "#1aaf5d",
                "displayvalue": "Target - $175K",
                "valueOnRight": "1"
            }]
        }]
    }
}
