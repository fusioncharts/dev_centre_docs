{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Interest Rate Analysis'
        },
        subCaption: {
            text: 'Federal Reserve (USA)'
        },
        yAxis: [{
            plot: 'Interest Rate',
            format: {
                suffix: '%'
            },
            title: 'Interest Rate'
        }],
        xAxis: {
            timemarker: [{
                start: 'Jul-1981',
                label: 'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
                timeFormat: "%b-%Y"
            }]
        },
    }
}