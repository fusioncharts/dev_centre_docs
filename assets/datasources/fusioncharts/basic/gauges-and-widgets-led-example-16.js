{
    type: 'hled',
    renderAt: 'chart-container',
    width: '300',
    height: '200',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Battery Charge Remaining",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": "%",
            "valueFontSize": "12",
            "origW": "300",
            "origH": "200",
            "ledGap": "0",
            "showhovereffect": "1",
            //Single Fill color
            "useSameFillColor": "1",
            "useSameFillBgColor": "1",

            "chartBottomMargin": "20",
            "dataStreamURL": "/dummy-url-led-data.php",
            "refreshInterval": "5",
            "theme": "fusion"
        },
        //All annotations are grouped under this element
        "annotations": {
            "showbelow": "1",
            "groups": [{
                //Each group needs a unique ID
                "id": "indicator",
                "items": [

                    {
                        "id": "bgRectAngle",
                        //Polygon item
                        "type": "rectangle",
                        "radius": "5",
                        "fillColor": "#333333",
                        "x": "$gaugeEndX - 10",
                        "tox": "$gaugeEndX + 12",
                        "y": "$gaugeCenterY-20",
                        "toy": "$gaugeCenterY + 20"
                    }
                ]
            }]

        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "45",
                "code": "#e44a00"
            }, {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }]
        },
        "value": "50"
    },
    events: {
        'beforeRender': function(evt, args) {
            // Create container div for data table
            var msgCont = document.createElement('div');
            msgCont.setAttribute('id', 'chart-message');
            //Set style for message container
            msgCont.style.cssText = 'width : 300px; min-height: 50px; color : #cc0000; font-family : Arial, Helvetica, sans-serif; font-size : 14px; margin-top : 10px;';
            // Append container div to page
            args.container.parentNode.insertBefore(msgCont, args.container.nextSibling);
        },
        'realtimeUpdateError': function(evt, args) {
            document.getElementById('chart-message').innerHTML = "<b>Error Occured !</b><br>Status Code : " + args.httpStatus;
            evt.sender.stopUpdate();
        }
    }

}
