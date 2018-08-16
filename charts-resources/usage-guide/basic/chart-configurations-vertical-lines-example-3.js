{
    type: 'line',
    renderAt: 'chart-container1',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Visitors to website",
            "subCaption": "Last week",
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
            //Defining vline position to match with Friday
            "linePosition": "0",
            //Setting vline label text
            "label": "Weekend Start",
            "labelPosition": "0",
            "linePosition": "0.5",
            "color": "#53cfcb",
            "thickness": "1",
            "alpha": "50",
            //vline label vertically aligned to middle
            "labelVAlign": "middle",
            //vline label horizontally aligned to bottom
            "labelHAlign": "right"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
