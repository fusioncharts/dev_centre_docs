{
    type: 'timeseries',
    renderAt: 'container',
    width: 800,
    height: 600,
    dataSource: {
        data: dataStore;
        caption: {
            text: 'Footfalls at Mega Store'
        },
        subCaption: {
            text: 'Predictive footfall (represented in dashed)'
        },
        yAxis: [{
            plot: 'Footfall',
            title: 'Footfall',
        }],
        "extensions": {
            "prediction": {
                //"date": "08/01/18",
                "style": {
                    "plot": "line"
                }
            }
        }
    }
}