{
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Footfalls",
            "showrealtimevalue": "1",
            "borderAlpha": "0",
            "yaxismaxvalue": "40",
            "numdisplaysets": "10",
            "usePlotGradientColor": "0",
            "canvasBorderAlpha": "20",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "plotBorderAlpha": "0",
            "bgAlpha": "0",
            "showValues": "0",
            "numbersuffix": " Customers",
            "showlabels": "1",
            "animation": "0",
            "showRealTimeValue": "0",
            "useMessageLog": "1",
            "showRTmenuItem": "1"
        },
        "categories": [{
            "category": [{
                "label": "8 mins ago"
            }, {
                "label": "7 mins ago"
            }, {
                "label": "6 mins ago"
            }, {
                "label": "5 mins ago"
            }, {
                "label": "4 mins ago"
            }, {
                "label": "3 mins ago"
            }, {
                "label": "2 mins ago"
            }, {
                "label": "1 min ago"
            }]
        }],
        "dataset": [{
            "seriesname": "Footfall",
            "alpha": "100",
            "anchoralpha": "60",
            "anchorRadius": "4",
            "anchorBgColor": "#",
            "linethickness": "2",
            "data": [{
                "value": "5"
            }, {
                "value": "17"
            }, {
                "value": "10"
            }, {
                "value": "15"
            }, {
                "value": "5"
            }, {
                "value": "12"
            }, {
                "value": "8"
            }, {
                "value": "10"
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
                    //Get random number between 5 & 20 - rounded
                    footfall = Math.round(Math.random() * 15) + 5,
                    //Error message added if the footfall is less than 7
                    strData = "&label=" + label + "&value=" + footfall + "&msgTitle=Footfall at &msgText=" + label + " hrs is " + footfall + " Customers" + ((footfall < 9) ? " WARNING !!!&msgType=ERROR" : "");

                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }, 5000);
        },
        'disposed': function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }

    }
}
