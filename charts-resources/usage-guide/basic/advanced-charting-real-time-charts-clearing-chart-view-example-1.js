{
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart",
            "subCaption": "Online Purchase",
            "yaxismaxvalue": "10",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "showValues": "0",
            "numbersuffix": " Transactions",
            "showRealTimeValue": "0",
            "theme": "fusion"
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
                "value": "5",
                "toolText": "5 Customers on Start"
            }]
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var counter = 1,
                chartRef = evt.sender,
                formatTime = function(time) {
                    (time < 10) ? (time = "0" + time) : (time = time);
                    return time;
                },
                updateData = function() {
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    var currDate = new Date(),
                        label = (formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds())),
                        //Get random number between 1 & 5 - rounded
                        footfall = (Math.round(Math.random() * 4) + 1),
                        strData = "&label=" + label + "&value=" + footfall;
                    //Adding a vLine
                    if ((counter % 10) === 1) {
                        strData += "&clear=1";
                    }
                    //Feed it to chart.
                    chartRef.feedData && chartRef.feedData(strData);
                    //Increasing counter
                    counter += 1;
                };
                evt.sender.chartInterval = setInterval(function() {
                    updateData();
                }, 10000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
