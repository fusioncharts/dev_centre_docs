{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 3 Juice Flavors",
            "subCaption": "Last year",
            "xAxisName": "Flavor",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "placevaluesInside": "1",
            "theme": "fusion"
        },

        "data": [{
            "label": "Apple",
            "value": "810000",
            "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-https://en.wikipedia.org/wiki/Apple"
          }, {
            "label": "Cranberry",
            "value": "620000",
            "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-https://en.wikipedia.org/wiki/Cranberry"
          }, {
            "label": "Grapes",
            "value": "350000",
            "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-https://en.wikipedia.org/wiki/Grape"
          }]
    }
}
