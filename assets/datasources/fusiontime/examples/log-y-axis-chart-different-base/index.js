{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Thermal flow of machinery'
        },
        subcaption: {
            text: 'Observation from east region thermal sensor'
        },
        yAxis: [{
            plot: {
                value: 'Heat Flux'
            },
            title: 'Heat Flux (in W/m²)',
            type: 'log',
            base: '50'
        }],
    }
}