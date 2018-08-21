{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "captionPadding": "0",
            "origw": "320",
            "origh": "300",
            "gaugeouterradius": "115",
            "gaugestartangle": "270",
            "gaugeendangle": "-25",
            "showValue": "1",
            "valueFontSize": "30",
            "majorTMNumber": "13",
            "majortmthickness": "2",
            "majorTMHeight": "13",
            "minorTMHeight": "7",
            "minorTMthickness": "1",
            "minorTMNumber": "1",
            "showGaugeBorder": "0",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": chartVal,
                "code": "#999999"
            }, {
                "minValue": chartVal,
                "maxValue": "280",
                "code": "#F6F6F6"
            }]
        },
        "dials": {
            "dial": [{
                "value": chartVal,
                "bgColor": "#F20F2F",
                "baseWidth": "8"
            }]
        },

        "annotations": {
            "groups": [{
                "items": [{
                    "type": "text",
                    "id": "text",
                    "text": "mph",
                    "x": "$gaugeCenterX",
                    "y": "$gaugeCenterY + 40",
                    "fontSize": "20",
                    "color": "#555555"
                }]
            }]
        }
    }
}