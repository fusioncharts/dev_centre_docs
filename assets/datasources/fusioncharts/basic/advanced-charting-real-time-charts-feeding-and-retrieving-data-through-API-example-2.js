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
    "events": {
        "beforeRender": function(evtObj, argObj) {

            var controllers = document.createElement('div');
            // Create  div
            controllers.innerHTML = '<div><input type="button" style="margin-left:5px;margin-top:5px" value="Get Data" id="getdata_btn" style="margin-left:5px;margin-top:5px" /></div><div id="tableView" style="width:275px;height:75px;overflow-y:auto; display:none;border: none;margin: 3px"></div>';
            //Display container div and write table
            argObj.container.parentNode.insertBefore(controllers, argObj.container.nextSibling);
        },
        "rendered": function(evtObj, argObj) {

            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                return (time < 10) ? (time = "0" + time) : (time = time);
            }

            function showData() {
                //Retrieving the data
                var dataArr = evtObj.sender.getData(),
                    str = "",
                    valueStyle = "padding: 3px",
                    fontStyle = "font-weight: bold;font-size: 14px";
                //Creating the table format
                str += '<table border="1" cellpadding="1" cellspacing="0" bordercolor="#cccccc" width="100%">';
                str += '    <tr>';
                str += '        <td width="50%" style="' + fontStyle + valueStyle + '">Time</td>';
                str += '        <td width="50%" style="' + fontStyle + valueStyle + '">Customers</td>';
                str += '    </tr>';

                //Preparing html string to create the table with data
                for (var i = 0; i < dataArr.length; i++) {
                    if (dataArr[i][0] !== null) {
                        str += '    <tr>';
                        str += '        <td width="50%" style="' + valueStyle + '">' + dataArr[i][0] + '</td>';
                        str += '        <td width="50%" style="' + valueStyle + '">' + dataArr[i][1] + '</td>';
                        str += '    </tr>';
                    }
                }
                str += '</table>';
                //Showing the table
                document.getElementById("tableView").setAttribute('style', '"display", "block"');
                //Adding html string in the div container
                document.getElementById("tableView").innerHTML = str;
            }
            evtObj.sender.chartInterval = setInterval(function() {
                //Get reference to the chart using its ID
                var chartRef = evtObj.sender;
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

            //Getting the data on button click and diplaying the same
            document.getElementById("getdata_btn").addEventListener("click", function() {
                showData();
            });

        },
        "disposed": function(evt, args) {
            clearInterval(evt.sender.chartInterval);
        }
    }

}
