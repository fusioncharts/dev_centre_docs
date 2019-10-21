{
    type: 'cylinder',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '200',
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
        // initial value to be fed to the gauge
        "value": "110"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var fuelVolume = 110;
            evtObj.sender.chartInterval = setInterval(function() {
                (fuelVolume < 10) ? (fuelVolume = 110) : "";
                var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
                // feed data to the cylinder gauge, fuelMeter
                evtObj.sender.feedData && evtObj.sender.feedData("&value=" + consVolume);
                fuelVolume = consVolume;
            }, 1000); // set the refresh interval to 1000 ms
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
