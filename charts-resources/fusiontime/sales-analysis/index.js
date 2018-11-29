{
    type: 'timeseries',
    renderAt: 'container',
    width: 90%,
    height: 500,
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