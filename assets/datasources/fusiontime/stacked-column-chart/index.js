{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Unemployment in San Jose & SJ Metro Area'
        },
        subcaption: {
            text: 'From January 2006 - December 2016'
        },
        series: 'City',
        yAxis: [{
            plot: [{
                value: 'Unemployment',
                type: 'column'
            }],
            title: 'Unemployment Count',
            format: {
                suffix: 'K'
            }
        }],
    }
}