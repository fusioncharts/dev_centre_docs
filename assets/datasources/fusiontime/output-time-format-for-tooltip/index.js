{
    type: "timeseries",
    renderAt: "container",
    width: "95%",
    height: "450",
    dataSource: {
        data: dataStore,
        chart: {
            showLegend: "0",
            paletteColors: "#58EBCA"
        },
        caption: {
            text: "Daily Visitors Count of a Website"
        },
        subCaption: {
            text: "Time format of (data plot) tooltip has been customized"
        },
        yAxis: [{
            plot: {
                value: "Daily Visitors",
                type: "smooth-line"
            },
            format: {
                suffix: "k"
            },
            title: "Daily Visitors Count"
        }],
        tooltip: {
            enabled: "false", // Disables the Tooltip
            outputTimeFormat: {
                day: "%d/%m/%y (%a)"
            },
            style: {
                container: {
                    "border-color": "#000000",
                    "background-color": "#75748D"
                },
                text: {
                    "color": "#FFFFFF"
                }
            }
        }
    }
}