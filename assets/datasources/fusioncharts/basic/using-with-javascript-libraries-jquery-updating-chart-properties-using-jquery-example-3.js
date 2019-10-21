{
    type: 'column2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    id: 'caption-chart',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fusion",
            "rotateValues": "1"
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
            // Create container div for caption, subcaption and update button
            var controls = document.createElement('div');
            controls.innerHTML = '<span>Caption:</span><input type="text" id="caption"></input><br/><input type="button" id="update" value="Set Caption"></input>';

            // Append controls to document
            args.container.appendChild(controls);

            // set css styles for "span" elements in controls div
            var span = controls.getElementsByTagName('span');
            for (var i = 0; i < span.length; i++) {
                span[i].style.cssText = 'margin:2px; font-size:11px;';
            }

            // set css styles for "input" elements in controls div
            var input = controls.getElementsByTagName('input');
            for (var i = 0; i < input.length; i++) {
                input[i].style.cssText = 'margin:2px; font-size:11px;';
            }
        },
        'renderComplete': function(event) {

            var chartRef = event.sender;

            document.getElementById("caption")
                .setAttribute("value", chartRef.getChartAttribute("caption"));

            document.getElementById("update")
                .addEventListener("click", function(){
                    chartRef.setChartAttribute("caption", document.getElementById('caption').value)
                });
        }
    }
}