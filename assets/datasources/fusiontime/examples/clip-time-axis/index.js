{
    type: "timeseries",
    renderAt: "container",
    width: 100%,
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
            timemarker: timeMarker
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
        }]
    }
}