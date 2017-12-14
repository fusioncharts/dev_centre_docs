{
    type: 'bulb',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
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
            //Cosmetics
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "showborder": "0",
            "bgcolor": "#FFFFFF",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Problem detected!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Alert!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.interval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                evtObj.sender.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
