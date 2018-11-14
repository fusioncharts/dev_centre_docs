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
            "showhovereffect": "1",
            "theme": "fusion"
        },
        "value": "110"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var fuelVolume = 110;
            evtObj.sender.interval = setInterval(function() {
                (fuelVolume < 10) ? (fuelVolume = 110) : "";
                var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
                evtObj.sender.feedData && evtObj.sender.feedData("&value=" + consVolume);
                fuelVolume = consVolume;
            }, 1000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
