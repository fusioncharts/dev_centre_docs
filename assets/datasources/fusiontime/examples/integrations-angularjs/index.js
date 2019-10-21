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
            plot: {
                value: "Grocery Sales Value",
                type: "line"
            },
            format: {
                prefix: "$"
            },
            title: "Sale Value"
        }],
        caption: {
            text: "Sales Analysis"
        },
        subcaption: {
            text: "Grocery"
        }
    }
}