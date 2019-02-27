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
            "title": "Sales",
        }],
        "styleDefinition": {
            "txt-red": {
              "fill": "red"
            }
        },
        "caption": {
            "text": "Online Sales",
            "style": {
              "text": "txt-red"
            }
        }
    }
}