{
    type: 'bulb',
    renderAt: 'chart-container',
    width: '300',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "numberSuffix": "°C",
            "showshadow": "0",
            "showvalue": "1",

            "valueFontSize": "16",

            //Placing value inside the gauge
            "placeValuesInside": "1",

            //Theme
            "theme": "fint"


        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Mission control,{br}we have a situation!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Something is just  not right!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well ahoy!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.chartInterval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                FusionCharts("myChart").feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.chartInterval);
        }
    }
}
