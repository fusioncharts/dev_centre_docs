{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "theme": "carbon"
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
        '_beforeRender': function(evt, args) {
            var scriptElem;
            function handleLoad() {
                evt.sender.setChartAttribute('theme', 'carbon');
            }
            var themeCollection = {
                'carbon': 'http://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.carbon.js'
            };
            for (var theme in themeCollection) {
                scriptElem = document.createElement('script');
                scriptElem.setAttribute('type', 'text/javascript');
                scriptElem.setAttribute('src', themeCollection[theme]);
                scriptElem.onload = handleLoad;
                scriptElem.async = false;
                args.container.parentNode.insertBefore(scriptElem, args.container.nextSibling);
            }
        }
    }
}