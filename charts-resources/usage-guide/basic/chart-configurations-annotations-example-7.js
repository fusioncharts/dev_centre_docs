{
    type: 'spline',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Bakersfield Central - Total footfalls",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "showValues": "1",
            "showBorder": "1",
            "showTooltip": "0",
            "formatNumberScale": "1",
            "theme": "fint"
        },
        "annotations": {
            "groups": [{
                "items": [{
                    "id": "dyn-labelBG",
                    "type": "rectangle",
                    "radius": "3",
                    "x": "290",
                    "y": "60",
                    "tox": "390",
                    "toy": "90",
                    "color": "#0075c2",
                    "alpha": "70",
                    "origW": "400",
                    "origH": "300"
                }, {
                    "id": "dyn-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "fontsize": "10",
                    "x": "340",
                    "y": "75",
                    "text": "Total: 119, 507",
                    "origW": "400",
                    "origH": "300"
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
