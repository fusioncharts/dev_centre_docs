{
    type: 'InverseMSColumn2D',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataSource: {
        "chart": {
            "caption": "Average Page Load Time (hsm.com)",
            "subCaption": "Last Week",
            "showBorder": "0",
            "xAxisName": "Day",
            "yAxisName": "Time (In Sec)",
            "numberSuffix": "s",
            "placeValuesInside": "0",
            "valueFontColor": "#333333",
            "rotateValues": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "dataset": [{
            "seriesname": "Loading Time",
            "allowDrag": "0",
            "data": [{
                "value": "6"
            }, {
                "value": "5.8"
            }, {
                "value": "5"
            }, {
                "value": "4.3"
            }, {
                "value": "4.1"
            }, {
                "value": "3.8"
            }, {
                "value": "3.2"
            }]
        }]
    }
}
