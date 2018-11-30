{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: query(FusionCharts.DataStore.Operators.greater(Sales, 500)),
        chart: {
        },
        caption: {
            text: 'Online Sales of a SuperStore in the US'
        }
    }
}