{
    id: "stackRealTimeChart",
    type: 'realtimestackedarea',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
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
            "showRealTimeValue": "0",
            "theme": "fusion"
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
        }, {
            "seriesName": "food.hsm.com",
            "data": [{
                "value": "20"
            }]
        }]
    },
    "events": {
        "initialized": function(e) {
            function addLeadingZero(num) {
                return (num <= 9) ? ("0" + num) : num;
            }

            function updateData() {
                // Get reference to the chart using its ID
                var chartRef = FusionCharts("stackRealTimeChart"),
                    // We need to create a querystring format incremental update, containing
                    // label in hh:mm:ss format
                    // and a value (random).
                    currDate = new Date(),
                    label = addLeadingZero(currDate.getHours()) + ":" +
                    addLeadingZero(currDate.getMinutes()) + ":" +
                    addLeadingZero(currDate.getSeconds()),
                    // Get random number between 20 & 38 - rounded to 2 decimal places
                    randomValue = parseInt(Math.random() * 15) + 10,
                    randomValue2 = parseInt(Math.random() * 20) + 15,
                    // Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + randomValue + "|" + randomValue2;
                // Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }

            e.sender.interval = setInterval(function() {
                updateData();
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
