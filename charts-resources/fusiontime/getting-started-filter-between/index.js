{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 500,
    dataSource: {
        data: dataStore.query(FusionCharts.DataStore.Operators.between('Sales', 500, 1000)),
        chart: {
        },
        caption: { 
            text: 'Online Sales of a SuperStore in the US'
        }
    }
}