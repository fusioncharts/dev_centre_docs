{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subcaption": "Last year",
            "xaxisname": "Quarter",
            "yaxisname": "Amount",
            "numberPrefix": "$",
            "numberSuffix": "K",
            "palettecolors": "#008ee4",
            "useplotgradientcolor": "0",
            "showplotborder": "0",
            "showShadow": "0",
            //Setting palette to 2
            "palette": "2"
        },
        "data": [{
            "label": "Q1",
            "value": "125"
        }, {
            "label": "Q2",
            "value": "257"
        }, {
            "label": "Q3",
            "value": "173"
        }, {
            "label": "Q4",
            "value": "182"
        }]
    }
}
