{
    type: 'hbullet',
    renderAt: 'chart-container',
    width: '450',
    height: '72',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Alisia",
            "subcaption": "Dotts",
            "captionFontSize": "11.5",
            "subcaptionFontSize": "11.5",
            "subcaptionFontBold": "1",
            "captionPadding": "5",
            "animation": "1",
            "upperLimit": "12000",
            "numberprefix": "$",
            "targetFillPercent": "75",
            "targetColor": "#444444",
            "plotFillPercent": "40",
            "plotFillColor": "#444444",
            "formatNumberScale": "1",
            "baseFontColor": "595959",
            "plotToolText": "<div>Sales : <b>$$value</b></div>",
            "targettooltext": "Target : <b>$$targetvalue</b>",
            "theme": "zune",
            "dataStreamURL": "../../resources/php/gauge-and-widgets-guide-bullet-chart-real-time-bullet-chart-php-1.php",
            "refreshInterval": "10"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "6000",
                "code": "#999498"
            }, {
                "minValue": "6000",
                "maxValue": "9000",
                "code": "#c5c2c6"
            }, {
                "minValue": "9000",
                "maxValue": "12000",
                "code": "#e1dee2"
            }]
        },
        "value": "3555",
        "target": "10000"
    }
}