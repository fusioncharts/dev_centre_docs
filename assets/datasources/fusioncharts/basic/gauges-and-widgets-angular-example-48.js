{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Server CPU Utilization",
            "subcaption": " at akme.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showValue": "1",
            "valueBelowPivot": "1",
            "tickValueDistance": "15",
            "theme": "fusion"
        },
        "colorRange": { // color range to
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "##6baa01 "
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "e44a00"
            }]
        },
        "dials": {
            "dial": [{
                "id": "crntYr",
                "value": "50",
                "showValue": "1",
                "tooltext": "Current utilization : $value",
                "rearExtension": "15"
            }]
        },
        "alerts": {
            "alert": [{
                // alert range
                "minvalue": "70",
                "maxvalue": "100",
                // call JavaScript function
                "action": "callJS",
                "param": "showAlert('Current server CPU Utilization is high');"

            }]
        }
    },
    events: {
        "beforeRender": function(evtObj, argObj) {
            var divElement = document.createElement('div');
            divElement.setAttribute('id', 'alertDiv');
            argObj.container.parentNode.insertBefore(divElement, argObj.container.nextSibling);
        },
        "rendered": function(evtObj, argObj) {
            evtObj.sender.chartInterval = setInterval(function() {
                var angGauge = evtObj.sender,
                    dispCon = document.getElementById("alertDiv"),
                    prcnt;
                //Hiding the table
                dispCon && (dispCon.style.cssText = "display:none");
                prcnt = 0 + parseInt(Math.floor(Math.random() * 100), 10);
                // data to be fed to the gauge
                angGauge.feedData("value=" + prcnt);

            }, 5000); // feed data every 5 seconds

            window.showAlert = function(msg) {
                var dispCon = document.getElementById("alertDiv"),
                    str = "",
                    tdStyle = "border:1px solid;border-color:#cccccc;width:50%;font-weight: bold;font-size: 14px;padding:    3px;text-align:center",
                    tdStyle2 = "border:1px solid;border-color:#cccccc;width:50%;color:#aa0000;font-weight: bold;font-size: 14px;padding: 3px;text-align:center";

                //Creating the table format
                str += '<table cellpadding="1" width="275px" cellspacing="0">';
                str += '    <tr>';
                str += '        <td style="' + tdStyle2 + '">WARNING !</td>';
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
        },
        "disposed": function(evt, arg) {
            clearInterval(evt.sender.chartInterval);
        }
    }
}
