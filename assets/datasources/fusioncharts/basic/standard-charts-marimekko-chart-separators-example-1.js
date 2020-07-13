{
  type: "marimekko",
  width: "680",
  height: "390",
  renderAt: "chart-container10",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Top 3 Electronic Brands in Top 3 Stores",
      subcaption: "Last month",
      aligncaptiontocanvas: "0",
      yaxisname: "Statewise Sales (in %)",
      xaxisname: "Brand",
      numberprefix: "$",
      showPlotBorder: "1",
      plotBorderThickness: "0.25",
      //Hide X-axis percent value
      showxaxispercentvalues: "0",
      showsum: "1",
      theme: "fusion",
      formatNumberScale: "0",
      decimals: "2",
      forceDecimals: "1",

      inDecimalSeparator: ",",
      inThousandSeparator: ".",
      DecimalSeparator: ",",
      ThousandSeparator: ".",
    },
    categories: [
      {
        category: [
          {
            label: "Bose",
            widthPercent: "45",
          },
          {
            label: "Dell",
            widthPercent: "30",
          },
          {
            label: "Apple",
            widthPercent: "25",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "California",
        data: [
          {
            value: "335,000",
          },
          {
            value: "225,100",
          },
          {
            value: "164,200",
          },
        ],
      },
      {
        seriesname: "Washington",
        data: [
          {
            value: "215,000",
          },
          {
            value: "198,000",
          },
          {
            value: "120,000",
          },
        ],
      },
      {
        seriesname: "Nevada",
        data: [
          {
            value: "298,000",
          },
          {
            value: "109,300",
          },
          {
            value: "153,600",
          },
        ],
      },
    ],
  },
}
