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
            "plottooltext": "<span id='headerdiv' style='font-family:\"Arial\", \"Helvetica\";font-size: 13px;font-weight: bold;'>Current Temperature:</span>{br}<div id='valueDiv' style='color: #EEEEEE;text-align:center;font-size: 25px; padding: 10px; margin-top:5px;font-family:\"Arial\", \"Helvetica\";font-weight: bold;'>$value°C</div>",
            //Theme
            "theme": "fusion"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control, <br> we have a situation!",
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
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                evtObj.sender.feedData && evtObj.sender.feedData("&value=" + num);
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.chartInterval);
        }
    }
}
