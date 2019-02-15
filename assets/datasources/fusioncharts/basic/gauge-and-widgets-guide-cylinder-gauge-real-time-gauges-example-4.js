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
            "showValue": "0",
            "chartBottomMargin": "60"
        },
        "value": "110",

        "annotations": {
            "origw": "400",
            "origh": "190",
            "autoscale": "1",
            "groups": [{
                "id": "range",
                "items": [{
                    "id": "rangeBg",
                    "type": "rectangle",
                    "x": "$canvasCenterX-125",
                    "y": "$chartEndY-50",
                    "tox": "$canvasCenterX +145",
                    "toy": "$chartEndY-95",
                    "fillcolor": "#6caa03"
                }, {
                    "id": "rangeText",
                    "type": "Text",
                    "fontSize": "11",
                    "fillcolor": "#333333",
                    "text": "Available Volume : 110 ltrs",
                    "x": "$chartCenterX-35",
                    "y": "$chartEndY-70"
                }]
            }]
        }
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var gaugeRef = evtObj.sender,
                fuelVolume = 110;
            gaugeRef.chartInterval = setInterval(function() {
                (fuelVolume < 10) ? (fuelVolume = 110) : "";
                var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
                gaugeRef.feedData("&value=" + consVolume);
                fuelVolume = consVolume;
            }, 1000);
        },
        //Using real time update event to update the annotation
        //showing available volume of Diesel
        "realTimeUpdateComplete": function(evt, arg) {
            var annotations = evt.sender.annotations,
                dataVal = evt.sender.getData(),
                colorVal = (dataVal >= 70) ? "#6caa03" : ((dataVal <= 25) ? "#e44b02" : "#f8bd1b");
            //Updating value
            annotations && annotations.update('rangeText', {
                "text": "Available Volume: " + dataVal + " ltrs"
            });
            //Changing background color as per value
            annotations && annotations.update('rangeBg', {
                "fillcolor": colorVal
            });
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
