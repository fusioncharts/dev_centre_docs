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
            //Adding vline data
            "vline": "true",
            //Defining vline position
            "linePosition": "1",
            //Setting vline label text
            "label": "Weekend",
            //Defining vline label position
            "labelPosition": "0.5",
            //Customizing vline color
            "color": "#6da81e",
            //Customizing vline thickness
            "thickness": "2",
            //Changing vline alpha
            "alpha": "50",
            //Setting vline as dashed line
            "dashed": "1",
            //Defining dash length for vline
            "dashLen": "4",
            //Setting gap between dash in vline
            "dashGap": "2"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
