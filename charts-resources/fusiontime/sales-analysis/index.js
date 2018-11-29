{
    type: 'timeseries',
    renderAt: 'container',
    width: 700,
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