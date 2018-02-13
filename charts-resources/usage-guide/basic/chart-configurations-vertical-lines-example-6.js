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
            "showValues": "0",
            //Hiding label borders for all vertical lines
            "showVLineLabelBorder": "0"
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
            "vline": "true",
            "linePosition": "1",
            "label": "Weekend",
            "labelPosition": "0",
            "labelHAlign": "left",
            "labelVAlign": "top",
            "color": "#6da81e",
            "alpha": "50",
            "dashed": "1",
            "dashlen": "5",
            "dashgap": "3",
            //Enabling vline label border from vline element
            "showLabelBorder": "0"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
