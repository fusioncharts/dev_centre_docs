{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 3 Juice Flavors",
            "subCaption": "Last year",
            "xAxisName": "Flavor",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "canvasBgAlpha": "0",
            "showAlternateHgridColor": "1",
            //Background image properties
            "bgImage": "http://upload.wikimedia.org/wikipedia/commons/7/79/Misc_fruit.jpg",
            //Background image transparency
            "bgImageAlpha": "25",
            "bgImageDisplayMode": "stretch",
            //Theme
            "theme": "fusion"
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
