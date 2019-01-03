{
    type: 'hlineargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '170',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Server CPU Utilization",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "20",
            "valueFontSize": "11",
            "valueFontBold": "0",
            "gaugeFillMix": "{light-10},{light-70},{dark-10}",
            "gaugeFillRatio": "40,20,40"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "75"
            }]
        }
    },
    "events": {
        'beforeRender': function(evt, args) {
            // creating div for controllers
            var controllers = document.createElement('div');

            // Create radio buttons inside div
            controllers.innerHTML = '<input type="button" value="Get Data" id="getdata_btn" style="margin-left:5px;margin-top:5px;"/><div id="tableView" style="margin: 3px;padding:5px;float: left;"></div>';
            // set css style for controllers div
            controllers.style.cssText = '';
            args.container.appendChild(controllers);
            controllers.setAttribute('id', 'controllers');
        },
        "renderComplete": function(evtObj, argObj) {
        	var chartRef = evtObj.sender;
            chartRef.intervalVar = setInterval(function() {
                var prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);
                chartRef.feedData && chartRef.feedData("value=" + prcnt);
            }, 5000);

            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }

            function showData() {
                //Retrieving the data
                var dataVal = chartRef.getData(1),
                    str = "",
                    currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds());
                //Creating the table format
                str += '<table border="1" cellpadding="1" cellspacing="0" bordercolor="#cccccc" width="320px">';
                str += '    <tr>';
                str += '        <td width="50%" style="font-weight: bold;font-size: 14px;padding: 3px;">Current Time</td>';
                str += '        <td width="50%" style="font-weight: bold;font-size: 14px;padding: 3px;">Current Utilization</td>';
                str += '    </tr>';
                str += '    <tr>';
                str += '        <td width="50%" style="padding: 3px;" align="center">' + label + '</td>';
                str += '        <td width="50%" style="padding: 3px;" align="center">' + dataVal + '</td>';
                str += '    </tr>';
                //Preparing html string to create the table with data

                str += '</table>';
                //Showing the table
                document.getElementById("tableView").style.cssText = 'overflow-y:auto;display:block;margin-top:5px';
                document.getElementById("tableView").innerHTML = str;
            }

            document.getElementById("getdata_btn").addEventListener("click", showData);

        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.intervalVar);
        }
    }
}
