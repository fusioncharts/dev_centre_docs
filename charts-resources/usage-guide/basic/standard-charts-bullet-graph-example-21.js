{
    type: 'hbullet',
    width: '450',
    height: '85',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Alisia",
            "subcaption": "Dotts",
            "captionFontSize": "11.5",
            "subcaptionFontSize": "11.5",
            "subcaptionFontBold": "1",
            "captionPadding": "5",
            "chartBottomMargin": "20",
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
            "theme": "zune"
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
        "target": "10000",
        "annotations": {
            "origw": "400",
            "origh": "190",
            "autoscale": "1",
            "groups": [{
                "id": "range",
                "items": [{
                    "id": "rangeBg",
                    "type": "rectangle",
                    "x": "$canvasCenterX + 10",
                    "y": "$chartEndY",
                    "tox": "$canvasCenterX + 100",
                    "toy": "$chartEndY-20",
                    "fillcolor": "#444444"
                }, {
                    "id": "rangeText",
                    "type": "Text",
                    "fontSize": "11",
                    "fillcolor": "#ffffff",
                    "text": "Sales : $3555",
                    "x": "$chartCenterX",
                    "y": "$chartEndY-10"
                }]
            }]
        }
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var i = 3555,
                chartRef = evtObj.sender;
            chartRef.intervalVar = setInterval(function() {
                i = i + parseInt(Math.floor(Math.random() * 200), 10);
                if (i < 11750) {
                    chartRef.feedData && chartRef.feedData("value=" + i + "&target=10000");
                } else {
                    clearInterval(chartRef.intervalVar);
                }
            }, 10000);
        },
        "realTimeUpdateComplete": function(evt, arg) {
            var annotations = evt.sender.annotations,
                dataVal = evt.sender.getData();
            annotations && annotations.update('rangeText', {
                "text": "Sales: " + "$" + dataVal
            });
        }
    }
}
