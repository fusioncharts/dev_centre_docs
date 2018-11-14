{
    type: 'thermometer',
    renderAt: 'chart-container',
    id: 'temp-monitor',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Central cold storage",
            "subcaption": "Bakersfield Central",
            "lowerLimit": "-20",
            "upperLimit": "20",
            "numberSuffix": "°C",
            "theme": "fusion"
        },
        "value": "-10"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.interval = setInterval(function() {
                var temp = -10 + parseInt(Math.floor(Math.random() * 6), 10);
                FusionCharts.items["temp-monitor"].feedData("value=" + temp);
            }, 3000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
