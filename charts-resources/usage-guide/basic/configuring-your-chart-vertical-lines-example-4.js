{
    type: 'line',
    renderAt: 'chart-container2',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "chartRightMargin": "40",
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
            //Adding vline data
            "vline": "true",
            //Defining vline position to match with Saturday
            "linePosition": "1",
            //Setting vline label text
            "label": "Weekend",
            "labelPosition": "0.95",
            "color": "#6da81e",
            "thickness": "1",
            "alpha": "50",
            //vline label vertically aligned to middle
            "labelVAlign": "middle",
            //vline label horizontally aligned to left
            "labelHAlign": "left"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
