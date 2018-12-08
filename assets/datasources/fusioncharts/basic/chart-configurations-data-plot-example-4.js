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
            "showValues": "1",
            "showshadow": "1",
            //Using plot gradient color
            "usePlotGradientColor": "1",
            //Applying plot gradient color
            "plotGradientColor": "#003366",
            //Applying fill angle for plots
            "plotFillAngle": "0",
            //Applying fill ratio for plots
            "plotFillRatio": "90,100",
            "plotFillAlpha": "60"
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
