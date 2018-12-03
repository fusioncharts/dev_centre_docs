{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 500,
    dataSource: {
        data: dataStore.query(FusionCharts.DataStore.Operators.pipe(FusionCharts.DataStore.Operators.equals('Country', 'India'), FusionCharts.DataStore.Operators.greater('Sales', 500))),
        chart: {
        },
        caption: { 
            text: 'Online Sales of a SuperStore in India'
        }
    }
}