{
    type: 'spline',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Bakersfield Central - Total footfalls",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "showBorder": "1",
            "showTooltip": "0",
            "formatNumberScale": "0",
            "theme": "fusion"
        },
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1",
            "groups": [{
                "items": [{
                    "id": "dyn-labelBG",
                    "type": "rectangle",
                    "radius": "3",
                    "x": "$canvasEndX - 100",
                    "y": "$canvasStartY",
                    "tox": "$canvasEndX",
                    "toy": "$canvasStartY + 30",
                    "color": "#0075c2",
                    "alpha": "70"
                }, {
                    "id": "dyn-label",
                    "type": "text",
                    "text": "Total: 119,507",
                    "fillcolor": "#ffffff",
                    "fontsize": "10",
                    "x": "$canvasEndX - 50",
                    "y": "$canvasStartY + 15"
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
