{
      type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
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
        xAxis: {
            plot: 'Time',
			showTimeSpanMarkerTooltipAt: 0, //Change to 1 to modify the behavior of time span marker tootips
            timemarker: [{
                start: 'Mar-1980',
                end: 'Jun-1983',
                label: 'US inflation peaked at 14.8%.',
                timeFormat: "%b-%Y",
                type: 'full',
                style: {
                    marker: {
                        fill: '#f8b8b7'
                    }
                }
                
            },
            {
                start: 'Jun-1988',
                end: 'dec-1990',
                label: 'US inflation peaked at 9.7%.',
                timeFormat: "%b-%Y",
                type: 'full',
                style: {
                    marker: {
                        fill: '#f8b8b7'
                    }
                }
                
            }]
            
        }
    }
    }