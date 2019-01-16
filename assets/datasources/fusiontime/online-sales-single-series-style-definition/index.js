{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        styleDefinition: {
            "colorStyle": {
                "font-color": "#ff0000"
            }
        },
        chart: {
        },
        yAxis: [{
            "title": "Sales",
        }],
        caption: {
            text: 'Online Sales of a SuperStore',
            style: {
                text: colorStyle
            }
        }
    }
}