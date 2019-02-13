{
    type: 'spline',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Bakersfield Central - Total footfalls",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "showTooltip": "0",
            "formatNumberScale": "0",
            "theme": "fusion"
        },
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1",
            "groups": [{
                "id": "total-footfall",
                "items": [
                    //Rectangle annotation
                    {
                        "id": "dyn-labelBG",
                        "type": "rectangle",
                        "radius": "3",
                        "x": "$canvasEndX - 100",
                        "y": "$canvasStartY",
                        "tox": "$canvasEndX",
                        "toy": "$canvasStartY + 30",
                        "color": "#0075c2",
                        "alpha": "70"
                    },
                    //Text annotation
                    {
                        "id": "dyn-label",
                        "type": "text",
                        "text": "Total: 119,507",
                        "fillcolor": "#ffffff",
                        "fontsize": "10",
                        "x": "$canvasEndX - 50",
                        "y": "$canvasStartY + 15"
                    }
                ]
            }]
        },
        "data": [{
            "label": "Mon",
            "value": "15123"
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "25507"
        }, {
            "label": "Thu",
            "value": "9110"
        }, {
            "label": "Fri",
            "value": "15529"
        }, {
            "label": "Sat",
            "value": "20803"
        }, {
            "label": "Sun",
            "value": "19202"
        }]
    },
    events: {
        'beforeRender': function(evt, args) {
            // Create container div for radio controls
            var controllers = document.createElement('div');
            controllers.setAttribute('id', 'controllers');
            controllers.innerHTML = "<p align='center'><label><input name='showhide' id='showHF' type='radio' value='show' checked='true' /> Show total footfall</label><label><input name='showhide' id='hideHF' type='radio' value='hide'  /> Hide total footfall </label> </p>";
            args.container.appendChild(controllers);
            // set css style for controllers div
            controllers.style.cssText = 'position:inherit; width:400px; padding:0 20px;';
            // set css styles for "label" elements in controllers div
            var labels = controllers.getElementsByTagName('label');
            for (var i = 0; i < labels.length; i++) {
                labels[i].style.cssText = 'padding: 0 5px; display: inline !important;';
            }
            // set css styles for "input" elements in controls div
            var input = controllers.getElementsByTagName('input');
            for (var i = 0; i < input.length; i++) {
                if (input[i].getAttribute('type') == 'text') input[i].style.cssText = 'max-width: 50px;';
            }
        },
        'renderComplete': function(evt, args) {
            var radio = document.getElementsByTagName('input'),
                visitChart = evt.sender,
                radElem,
                val,
                annotations = evt.sender.annotations;
            for (var i = 0; i < radio.length; i++) {
                radElem = radio[i];
                if (radElem.type === 'radio') {
                    radElem.onclick = function() {
                        val = this.getAttribute('value');
                        val && (val === "show") && annotations.show('total-footfall');
                        val && (val === "hide") && annotations.hide('total-footfall');
                    };
                }
            }
        }
    }
}
