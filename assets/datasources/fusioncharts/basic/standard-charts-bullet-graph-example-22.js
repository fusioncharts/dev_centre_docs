{
    type: 'hbullet',
    renderAt: 'chart-container',
    width: '500',
    height: '100',
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
            "theme": "fusion",
            "dataStreamURL": "/dummy-url-abcdefg.php",
            "refreshInterval": "5"
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
