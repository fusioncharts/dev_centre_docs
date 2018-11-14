{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    id: 'cs-linear-gauge-26',
    width: '400',
    height: '170',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "subcaption": "food.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "40",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "dataStreamUrl": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-linear-gauge-real-time-gauges-php-2.php",
            "refreshInterval": "10"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
                "code": "#6baa01"
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
                "code": "#f8bd19"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
                "code": "#e44a00"
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "75"
            }]
        }

    },
    "events": {
        'beforeRender': function(evtObj, argObj) {
            // creating div for controllers
            var controllers = document.createElement('div');
            // Create radio buttons inside div
            controllers.innerHTML = '<input type="button" value="Stop Update" id="toggleBtn" style="margin-left:5px;margin-top:5px;font-size:13px;padding:2px;" />';
            argObj.container.appendChild(controllers);
            controllers.setAttribute('id', 'controllers');
        },
        'renderComplete': function(evtObj, argObj) {

            var isStopped = false,
                startStopUpdate = function() {
                    if (!isStopped) {
                        isStopped = true;
                        document.getElementById("toggleBtn").value = "Restart Update";
                        FusionCharts.items["cs-linear-gauge-26"].stopUpdate();
                    } else {
                        isStopped = false;
                        document.getElementById("toggleBtn").value = "Stop Update";
                        FusionCharts.items["cs-linear-gauge-26"].restartUpdate();
                    }
                }

            document.getElementById("toggleBtn").addEventListener("click", startStopUpdate);
        }
    }
}
