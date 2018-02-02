{
    type: 'realtimeline',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart",
            "subCaption": "Real-time Stock Price monitor",
            "dataStreamURL": "../../../resources/php/advanced-charting-real-time-charts-chart-configurations-php-1.php",
            "refreshInterval": "5",
            "updateInterval": "15",
            "yaxisminvalue": "30",
            "yaxismaxvalue": "40",
            "labelDisplay": "rotate",
            "showLegend": "0",
            "showValues": "0",
            "numberSuffix": " %",
            "showRealTimeValue": "0",
            "theme": "fint"

        },
        "categories": [{
            "category": [{
                "label": "Start"
            }]
        }],
        "dataset": [{
            "seriesname": "Harry's SuperMart",
            "alpha": "100",
            "data": [{
                "value": "32.5"
            }]
        }]
    }
}
