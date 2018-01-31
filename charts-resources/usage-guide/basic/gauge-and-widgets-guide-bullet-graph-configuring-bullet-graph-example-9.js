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
            "chartBottomMargin": "25"
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
        beforeRender: function(event, args) {
            var container = document.createElement("div"),
                sender = event.sender;

            container.setAttribute("id", "checkbox-container");
            container.innerHTML = '<input type="checkbox" id="showVal" checked>Show Value?</input>';

            args.container.parentNode.insertBefore(container, args.container.nextSibling);

            var showValueCB = document.getElementById("showVal");

            //Function to show/hide value
            function showValue(evt, obj) {
                //Using showValue attribute to show hide chart value
                if (showVal.checked) {
                    sender.setChartAttribute('showValue', 1);
                } else {
                    sender.setChartAttribute('showValue', 0);
                }
            }

            //Set event listener for check boxes
            showValueCB.addEventListener && showValueCB.addEventListener("click", showValue);
        }
    }
}
