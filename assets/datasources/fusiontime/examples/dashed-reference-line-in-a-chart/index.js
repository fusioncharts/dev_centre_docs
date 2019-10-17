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
            format:{
                suffix: '°C',
            },
            referenceLine: [{
                label: 'Controlled Temperature',
                value: '10',
                style: {
                    marker: {
                        'stroke-dasharray': '4 3'
                    }
                }
            }]
        }],
    }    
}