{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Server CPU Utilization",
            "subcaption": "forum.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showValue": "1",
            "valueBelowPivot": "1",
            "tickValueDistance": "25",
            "theme": "fusion",
            "dataStreamUrl": "https://static.fusioncharts.com/sampledata/php/streamMessages.php",
            "refreshInterval": "10",
            "useMessageLog": "1",
            "showRTmenuItem": "1"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#6baa01"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#e44a00"
            }]
        },
        "dials": {
            "dial": [{
                "id": "crntYr",
                "value": "78",
                "showValue": "1",
                "tooltext": "Current year's average : $value",
                "rearExtension": "15"
            }]
        },
    }
}
