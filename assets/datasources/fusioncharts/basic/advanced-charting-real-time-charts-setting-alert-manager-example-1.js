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
            "showRealTimeValue": "0"
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
                "minvalue": "10",
                "maxvalue": "20",
                "action": "callJS",
                "param": "showAlert('Footfall exceeded average');"
            }]
        }
    },
    events: {
        'beforeRender': function(evt, args) {
            var controllers = document.createElement('div');
            controllers.setAttribute('id', 'tableView');
            controllers.style.cssText = "";
            //Display container div and write table
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
        },
        'rendered': function(evt, args) {
            window.showAlert = function(msg) {
                var dispCon = document.getElementById("tableView"),
                    str = "",
                    tdStyle = "border:1px solid;border-color:#cccccc;width:50%;font-weight: bold;font-size: 14px;padding: 3px;text-align:center",
                    tdStyle2 = "border:1px solid;border-color:#cccccc;width:50%;color:#aa0000;font-weight: bold;font-size: 14px;padding: 3px;text-align:center";

                //Creating the table format
                str += '<table cellpadding="1" width="275px" cellspacing="0">';
                str += '    <tr>';
                str += '        <td style="' + tdStyle2 + '">ALERT</td>';
                str += '    </tr>';
                str += '    <tr>';
                str += '        <td  style="' + tdStyle + '">' + msg + '</td>';
                str += '    </tr>';
                str += '</table>';
                //Showing the table
                dispCon.style.cssText = "display:block";
                //Adding html string in the div container
                dispCon.innerHTML = str;
            }
            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }
            evt.sender.chartInterval = setInterval(function() {

                //Get reference to the chart using its ID
                var chartRef = evt.sender,
                    dispCon = document.getElementById("tableView");
                //Hiding the table
                dispCon && (dispCon.style.cssText = "display:none");
                //We need to create a querystring format incremental update, containing
                //label in hh:mm:ss format
                //and a value (random).
                var currDate = new Date();
                var label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds());
                //Get random number between 5 & 20 - rounded
                var footfall = Math.round(Math.random() * 15) + 5;
                var strData = "&label=" + label + "&value=" + footfall;

                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);

            }, 5000);
        },
        'disposed': function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
