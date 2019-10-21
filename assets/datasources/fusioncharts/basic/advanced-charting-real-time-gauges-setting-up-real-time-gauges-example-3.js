{
    type: 'thermometer',
    renderAt: 'chart-container',
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
            "dataStreamURL": "https://static.fusioncharts.com/sample/dev2.0/advanced-charting-real-time-gauges-setting-up-real-time-gauges-php-2.php",
            "refreshInterval": "5",
            "theme": "fusion"
        },
        "value": "-6"
    },
    "events": {
        'beforeRender': function(evt, args) {
            // creating div for controllers
            var controllers = document.createElement('div');

            // Create radio buttons inside div
            controllers.innerHTML = '<input type="button" value="Stop Update" id="btnSU" style="margin-left:5px;padding-botom:15px;"/><div id="buttonDiv" style="padding-top: 13px;"></div>';
            // set css style for controllers div
            controllers.style.cssText = '';
            args.container.appendChild(controllers);
            controllers.setAttribute('id', 'controllers');
        },
        "renderComplete": function(evtObj, argObj) {
            var flag = 0,
               chartRef = evtObj.sender;

            function stopStartUpdate() {
                if (flag === 0) {
                    document.getElementById('btnSU').value = "Restart Update";
                    chartRef.stopUpdate();
                    flag = 1;
                } else {
                    document.getElementById('btnSU').value = "Stop Update";
                    chartRef.restartUpdate();
                    flag = 0;
                }
            }
            document.getElementById("btnSU").addEventListener("click", stopStartUpdate);
        }
    }
}
