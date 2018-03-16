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
            //Anchor Cosmatics
            "anchorRadius": "6",
            "anchorBorderThickness": "2",
            //Theme
            "theme": "fint"

        },
        "data": [{
            "label": "Mon",
            "value": "22.5",
            "anchorBorderColor": "#cc3333",
            "anchorBgColor": "#ff9900"
        }, {
            "label": "Tue",
            "value": "42.4",
            "anchorBorderColor": "#33cc00",
            "anchorBgColor": "#66FF33"
        }, {
            "label": "Wed",
            "value": "28.2",
            "anchorBorderColor": "#cc3333",
            "anchorBgColor": "#ff9900"
        }, {
            "label": "Thu",
            "value": "22.8",
            "anchorBorderColor": "#cc3333",
            "anchorBgColor": "#ff9900"

        }, {
            "label": "Fri",
            "value": "39.2",
            "anchorBorderColor": "#33cc00",
            "anchorBgColor": "#66FF33"
        }, {
            "label": "Sat",
            "value": "66.45",
            "anchorBorderColor": "#33cc00",
            "anchorBgColor": "#66FF33"
        }]
    }
}
