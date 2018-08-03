{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 3 Juice Flavors",
            "subCaption": "Last year",
            "xAxisName": "Flavor",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Apple",
            "value": "810000",
            "link": "http://fusioncharts.com"
        }, {
            "label": "Cranberry",
            "value": "620000",
            "link": "http://fusioncharts.com"
        }, {
            "label": "Grapes",
            "value": "350000",
            "link": "http://fusioncharts.com"
        }]
    }
}
