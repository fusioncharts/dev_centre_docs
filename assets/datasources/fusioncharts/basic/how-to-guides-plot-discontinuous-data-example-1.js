{
    type: 'line',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fusion",
            "rotateValues": "1",
            // make this attribute 0, if discontinuity is needed
            // "connectNullData": "1"
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
            "label": "May"
        }, {
            "label": "Jun"
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
            var chartRef = evt.sender;
            // create wrapper div for radio controls
            controllers = document.createElement('div');
            controllers.setAttribute('id', 'controllers');
            // form radio buttons inside wrapper div
            controllers.innerHTML = '<label><input id="radio-line" type="radio" name="chart-options" value="line"> Line</input></label><label><input id="radio-column" type="radio" name="chart-options" value="column2d"> Column</input></label>';

            // set css styles for controller div
            controllers.style.cssText = "font-family:'Helvetica Neue', Arial; font-size:14px; margin-left:90px;";

            // append to page
            args.container.appendChild(controllers);

            // set css styles for labels in controller div
            var labels = controllers.getElementsByTagName('label');
            for (var i = 0; i < labels.length; i++) {
                labels[i].style.cssText = 'padding: 0 5px !important;';
            }

            // select radio-button according to current type
            document.getElementById('radio-' + (chartRef.chartType() == 'line' ? 'line' : 'column')).setAttribute('checked', 'true');
        },
        "renderComplete": function() {
            var chartRef = evt.sender;
            // in the initialized event check create handlers for line, column radio buttons
            var radioButtons = document.getElementsByName('chart-options'),
                i, length;
            for (var i = 0, length = radioButtons.length; i < length; i++) {
                radioButtons[i].addEventListener('change', function() {
                    var radioButton = this;
                    if (radioButton.checked) {
                        chartRef.chartType(radioButton.value);
                    }
                });
            }
        }
    }
}
