{
    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Website Visitors WoW Growth",
            "subcaption": "Last 10 weeks",
            "xAxisName": "Week",
            "yAxisName": "Growth",
            "numberSuffix": "%",
            "theme": "fint",
            "showValues": "0",
            //Zero plane configuration
            "showZeroPlane": "1",
        },
        "data": [{
            "label": "Week 1",
            "value": "14.5"
        }, {
            "label": "Week 2",
            "value": "-6.5"
        }, {
            "label": "Week 3",
            "value": "9.8"
        }, {
            "label": "Week 4",
            "value": "9.2"
        }, {
            "label": "Week 5",
            "value": "-7.45"
        }, {
            "label": "Week 6",
            "value": "-3.19"
        }, {
            "label": "Week 7",
            "value": "-11.78"
        }, {
            "label": "Week 8",
            "value": "3.32"
        }, {
            "label": "Week 9",
            "value": "8.57"
        }, {
            "label": "Week 10",
            "value": "16.95"
        }]
    }
}
