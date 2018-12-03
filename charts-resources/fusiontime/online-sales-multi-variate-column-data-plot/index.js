{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 650,
    dataSource: {
        data: dataStore,
        chart: {},
        yAxis: [{
            "plot": {
                "type": "column"
            }
        }],
        caption: {
          text: 'Global Online Sales of a SuperStore'
        }
    }
}