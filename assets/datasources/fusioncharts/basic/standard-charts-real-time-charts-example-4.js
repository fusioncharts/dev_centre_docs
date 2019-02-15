{
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '250',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Online Transactions per 10 seconds",
            "subCaption": "HarrysSupermart.com",
            "showrealtimevalue": "1",
            "yaxismaxvalue": "10",
            "numdisplaysets": "10",

            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "showValues": "0",
            "numbersuffix": " Transactions",
            "showlabels": "1",
            "showRealTimeValue": "0",

            //Cosmetics
            "paletteColors": "#0075c2,#1aaf5d",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "showBorder": "0",
            "bgColor": "#ffffff",
            "showShadow": "0",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "usePlotGradientColor": "0",
            "showplotborder": "0",
            "valueFontColor": "#ffffff",
            "placeValuesInside": "1",
            "rotateValues": "1",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
            "legendBgAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666"
        },
        "categories": [{
            "category": [{
                "label": "Start"
            }]
        }],
        "dataset": [{
            "seriesname": "",
            "alpha": "100",
            "data": [{
                "value": "3"
            }]
        }]
    },
    "events": {
        "initialized": function(evt, arg) {
			var chartRef = evt.sender;
            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }
            //Update Data method
            function updateData() {
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    var currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                    //Get random number between 1 & 5 - rounded
                    transactions = Math.round(Math.random() * 4) + 1,
                    strData = "&label=" + label + "&value=" + transactions;
                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }
            //Interval
            var myVar = setInterval(function() {
                updateData();

            }, 10000);
        }
    }
}
