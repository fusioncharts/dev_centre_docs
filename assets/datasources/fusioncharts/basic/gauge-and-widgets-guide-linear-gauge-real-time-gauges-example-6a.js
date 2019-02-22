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
            "subcaption": "food.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "40",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "dataStreamUrl": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-linear-gauge-real-time-gauges-php-2.php",
            "refreshInterval": "10"
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
            "pointer": [{
                "value": "75"
            }]
        }

    },
    "events": {
      'beforeRender': function(evtObj, argObj) {
         var controllers = document.createElement('div'),
            btn = document.createElement('button'),
            chartRef = evtObj.sender;

         btn.style.cssText = "background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px; margin-top: 10px;";
         btn.innerText = "Stop Update";
         controllers.appendChild(btn);
         argObj.container.appendChild(controllers);
         chartRef.toggleBtn = btn;
      },
      'renderComplete': function(evtObj, argObj) {

         var isStopped = false,
            chartRef = evtObj.sender;

         var startStopUpdate = function () {
            if (!isStopped) {
               isStopped = true;
               chartRef.toggleBtn.innerText = "Restart Update";
               chartRef.stopUpdate();
            } else {
               isStopped = false;
               chartRef.toggleBtn.innerText = "Stop Update";
               chartRef.restartUpdate();
            }
         }

         chartRef.toggleBtn.onclick = startStopUpdate;
      }
   }
}
