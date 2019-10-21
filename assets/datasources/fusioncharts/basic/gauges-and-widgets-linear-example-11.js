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
        }
    },
    events: {
        'beforeRender': function(event, args) {
            // creating div for controllers
            var controllers = document.createElement('div'),
                gaugeRef = event.sender;

            controllers.setAttribute('id', 'controllers');

            // Create checkbox inside div
            controllers.innerHTML = '<input type="checkbox" id="tmCB" checked >Show Tick Mark?</input><br><input type="checkbox" id="tvCB" checked >Show Tick Value?</input>';

            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

            // setting css styles for controllers div
            controllers.style.cssText = "margin-top: 10px;width: 400px;text-align: center;";

            var tickmarkCB = document.getElementById('tmCB'),
                tickvalueCB = document.getElementById('tvCB'),

                //Function to show/hide tick mark
                showTickMark = function(evt, obj) {
                    //Using showTickMarks attribute to show/hide ticks
                    (evt.currentTarget.checked) ? gaugeRef.setChartAttribute('showTickMarks', 1) :
                        gaugeRef.setChartAttribute('showTickMarks', 0);

                },

                //Function to show/hide tick value
                showTickValue = function(evt, obj) {
                    //Using showTickValues attribute to show/hide tick value
                    (evt.currentTarget.checked) ? gaugeRef.setChartAttribute('showTickValues', 1) :
                        gaugeRef.setChartAttribute('showTickValues', 0);
                }

            //Set event listener for check boxes
            tickmarkCB.addEventListener && tickmarkCB.addEventListener("click", showTickMark);
            tickvalueCB.addEventListener && tickvalueCB.addEventListener("click", showTickValue);
        }
    }
}
