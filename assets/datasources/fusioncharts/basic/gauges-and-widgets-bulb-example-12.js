{
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "valueFontSize": "16",
            "chartBottomMargin": "45",

            //Tooltext
            "plottooltext": "Current Temperature: $value°C ",
            //Theme
            "theme": "fusion"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just{br}not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5",
        //All annotations are grouped under this element
        "annotations": {
            "showbelow": "0",
            "groups": [{
                //Each group needs a unique ID
                "id": "valtext",
                "items": [{
                    "id": "background",
                    //Rectangle item
                    "type": "rectangle",
                    "alpha": "50",
                    "fillColor": "#AABBCC",
                    "x": "$chartCenterX-30",
                    "tox": "$chartCenterX+30",
                    "y": "$chartEndY-35",
                    "toy": "$chartEndY-5"
                }, {
                    "id": "valuetxt",
                    "type": "text",
                    "text": "-5°C",
                    "alpha": "100",
                    "font": "Helvetica Neue,Arial",
                    "bold": "0",
                    "fontSize": "14",
                    "fontColor": "#00FF00",
                    "x": "$chartCenterX",
                    "y": "$chartEndY-20",

                }]
            }]

        }
    },
    "events": {
        "rendered": function(evt, args) {
            evt.sender.updateAnnotation = function(evtObj, argObj) {
                var code,
                    textColor,
                    chartObj = evtObj.sender,
                    val = chartObj.getData(),
                    annotations = chartObj.annotations;

                if (val >= -24) {
                    code = "#00FF00";
                    textColor = "#000000";
                } else if (val < -24 && val > -35) {
                    code = "#ff9900";
                    textColor = "#0000ff";
                } else {
                    code = "#ff0000";
                    textColor = "#FFFFFF";
                }
                annotations.update("background", {
                    "fillColor": code
                });
                annotations.update('valuetxt', {
                    "text": val + "°C",
                    "fontColor": textColor
                });
            };
            evt.sender.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                evt.sender.feedData("&value=" + num);
            }, 10000);
        },
        "renderComplete": function(evt, args) {
            evt.sender.updateAnnotation(evt, args);
        },
        "realtimeUpdateComplete": function(evt, args) {
            evt.sender.updateAnnotation(evt, args);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
