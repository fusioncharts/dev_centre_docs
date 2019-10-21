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
            "chartBottomMargin": "20",
            "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
            "gaugeFillRatio": "15",
            "valueBelowPivot": "1",
            "useMessageLog": "1",
            "theme": "fusion"
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
                "tooltext": "Current year's average : $value"
            }]
        }
    },
    events: {
        'beforeRender': function(evt, args) {
            // creating div for theme controllers
            var controllers = document.createElement('div'),
                container = document.getElementById('chart-container');
            // Create buttons inside div
            controllers.innerHTML = '<input id="show" class="btns" type="Button" value="Show" /><input id="clear" class="btns" type="Button" value="Clear Log"/>';
            args.container.appendChild(controllers);
            controllers.setAttribute('id', 'controllers');
            // setting css styles for controllers div
            controllers.style.cssText = "position: inherit;left: 10px;font-family: Verdana, sans;font-size: 13px;font-style: normal;font-weight: bold;";

            // setting css styles for button elements inside controllers div
            var inputs = controllers.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].style.cssText = 'font-family: Verdana, sans;font-size: 14px;font-style: normal;';
            }
        },
        "rendered": function(evtObj, argObj) {
            evtObj.sender.intervalVar = setInterval(function() {
                var chartIns = evtObj.sender,
                    prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10),
                    today = new Date(),
                    dd = today && today.getDate(),
                    mm = today && today.getMonth() + 1, //January is 0!
                    yyyy = today && today.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }

                today = mm + '/' + dd + '/' + yyyy;
                chartIns.feedData("&value=" + prcnt + "&msgTitle=OS update on " + today + "&msgText=Server CPU Utilization : " + prcnt);

            }, 5000);
        },
        'renderComplete': function(evt, atgs) {
            //Button click handler
            document.getElementById("show").onclick = function() {
                evt.sender.showLog();
            };

            document.getElementById("clear").onclick = function() {
                evt.sender.clearLog();
            };
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.intervalVar);
        }

    }
}
