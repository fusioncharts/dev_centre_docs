{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
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
            format: {
                suffix: ' kWh'
            }
        }, {
            plot: [{
                value: 'Temperature',
                connectNullData: true,
                type: 'line'
            }],
            format: {
                suffix: ' °C'
            }
        }],        
    }
}