{
    type: 'column2d',
    renderAt: 'chart-container',
    width: 500,
    height: 300,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue",
            "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Amount ($)",
            "numberPrefix": "$",
            "theme": "fint"
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
            var controllers = document.createElement("div"),
                labels;
            controllers.innerHTML = "<label for='set-dimensions-width'>Width</label>&nbsp;<input id='set-dimensions-width' class='input-small' type='text' value='550' />&nbsp;&nbsp;<label for='set-dimensions-height'>Height</label>&nbsp;<input id='set-dimensions-height' class='input-small' type='text' value='350' />&nbsp;&nbsp;<input id='set-dimensions-change' class='resizebtn' type='Button' value='Resize' />";
            controllers.style.cssText = "position: inherit;left: 10px;font-family: Verdana, sans;font-size: 13px;font-style: normal;font-weight: bold;";
            controllers.getElements
            args.container.appendChild(controllers);
            labels = controllers.getElementsByTagName("label");
            for (var i in labels) {
                labels[i].style.cssText = "display: inline;"
            }
        },
        "renderComplete": function(evt, args) {
            var setDimensionOnClick = function() {
                    var w = parseInt(document.getElementById("set-dimensions-width").value, 10) || 500,
                        h = parseInt(document.getElementById("set-dimensions-height").value, 10) || 300;
                    if (w && h) {
                        FusionCharts.items[evt.sender.id].resizeTo(w, h);
                    }
                },
                changeBtn = document.getElementById("set-dimensions-change");

            if (changeBtn.addEventListener) {
                changeBtn.addEventListener("click", setDimensionOnClick);
            } else {
                changeBtn.onclick && changeBtn.onclick(setDimensionOnClick);
            }
        }

    }
}
