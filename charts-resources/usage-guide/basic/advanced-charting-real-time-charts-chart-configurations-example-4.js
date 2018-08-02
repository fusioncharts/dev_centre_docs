{
    type: 'realtimeline',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart",
            "subCaption": "Real-time Stock Price monitor",
            "yAxisName": "Price",
            "xAxisName": "Time",
            "yaxisminvalue": "30",
            "yaxismaxvalue": "35",
            "numDisplaySets": "10",
            "showLegend": "0",
            "showValues": "0",
            "labelDisplay": "rotate",
            "numberPrefix": "$",
            "showRealTimeValue": "1",
            "xAxisNamePadding": "30",
            "theme": "fusion",
            "realTimeValuePadding": "50"

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
                "value": "32"
            }]
        }]
    },
    events: {
        "rendered": function(evt, args) {
            //Get reference to the chart using its ID
            var chartRef = evt.sender,
                //Format minutes, seconds by adding 0 prefix accordingly
                formatTime = function(time) {
                    (time < 10) ? (time = "0" + time) : (time = time);
                    return time;
                };
                chartRef.chartInterval = setInterval(function() {
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    var currDate = new Date();
                    var label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds());
                    //Get random number between 30 & 35 - rounded to 2 decimal places
                    var randomValue = (Math.random() * 5) + 30;
                    //Build Data String in format &label=...&value=...
                    var strData = "&label=" + label + "&value=" + randomValue;
                    //Feed it to chart.
                    chartRef.feedData && chartRef.feedData(strData);
                }, 5000);
        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
