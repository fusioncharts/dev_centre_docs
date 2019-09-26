{
    type: 'waterfall2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total Profit Calculation",
            "subcaption": "Last month",
            "yAxisname": "Amount (In USD)",
            "numberprefix": "$",
            "sumlabel": "Total {br} Profit",
            "theme": "fusion",

            //Connector lines configuration
            "showConnectors": "1",
            "connectorColor": "#660000",
            "connectorAlpha": "50",
            "connectorThickness": "3",
            "connectorDashed": "1",
            "connectorDashLen": "5",
            "connectorDashLen": "5",

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
