{
    type: 'timeseries',
    renderAt: 'container',
    width: "90%",
    height: 490,
    dataSource: {
      data: dataTable,
      series: "type",
      chart: {palettecolors:["5d62b5","1126f"],
      exportEnabled: 1
      },
      caption: {
        text: 'Positive and Negative Values'
      },
      yAxis: {
         plot: 'Value',
              title: 'Values',
              min: '100',
              max: '800',
              plottype: 'area'
      }
    }
  }