{
 type: 'column2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Monthly revenue for last year",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Month",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "theme": "fusion"
      },
      "data": [{
          "label": "Jan",
          "showPlotBorder": "1",
          "plotBorderThickness": "2",
          "plotBorderColor": "#ff0000",
          "plotBorderAlpha": "100",
          "value": "420000"
        },
        {
          "label": "Feb",
          "value": "810000"
        },
        {
          "label": "Mar",
          "value": "720000"
        },
        {
          "label": "Apr",
          "value": "550000"
        },
        {
          "label": "May",
          "value": "910000"
        },
        {
          "label": "Jun",
          "value": "510000"
        },
        {
          "label": "Jul",
          "showPlotBorder": "1",
          "plotBorderThickness": "2",
          "plotBorderColor": "#ff0000",
          "plotBorderAlpha": "100",
          "value": "680000"
        },
        {
          "label": "Aug",
          "value": "620000"
        },
        {
          "label": "Sep",
          "value": "610000"
        },
        {
          "label": "Oct",
          "value": "490000"
        },
        {
          "label": "Nov",
          "value": "900000"
        },
        {
          "label": "Dec",
          "value": "730000"
        }
      ],
      "trendlines": [{
        "line": [{
          "startvalue": "700000",
          "valueOnRight": "1",
          "displayvalue": "Monthly Target"
        }]
      }]
    }
  }
