{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
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
            var rdoCont = document.createElement('div'),
                str = 'Change Caption Alignment:<input id="left" type="radio" name="captionalignment" > Left </input><input id="center" type="radio" name="captionalignment" checked="1"> Center </input><input id="right" type="radio" name="captionalignment"> Right </input>';
            rdoCont.setAttribute('id', 'rdoCont');
            rdoCont.style.cssText = "width: 600px; margin: 10px; margin-left: 0px;";

            rdoCont.innerHTML = str;

            //Display container div and write table
            args.container.parentNode.insertBefore(rdoCont, args.container.nextSibling);
        },
        "renderComplete": function(evt, args) {
            var val,
                radElem,
                chartRef = evt.sender,
                radio = document.getElementsByTagName('input');
            for (var i = 0; i < radio.length; i++) {
                radElem = radio[i];
                if (radElem.type === 'radio') {
                    radElem.onclick = function() {
                        val = this.getAttribute('id');
                        val && chartRef.setChartAttribute({
                            "captionAlignment": val
                        });
                    };
                }
            }
        }
    }
}

