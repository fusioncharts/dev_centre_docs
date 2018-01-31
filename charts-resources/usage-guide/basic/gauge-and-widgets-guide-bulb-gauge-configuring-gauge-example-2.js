{
    type: 'bulb',
    renderAt: 'chart-container',
    id: 'myChart',
    width: '300',
    height: '300',
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

            //Border configuration
            "showGaugeBorder": "1",
            "gaugeBorderThickness": "3",
            "gaugeBorderAlpha": "100",
            /* Darker border color of initial fill */
            "gaugeBorderColor": "{dark-30}",


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
    }
}
