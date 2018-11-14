{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fusion",
            //Plot border properties
            "showPlotBorder": "1",
            "plotBorderThickness": "1",
            "plotBorderColor": "#000000"
        },
        "data": [{
            "label": "Q1",
            "value": "1950000",
            "Dashed": "1",
            "DashLen": "4",
            "DashGap": "4",
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
