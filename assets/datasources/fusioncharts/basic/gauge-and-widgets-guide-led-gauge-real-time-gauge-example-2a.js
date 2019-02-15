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
            "dataStreamURL": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-led-gauge-real-time-gauges-php-2.php",
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
    "events": {
        'beforeRender': function(evt, args) {
            var chargePercent = 50,
                flag = 0,
                count = 0,
                startStopBtn = document.getElementById('btnSU');

            if (!startStopBtn) {
                // Create button if it does not already exist
                startStopBtn = document.createElement('input');
                startStopBtn.setAttribute('id', 'btnSU');
                startStopBtn.setAttribute('type', 'button');
                startStopBtn.setAttribute('value', 'Stop Update');

                // Append button right after chart-container
                args.container.parentNode.insertBefore(startStopBtn, args.container.nextSibling);

            }

            startStopBtn.onclick = function() {
                var btnState = document.getElementById('btnSU').value;
                if (btnState === 'Stop Update') {
                    startStopBtn.setAttribute('value', 'Restart Update');
                    evt.sender.stopUpdate();
                } else {
                    startStopBtn.setAttribute('value', 'Stop Update');
                    evt.sender.restartUpdate();
                }
            };
        }
    }

}
