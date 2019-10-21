{
    type: 'thermometer',
    renderAt: 'chart-container',
    id: 'myThm-4',
    width: '240',
    height: '310',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature Monitor",
            "subcaption": " Central cold store",
            "lowerLimit": "-10",
            "upperLimit": "0",

            "decimals": "1",
            "numberSuffix": "°C",
            "showhovereffect": "1",
            "thmFillColor": "#008ee4",
            "showGaugeBorder": "1",
            "gaugeBorderColor": "#008ee4",
            "gaugeBorderThickness": "2",
            "gaugeBorderAlpha": "30",
            "thmOriginX": "100",
            "chartBottomMargin": "20",
            "valueFontColor": "#000000",
            "theme": "fusion"
        },
        "value": "-6",
        //All annotations are grouped under this element
        "annotations": {
            "showbelow": "0",
            "groups": [{
                //Each group needs a unique ID
                "id": "indicator",
                "items": [
                    //Showing Annotation
                    {
                        "id": "background",
                        //Rectangle item
                        "type": "rectangle",
                        "alpha": "50",
                        "fillColor": "#AABBCC",
                        "x": "$gaugeEndX-40",
                        "tox": "$gaugeEndX",
                        "y": "$gaugeEndY+54",
                        "toy": "$gaugeEndY+72"
                    }
                ]
            }]

        },
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
            evt.sender.updateAnnotation = function(evtObj, argObj) {
                var code,
                    chartObj = evtObj.sender,
                    val = chartObj.getData(),
                    annotations = chartObj.annotations;

                if (val >= -4.5) {
                    code = "#00FF00";
                } else if (val < -4.5 && val > -6) {
                    code = "#ff9900";
                } else {
                    code = "#ff0000";
                }
                annotations.update("background", {
                    "fillColor": code
                });
            };
        },
        "renderComplete": function(evt, arg) {
            evt.sender.updateAnnotation(evt, arg);
        },
        "realtimeUpdateComplete": function(evt, arg) {
            evt.sender.updateAnnotation(evt, arg);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.dataUpdate);
        }
    }
}
