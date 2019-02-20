{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '190',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "subcaption": "food.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "40",
            "valueFontSize": "11",
            "valueFontBold": "0"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "75"
            }]
        },
        "trendPoints": {
            "point": [
                //Trendpoint
                {
                    "startValue": "70",
                    "displayValue": " ",
                    "dashed": "1",
                    "showValues": "0"
                }, {
                    "startValue": "85",
                    "displayValue": " ",
                    "dashed": "1",
                    "showValues": "0"
                },
                //Trendzone
                {
                    "startValue": "70",
                    "endValue": "85",
                    "displayValue": " ",
                    "alpha": "40"
                }
            ]
        },
        "annotations": {
            "origw": "400",
            "origh": "190",
            "autoscale": "1",
            "groups": [{
                "id": "range",
                "items": [{
                    "id": "rangeBg",
                    "type": "rectangle",
                    "x": "$chartCenterX-115",
                    "y": "$chartEndY-35",
                    "tox": "$chartCenterX +115",
                    "toy": "$chartEndY-15",
                    "fillcolor": "#0075c2"
                }, {
                    "id": "rangeText",
                    "type": "Text",
                    "fontSize": "11",
                    "fillcolor": "#ffffff",
                    "text": "Recommended Utilization Range : 70% - 85%",
                    "x": "$chartCenterX",
                    "y": "$chartEndY-25"
                }]
            }]
        }
    }
}
