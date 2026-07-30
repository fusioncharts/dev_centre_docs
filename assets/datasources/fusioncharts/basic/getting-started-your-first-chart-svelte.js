{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Revenue by Product Category",
            "subCaption": "Current Sales Performance",
            "xAxisName": "Product Category",
            "yAxisName": "Revenue (USD)",
            "numberPrefix": "$",
            "numberSuffix": "K",   
            "theme": "fusion"
        },
        // Chart Data
        "data": [{
            "label": "Electronics",
            "value": "85"
        }, {
            "label": "Apparel",
            "value": "72"
        }, {
            "label": "Home Appliances",
            "value": "64"
        }, {
            "label": "Books",
            "value": "48"
        }, {
            "label": "Sports",
            "value": "55"
        }, {
            "label": "Beauty",
            "value": "42"
        }]
    }
}
