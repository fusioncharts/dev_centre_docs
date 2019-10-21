{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "subcaptionFontBold": "0",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "20",
            "captionPadding": "10",
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
            "pointer": [{
                "bgColor": "#333333",
                "bgAlpha": "80",
                "showValue": "0",
                "value": "75",
                "tooltext": "Garden Groove Harbour $value%"
            }]
        }
    },
    events: {
        'beforeRender': function(evt, args) {
            // creating div for controllers
            var controllers = document.createElement('div'),
                gaugeRef = evt.sender;
            controllers.setAttribute('id', 'controllers');

            // Create radio buttons inside div
            controllers.innerHTML = '<input type="radio" name="btnGrp" id="onTopBtn" value="top" checked >Pointer on Top</input><input type="radio" name="btnGrp" id="atBottomBtn" value="bottom" >Pointer at bottom</input>';

            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

            var canvasBtn = document.getElementById('canvasBtn'),
                chartBtn = document.getElementById('chartBtn'),
                //Set the attribute based on which radio is selected
                changeAlignment = function(evt, obj) {
                    (document.getElementById('onTopBtn').checked) ?
                        gaugeRef.setChartAttribute('pointerOnTop', 1) :
                        gaugeRef.setChartAttribute('pointerOnTop', 0);
                };

            //Listen to radio button events
            if (onTopBtn.addEventListener && atBottomBtn.addEventListener) {
                onTopBtn.addEventListener("click", changeAlignment);
                atBottomBtn.addEventListener("click", changeAlignment);
            }
        }
    }
}
