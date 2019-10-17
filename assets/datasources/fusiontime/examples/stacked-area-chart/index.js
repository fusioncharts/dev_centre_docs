{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Total Rainfall of Assam and Tripura'
        },
        subcaption: {
            text: 'For over a century (1901-2015)'
        },
        series: 'State',
        yAxis: [{
            plot: [{
                value: 'Rainfall',
                type: 'area',
                style: {
                    plot: {
                        'fill-opacity': "0.8"
                    }
                }
            }],
            title: 'Rainfall (in mm)'
        }],
    }    
}