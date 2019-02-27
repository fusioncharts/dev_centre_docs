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
            },
            "txt-big": {
              "font-size": 30
            }
          },
          "caption": {
            "text": "Online Sales",
            "style": {
              "text": "txt-red txt-big"
            }
          }
    }
}