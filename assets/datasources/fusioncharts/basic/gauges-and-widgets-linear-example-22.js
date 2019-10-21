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
            "subcaption": "Transaction Server vs Web Server",
            "subcaptionFontBold": "0",
            "subCaptionFontSize": "12",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "valueAbovePointer": "1",
            "chartBottomMargin": "20",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
                "code": "#6baa01"
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
                "code": "#f8bd19"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
                "code": "#e44a00"
            }]
        },
        "pointers": {
            //Multiple pointers defined here
            "pointer": [{
                "value": "75",
                "bgColor": "#999999",
                "bgAlpha": "80",
                "tooltext": "Transaction Server: $value%"
            }, {
                "value": "92",
                "bgColor": "#444444",
                "bgAlpha": "80",
                "tooltext": "Web Server: $value%"
            }]
        }
    },
    "events": {
        "rendered": function(evtObj, argObj) {
           var chartRef = evtObj.sender;
           chartRef.intervalVar = setInterval(function () {
              //Updating widget with randomly generated values
              //Range 60-70%
              var ggPrcnt = 60 + parseInt(Math.floor(Math.random() * 10), 10),
                 //Range 75-85%
                 bcPrcnt = 75 + parseInt(Math.floor(Math.random() * 10), 10);
              chartRef.feedData("value=" + ggPrcnt + "|" + bcPrcnt);
           }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.intervalVar);
        }
    }
}
