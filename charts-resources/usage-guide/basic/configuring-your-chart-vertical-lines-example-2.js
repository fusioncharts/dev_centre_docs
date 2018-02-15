{
    type: 'line',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "caption": "Visitors to website",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Visits",
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
            //Adding vline
            "vline": "true",
            //Adding label text to vertical line
            "label": "Weekend",
            //Setting label to show up in line with Saturday
            "linePosition": "1",
            //Defining label position to show at middle
            "labelPosition": "0.5"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
