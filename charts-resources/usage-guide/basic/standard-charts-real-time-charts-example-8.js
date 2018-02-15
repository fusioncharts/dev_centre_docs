{
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart",
            "subCaption": "Retail Store vs Online Transactions",
            "dataStreamURL": "../../../resources/php/advance-charting-real-time-charts-multiple-datasets-and-updates-php-1.php",
            "refreshInterval": "5",
            "yaxismaxvalue": "40",
            "numdisplaysets": "10",
            "numbersuffix": " Customers",
            "showlabels": "1",
            "showValues": "0",
            "showRealTimeValue": "0",
            "theme": "fint"
        },
        "categories": [{
            "category": [{
                "label": "Start"
            }]
        }],
        "dataset": [{
            "seriesname": "Retail Store",
            "alpha": "100",
            "data": [{
                "value": "15"
            }]
        }, {
            "seriesname": "Online",
            "alpha": "100",
            "data": [{
                "value": "2"
            }]
        }]
    }
}
