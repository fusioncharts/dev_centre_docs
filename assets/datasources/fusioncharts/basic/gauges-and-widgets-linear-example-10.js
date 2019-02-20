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
            "showGaugeLabels": "1",
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
            controllers.innerHTML = '<input type="checkbox" id="showLbl" name="padding" value="1" checked >Show Labels?</input>';

            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

            var showLabelCB = document.getElementById('showLbl'),
                showLabels = function(evt, obj) {
                    //Using showGaugeLabels attribute to show hide gauge labels
                    if (evt.currentTarget.checked) {
                        gaugeRef.setChartAttribute('showGaugeLabels', 1);
                    } else {
                        gaugeRef.setChartAttribute('showGaugeLabels', 0);
                    }
                };

            //Set event listener for check boxes
            showLabelCB.addEventListener && showLabelCB.addEventListener("click", showLabels);
        }
    }
}
