{
   type: 'timeseries',
   renderAt: 'container',
   width: '95%',
   height: 450,
   dataSource: {
       data: dataStore,
       chart: {
       },
       caption: {
           text: 'Apple Inc. Stock Price'
       },
       "yAxis": [{
           plot: {
               type: 'candlestick',
           value: {
               open: 'Open',
                   high: 'High',
                   low: 'Low',
                   close: 'Close'
           }
           },
           title: 'Value'
       }]
   }
}
