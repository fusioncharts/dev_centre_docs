{
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '210',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Footfalls",
            "showrealtimevalue": "1",
            "paletteColors": "#008ee4,#9b59b6",
            "borderAlpha": "0",
            "yaxismaxvalue": "20",
            "numdisplaysets": "10",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "0",
            "canvasBorderAlpha": "20",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "bgAlpha": "0",
            "showValues": "0",
            "numbersuffix": " Customers",
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
            "seriesname": "Footfall",
            "alpha": "100",
            "data": [{
                "value": "5"
            }]
        }]
    },
    events: {
        'beforeRender': function(evt, arg) {
            var controllers = document.createElement('div');
            controllers.setAttribute('id', 'tableCont');
            controllers.innerHTML = "<div id='tableView' style='width:275px;margin-left:150px;height:110px;overflow-y:auto;display:none;'></div>";
            //Display container div and write table
            arg.container.parentNode.insertBefore(controllers, arg.container.nextSibling);
        },
        'realtimeUpdateComplete': function(event, parameter) {

            var dataArr = event && event.sender.getData(),
                dataTable = document.getElementById("tableView"),
                str = "";
            //Creating the table format
            str += '<table border="1" cellpadding="1" cellspacing="0" borderolor="#cccccc" width="100%">';
            str += '    <tr>';
            str += '        <th width="50%" style="padding:3px;font-weight:bold;font-size: 14px;">Time</th>';
            str += '        <th width="50%" style="padding:3px;font-weight:bold;font-size: 14px;">Customers</th>';
            str += '    </tr>';

            //Preparing html string to create the table with data
            for (var i = 0; i < dataArr.length; i++) {
                if (dataArr[i][0] !== null) {
                    str += '    <tr>';
                    str += '        <td width="50%" style="padding:3px">' + dataArr[i][0] + '</td>';
                    str += '        <td width="50%" style="padding:3px">' + dataArr[i][1] + '</td>';
                    str += '    </tr>';
                }
            }
            str += '</table>';
            //Showing the table
            dataTable.style.display = "block";
            //Adding html string in the div container
            dataTable.innerHTML = str;
        },
        'rendered': function(evt, arg) {
            var dataTable = document.getElementById("tableView");

            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }

            function updateData() {
                //Get reference to the chart using its ID
                var chartRef = evt && evt.sender,
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                    //Get random number between 5 & 20 - rounded
                    footfall = Math.round(Math.random() * 15) + 5,
                    strData = "&label=" + label + "&value=" + footfall;
                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }
            evt.sender.chartInterval = setInterval(function() {
                updateData();

            }, 5000);
        },
        'disposed': function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }

}
