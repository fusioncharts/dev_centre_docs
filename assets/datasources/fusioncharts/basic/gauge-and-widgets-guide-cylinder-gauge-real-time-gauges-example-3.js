{
    type: 'cylinder',
    renderAt: 'chart-container',
    width: '250',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Diesel Level in Generator",
            "subcaption": "Bakersfield Central",
            "lowerLimit": "0",
            "upperLimit": "120",
            "dataStreamUrl": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-cylinder-gauge-real-time-gauges-php-2.php",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showValue": "1",
            "chartBottomMargin": "45",
            "refreshInterval": "2",
        },
        "value": "110"

    },
    events: {
        "beforeRender": function(evt, args) {
            // creating div for controllers
            var controllers = document.createElement('div'),
                isStopped = false,
                gaugeRef = evt.sender;
            controllers.setAttribute('id', 'controllers');

            // Create checkbox inside div
            controllers.innerHTML = '<input type="button" value="Stop Update" id="toggleBtn" style="margin-left:5px;margin-top:5px;font-size:13px;padding:2px;" />';
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

            // setting css styles for controllers div
            controllers.style.cssText = "text-align: center;";
            var btn = document.getElementById('toggleBtn'),
                startStopUpdate = function() {
                    if (!isStopped) {
                        isStopped = true
                        btn.value = "Restart Update";
                        gaugeRef.stopUpdate();
                    } else {
                        isStopped = false;
                        btn.value = "Stop Update";
                        gaugeRef.restartUpdate();
                    }
                }

            btn.addEventListener && btn.addEventListener("click", startStopUpdate);

        }
    }
}
