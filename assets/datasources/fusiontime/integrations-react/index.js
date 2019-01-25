{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        chart: {
        },
        yAxis: [{
            "title": "Sales",
        }],
        caption: {
            text: 'Online Sales of a SuperStore'
        }
    }
}