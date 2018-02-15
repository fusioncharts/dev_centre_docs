{
    type: 'column2d',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue for FY2013-2014",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Quarter",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "showValues": "0",
            "theme": "fint"
        },
        "data": [{
            "label": "Q1",
            "value": "420000"
        }, {
            "label": "Q2",
            "value": "810000"
        }, {
            "label": "Q3",
            "value": "720000"
        }, {
            "label": "Q4",
            "value": "550000"
        }]
    },
    events: {
        'beforeRender': function(evt, args) {
            var controllers = document.createElement('div');
            controllers.setAttribute('id', 'tableCont');
            controllers.innerHTML = "<div id='messageView' style=';background-color:#ffffff;font-size: 16px;color:#000000;padding: 3px; margin-left: 130px;margin-top: 10px;'>Selected Value: </div>";
            //Display container div
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
        },
        'dataplotclick': function(evt, args) {
            var dispBox = document.getElementById("messageView");
            dispBox.innerHTML = "Selected Value: $" + (args.value) / 1000 + "K";
        }
    }
}
