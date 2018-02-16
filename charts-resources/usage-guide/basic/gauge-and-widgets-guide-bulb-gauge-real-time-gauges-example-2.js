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
            //Tooltext
            "plottooltext": "Current Temperature: $value°C",

            "dataStreamURL": "../../../resources/php/gauge-and-widgets-guide-bulb-gauge-real-time-gauges-php-1.php",
            "refreshInterval": "5",
            //Theme
            "theme": "fint"


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
                "label": "Something is just  not right!",
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
                    "id": "valuetxt",
                    "type": "text",
                    "text": "-5°C",
                    "alpha": "100",
                    "font": "Helvetica Neue,Arial",
                    "bold": "0",
                    "fontSize": "14",
                    "fontColor": "#00FF00",
                    "x": "$chartEndX - 50",
                    "y": "$chartStartY +60"

                }]
            }]

        }
    },
    "events": {
        "renderComplete": function(evtObj, argObj) {
            var annotations = evtObj.sender.annotations,
                val = evtObj.sender.getData(),
                color = val && (val > -25) ? "#00fc00" : ((val <= -25 && val > -35) ? "#ff9900" : "#ff0000");
            annotations.update('valuetxt', {
                "text": "Temperature{br}" + val + "°C",
                "fontColor": color
            });
        },
        "realtimeUpdateComplete": function(evtObj, argObj) {
            var annotations = evtObj.sender.annotations,
                val = evtObj.sender.getData(),
                color = val && (val > -25) ? "#00ff00" : ((val <= -25 && val > -35) ? "#ff9900" : "#ff0000");
            annotations.update('valuetxt', {
                "text": "Temperature{br}" + val + "°C",
                "fontColor": color
            });
        }
    }
}
