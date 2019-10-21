{
    type: 'realtimeline',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Real-time stock price monitor",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Time",
            "yAxisName": "Stock Price",
            "numberPrefix": "$",
            "refreshinterval": "5",
            "yaxisminvalue": "35",
            "yaxismaxvalue": "36",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "showValues": "0",
            "showRealTimeValue": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Day Start"
            }]
        }],
        "dataset": [{
            "data": [{
                "value": "35.27"
            }]
        }]
    },
    "events": {
        "initialized": function(e) {
            var flag = 0;

            function addLeadingZero(num) {
                return (num <= 9) ? ("0" + num) : num;

            }

            function updateData() {
                // Get reference to the chart using its ID
                var chartRef = e.sender,
                    // We need to create a querystring format incremental update, containing
                    // label in hh:mm:ss format
                    // and a value (random).
                    currDate = new Date(),
                    label = addLeadingZero(currDate.getHours()) + ":" +
                    addLeadingZero(currDate.getMinutes()) + ":" +
                    addLeadingZero(currDate.getSeconds()),
                    // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
                    randomValue = Math.floor(Math.random() * 50) / 100 + 35.25,

                    // Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + randomValue;
                flag = flag + 1;
                if (flag % 7 === 0) {
                    strData = "&label=" + label + "&value=" + randomValue + "&vline=1&vLineLabel=Price Checked&vLineColor=#666666&vLineThickness=2&vLineDashed=1";
                }
                // Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }

            e.sender.chartInterval = setInterval(function() {
                updateData();
            }, 5000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
