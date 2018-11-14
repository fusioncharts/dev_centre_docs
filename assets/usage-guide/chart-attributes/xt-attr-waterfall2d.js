{
    type: 'waterfall2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total Profit Calculation",
            "subcaption": "Last month",
            "yAxisname": "Amount (In USD)",
            "numberprefix": "$",
            "connectordashed": "1",
            "sumlabel": "Total {br} Profit",
            "positiveColor": "#6baa01",
            "negativeColor": "#e44a00",
            "theme": "fusion"
        },
        "data": [{
            "label": "Online sales",
            "value": "420000"
        }, {
            "label": "Store Sales",
            "value": "710000"
        }, {
            "label": "Total Sales",
            "issum": "1"
        }, {
            "label": "Fixed Costs",
            "value": "-250000"
        }, {
            "label": "Variable Costs",
            "value": "-156000"
        }, {
            "label": "COGS",
            "value": "-310000"
        }, {
            "label": "Promotion Costs",
            "value": "-86000"
        }, {
            "label": "Total Costs",
            "issum": "1",
            "cumulative": "0"
        }]
    }
}
