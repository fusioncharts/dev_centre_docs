{
    type: "timeseries",
    renderAt: "container",
    width: "95%",
    height: "450",
    dataSource: {
        data: dataStore,
        caption: {
            text: "Footfalls at Mega Store"
        },
        subCaption: {
            text: "Predictive footfall (represented in dashed)"
        },
        yAxis: [{
            plot: "Footfall",
            title: "Footfall",
        }],
        "extensions": {
            "prediction": {
                "style": {
                    "plot": "line"
                }
            }
        }
    }
}