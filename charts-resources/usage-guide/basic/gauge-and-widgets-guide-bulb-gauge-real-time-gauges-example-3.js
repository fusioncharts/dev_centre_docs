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

            "dataStreamURL": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-bulb-gauge-real-time-gauges-php-1.php",
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
        "value": "-5"
    },
    "events": {
        'beforeRender': function(evt, args) {
            var chargePercent = 50,
                startStopBtn = document.getElementById('btnSU');

            if (!startStopBtn) {
                // Create button if it does not already exist
                startStopBtn = document.createElement('input');
                startStopBtn.setAttribute('id', 'btnSU');
                startStopBtn.setAttribute('type', 'button');
                startStopBtn.setAttribute('value', 'Stop Update');

                // Append button right after chart-container
                args.container.parentNode.insertBefore(startStopBtn, args.container.nextSibling);

            }

            startStopBtn.onclick = function() {
                var btnState = document.getElementById('btnSU').value;
                if (btnState === 'Stop Update') {
                    startStopBtn.setAttribute('value', 'Restart Update');
                    evt.sender.stopUpdate();
                } else {
                    startStopBtn.setAttribute('value', 'Stop Update');
                    evt.sender.restartUpdate();
                }
            };
        }
    }
}
