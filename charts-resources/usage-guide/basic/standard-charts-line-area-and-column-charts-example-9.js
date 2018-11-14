{
    type: 'line',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Visitors to website",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Visits",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "showValues": "0"
        },
        "data": [{
            "label": "Mon",
            "value": "5123"
        }, {
            "label": "Tue",
            "value": "4233"
        }, {
            "label": "Wed",
            "value": "5507"
        }, {
            "label": "Thu",
            "value": "4110"
        }, {
            "label": "Fri",
            "value": "5529"
        }, {
            //Setting data as vline data
            "vline": "true",
            //Adding label
            "label": "Weekend Start",
            "color": "#29C3BE",
            "linePosition": "0.7"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
