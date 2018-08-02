{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Global Population",
            "theme": "fusion",
            "formatNumberScale": "0",
            "numberSuffix": "M",
            "showLabels": "1",
            "showToolTip": "0"
        },
        "colorrange": {
            "color": [{
                "minvalue": "0",
                "maxvalue": "100",
                "code": "#D0DFA3",
                "displayValue": "< 100M"
            }, {
                "minvalue": "100",
                "maxvalue": "500",
                "code": "#B0BF92",
                "displayValue": "100-500M"
            }, {
                "minvalue": "500",
                "maxvalue": "1000",
                "code": "#91AF64",
                "displayValue": "500M-1B"
            }, {
                "minvalue": "1000",
                "maxvalue": "5000",
                "code": "#A9FF8D",
                "displayValue": "> 1B"
            }]
        },
        "data": [{
            "id": "NA",
            "value": "515"
        }, {
            "id": "SA",
            "value": "373"
        }, {
            "id": "AS",
            "value": "3875"
        }, {
            "id": "EU",
            "value": "727"
        }, {
            "id": "AF",
            "value": "885"
        }, {
            "id": "AU",
            "value": "32"
        }],

    },
    "events": {
        "beforeRender": function(evt, args) {
            var textArea = document.createElement("textarea");
            textArea.setAttribute("id", "message");
            textArea.setAttribute("rows", "4");
            textArea.setAttribute("cols", "54");
            textArea.style.cssText = "margin-left:15px;text-align:center;display:block;";
            textArea.innerHTML = "Total World Population 6.3 Billion";
            args.container.appendChild(textArea);
        },
        "entityRollover": function(evt, data) {
            document.getElementById('message').value = "" + data.label + "\n" + "Population: " + data.value + "M";
        },
        "entityRollout": function(evt, data) {
            document.getElementById('message').value =
                "Total World Population - 6.3 Billion";
        },
        "entityClick": function(evt, data) {
            alert("You have clicked on " + data.label + ".");
        },
    }
}
