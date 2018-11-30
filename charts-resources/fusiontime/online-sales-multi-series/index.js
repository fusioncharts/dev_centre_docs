{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 650,
    dataSource: {
        data: dataStore.getDataTable(),
        chart: {},
        caption: {
            text: 'Online Sales of a SuperStore in India & the US'
        },
        yAxis: [{
            columnName: "Sales",
            plotType: "line"
        }],
        series: "Country"
    }
}