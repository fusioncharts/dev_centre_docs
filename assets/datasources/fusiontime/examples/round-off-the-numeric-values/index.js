{
    type: 'timeseries',
    renderAt: 'container',
    width: 800,
    height: 600,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Weather Report - wind speed'
        },
        subCaption: {
            text: 'Values rounded to 1 decimal place'
        },
        yAxis: [{
            plot: 'Speed',
            title: 'Wind Speed (in kmph)',
            plottype: 'smooth-line',
            format: {
                round: "1"
            }
        }],
    }
}