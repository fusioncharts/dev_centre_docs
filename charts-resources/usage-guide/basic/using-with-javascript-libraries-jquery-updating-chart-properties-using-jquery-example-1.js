{
    type: 'column2d',
    id: 'type-chart',
    width: '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue",
            "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    },
    events: {
        'beforeRender': function(evt, args) {
            // Create container div for radio controls
            var controllers = document.createElement('div');
            controllers.setAttribute('id', 'controllers');
            controllers.innerHTML = "<label><input name='chart-type' id='line' type='radio' value='line' /> Line chart</label><label><input name='chart-type' id='bar2d' type='radio' value='bar2d' /> Bar chart</label><label><input name='chart-type' id='column2d' type='radio' value='column2d' /> Column chart</label><label>";

            args.container.appendChild(controllers);

            // set css style for controllers div
            controllers.style.cssText = 'position:inherit; width:500px; padding:0 50px;';

            // set css styles for "label" elements in controllers div
            var labels = controllers.getElementsByTagName('label');
            for (var i = 0; i < labels.length; i++) {
                labels[i].style.cssText = 'padding: 0 5px; display: inline;';
            }

            // set css styles for "input" elements in controls div
            var input = controllers.getElementsByTagName('input');
            for (i = 0; i < input.length; i++) {
                if (input[i].getAttribute('type') == 'text') input[i].style.cssText = 'max-width: 50px;';
            }

            // select radio-button according to current type
            document.getElementById(FusionCharts.items['type-chart'].chartType()).setAttribute('checked', 'true');

            var radio = document.getElementsByTagName('input'),
                radElem, val;
            for (var i = 0; i < radio.length; i++) {
                radElem = radio[i];
                if (radElem.type === 'radio') {
                    radElem.onclick = function() {
                        val = this.getAttribute('value');
                        val && $(args.container).updateFusionCharts({
                            'type': val
                        });
                    };
                }
            }
        }
    }
}
