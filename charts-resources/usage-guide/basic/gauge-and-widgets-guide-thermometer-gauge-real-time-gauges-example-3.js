{
    type: 'thermometer',
    renderAt: 'chart-container',
    id: 'myThm-3',
    width: '240',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature Monitor",
            "subcaption": " Central cold store",
            "lowerLimit": "-10",
            "upperLimit": "0",
            "numberSuffix": "°C",
            "decimals": "1",
            "showhovereffect": "1",
            "thmFillColor": "#008ee4",
            "showGaugeBorder": "1",
            "gaugeBorderColor": "#008ee4",
            "gaugeBorderThickness": "2",
            "gaugeBorderAlpha": "30",
            "thmOriginX": "100",
            "dataStreamURL": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-thermometer-gauge-real-time-gauges-php-2.php",
            "refreshInterval": "5",
            "theme": "fint"
        },
        "value": "-6"
    },
    "events": {
        'beforeRender': function(evt, args) {
            // creating div for controllers
            var controllers = document.createElement('div');

            // Create button inside div
            controllers.innerHTML = '<input id="btnSU" type="submit" name="Submit" value="Stop Update" >';
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
            controllers.setAttribute('id', 'controllers');
        },
        "renderComplete": function(evtObj, argObj) {
            var flag = 0,
                btn = document.getElementById("btnSU"),
                startStopUpdate = function() {
                    if (flag === 0) {
                        btn.value = "Restart Update";
                        evtObj.sender.stopUpdate();
                        flag = 1;
                    } else {
                        btn.value = "Stop Update";
                        evtObj.sender.restartUpdate();
                        flag = 0;
                    }

                };
            btn.addEventListener && btn.addEventListener("click", startStopUpdate);

        }


    }
}
