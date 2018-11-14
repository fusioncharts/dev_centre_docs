{
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
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
                "value": "3"
            }]
        }]
    },
    "events": {
        "initialized": function(evt, arg) {
            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }
            //Update Data method

            function updateData() {

                //Get reference to the chart using its ID
                var chartRef = evt.sender,
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                    //Get random number between 1 & 5 - rounded
                    transactions = Math.round(Math.random() * 4) + 1,
                    strData = "&label=" + label + "&value=" + transactions;
                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }
            //Interval
            evt.sender.interval = setInterval(function() {
                updateData();

            }, 10000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
