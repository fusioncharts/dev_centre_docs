{
    type: 'hbullet',
    renderAt: 'chart-container',
    width: '450',
    height: '72',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Alisia",
            "subcaption": "Dotts",
            "captionFontSize": "11.5",
            "subcaptionFontSize": "11.5",
            "subcaptionFontBold": "1",
            "captionPadding": "5",
            "animation": "1",
            "upperLimit": "12000",
            "numberprefix": "$",
            "targetFillPercent": "75",
            "targetColor": "#444444",
            "plotFillPercent": "40",
            "plotFillColor": "#444444",
            "formatNumberScale": "1",
            "baseFontColor": "595959",
            "plotToolText": "<div>Sales : <b>$$value</b></div>",
            "targettooltext": "Target : <b>$$targetvalue</b>",
            "theme": "zune",
            "dataStreamURL": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-bullet-chart-real-time-bullet-chart-php-2.php",
            "refreshInterval": "10"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "6000",
                "code": "#999498"
            }, {
                "minValue": "6000",
                "maxValue": "9000",
                "code": "#c5c2c6"
            }, {
                "minValue": "9000",
                "maxValue": "12000",
                "code": "#e1dee2"
            }]
        },
        "value": "3555",
        "target": "10000"
    },
    "events": {
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