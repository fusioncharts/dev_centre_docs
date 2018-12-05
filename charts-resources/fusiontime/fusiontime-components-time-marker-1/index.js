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
            plot: 'Time',
            timemarker: [{
                start: 'Mar-1982',
                label: 'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
                timeFormat: "%b-%Y",
                style: {
                    marker: {
                        fill: '#f8b8b7'
                    }
                }
            }]
        },
    }
}