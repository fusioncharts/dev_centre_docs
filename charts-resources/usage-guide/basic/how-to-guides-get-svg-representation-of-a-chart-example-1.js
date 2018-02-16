{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    id: 'revenue-chart',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fint",
            "rotateValues": "1",
            "exportEnabled": "1"
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
            "value": "910000",
            "anchorRadius": "10",
            "anchorBorderColor": "0372AB",
            "anchorBgColor": "E1f5ff"
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
            //Create a div element to disply SVG string
            var chartdata = document.createElement('div');
            chartdata.innerHTML = 'Click button to display the SVG string';
            //Style the div that displays SVG string
            chartdata.style.cssText = 'backgound-color: #f0f0f0;border: #fff000 1px solid;margin: 10px;padding: 10px;font-size: 10px;';

            //Create a button to download SVG and style the button
            var buttongetSVG = document.createElement('input');
            buttongetSVG.setAttribute('type', 'button');
            buttongetSVG.setAttribute('value', 'Show SVG String');
            buttongetSVG.style.cssText = 'margin: 10px;font-size: 11px;';

            buttongetSVG.onclick = function() {
                // get the chart object
                var revenueChart = FusionCharts('revenue-chart');
                // get chart xml data
                var svgString = revenueChart.getSVGString();
                // reformat and show it
                showChartData(svgString);
            };

            var showChartData = function(data) {
                chartdata.innerHTML = data.replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/&gt;&lt;/g, '&gt;<br/>&lt;');
            };
            //Append the div element and button
            args.container.appendChild(chartdata);
            args.container.appendChild(buttongetSVG);
        }
    }
}
