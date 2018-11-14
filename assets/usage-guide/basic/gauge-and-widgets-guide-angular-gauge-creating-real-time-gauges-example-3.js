{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Server CPU Utilization",
            "subcaption": "forum.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "editMode": "1",
            "showValue": "1",
            "valueBelowPivot": "1",
            "tickValueDistance": "25",
            "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
            "gaugeFillRatio": "15",
            "theme": "fusion",
            "valueFontSize": "14"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#6baa01"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#e44a00"
            }]
        },
        "dials": {
            "dial": [{
                "id": "crntYr",
                "value": "78",
                "showValue": "1",
                "tooltext": "Current year's average : $value",
                "rearExtension": "5"
            }]
        }
    },
    events: {
        'beforeRender': function(evt, args) {
            var score = document.createElement('div');
            score.setAttribute('id', 'score-detail');
            score.innerHTML = 'Current server CPU Utilization is: <b>78</b>';
            score.style.cssText = "font-family:'Helvetica Neue', Arial; font-size: 14px; padding:10px 0 10px 20px;";
            args.container.parentNode.insertBefore(score, args.container.nextSibling);
        },
        "rendered": function(evtObj, argObj) {
            evtObj.sender.intervalVar = setInterval(function() {
                var chartIns = evtObj.sender,
                    prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);

                chartIns.feedData("value=" + prcnt);

            }, 5000);
        },
        "realtimeUpdateComplete": function(evtObj, argObj) {
            var updtObj = argObj && argObj.updateObject,
                values = updtObj && updtObj.values,
                updtValStr = values && values[0],
                updtVal = updtValStr &&
                parseFloat(updtValStr).toFixed(0),
                divToUpdate = document.getElementById("score-detail");

            divToUpdate.innerHTML = "Current server CPU Utilization is : <b>" + updtVal + "</b>";


        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.intervalVar);
        }
    }
}
