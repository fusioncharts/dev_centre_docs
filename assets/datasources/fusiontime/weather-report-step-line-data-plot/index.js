{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        chart: {
        },
        caption: {
            text: 'Weather Report'
        },
        subCaption: {
            text: 'Analysis of Atmospheric Pressure'
        },
        yAxis: [{
            plot: 'Pressure',
            title: 'Pressure (in atm)',
            min: '980',
            max: '1040',
            plottype: 'step-line'
        }],
    }
}