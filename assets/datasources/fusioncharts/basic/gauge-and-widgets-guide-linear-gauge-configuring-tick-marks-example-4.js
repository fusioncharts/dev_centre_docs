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
            //To set the number of major tickmarks
            "majorTMNumber": "9",
            //To set the number of minor tick marks
            //in between major tick marks
            "minorTMNumber": "5",
            //To adjust the tickmark and values automatically
            //to a best feasible value
            "adjustTM": "1",
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
            // Create radio buttons inside div
            controllers.innerHTML = '<label><input type="checkbox" id="tMarkCB" checked />Adjust Tickmark? </label>';

            // set css style for controllers div
            controllers.style.cssText = 'position:inherit;text-align: center;';

            // set css styles for "label" elements in controllers div
            var labels = controllers.getElementsByTagName('label');
            for (var i = 0; i < labels.length; i++) {
                labels[i].style.cssText = 'padding: 0 5px;';
            }

            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

            var adjustTickCB = document.getElementById('tMarkCB'),
                //Function to show/hide labels
                adjustTicks = function(evt, obj) {
                    //Using adjustTM attribute to adjust the
                    //number of major ticks to a best feasible value
                    if (evt.currentTarget.checked) {
                        gaugeRef.setChartAttribute('adjustTM', 1);
                    } else {
                        gaugeRef.setChartAttribute('adjustTM', 0);
                    }
                };

            //Set event listener for check boxes
            adjustTickCB.addEventListener && adjustTickCB.addEventListener("click", adjustTicks);
        }
    }
}
