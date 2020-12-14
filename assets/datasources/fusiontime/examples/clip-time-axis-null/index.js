{
    type: 'timeseries',
    renderAt: 'container',
    width: "100%",
    height: 490,
    dataSource: {
        data: dataStore,
        caption: {
          text: "Temperature variations - New York 2019"
        },
        subcaption: {
          text:
            "Daily average temperature of New York City - missing data on Feb 5th"
        },
        yaxis: [
          {
            columnname: "Daily Visitors",
            plottype: "column",
            title: "Daily Visitors"
          }
        ],
        xaxis: {
          initialinterval: {
            from: "1/1/2019",
            to: "30/6/2019"
          },
          showclippingcue: "1",
          autoClipNullData: "day",
          autoClipMultiplier: 2
        }
      }
}
