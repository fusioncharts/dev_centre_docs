{
    type: 'timeseries',
    renderAt: 'container',
    width: 680,
    height: 500,
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
            "showGridband": "1",
            "style": {
                "grid-band": {
                    "fill": "#f5f5ef"
                }
            }
            // type: 'log'
        }]
    }
}