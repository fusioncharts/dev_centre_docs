{
    type: 'thermometer',
    renderAt: 'chart-container',
    id: 'myThm-7',
    width: '240',
    height: '400',
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
            "gaugeFillColor": "#008ee4",
            "thmOriginX": "100",
            "theme": "fusion",
            "chartBottomMargin": "20",
            "majorTMNumber": "6",
            "majorTMHeight": "12",
            "minorTMNumber": "4",
            "minorTMHeight": "7",

            //Major Tick Marks Cosmetics
            "majorTMColor": "#666666",
            "majorTMAlpha": "100",
            "majorTMThickness": "2",

            //Minor Tick Marks Cosmetics
            "minorTMColor": "#666666",
            "minorTMAlpha": "50",
            "minorTMThickness": "2",
        },
        "value": "-6"
    },
    "events": {
        "initialized": function(evt, arg) {
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
