{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "exportEnabled": "1",
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

    events: {
        "beforeRender": function(eventObj, eventArgs) {
            var container = eventArgs.container, // access container
                // create a button
                exportButton = document.createElement("input");

            exportButton.setAttribute("type", "button");
            exportButton.setAttribute("value", "Export Chart");

            // set an id to the button for a lookup later
            exportButton.setAttribute("id", eventObj.sender.id + "-export-button");

            // disable the button
            exportButton.setAttribute("disabled", "disabled");

            // add button after chart
            container.parentNode.insertBefore(exportButton,
                container.nextSibling);
        },

        "renderComplete": function(eventObj) {
            var exportButton = document.getElementById(eventObj.sender.id + "-export-button");

            // enable the button
            exportButton.removeAttribute("disabled");

            // call export on chart when button is clicked
            exportButton.onclick = function() {
                eventObj.sender.exportChart();
            };
        }
    }
}
