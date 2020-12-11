{
      type: 'timeseries',
      renderAt: 'container',
      width: "100%",
      height: 400,
      dataSource: {
		navigator: {
          outputTimeFormat: '%B/%Y'
        },
		caption: {
          text: 'Total Rainfall of Assam and Tripura'
        },
        subcaption: {
          text: 'For over a century (1901-2015)'
        },
        series: 'State',
        yAxis: [{
          plot: [{
            value: 'Rainfall',
            type: 'area',
            style: {
              plot: {
                'fill-opacity': "0.5"
              }
            }
          }],
          title: 'Rainfall (in mm)'
        }],
        data: dataStore
      }
    }