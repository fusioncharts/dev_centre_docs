{
    type: "timeseries",
    renderAt: "container",
    width: 680,
    height: 500,
    dataSource: {
        data: dataStore,
        caption: {
            text: "Temperature readings of an Italian Town"
        },
        yAxis: [{
            "plot": "Temperature",
            "title": "Temperature",
            "plotType": "column",
            "format": {
                "suffix": "°C",
                "label": "Controlled Temperature",
                "value": "10",
            }
        }]
    }
}