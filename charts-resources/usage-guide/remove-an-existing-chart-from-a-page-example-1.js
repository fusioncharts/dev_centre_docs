{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    id: 'revenue-chart',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "zune",
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
            var toggleChart = document.getElementById('toggle-button');
            if (!toggleChart) {
                toggleChart = document.createElement('input');
                toggleChart.setAttribute('id', 'toggle-button');
                toggleChart.setAttribute('class', 'btn btn-transparent');
                toggleChart.setAttribute('type', 'button');
                toggleChart.setAttribute('value', 'Remove chart');
                args.container.parentNode.insertBefore(toggleChart, args.container.nextSibling);
            }
            toggleChart.onclick = function() {
                toggleChart.setAttribute('value', 'Create chart again');
                var construction = evt.sender.clone(true);
                evt.sender.dispose();
                toggleChart.onclick = function() {
                    FusionCharts.render(construction);
                    toggleChart.setAttribute('value', 'Remove chart');
                };
            };
        }
    }
}