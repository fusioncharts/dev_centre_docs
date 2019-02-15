{
    type: 'cylinder',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '250',
    height: '350',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Diesel Level in Generator",
            "subcaption": "Bakersfield Central",
            "lowerLimit": "0",
            "upperLimit": "120",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showValue": "1",
            "chartBottomMargin": "25",
            "ticksOnRight": "1"
        },
        "value": "75"
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
            controllers.style.cssText = "margin-top: 10px;text-align: center;";

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
