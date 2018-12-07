{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        chart: {
        },
        caption: {
            text: 'NASDAQ Composite Index'
        },
        yAxis: [{
            plot: [{
                open: 'Open',
                high: 'High',
                low: 'Low',
                close: 'Close',
                type: 'ohlc'
            }],
            title: 'Value'
        }],
    }
}