{
    type: 'spline',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Bakersfield Central - Total footfalls",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "yAxisNamePadding": "20",
            "theme": "fusion"
        },
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1",
            "groups": [{
                "items": [{
                    "id": "high-labels-zone",
                    "type": "rectangle",
                    "x": "$yaxis.0.label.5.startx + 5",
                    "y": "$yaxis.0.label.5.starty",
                    "tox": "$yaxis.0.label.3.endx",
                    "toy": "$yaxis.0.label.3.starty",
                    "color": "#6baa01",
                    "alpha": "20",
                }, {
                    "id": "high-label",
                    "type": "text",
                    "text": "High",
                    "x": "$yaxis.0.label.4.startx - 5",
                    "y": "$yaxis.0.label.4.starty",
                    "rotateText": "1",
                    "color": "#6baa01"
                }, {
                    "id": "moderate-labels-zone",
                    "type": "rectangle",
                    "x": "$yaxis.0.label.3.startx + 5",
                    "y": "$yaxis.0.label.3.starty",
                    "tox": "$yaxis.0.label.2.endx",
                    "toy": "$yaxis.0.label.1.starty",
                    "color": "#f8bd19",
                    "alpha": "20",
                }, {
                    "id": "moderate-label",
                    "type": "text",
                    "text": "Moderate",
                    "x": "$yaxis.0.label.2.startx - 5",
                    "y": "$yaxis.0.label.2.starty",
                    "rotateText": "1",
                    "color": "#f8bd19"
                }, {
                    "id": "low-labels-zone",
                    "type": "rectangle",
                    "x": "$yaxis.0.label.1.startx - 3",
                    "y": "$yaxis.0.label.1.starty",
                    "tox": "$yaxis.0.label.0.endx",
                    "toy": "$yaxis.0.label.0.endy",
                    "color": "#e44a00",
                    "alpha": "20",
                }, {
                    "id": "low-label",
                    "type": "text",
                    "text": "Low",
                    "x": "$yaxis.0.label.1.startx - 12",
                    "y": "$yaxis.0.label.0.starty - 5",
                    "rotateText": "1",
                    "color": "#e44a00"
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
            "vline": "true",
            "lineposition": "0",
            "color": "#6baa01",
            "labelHAlign": "left",
            "label": "National holiday"
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
