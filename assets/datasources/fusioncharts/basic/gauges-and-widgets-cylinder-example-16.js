{
    type: 'cylinder',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '250',
    height: '350',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Diesel Level in Generator",
            "subcaption": "Bakersfield Central",
            "lowerLimit": "0",
            "upperLimit": "120",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showValue": "0",
            "chartBottomMargin": "60",
            "dataStreamURL": "/dummyErrorURL/cylinderData.php"
        },
        "value": "110"
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
            controllers.style.cssText = "text-align: center;min-height: 50px;color : #cc0000;font-family : Arial, Helvetica, sans-serif;font-size : 14px;margin-top : 10px;";
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
        },

        //Using real time update error event
        "realtimeUpdateError": function(evtObj, argObj) {
            var msgDiv = document.getElementById('chart-message');
            msgDiv.innerHTML = "<b>Error Occured !</b><br> Status Code : " + argObj.httpStatus;
        }
    }
}
