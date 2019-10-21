{
    type: 'thermometer',
    renderAt: 'chart-container',
    id: 'myThm-5',
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
            "dataStreamURL": "/dummyUrl.php",
            "refreshInterval": "5",
            "theme": "fusion"
        },
        "value": "-6"
    },
    "events": {
        'beforeRender': function(evt, args) {
            // creating div for controllers
            var controllers = document.createElement('div'),
                container = document.getElementById('chart-container');
            // Create checkbox inside div
            controllers.innerHTML = '<div id="chart-message"></div>';
            controllers.setAttribute('id', 'controllers');
            // setting css styles for controllers div
            controllers.style.cssText = "min-height: 50px;color : #cc0000;font-family : Arial, Helvetica, sans-serif;font-size : 14px;margin-top : 10px;text-align: center;";
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
        },
        "realtimeUpdateError": function(evtObj, argObj) {

            document.getElementById('chart-message').innerHTML = "<b>Error Occured !</b><br> Status Code : " + argObj.httpStatus;
        }
    }
}
