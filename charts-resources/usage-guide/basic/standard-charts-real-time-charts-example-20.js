{
    type: 'realtimeline',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart",
            "subCaption": "Real-time Stock Price monitor",
            "showrealtimevalue": "1",
            "paletteColors": "#008ee4",
            "refreshinterval": "2",
            "borderAlpha": "0",
            "yaxismaxvalue": "100",
            "numdisplaysets": "10",
            "showLegend": "0",
            "canvasBorderAlpha": "20",
            "labeldisplay": "rotate",
            "bgAlpha": "0",
            "showValues": "0",
            "numberPrefix": "$",
            "showlabels": "1",
            "animation": "0",
            "showRealTimeValue": "0"

        },
        "categories": [{
            "category": [{
                "label": "Start"
            }]
        }],
        "dataset": [{
            "seriesname": "Harry's SuperMart",
            "alpha": "100",
            "data": [{
                "value": "20"
            }]
        }]
    },
    events: {
        'rendered': function(evt, args) {
            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }

            evt.sender.chartInterval = setInterval(function() {
                //Get reference to the chart using its ID
                var chartRef = evt.sender,
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                    //Get random number between 30 & 35 - rounded to 2 decimal places
                    randomValue = Math.floor(Math.random() * 500) / 100 + 30,
                    //Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + randomValue;
                //Feed it to chart.
                chartRef.feedData(strData);

            }, 5000);

        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
