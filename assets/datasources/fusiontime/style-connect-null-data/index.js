{
    type: 'timeseries',
    renderAt: 'container',
    width: 800,
    height: 600,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Pollution Report of Yatcha Street'
        },
        subcaption: {
            text: 'An industrial town'
        },
        yAxis: [{
            plot: [{
                value: 'Pollution',
                connectNullData: true,
                "style": {
                    "plot.null": {
                        "stroke-dasharray": "-1",
                        "stroke": "#FF0000"
                    },
                }
            }],
            title: 'Pollution Concentration (in ppm)',
            min: '130'
        }]
    }
}