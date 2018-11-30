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
            text: 'Online Sales of a SuperStore in the US'
        },
        yAxis: [{
            columnName: 'Sales',
            plotType: 'column'
        }],
    }
}