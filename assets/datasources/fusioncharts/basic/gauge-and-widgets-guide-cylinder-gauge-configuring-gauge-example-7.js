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
            "majorTMNumber": "8",
            "minorTMNumber": "2",
            //To adjust the tickmark and values automatically
            //to a best feasible value
            "adjustTM": "0"
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
            controllers.innerHTML = '<input type="checkbox" id="tMarkCB">Adjust Tickmark ?</input>';
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

            // setting css styles for controllers div
            controllers.style.cssText = "margin-top: 10px;text-align: center;";

            var adjustTickCB = document.getElementById('tMarkCB'),

                //Function to show/hide labels
                adjustTicks = function(evt, obj) {
                    //Using adjustTM attribute to adjust the
                    //number of major ticks to a best feasible value
                    if (adjustTickCB.checked) {
                        gaugeRef.setChartAttribute('adjustTM', 1);
                    } else {
                        gaugeRef.setChartAttribute('adjustTM', 0);
                    }
                }
                //Set event listener for check boxes
            adjustTickCB.addEventListener && adjustTickCB.addEventListener("click", adjustTicks);
        }

    }
}
