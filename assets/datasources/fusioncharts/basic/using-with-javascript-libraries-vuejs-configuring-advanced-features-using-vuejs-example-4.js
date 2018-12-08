{
    type: 'column2d',
    width: '600',
    height: '400',
    dataFormat: 'json',
    renderAt: "chart-container",
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue for FY2013-2014",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Quarter",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "canvasBorderAlpha": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placevaluesInside": "1",
            "rotatevalues": "1",
            "valueFontColor": "#ffffff",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14"
        },
        "data": [{
            "label": "Q1",
            "value": "420000"
        }, {
            "label": "Q2",
            "value": "810000"
        }, {
            "label": "Q3",
            "value": "720000"
        }, {
            "label": "Q4",
            "value": "550000"
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
