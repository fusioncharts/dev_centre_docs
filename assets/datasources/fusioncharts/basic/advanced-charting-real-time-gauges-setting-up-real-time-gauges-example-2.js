{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Server CPU Utilization",
            "subcaption": "foods.hsm.com & garments.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "dataStreamUrl": "https://static.fusioncharts.com/sample/dev2.0/advanced-charting-real-time-gauges-setting-up-real-time-gauges-php-1.php",
            "refreshInterval": "5",
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
                "tooltext": "foods.hsm.com : $value"
            }, {
                "id": "clth_dial",
                "value": "64.8",
                "alpha": "40",
                "tooltext": "garments.hsm.com : $value"
            }]
        }
    }
}
