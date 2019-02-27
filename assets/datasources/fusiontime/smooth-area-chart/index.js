{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        chart: {
            showLegend: 0
        },
        caption: {
            text: 'Daily Visitors Count of a Website'
        },
        yAxis: [{
            plot: {
                value: 'Daily Visitors',
                type: 'smooth-area'
            },
            title: 'Daily Visitors Count',
            format: {
                suffix: 'k'
            }
        }],
    }        
}