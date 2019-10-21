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
            "ticksOnRight": "0"
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
            controllers.innerHTML = '<input type="radio" name="btnGrp" id="rightRB">Ticks on Right</input><input type="radio" name="btnGrp" id="leftRB" checked>Ticks on Left</input>';

            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

            // setting css styles for controllers div
            controllers.style.cssText = "margin-top: 10px;text-align: center;";

            var rightRBtn = document.getElementById('rightRB'),
                leftRBtn = document.getElementById('leftRB'),

                //Function to set the ticksOnRight attribute value based on which radio is selected
                changePosition = function(evt, obj) {
                    (document.getElementById('rightRB').checked) ?
                        gaugeRef.setChartAttribute('ticksOnRight', 1) :
                        gaugeRef.setChartAttribute('ticksOnRight', 0);
                }

            //Set event listener for check boxes and radio buttons
            rightRBtn.addEventListener && rightRBtn.addEventListener("click", changePosition);
            leftRBtn.addEventListener && leftRBtn.addEventListener("click", changePosition);
        }
    }
}
