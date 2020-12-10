{
      type: 'column2d',
      renderAt: 'chart-container',
      width: '450',
      height: '300',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Quarterly Revenue",
          "subCaption": "Last year",
          "xAxisName": "Quarter",
          "yAxisName": "Amount (In USD)",
          "numberPrefix": "$",
          "theme": "fusion",
          "usePattern": "1"
          
        },
        "data": [{
          "label": "Q1",
          "value": "1950000",
          "patternType": "square",
          "color": "#1122ee",
          "patternSize": 8,
          "patternDensity": 8
        }, {
          "label": "Q2",
          "value": "1450000",
          "patternType": "circle"
        }, {
          "label": "Q3",
          "value": "1730000",
          "patternBgColor":"#ccddff"
        }, {
          "label": "Q4",
          "value": "2120000",
          "patternType": "line",
          "patternAngle": 0,
          "color": "#00ff99",
          "patternBgColor":"#00663d",
          "patternSize": 8,
          "patternDensity": 10
        }]
      }
    
}