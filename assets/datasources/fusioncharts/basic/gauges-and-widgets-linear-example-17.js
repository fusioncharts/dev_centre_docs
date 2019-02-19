{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '170',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "40",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "valueAbovePointer": "0",
            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40"
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
                //Adding Trendpoint
                {
                    "startValue": "70",
                    "color": "#dddddd",
                    "dashed": "1",
                    "dashlen": "3",
                    "dashgap": "3",
                    "thickness": "2"
                }, {
                    "startValue": "85",
                    "color": "#dddddd",
                    "dashed": "1",
                    "dashlen": "3",
                    "dashgap": "3",
                    "thickness": "2"
                }
            ]
        }
    }
}
