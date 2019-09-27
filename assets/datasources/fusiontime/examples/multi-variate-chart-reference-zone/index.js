{
    type: "timeseries",
    renderAt: "container",
    width: "95%",
    height: 450,
    dataSource: {
        data: dataStore,
        caption: {
            text: "Pollution Control Report"
        },
        yAxis: [{
            plot: "Temperature",
            title: "Temperature (in °C)",
            referenceZone: [{
                label: "Comfortable temp. range",
                valueMin: "15",
                valueMax: "25",
                style: {
                    marker: {
                        fill: "#D2C9FF",
                        stroke: "#D2C9FF"
                    },
                    "marker-text": {
                        fill: "#000000"
                    },
                    "marker:hover": {
                        fill: "#D2C9FF"
                    },
                    "marker-zone:hover": {
                        "stroke": "#D2C9FF"
                    },
                    "marker-notch:hover": {
                        "stroke": "#D2C9FF"
                    }
                }
            }]
        }, {
            plot: "Carbon mono-oxide",
            title: "CO (in µg/m³)",
            referenceZone: [{
                label: "Acceptable range - CO",
                valueMin: "1.5",
                valueMax: "3",
                style: {
                    marker: {
                        fill: "#B4F5E6",
                        stroke: "#B4F5E6"
                    },
                    "marker-text": {
                        fill: "#000000"
                    },
                    "marker:hover": {
                        fill: "#98DECD"
                    },
                    "marker-zone:hover": {
                        "stroke": "#B4F5E6"
                    },
                    "marker-notch:hover": {
                        "stroke": "#B4F5E6"
                    }
                }
            }]
        }]
    }
}