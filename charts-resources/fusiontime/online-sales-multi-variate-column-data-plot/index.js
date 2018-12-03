{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 650,
    dataSource: {
        data: dataStore,
        chart: {},
        yAxis: [{
            plotType: 'column'
        }],
        caption: {
          text: 'Global Online Sales of a SuperStore'
        }
    }
}