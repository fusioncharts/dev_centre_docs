{
    type: 'thermometer',
    renderAt: 'chart-container',
    id: 'myThm-1',
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
            "showhovereffect": "1",
            "decimals": "1",

            //Customizing gauge fill
            "gaugeFillColor": "#008ee4",
            "gaugeFillAlpha": "70",

            "thmOriginX": "100",
            "theme": "fusion",
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
