{
    type: 'hbullet',
    renderAt: 'chart-container',
    width: '500',
    height: '90',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "lowerLimit": "0",
            "subCaptionFontSize": "11",
            "upperLimit": "120",
            "caption": "Last Month Revenue",
            "subcaption": "Actual vs Target (Bakersfield Central)",
            "numberPrefix": "$",
            "numberSuffix": "K",
            "chartBottomMargin": "25",
            "captionPadding": "7"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "25"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19",
                "alpha": "25"
            }, {
                "minValue": "75",
                "maxValue": "120",
                "code": "#6baa01",
                "alpha": "25"
            }]
        },
        "value": "82",
        "target": "90"
    },

    events: {
        'beforeRender': function(event, args) {
            var container = document.createElement("div"),
                sender = event.sender;

            container.setAttribute("id", "checkbox-container");
            container.innerHTML = '<input type="checkbox" id="tmCB" checked>Show Tick Mark?</input><input type="checkbox" id="tvCB" checked>Show Tick Value?</input><input type="checkbox" id="tpCB">Tick On Top?</input>';

            args.container.parentNode.insertBefore(container, args.container.nextSibling);

            var tickmarkCB = document.getElementById("tmCB"),
                tickvalueCB = document.getElementById("tvCB"),
                tickposCB = document.getElementById("tpCB");

            //Function to show/hide tick mark
            function showTickMark(evt, obj) {
                //Using showTickMarks attribute to show/hide ticks
                (tickmarkCB.checked) ? sender.setChartAttribute('showTickMarks', 1) :
                    sender.setChartAttribute('showTickMarks', 0);

            }

            //Function to show/hide tick value
            function showTickValue(evt, obj) {
                //Using showTickValues attribute to show/hide tick value
                (tickvalueCB.checked) ? sender.setChartAttribute('showTickValues', 1) :
                    sender.setChartAttribute('showTickValues', 0);
            }

            //Function to show/hide tick value
            function toggleTickPos(evt, obj) {
                //Using showTickValues attribute to set tick position
                (tickposCB.checked) ? sender.setChartAttribute('ticksBelowGraph', 0) :
                    sender.setChartAttribute('ticksBelowGraph', 1);
            }

            //Set event listener for check boxes and radio buttons
            tickmarkCB.addEventListener && tickmarkCB.addEventListener("click", showTickMark);
            tickvalueCB.addEventListener && tickvalueCB.addEventListener("click", showTickValue);
            tickposCB.addEventListener && tickposCB.addEventListener("click", toggleTickPos);
        }
    }
}
