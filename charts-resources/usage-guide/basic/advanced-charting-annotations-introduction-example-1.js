{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales figures for top 4 chocolate brands - FY2013-2014",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Brand",
            "yAxisName": "Sales",
            "yAxisMaxValue": "120000",
            "numberPrefix": "$",
            "theme": "fusion",
            "plotfillAlpha": "100",
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#333333"
        },
        "data": [{
            "label": "Butterfinger",
            "value": "92000"
        }, {
            "label": "Snickers",
            "value": "87000"
        }, {
            "label": "Coffee Crisp",
            "value": "83000"
        }, {
            "label": "100 Grand",
            "value": "80000"
        }]
    }
}
