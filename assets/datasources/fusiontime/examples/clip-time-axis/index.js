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
            from: "2018-01-01",
            to: "2018-04-01"
          },
          showclippingcue: "1",
          clip: [
            {
              from: "2018 Feb 05",
              to: "2018 Feb 05",
              format: "%Y %b %d"
            }
          ]
        }
      }
}
