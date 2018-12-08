{
    type: 'inversemsarea',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Daily bounce rate",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Percentage",
            "numberSuffix": "%",
            "plotFillAlpha": "50",
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
            "seriesname": "food.hsm.com",
            "data": [{
                "value": "27"
            }, {
                "value": "22"
            }, {
                "value": "25"
            }, {
                "value": "27"
            }, {
                "value": "21"
            }, {
                "value": "29"
            }, {
                "value": "22"
            }]
        }, {
            "seriesname": "cloth.hsm.com",
            "data": [{
                "value": "42"
            }, {
                "value": "38"
            }, {
                "value": "39"
            }, {
                "value": "36"
            }, {
                "value": "43"
            }, {
                "value": "44"
            }, {
                "value": "35"
            }]
        }]
    }
}
