{
    type: 'column2d',
    renderAt: 'chart-container',
    id: "myChart",
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart: Sales Analysis for Top Five Store Locations",
            "subCaption": "YTD",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "showValues": "1",
            "plotToolText": "Store location: $label <br> Sales (YTD): $dataValue <br> $displayValue",
            "trendlineToolText": "$displayValue: $startDataValue",
            "theme": "fint"
            },
        "data": [{
          "label": "Bakersfield Central",
          "value": "750000",
          "displayValue": "Store manager: Victoria"
        }, {
          "label": "Garden Groove Harbour",
          "value": "700000",
          "displayValue": "Store manager: Teresa"
        }, {
          "label": "Los Angeles Topanga",
          "value": "690000",
          "displayValue": "Store manager: Elvis"
        }, {
          "label": "Compton-Rancho Dom",
          "value": "650000",
          "displayValue": "Store manager: Pete"
        }, {
          "label": "Daly City Serramonte",
          "value": "620000",
          "displayValue": "Store manager: Reesa"
        }],
        "trendlines": [{
          "line": [{
            "startvalue": "680000",
            "color": "#800000",
            "displayValue": "Target Sales (This Year)",
            "valueOnRight": "1",
            "thickness": "2",
            "showOnTop": "1"
          }, {
            "startvalue": "500000",
            "color": "#800000",
            "displayValue": "Target Sales (Last Year)",
            "valueOnRight": "1",
            "thickness": "2",
            "showOnTop": "1"
          }, {
            "startvalue": "530000",
            "color": "#006600",
            "displayValue": "Max Sales (Last Year)",
            "valueOnRight": "1",
            "thickness": "2",
            "showOnTop": "1"
          }, {
            "startvalue": "390000",
            "color": "#006600",
            "displayValue": "Min Sales (Last Year)",
            "valueOnRight": "1",
            "thickness": "2",
            "showOnTop": "1"
          }, {
            "startvalue": "460000",
            "color": "#006600",
            "displayValue": "Average Sales (Last Year)",
            "valueOnRight": "1",
            "thickness": "2",
            "showOnTop": "1"
          }]
        }]
    }
}
