{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 500,
    dataSource: {
        data: dataStore.query(FusionCharts.DataStore.Operators.equals('Country', 'India')),
        chart: {
        },
        caption: { 
            text: 'Online Sales of a SuperStore in India'
        }
    }
}