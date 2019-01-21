{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        styleDefinition: {
            "colorstyle": {
                "fill": "#ffff00"
            }
        },
        chart: {
        },
        caption: {
            text: 'Online Sales of a SuperStore in the US'
        },
        yaxis: {
            "plot": {
                "value": "Sales",
                "type": "line"
            },
            "referenceLine": [{
                "label": "Daily Target",
                "value": 300,
                style: {
                    text: "colorstyle",
                    marker: "colorstyle"
                }
            }],
        }
    }
}