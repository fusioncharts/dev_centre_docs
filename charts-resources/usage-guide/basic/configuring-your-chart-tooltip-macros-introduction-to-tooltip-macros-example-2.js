{
    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart: Sales Analysis for Top Five Store Locations",
            "subCaption": "YTD",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "showValues": "1",
            "plotToolText": "Store location: $label <br> Sales (YTD): $dataValue <br> $displayValue",
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
        }]
    }
}
