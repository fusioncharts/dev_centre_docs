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
            text: 'Analysis of Wind Speed'
        },
        yAxis: [{
            plot: 'Speed',
            title: 'Wind Speed (in kmph)',
            plottype: 'smooth-line'
        }],
    }
}