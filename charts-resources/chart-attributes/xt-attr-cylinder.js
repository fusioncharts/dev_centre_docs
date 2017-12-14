{
    type: 'cylinder',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Fuel Meter",
            "subcaption": "Diesel level in generator Bakersfield Central",
            "subcaptionFontBold": "0",
            "lowerLimit": "0",
            "upperLimit": "120",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showValue": "0",
            "showhovereffect": "1",
            "bgCOlor": "#ffffff",
            "borderAlpha": "0",
            "cylFillColor": "#008ee4"
        },
        "value": "110"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var fuelVolume = 110;
            evtObj.sender.interval = setInterval(function() {
                (fuelVolume < 10) ? (fuelVolume = 110) : "";
                var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
                evtObj.sender.feedData("&value=" + consVolume);
                fuelVolume = consVolume;
            }, 1000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
