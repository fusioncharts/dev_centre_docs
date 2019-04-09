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
            "numberSuffix": "Â°C",
            "decimals": "1",
            "showhovereffect": "1",
            "thmFillColor": "#008ee4",
            "showGaugeBorder": "1",
            "gaugeBorderColor": "#008ee4",
            "gaugeBorderThickness": "2",
            "gaugeBorderAlpha": "30",
            "thmOriginX": "100",
            "dataStreamURL": "/dummy-url-thermometerData.php",
            "refreshInterval": "5",
            "theme": "fusion"
        },
        "value": "-6"
    },
    "events": {
        "beforeRender": function(evtObj, argObj) {
            // creating div for controllers
            var controllers = document.createElement('div');

            // Create radio buttons inside div
            controllers.innerHTML = '<div id="chart-message"></div>';
            // set css style for controllers div
            controllers.style.cssText = 'text-align: center;min-height: 50px;color : #cc0000;font-family : Arial, Helvetica, sans-serif;font-size : 14px;margin-top : 10px';
            argObj.container.appendChild(controllers);
            controllers.setAttribute('id', 'controllers');
        },
        "realtimeUpdateError": function(evtObj, argObj) {
            document.getElementById('chart-message').innerHTML = "<b>Error: Problem updating the gauge!</b>";
        }
    }
}
