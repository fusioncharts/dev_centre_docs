{
    type: 'line',
    renderAt: 'chart-container',
    
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Customer Satisfaction Averages",
            "subcaption": "Last week",
            "xaxisname": "Day",
            "yaxisname": "Satisfaction (In %)",
            "numbersuffix": "%",
            "showvalues": "0",
            //Customizing anchor properties
            "drawAnchors": "0",
            //Theme
            "theme": "fint"

        },
        "data": [{
            "label": "Mon",
            "value": "22.5"
        }, {
            "label": "Tue",
            "value": "42.4"
        }, {
            "label": "Wed",
            "value": "28.2"
        }, {
            "label": "Thu",
            "value": "22.8"
        }, {
            "label": "Fri",
            "value": "39.2"
        }, {
            "label": "Sat",
            "value": "66.45"
        }]
    }
}
