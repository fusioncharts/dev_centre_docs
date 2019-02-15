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
        "renderComplete": function(evt, arg) {
            var chargePercent = 50,
                flag = 0,
                count = 0;
                evt.sender.chargeInterval = setInterval(function() {

                    if (flag === 0) {
                        count++;
                        if (count > 2) {
                            chargePercent -= 5;
                            count = 0;
                        }

                        if (chargePercent === 5) {
                            flag = 1;
                        }
                    } else {
                        chargePercent += 5;
                        if (chargePercent === 100) {
                            flag = 0;
                        }

                    }
                    evt.sender.feedData("&value=" + chargePercent);
                }, 2000);
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chargeInterval);
        }
    }

}
