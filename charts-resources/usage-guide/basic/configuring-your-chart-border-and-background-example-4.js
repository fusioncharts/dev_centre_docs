{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 3 Juice Flavors by sales",
            "subCaption": "Last year",
            "xAxisName": "Flavor",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "canvasBgAlpha": "0",
            "showAlternateHgridColor": "1",
            //Background image properties
            "bgImage": "http://upload.wikimedia.org/wikipedia/commons/7/79/Misc_fruit.jpg",
            "bgImageAlpha": "40",
            "bgImageDisplayMode": "stretch",
            //Theme
            "theme": "fint"
        },
        "data": [{
            "label": "Apple",
            "value": "810000"
        }, {
            "label": "Cranberry",
            "value": "620000"
        }, {
            "label": "Grapes",
            "value": "350000"
        }]
    }
}
