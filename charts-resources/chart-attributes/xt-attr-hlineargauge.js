{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Server CPU Utilization",
            "subcaption": "food.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "valueAbovePointer": "0",
            "showShadow": "0",
            "gaugeFillMix": "{light}",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
                "code": "#1aaf5d"
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
                "code": "#f2c500"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
                "code": "#c02d00"
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "72.5"
            }]
        }
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.interval = setInterval(function() {
                var prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);
                evtObj.sender.feedData && evtObj.sender.feedData("value=" + prcnt);
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
