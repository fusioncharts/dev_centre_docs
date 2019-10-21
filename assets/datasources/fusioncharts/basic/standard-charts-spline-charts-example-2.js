{
    type: 'msspline',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitor",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "vline": "true",
                "lineposition": "0",
                "color": "#F2726F",
                "labelHAlign": "right",
                "labelPosition": "0",
                "label": "National holiday"
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
            "seriesname": "Bakersfield Central",
            "data": [{
                "value": "15123"
            }, {
                "value": "14233"
            }, {
                "value": "25507"
            }, {
                "value": "9110"
            }, {
                "value": "15529"
            }, {
                "value": "20803"
            }, {
                "value": "19202"
            }]
        }, {
            "seriesname": "Los Angeles Topanga",
            "data": [{
                "value": "13400"
            }, {
                "value": "12800"
            }, {
                "value": "22800"
            }, {
                "value": "12400"
            }, {
                "value": "15800"
            }, {
                "value": "19800"
            }, {
                "value": "21800"
            }]
        }]
    }
}
