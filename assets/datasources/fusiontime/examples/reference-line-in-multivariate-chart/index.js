{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Pollution Control Report'
        },
        yAxis: [{
            plot: 'Temperature',
            title: 'Temperature (in °C)',
            referenceLine: [{
                label: 'Controlled Temperature',
                value: '6'
            }]
        }, {
            plot: 'Carbon mono-oxide',
            title: 'CO (in µg/m³)',
            referenceLine: [{
                label: 'Controlled Carbon mono-oxide',
                value: '3'
            }]
        }],
    }
}