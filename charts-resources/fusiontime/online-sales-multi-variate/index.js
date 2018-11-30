{
    type: 'timeseries',
    renderAt: 'container',
    width: "95%",
    height: 650,
    dataSource: {
        data: dataStore.getDataTable(),
        chart: {},
        caption: {
          text: 'Global Online Sales of a SuperStore'
        }
    }
}