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
            "placevaluesInside": "1",
            "theme": "fusion",
            "rotateValues": "0"
        },

        "data": [{
            "label": "Apple",
            "value": "810000",
            "link": "F-drill-http://fusioncharts.com"
        }, {
            "label": "Cranberry",
            "value": "620000",
            "link": "F-drill-http://www.fusioncharts.com/explore/charts/"
        }, {
            "label": "Grapes",
            "value": "350000",
            "link": "F-drill-http://blog.fusioncharts.com/"
        }]
    }
}
