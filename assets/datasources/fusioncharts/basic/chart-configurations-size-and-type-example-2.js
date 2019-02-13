{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    insertMode: "prepend",
    dataSource: {
        "chart": {
            "caption": "Monthly revenue",
            "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    },

    "events": {
        "beforeRender": function(evt, args) {
            var controllers = evt.sender._controllers,
                radio = [],
                radElem,
                val;

            if (!controllers) {
                controllers = evt.sender._controllers = document.createElement("div");
                controllers.innerHTML = "<form><label style='display:inline;margin-bottom:0;'><input name='chart-type' id='change-chart-type-line' type='radio' value='line' /> Line chart</label>&nbsp;&nbsp;<input name='chart-type' id='change-chart-type-bar' type='radio' value='bar2d' />&nbsp;<label for='change-chart-type-bar' style='display:inline;margin-bottom:0;'>Bar chart</label>&nbsp;&nbsp;<input name='chart-type' id='change-chart-type-column' type='radio' value='column2d' checked='true' />&nbsp;<label for='change-chart-type-column' style='display:inline;margin-bottom:0;'>Column chart</label></form>";
                controllers.style.cssText = "text-align: Center;"
                var clearText = args.container.firstChild;
                while (clearText) {
                    ((clearText.nodeType === 3) || (clearText.nodeName === "#text")) && clearText.parentNode.removeChild(clearText);
                    clearText = clearText.nextSibling;
                }
                args.container.appendChild(controllers);

                radio = controllers.getElementsByTagName('input');
                for (var i = 0; i < radio.length; i++) {
                    radElem = radio[i];
                    if (radElem.type === 'radio') {
                        radElem.onchange = function() {
                            val = this.getAttribute('value');
                            val && evt.sender.chartType(val);
                        };
                    }
                }
            }
        }
    }
}
