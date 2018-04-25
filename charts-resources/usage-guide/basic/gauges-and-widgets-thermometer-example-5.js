{
    type: 'thermometer',
    renderAt: 'chart-container',
    width: '240',
    height: '330',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature Monitor",
            "subcaption": "Central cold store",
            "lowerLimit": "-10",
            "upperLimit": "0",
            "numberSuffix": "°C",
            "decimals": "1",
            "showhovereffect": "1",
            "gaugeFillColor": "#008ee4",
            //Thermometer height and bulb radious configuration
            "thmBulbRadius": "35",
            "thmHeight": "150",
            "thmOriginX": "100",
            "theme": "fint",
            "chartBottomMargin": "20"
        },
        "value": "-6"
    },
    "events": {
        "rendered": function(evt, arg) {
            evt.sender.dataUpdate = setInterval(function() {
                var value,
                    prevTemp = evt.sender.getData(),
                    mainTemp = (Math.random() * 10) * (-1),
                    diff = Math.abs(prevTemp - mainTemp);

                diff = diff > 1 ? (Math.random() * 1) : diff;
                if (mainTemp > prevTemp) {
                    value = prevTemp + diff;
                } else {
                    value = prevTemp - diff;
                }
                evt.sender.feedData("&value=" + value);
            }, 3000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.dataUpdate);
        }
    }
}
