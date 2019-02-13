{
    type: 'hled',
    renderAt: 'chart-container',
    width: '400',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Fuel Level Indicator",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": "%",
            "valueFontSize": "12",
            "showhovereffect": "1",
            "origW": "400",
            "origH": "150",
            "ledSize": "3",
            "ledGap": "2",
            "manageResize": "1",
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
                        "alpha": "90",
                        "radius": "1",
                        "fillColor": "#6baa01",
                        "x": "$gaugeCenterX - 20",
                        "tox": "$gaugeCenterX + 20",
                        "y": "$gaugeEndY + 25",
                        "toy": "$gaugeEndY + 45"
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
        "value": "92"
    },
    "events": {
        "drawComplete": function(evt, arg) {
            var i,
                //Annotation
                annotations = evt.sender.annotations,
                //Value
                val = evt.sender.getData(),
                //Color Range Array
                crArr = evt.sender.args.dataSource.colorRange.color;

            for (var i = crArr.length - 1; i >= 0; i--) {
                //When value falls within the color range
                if (val >= crArr[i].minValue && val <= crArr[i].maxValue) {
                    annotations.update('bgRectAngle', {
                        "fillColor": crArr[i].code
                    });
                }
            }

        }
    }

}
