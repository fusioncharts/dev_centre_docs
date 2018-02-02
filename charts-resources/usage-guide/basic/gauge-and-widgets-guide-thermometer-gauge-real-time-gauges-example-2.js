{
    type: 'thermometer',
    renderAt: 'chart-container',
    id: 'myThm-2',
    width: '240',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature Monitor",
            "subcaption": " Central cold store",
            "lowerLimit": "-10",
            "upperLimit": "0",
            "numberSuffix": "°C",
            "decimals": "1",
            "showhovereffect": "1",
            "thmFillColor": "#008ee4",
            "showGaugeBorder": "1",
            "gaugeBorderColor": "#008ee4",
            "gaugeBorderThickness": "2",
            "gaugeBorderAlpha": "30",
            "thmOriginX": "100",
            "dataStreamURL": "../../../resources/php/gauge-and-widgets-guide-thermometer-gauge-real-time-gauges-php-1.php",
            "refreshInterval": "5",
            "theme": "fint"
        },
        "value": "-6"
    }
}
