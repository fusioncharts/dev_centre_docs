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

            "dataStreamURL": "/dummy-url-bulbData.php",
            "refreshInterval": "5",
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
    events: {
        'beforeRender': function(evt, args) {
            // Create container div for data table
            var msgCont = document.createElement('div');
            msgCont.setAttribute('id', 'chart-message');
            //Set style for message container
            msgCont.style.cssText = 'width : 300px; min-height: 50px; color : #cc0000; font-family : Arial, Helvetica, sans-serif; font-size : 14px; margin-top : 10px;';
            // Append container div to page
            args.container.parentNode.insertBefore(msgCont, args.container.nextSibling);
        },
        'realtimeUpdateError': function(evt, args) {
            document.getElementById('chart-message').innerHTML = "<b>Error Occured !</b><br>Status Code : " + args.httpStatus;
            evt.sender.stopUpdate();
        }
    }
}
