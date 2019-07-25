{
    type: "timeseries",
    renderAt: "container",
    width: 800,
    height: 600,
    dataSource: {
        data: dataStore,
        caption: {
            text: "Temperature readings of an Italian Town"
        },
        subCaption: {
            text: "Specified bins are 1-month, 1-day, 6-hours & 3-hours"
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