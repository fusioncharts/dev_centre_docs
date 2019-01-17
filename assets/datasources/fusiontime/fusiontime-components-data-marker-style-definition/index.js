{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        styleDefinition: {
            "colorstyle": {
                "fill": "#ff0000",
                "font-weight": "bold",
                "opacity": "50"
            }
        },
        caption: {
            text: 'Interest Rate Analysis'
        },
        subCaption: {
            text: 'Federal Reserve (USA)'
        },
        yAxis: [{
            plot: 'Interest Rate',
            format: {
                suffix: '%'
            },
            title: 'Interest Rate'
        }],
        dataMarker: [{
            "seriesName": "Interest Rate",
            "time": "Aug-1982",
            "identifier": "L",
            "timeFormat": "%b-%Y",
            "tooltext": "The FED eases off the monetary brakes, allowing interest rates to fall and the economy to begin a strong recovery.",
            "style": {
                "text": "colorstyle",
                "marker": "colorstyle"
            }
        }, {
            "seriesName": "Interest Rate",
            "time": "Oct-1987",
            "identifier": "L",
            "timeFormat": "%b-%Y",
            "tooltext": "The FED is forced to ease rate after the stock market crash."
        }, {
            "seriesName": "Interest Rate",
            "time": "May-1989",
            "identifier": "H",
            "timeFormat": "%b-%Y",
            "tooltext": "Liquidity problem forced the Fed to increase rate to nearly 10%."
        }, {
            "seriesName": "Interest Rate",
            "time": "Sept-1992",
            "identifier": "L",
            "timeFormat": "%b-%Y",
            "tooltext": "To fight the jobless economy growth the Fed had to reduce the interest rate to 3%."
        }, {
            "seriesName": "Interest Rate",
            "time": "Jun-2003",
            "identifier": "L",
            "timeFormat": "%b-%Y",
            "tooltext": "Struggling to revive the economy, the FED cuts it’s benchmark rate to 1%."
        }, {
            "seriesName": "Interest Rate",
            "time": "Sep-2007",
            "identifier": "L",
            "timeFormat": "%b-%Y",
            "tooltext": "Fed started reducing the Federal Fund Rate."
        }, {
            "seriesName": "Interest Rate",
            "time": "Dec-2008",
            "identifier": "L",
            "timeFormat": "%b-%Y",
            "tooltext": "Fed reduced the interest rates to sub 0.25% to manage the menace of longest economic downturn since World War 2"
        }],
    }
}