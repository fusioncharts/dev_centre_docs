{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 650,
    dataSource: {
        data: dataStore,
        chart: {},
        yAxis: [{
            plot: {
                value: 'Sales',
                type: 'column'
            },
        }, {
            plot: {
                value: 'Quantity',
                type: 'column'
            }
        }, {
            plot: {
                value: 'Shipping Cost',
                type: 'column'
            }
        }],
        caption: {
          text: 'Global Online Sales of a SuperStore'
        }
    }
}