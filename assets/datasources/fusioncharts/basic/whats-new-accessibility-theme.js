{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource:{
      chart: {
         caption: "Countries With Most Oil Reserves [2017-18]",
         subcaption: "In MMbbl = One Million barrels",
         xaxisname: "Country",
         yaxisname: "Reserves (MMbbl)",
         numbersuffix: "K",
         usePattern: "1",
         theme: "accessibility",
         showPlotBorder: 1,
      },
      data: [
         {
            label: "Venezuela",
            value: "290",
            patternAngle: 30
         },
         {
            label: "Saudi",
            value: "260",
            patternType: "square",
            patternAngle: 45,
            patternDensity: 5
         },
         {
            label: "Canada",
            value: "180",
            patternType: "circle",
            patternSize: "5px",
            patternAngle: 45
         },
         {
            label: "Iran",
            value: "140",
            patternAngle: 0
         },
         {
            label: "Russia",
            value: "115",
            patternType: "square"
         }
      ]
   }
}
