{
    type: 'realtimeline',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
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
            "theme": "fint"
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
                // Feed it to chart.
                chartRef.feedData(strData);
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
