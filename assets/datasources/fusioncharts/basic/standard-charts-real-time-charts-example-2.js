{
    type: 'realtimearea',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
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
            "showRealTimeValue": "0"
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
        "rendered": function(e) {
           var chartRef = e.sender;

           function addLeadingZero(num) {
              return (num <= 9) ? ("0" + num) : num;
           }

           function updateData() {
              // We need to create a querystring format incremental update, containing
              // label in hh:mm:ss format
              // and a value (random).
              var currDate = new Date(),
                 label = addLeadingZero(currDate.getHours()) + ":" +
                    addLeadingZero(currDate.getMinutes()) + ":" +
                    addLeadingZero(currDate.getSeconds()),
                 // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
                 randomValue = Math.floor(Math.random() *
                    50) / 100 + 35.25,
                 // Build Data String in format &label=...&value=...
                 strData = "&label=" + label +
                    "&value=" +
                    randomValue;
              // Feed it to chart.
              chartRef.feedData && chartRef.feedData(strData);
           }

           chartRef.chartInterval = setInterval(function () {
              updateData();
           }, 5000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
