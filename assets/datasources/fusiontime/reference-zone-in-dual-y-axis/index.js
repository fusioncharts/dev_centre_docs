{
    type: 'timeseries',
    renderAt: 'container',
    width: 95%,
    height: 450,
    dataSource: {
        data: dataStore,
        chart: {
            multiCanvas: false
        },
        caption: {
            text: 'Energy & Temperature Measurements'
        },
        yAxis: [{
            plot: [{
                value: 'Energy',
                connectNullData: true,
                type: 'line'
            }],
            referenceZone: [{
                label: 'High energy consumption',
                valueMin: '170',
                valueMax: '220',
            }],
            format: {
                suffix: ' kWh'
            }
        }, {
            plot: [{
                value: 'Temperature',
                connectNullData: true,
                type: 'line'
            }],
            referenceZone: [{
                label: 'Cold weather',
                valueMin: '3',
                valueMax: '4.5',
                style: {
                    marker: {
                        fill: '#04F5E6',
                        stroke: '#04F5E6'
                    },
                    'marker-text': {
                        fill: '#000000'
                    },
                    'marker:hover': {
                        fill: '#08DECD'
                    },
                    'marker-zone:hover': {
                        "stroke": "#04F5E6"
                    },
                    'marker-notch:hover': {
                        "stroke": "#04F5E6"
                    }
                }
            }],
            format: {
                suffix: ' °C'
            }
        }]
    }
}