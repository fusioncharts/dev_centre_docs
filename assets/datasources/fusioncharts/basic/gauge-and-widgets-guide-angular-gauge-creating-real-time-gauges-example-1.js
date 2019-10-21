{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Server CPU Utilization",
            "subcaption": "food.hsm.com & cloth.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "dataStreamUrl": "https://static.fusioncharts.com/sampledata/php/serverLoad.php",
            "refreshInterval": "10",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
                "code": "#1aaf5d"
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
                "code": "#f2c500"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
                "code": "#c02d00"
            }]
        },
        "dials": {
            "dial": [{
                "id": "fd_dial",
                "value": "72.5",
                "tooltext": "food.hsm.com : $value"
            }, {
                "id": "clth_dial",
                "value": "64.8",
                "alpha": "40",
                "tooltext": "cloth.hsm.com : $value"
            }]
        }
    }
}
