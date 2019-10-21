{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Pollution Control Report of China Town'
        },
        yAxis: [{
            plot: [{
                value: 'NMHC'
            }, {
                value: 'Nitrogen dioxide'
            }],
            title: 'Pollutants Concentration (in µg/m³)',
            referenceLine: [{
                label: 'Controlled NMHC',
                value: '150',
                style: {
                    marker: {
                        fill: '#A4A7D5',
                        stroke: '#A4A7D5'
                    }
                }
            }, {
                label: 'Controlled NO₂',
                value: '80',
                style: {
                    marker: {
                        fill: '#87DEDB',
                        stroke: '#87DEDB'
                    }
                }
            }]
        }],
    }
}