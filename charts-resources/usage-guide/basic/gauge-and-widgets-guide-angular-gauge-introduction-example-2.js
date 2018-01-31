{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Customer Satisfaction Score",
            "subcaption": "Los Angeles Topanga",
            "plotToolText": "Current Score: $value",
            "theme": "fint",
            "chartBottomMargin": "50",
            "showValue": "1"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "4.5",
                "code": "#e44a00"
            }, {
                "minValue": "4.5",
                "maxValue": "7.5",
                "code": "#f8bd19"
            }, {
                "minValue": "7.5",
                "maxValue": "10",
                "code": "#6baa01"
            }]
        },
        "dials": {
            "dial": [{
                "value": "8.9"
            }]
        },
        "trendPoints": {
            "point": [{
                "startValue": "6.8",
                "color": "#0075c2",
                "dashed": "1"
            }, {
                "startValue": "9.5",
                "color": "#0075c2",
                "dashed": "1"
            }, {
                "startValue": "6.8",
                "endValue": "9.5",
                "color": "#0075c2",
                "radius": "185",
                "innerRadius": "80"
            }]
        },
        "annotations": {
            "origw": "450",
            "origh": "300",
            "autoscale": "1",
            "showBelow": "0",
            "groups": [{
                "id": "arcs",
                "items": [{
                    "id": "national-cs-bg",
                    "type": "rectangle",
                    "x": "$chartCenterX+2",
                    "y": "$chartEndY - 45",
                    "tox": "$chartCenterX + 130",
                    "toy": "$chartEndY - 25",
                    "fillcolor": "#f8bd19"
                }, {
                    "id": "national-cs-text",
                    "type": "Text",
                    "color": "#ffffff",
                    "label": "National Average : 7.2",
                    "fontSize": "12",
                    "align": "left",
                    "x": "$chartCenterX + 7",
                    "y": "$chartEndY - 35"
                }, {
                    "id": "state-cs-bg",
                    "type": "rectangle",
                    "x": "$chartCenterX-2",
                    "y": "$chartEndY - 45",
                    "tox": "$chartCenterX - 103",
                    "toy": "$chartEndY - 25",
                    "fillcolor": "#6baa01"
                }, {
                    "id": "state-cs-text",
                    "type": "Text",
                    "color": "#ffffff",
                    "label": "State Average : 8",
                    "fontSize": "12",
                    "align": "right",
                    "x": "$chartCenterX - 7",
                    "y": "$chartEndY - 35"
                }, {
                    "id": "store-cs-bg",
                    "type": "rectangle",
                    "x": "$chartCenterX-130",
                    "y": "$chartEndY - 22",
                    "tox": "$chartCenterX + 150",
                    "toy": "$chartEndY - 2",
                    "fillcolor": "#0075c2"
                }, {
                    "id": "state-cs-text",
                    "type": "Text",
                    "color": "#ffffff",
                    "label": "Store's Customer Satisfaction Range: 6.8 to 9.5",
                    "fontSize": "12",
                    "align": "center",
                    "x": "$chartCenterX + 10",
                    "y": "$chartEndY - 12"
                }]
            }]
        }
    }
}
