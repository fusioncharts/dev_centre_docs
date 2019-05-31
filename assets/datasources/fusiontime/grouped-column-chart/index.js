{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Sales Analysis'
        },
        subcaption: {
            text: 'Grocery & Footwear'
        },
        yAxis: {
            plot: ['Grocery', 'Footwear'],
            plottype: 'column',
            title: 'Sale Value',
            format: {
                    prefix: '$'
            }
        }
    }
}