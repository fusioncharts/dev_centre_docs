{
    type: 'line',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Website Visitors",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Visitors",
            "anchorRadius": "5",
            "showValues": "0",
            //Theme
            "theme": "fusion"
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
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "4400",
                "endValue": "6000",
                "color": "#1aaf5d",
                "valueOnRight": "1",
                "dashed": "1",
                "displayvalue": "Trend"
            }]
        }]
    }
}
