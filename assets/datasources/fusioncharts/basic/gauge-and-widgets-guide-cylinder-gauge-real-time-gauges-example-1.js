{
    type: 'cylinder',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '250',
    height: '350',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Diesel Level in Generator",
            "subcaption": "Bakersfield Central",
            "lowerLimit": "0",
            "upperLimit": "120",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showValue": "1",
            "chartBottomMargin": "25"
        },
        "value": "110"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var fuelVolume = 110,
                gaugeRef = evtObj.sender;
            gaugeRef.chartInterval = setInterval(function() {

                (fuelVolume < 10) ? (fuelVolume = 110) : "";
                var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
                gaugeRef.feedData("&value=" + consVolume);
                fuelVolume = consVolume;
            }, 3000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
