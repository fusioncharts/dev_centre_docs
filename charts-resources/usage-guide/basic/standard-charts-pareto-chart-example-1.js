{
    type: 'pareto2d',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Employee late arrivals by reported cause",
            "subCaption": "Last month",
            "xAxisName": "Reported Cause",
            "pYAxisName": "No. of Occurrence",
            "sYAxisname": "Cumulative Percentage",
            "showHoverEffect": "1",
            "theme": "fint"

        },
        "data": [{
            "label": "Traffic",
            "value": "5680"
        }, {
            "label": "Family Engagement",
            "value": "1036"
        }, {
            "label": "Public Transport",
            "value": "950"
        }, {
            "label": "Weather",
            "value": "500"
        }, {
            "label": "Emergency",
            "value": "140"
        }, {
            "label": "Others",
            "value": "68"
        }]
    }
}
