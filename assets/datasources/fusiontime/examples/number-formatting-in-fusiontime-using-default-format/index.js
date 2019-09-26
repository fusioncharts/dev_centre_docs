{
    type: 'timeseries',
    renderAt: 'container',
    width: 680,
    height: 500,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Sales Analysis'
        },
        subcaption: {
            text: 'Showing unformatted data values'
        },
        yAxis: [{
            plot: {
                value: 'Grocery Sales Value'
            },
            format: {
                prefix: '$',
                defaultFormat: 0
            },
            title: 'Sale Value'
        }]
    }
}