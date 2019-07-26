{
    type: 'timeseries',
    renderAt: 'container',
    width: 800,
    height: 600,
    dataSource: {
        data: dataStore,
        chart: {
            showLegend: 0
        },
        caption: {
            text: 'Daily Visitors Count of a Website'
        },
        subCaption: {
            text: 'Time format on x-axis (time axis) has been customized'
        },
        yAxis: [{
            plot: {
                value: 'Daily Visitors',
                type: 'column'
            },
            format: {
                suffix: 'k'
            },
            title: 'Daily Visitors Count'
        }],
        "xAxis": {
            outputTimeFormat: {
                //year: "",
                month: "%b'%y (%q)",
                day: "%d/%m (%a)",
                //hour: "",
                //minute: "",
                //second: "",
                //millisecond: ""
            }
        }
    }
}