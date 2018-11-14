{
    type: 'column2d',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue for FY2013-2014",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Quarter",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "showValues": "0",
            "canvasBorderThickness": "3",
            "theme": "fusion"
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
                controllers.innerHTML = "<div id='messageView' style=';background-color:#0075C2;font-size: 16px;color:#ffffff;display: inline-block; margin-left: 230px;padding: 10px;border-radius:2px;'>Selected Value: none </div>";
              //Display container div
                args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
                
                $(args.container).bind('fusionchartsdataplotclick', function (event, args) {
                    var dispBox = document.getElementById("messageView");
                    dispBox.innerHTML ="Selected Value: $"+(args.value)/1000 + "K";
                });
        }
    }
}
