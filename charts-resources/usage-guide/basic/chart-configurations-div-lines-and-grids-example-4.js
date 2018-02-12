{
    type: 'msline',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Website Visitors",
            "subCaption": "Last week Vs This week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "theme": "fint",
            "showValues": "0",
            //Setting automatic calculation of div lines to off
            "adjustDiv": "0",
            //Manually defining y-axis lower and upper limit
            "yAxisMaxvalue": "35000",
            "yAxisMinValue": "5000",
            //Setting number of divisional lines to 9
            "numDivLines": "9",
            "showAlternateHGridColor": "1"
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
            "seriesname": "Last Week",
            "data": [{
                "value": "13000"
            }, {
                "value": "14500"
            }, {
                "value": "13500"
            }, {
                "value": "15000"
            }, {
                "value": "15500"
            }, {
                "value": "17650"
            }, {
                "value": "19500"
            }]
        }, {
            "seriesname": "This Week",
            "data": [{
                "value": "15400"
            }, {
                "value": "16800"
            }, {
                "value": "18800"
            }, {
                "value": "22400"
            }, {
                "value": "23800"
            }, {
                "value": "25800"
            }, {
                "value": "30800"
            }]
        }]
    }
}
