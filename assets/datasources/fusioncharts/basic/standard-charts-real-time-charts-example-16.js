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
            "messageGoesToJS": "1",
            "messageJSHandler": "displayData",
            "messagePassAllToJS": "1",
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
        }],
        "alerts": {
            "alert": [{
                "minvalue": "15",
                "maxvalue": "20",
                "action": "callJS",
                "param": ""
            }]
        }
    },
    events: {
        'beforerender': function(evt, args) {
            var controllers = document.createElement('div');
            controllers.setAttribute('id', 'tableView');
            // Create  div
            controllers.innerHTML = '<div id="details" style=" width:260px;height:80px;border: 2px solid #ddd;margin-left: 160px"> <div style ="font-family:Arial;font-size: 15px;text-align:center;font-weight: bold;height:25px;border-bottom: 2px solid #ddd">Current Status</div><div id="data" style="font-family:Arial;font-size: 15px;text-align:center;font-weight: bold;padding-top:10px;color: #008ee4"></div></div>';
            //Display container div and write table
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
        },
        'rendered': function(evt, args) {
            //JS Message handler function, displaying the current data in a div
            window.displayData = function(strMsgId, strMsgTitle, strMsgText, strMsgType) {
                var div = document.getElementById('data');
                div.innerHTML = strMsgTitle + strMsgText;
            }
            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }

            evt.sender.chartInterval = setInterval(function() {
                var currDate,
                    label,
                    footfall,
                    strData,
                    //Get reference to the chart using its ID
                    chartRef = evt.sender;
                //We need to create a querystring format incremental update, containing
                //label in hh:mm:ss format
                //and a value (random).
                currDate = new Date();
                label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds());
                //Get random number between 5 & 20 - rounded
                footfall = Math.round(Math.random() * 15) + 5;
                strData = "&label=" + label + "&value=" + footfall + "&msgTitle=Footfall at " + label + "&msgText= is " + footfall + " Customers ";
                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);

            }, 5000);
        },
        'disposed': function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
