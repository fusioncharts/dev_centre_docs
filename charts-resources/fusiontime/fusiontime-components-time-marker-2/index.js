{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Interest Rate Analysis'
        },
        subCaption: {
            text: 'Federal Reserve (USA)'
        },
        yAxis: [{
            plot: 'Interest Rate',
            format: {
                suffix: '%'
            },
            title: 'Interest Rate'
        }],
        xAxis: {
            plot: 'Time',
            timemarker: [{
                start: 'Mar-1980',
                label: 'US inflation peaked at 14.8%.',
                timeFormat: "%b-%Y",
                repeat: {
                    unit: Month,
                    multiplier: 1
                ,}
                style: {
                    marker: {
                        fill: '#D0D6F4'
                    }
                }
            }]
        },
    }
}