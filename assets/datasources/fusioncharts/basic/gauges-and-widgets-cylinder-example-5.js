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
            "showValue": "0",
            "chartBottomMargin": "25"
        },
        "value": "75"
    },
    events: {
        'beforeRender': function(evt, args) {
            // creating div for controllers
            var controllers = document.createElement('div'),
                gaugeRef = evt.sender;

            controllers.setAttribute('id', 'controllers');
            // Create radio buttons inside div
            controllers.innerHTML = '<input type="checkbox" id="showVal">Show Value ?</input>';

            // set css style for controllers div
            controllers.style.cssText = 'position:inherit;text-align: center;';

            // set css styles for "label" elements in controllers div
            var labels = controllers.getElementsByTagName('label');
            for (var i = 0; i < labels.length; i++) {
                labels[i].style.cssText = 'padding: 0 5px;';
            }

            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

            var showValueCB = document.getElementById('showVal'),
                //Function to show/hide value
                showValue = function(evt, obj) {
                    //Using showValue attribute to show hide gauge value
                    if (showVal.checked) {
                        gaugeRef.setChartAttribute('showValue', 1);
                    } else {
                        gaugeRef.setChartAttribute('showValue', 0);
                    }
                };

            //Set event listener for check box
            showValueCB.addEventListener && showValueCB.addEventListener("click", showValue);
        }
    }
}
