{
type: 'column2d',
      renderAt: 'chart-container',
      id: 'myChart',
      width: '450',
      height: '300',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Quarterly Sales Summary",
          "subcaption": "For last year",
          "xaxisname": "Quarter",
          "yaxisname": "Amount (In USD)",
          "numberprefix": "$",
          //Tooltip customization        
          "toolTipBorderColor": "#666666",
          "toolTipBgColor": "#efefef",
          "toolTipBgAlpha": "80",
          "tooltipPosition": "bottom",
          "showToolTipShadow": "1",
          //Theme
          "theme": "fusion"
        },
        "data": [{
          "label": "Q1",
          "value": "195000"
        }, {
          "label": "Q2",
          "value": "155000"
        }, {
          "label": "Q3",
          "value": "178000"
        }, {
          "label": "Q4",
          "value": "192000"
        }]
      }
    }
