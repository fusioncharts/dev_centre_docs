{
    type: 'spline',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Bakersfield Central - Total footfalls",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "showValues": "0"
        },
        //All annotations are grouped under this element
        "annotations": {
            //Annotations on a chart can be divided across multiple groups for easy management, and manipulation through API
            "groups": [{
                "id": "infobar",
                //Under each group, you can define multiple items. Each item is a polygon, text or image - with its own set of parameters
                "items": [{
                    "id": "high-line",
                    "type": "line",
                    "x": "$canvasStartX",
                    "y": "$dataset.0.set.2.y",
                    "tox": "$canvasEndX",
                    "toy": "$dataset.0.set.2.y",
                    "color": "#6baa01",
                    "dashed": "1",
                    "thickness": "1"
                }, {
                    "id": "label",
                    "type": "text",
                    "text": "Highest footfall 25.5K",
                    "fillcolor": "#6baa01",
                    "rotate": "90",
                    "x": "$canvasEndX - 60",
                    "y": "$dataset.0.set.2.y - 10"
                }]

            }]
        },
        "data": [{
            "label": "Mon",
            "value": "15123"
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "25507"
        }, {
            "label": "Thu",
            "value": "9110"
        }, {
            "label": "Fri",
            "value": "15529"
        }, {
            "label": "Sat",
            "value": "20803"
        }, {
            "label": "Sun",
            "value": "19202"
        }]
    }
}
