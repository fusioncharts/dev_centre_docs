{
    type: 'spline',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total footfall in Bakersfield Central",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Footfalls",
            "plotBorderAlpha": "10",
            "LabelPadding": "50",
            "theme": "fusion"
        },
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1",
            "groups": [{
                "showBelow": "0",
                "items": [{
                    "id": "label",
                    "type": "text",
                    "text": "Lowest footfall 9.11K",
                    "fillcolor": "#6baa01",
                    "rotate": "90",
                    "x": "$canvasEndX - 135",
                    "y": "$dataset.0.set.3.y + 15"
                }, {

                    "id": "Line path1",
                    "type": "path",
                    "path": "M -10, -10, L -10, 10, L 10, 10, L 10, -10, L -10, -10",
                    //Positioning is done using macros
                    "x": "$dataset.0.set.3.x",
                    "y": "$dataset.0.set.3.y"
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
