{
    type: 'timeseries',
    renderAt: 'container',
    width: 800,
    height: 600,
    dataSource: {
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
                format: {
                    suffix: ' kWh'
                },
            }, {
                plot: [{
                    value: 'Temperature',
                    connectNullData: true,
                    type: 'line'
                }],
                format: {
                    suffix: ' °C'
                }
            },
            referenceZone: [{
                label: 'Energy',
                valueMin: '120',
                valueMax: '180',
                style: {
                    marker: {
                        fill: '#D2C9FF',
                        stroke: '#D2C9FF'
                    },
                    'marker-text': {
                        fill: '#000000'
                    },
                    'marker:hover': {
                        fill: '#D2C9FF'
                    },
                    'marker-zone:hover': {
                        "stroke": "#D2C9FF"
                    },
                    'marker-notch:hover': {
                        "stroke": "#D2C9FF"
                    }
                }
            }, {
                label: 'Temperature',
                valueMin: '3',
                valueMax: '5',
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
        ]
    }
}