{
    type: 'timeseries',
    renderAt: 'container',
    width: "100%",
    height: 500,
    dataSource: {
        data: dataStore,
        chart: {
            borderColor: '000000',
            theme: 'gammel',
            "style": {
                "canvas": {
                    stroke: "BBBBBB"
                }
            },
            canvasheightproportion: '4:1'
        },
        caption: {
            text: 'Apple Inc. Stock Price'
        },
        subcaption: {
            text: 'Stock prices from January 2018 - March 2018'
        },
        xAxis: {
            timemarker: [{
                    start: '2018-01-12 16:00',
                    end: '2018-01-15 09:30',
                    type: 'full',
                    timeFormat: "%Y-%m-%d %H:%M",
                    label: 'Stock Market closed'
                },
                {
                    start: '2018-02-19',
                    // end: '2018-02-19 09:30',
                    type: 'full',
                    timeFormat: "%Y-%m-%d",
                    label: 'Stock Market closed'
                }
            ]
            // clip: 
        },
        yAxis: [{
                plot: {
                    value: {
                        open: 'Open',
                        high: 'High',
                        low: 'Low',
                        close: 'Close'
                    },
                    type: 'candlestick'
                },
                format: {
                    prefix: '$'
                },
                title: 'Stock Value'
            },
            {
                plot: [{
                    value: 'Volume',
                    type: 'column'
                }]
            }
        ]
    }
}