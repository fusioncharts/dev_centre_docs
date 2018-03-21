{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    id: 'cpu-linear-gauge-21',
    width: '400',
    height: '170',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "caption": "Server CPU Utilization",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "20",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "75"
            }]
        }
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.intervalVar = setInterval(function() {
                var prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);
                FusionCharts.items["cpu-linear-gauge-21"].feedData("value=" + prcnt);
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.intervalVar);
        }
    }
}
