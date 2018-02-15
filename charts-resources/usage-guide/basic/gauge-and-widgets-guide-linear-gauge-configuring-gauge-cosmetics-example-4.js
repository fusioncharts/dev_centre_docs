{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "caption": "Server CPU Utilization",
            "subcaptionFontBold": "0",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "20",
            "captionPadding": "10",
            "valueAbovePointer": "0",
            "valueFontSize": "13",
            "valueFontBold": "0",
            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low"
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High"
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
            var radiobuttons = document.createElement('div');
            radiobuttons.setAttribute('id', 'radio-container');
            radiobuttons.innerHTML = '<input type="checkbox" id="showCB" name="padding" value="1" checked >Show Value</input><br><input type="checkbox" id="positionCB" name="padding" value="2">Place Value Above Pointer</input>';

            radiobuttons.style.cssText = 'margin-top:10px; width:400px;';

            args.container.parentNode.insertBefore(radiobuttons, args.container.nextSibling);

            var showVal = document.getElementById('showCB'),
                placeVal = document.getElementById('positionCB'),
                cpuGauge = event.sender;

            // Function to show hide value
            function showValue() {
                //Using showValue attribute to show hide pointer value
                if (showVal.checked) {
                    cpuGauge.setChartAttribute('showValue', 1);
                    //placeVal.disabled = false;
                } else {
                    cpuGauge.setChartAttribute('showValue', 0);
                    //placeVal.disabled = true;
                }
            }

            //Function to change value pointer
            function setPosition() {
                //Using valueAbovePointer attribute to toggle position of pointer value
                (placeVal.checked) ? cpuGauge.setChartAttribute('valueAbovePointer', 1) :
                    cpuGauge.setChartAttribute('valueAbovePointer', 0);
            }

            showVal.addEventListener && showVal.addEventListener("click", showValue);
            placeVal.addEventListener && placeVal.addEventListener("click", setPosition);
        }
    }
}
