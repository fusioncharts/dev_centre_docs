{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var controllers = document.createElement('div');
            controllers.innerHTML = "Hover on the plot to see the value along with the label";
            controllers.setAttribute('id', 'indicatorDiv');
            controllers.style.padding = "10px";
            controllers.style.background = "rgb(245, 242, 240)";
            controllers.style.textAlign = "center";
            controllers.style.fontFamily = ""
            args.container.appendChild(controllers);
        },

        "dataplotRollOver": function(evt, data) {
            var txt = "You are currently hovering over " + data.categoryLabel + " whose value is " + data.value;
               document.getElementById("indicatorDiv").innerHTML = txt;

        },
        "dataplotRollOut": function(evt, data) {
            document.getElementById("indicatorDiv").innerHTML = "Hover on the plot to see the value along with the label";
        }
    }
}