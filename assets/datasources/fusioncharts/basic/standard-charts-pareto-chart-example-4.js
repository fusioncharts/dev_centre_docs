{
    type: 'pareto2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Employee late arrivals by reported cause",
            "subCaption": "Last month",
            "xAxisName": "Reported Cause",
            "pYAxisName": "No. of Occurrence",
            "sYAxisname": "Cumulative Percentage",
            "showValues": "0",
            "showXAxisLine": "1",
            //Line dataset customizing attributes
            //Changing thickness
            "lineThickness": "2",
            //Changing color
            "lineColor": "#8e0000",
            //Changing alpha
            "lineAlpha": "80",
            //Setting line to a dashed line
            "lineDashed": "1",
            //Setting dash length
            "lineDashLen": "5",
            //Setting gap between two dash
            "lineDashGap": "3"
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
