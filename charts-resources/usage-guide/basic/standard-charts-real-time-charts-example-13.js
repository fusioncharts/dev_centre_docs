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
            "dataStreamURL": "../../../resources/php/advanced-charting-real-time-charts-adding-data-stamp-php-1.php",
            "refreshInterval": "5",
            "updateInterval": "15",
            "yaxisminvalue": "30",
            "yaxismaxvalue": "35",
            "showLegend": "0",
            "labelDisplay": "rotate",
            "showValues": "0",
            "numberSuffix": " %",
            "showRealTimeValue": "0",
            "dataStamp": "13:43:45",
            "theme": "fint"
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
                "value": "32.5"
            }]
        }]
    },
    events: {
        "beforeRender": function(evtObj, argObj) {
            var chartRef = evtObj.sender;

            function formatTime(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }

            function getCurrentTime() {
                var today = new Date(),
                    hour = today.getHours(),
                    min = today.getMinutes(),
                    sec = today.getSeconds(),
                    time;
                // Insert a zero in front of numbers<10
                min = formatTime(min);
                sec = formatTime(sec);
                time = hour + ":" + min + ":" + sec;
                return time;
            }
            //Setting the dataStamp to current time for initial dataStamp value
            chartRef.setChartAttribute('dataStamp', getCurrentTime());

        }
    }
}
