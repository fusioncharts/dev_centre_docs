{
    type: 'timeseries',
    renderAt: 'container',
    width: '100%',
    height: 450,
    dataSource: {
        data: dataStore,
        chart: {
        },
        "yAxis": {
            "columnName": "Sales",
            "plotType": "column"
        },
        caption: {
            text: 'Single Series Chart'
        }
    }
}