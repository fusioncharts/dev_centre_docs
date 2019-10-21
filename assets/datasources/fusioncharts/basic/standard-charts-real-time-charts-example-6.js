{
    type: 'realtimelinedy',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataSource: {
        "chart": {
            "caption": "Stock Price Monitor",
            "subCaption": "Harry's Supermart",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "subcaptionFontBold": "0",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "bgColor": "#ffffff",
            "canvasBgColor": "#ffffff",
            "showBorder": "0",
            "showShadow": "0",
            "showCanvasBorder": "0",
            "showRealTimeValue": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "numberprefix": "$",
            "setadaptiveymin": "1",
            "setadaptivesymin": "1",
            "xaxisname": "Time",
            "labeldisplay": "Rotate",
            "slantlabels": "1",
            "pyaxisminvalue": "35",
            "pyaxismaxvalue": "36",
            "syaxisminvalue": "10000",
            "syaxismaxvalue": "12000",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "showAlternateHGridColor": "0",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "numDisplaySets": "10"
        },
        "categories": [{
            "category": [{
                "label": "Day Start"
            }]
        }],
        "dataset": [{
                "seriesname": "HRYS Price",
                "showvalues": "0",
                "data": [{
                    "value": "35.1"
                }]
            },
            {
                "seriesname": "NYSE Index",
                "showvalues": "0",
                "parentyaxis": "S",
                "data": [{
                    "value": "10962.87"
                }]
            }
        ],
        "trendlines": [{
            "line": [{
                    "parentyaxis": "P",
                    "startvalue": "35.1",
                    "displayvalue": "Open",
                    "thickness": "1",
                    "color": "#0075c2",
                    "dashed": "1"
                },
                {
                    "parentyaxis": "S",
                    "startvalue": "10962.87",
                    "displayvalue": "Open",
                    "thickness": "1",
                    "color": "#1aaf5d",
                    "dashed": "1"
                }
            ]
        }]
    },
    "events": {
        "rendered": function(e) {
			var chartRef = e.sender;
            function formatTime(num) {
                return (num <= 9) ? ("0" + num) : num;
            }

            function updateData() {
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    var currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                    //Get random number between 35.25 & 30.75 - rounded to 2 decimal places
                    hrys = Math.floor(Math.random() *
                        50) / 100 + 35.25,
                    //Get random number between 10962.87 & 11052.87
                    nyse = Math.floor(Math.random() *
                        9000) / 100 + 10962.87,
                    //Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + hrys + "|" + nyse;
                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }
            chartRef.chartInterval = setInterval(function() {
                updateData();
            }, 5000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
