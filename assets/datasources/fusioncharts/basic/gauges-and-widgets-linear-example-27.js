{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '170',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "40",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "showValue": "0",
            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "75"
            }]
        },
        "annotations": {
            "origw": "400",
            "origh": "190",
            "autoscale": "1",
            "groups": [{
                "id": "range",
                "items": [{
                    "id": "rangeBg",
                    "type": "rectangle",
                    "x": "$chartCenterX-70",
                    "y": "$chartEndY-35",
                    "tox": "$chartCenterX +70",
                    "toy": "$chartEndY-15",
                    "fillcolor": "#ff6650"
                }, {
                    "id": "rangeText",
                    "type": "Text",
                    "fontSize": "11",
                    "fillcolor": "#000000",
                    "text": "Currently Utilizing 75%",
                    "x": "$chartCenterX",
                    "y": "$chartEndY-25"
                }]
            }]
        }
    },
   "events": {
      "rendered": function(evtObj, argObj) {
         var chartRef = evtObj.sender;
         chartRef.intervalVar = setInterval(function () {
            var prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);
            chartRef.feedData("value=" + prcnt);
         }, 5000);
      },
      "realTimeUpdateComplete": function(evt, arg) {
         var annotations = evt.sender.annotations,
            percentValue = evt.sender.getData(1),
            colorVal = "#" + ((percentValue > 70) ? "ff6650" : "f6bd11");
         annotations && annotations.update('rangeText', {
            "text": "Currently Utilizing " + percentValue + "%"
         });
         annotations && annotations.update('rangeBg', {
            "fillcolor": colorVal
         });

      },
      "disposed": function(evtObj, argObj) {
         clearInterval(evtObj.sender.intervalVar);
      }
   }
}
