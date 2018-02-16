{
    type: 'realtimestackedarea',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Live Visitors on Site",
            "subCaption": "Updated every 5 seconds",
            "xAxisName": "Time",
            "yAxisName": "No. of visitors",
            "numberSuffix": "s",
            "refreshinterval": "5",
            "yaxisminvalue": "0",
            "yaxismaxvalue": "60",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "showValues": "0",
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
            "usePlotGradientColor": "0",
            "showPlotBorder": "0",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
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
                "label": "Day Start"
            }]
        }],
        "dataset": [{
                "seriesName": "clothing.hsm.com",
                "data": [{
                    "value": "12"
                }]
            },
            {
                "seriesName": "food.hsm.com",
                "data": [{
                    "value": "20"
                }]
            }
        ]
    },
    "events": {
        "initialized": function(e) {
			var chartRef = e.sender;
            function addLeadingZero(num) {
                return (num <= 9) ? ("0" + num) : num;
            }

            function updateData() {
                // Get reference to the chart using its ID
                // var chartRef = FusionCharts("stackRealTimeChart"),
                    // We need to create a querystring format incremental update, containing
                    // label in hh:mm:ss format
                    // and a value (random).
                    currDate = new Date(),
                    label = addLeadingZero(currDate.getHours()) + ":" +
                    addLeadingZero(currDate.getMinutes()) + ":" +
                    addLeadingZero(currDate.getSeconds()),
                    // Get random number between 20 & 38 - rounded to 2 decimal places
                    randomValue = parseInt(Math.random() *
                        15) + 10,
                    randomValue2 = parseInt(Math.random() *
                        20) + 15,
                    // Build Data String in format &label=...&value=...
                    strData = "&label=" + label +
                    "&value=" +
                    randomValue + "|" + randomValue2;
                // Feed it to chart.
                chartRef.feedData(strData);
            }

            var myVar = setInterval(function() {
                updateData();
            }, 5000);
        }
    }
}