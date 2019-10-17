{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Temperature readings of an Italian Town'
        },
        yAxis: [{
            plot: 'Temperature',
            title: 'Temperature',
            format: {
                suffix: '°C',
            },
            referenceZone: [{
                label: 'Comfortable temp. range',
                valueMin: '15',
                valueMax: '25',
                style: {
                    marker: {
                        fill: '#B4F5E6',
                        stroke: '#B4F5E6'
                    },
                    'marker-text': {
                        fill: '#000000'
                    },
                    'marker:hover': {
                        fill: '#98DECD'
                    },
                    'marker-zone:hover': {
                        "stroke": "#B4F5E6"
                    },
                    'marker-notch:hover': {
                        "stroke": "#B4F5E6"
                    }
                }
            }]

        }]
    }
}