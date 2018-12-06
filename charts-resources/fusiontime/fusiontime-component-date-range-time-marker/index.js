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
                start: 'Jul-1981',
                end: 'Nov-1982',
                label: 'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
                timeFormat: "%b-%Y"
            }, {
                start: 'Jul-1990',
                end: 'Mar-1991',
                label: 'This eight month recession period {br} was characterized by a sluggish employment recovery, {br} most commonly referred to as a jobless recovery.',
                timeFormat: "%b-%Y"
            }, {
                start: 'Jun-2004',
                end: 'Jul-2006',
                label: 'The Fed after raising interest rates {br} at 17 consecutive meetings, ends its campaign {br} to slow the economy and forestall inflation.',
                timeFormat: "%b-%Y"
            }, {
                start: 'Dec-2007',
                end: 'Jun-2009',
                label: 'Recession caused by the worst {br} collapse of financial system in recent {br} times.',
                timeFormat: "%b-%Y"
            }]
        },
    }
}