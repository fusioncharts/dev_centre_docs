{
    type: 'timeseries',
        renderAt: 'container',
            width: 1000,
                height: 650,
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