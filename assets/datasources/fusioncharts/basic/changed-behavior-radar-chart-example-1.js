{
    type: 'radar',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store rating across parameters",
            "subCaption": "Based on customer feedback survey",
            "numberPreffix": "$",
            "theme": "fusion",
            "radarRadius": "120",
            "radarfillcolor": "#ffffff",
        },
        "categories": [{
            "category": [{
                    "label": "Ambience"
                },
                {
                    "label": "Product Assortment"
                },
                {
                    "label": "Price Competitiveness"
                },
                {
                    "label": "Service"
                },
                {
                    "label": "Recommend to others"
                }
            ]
        }],
        "dataset": [{
            "seriesname": "User Ratings",
            "data": [{
                    "value": "3.5"
                },
                {
                    "value": "4.8"
                },
                {
                    "value": "3.1"
                },
                {
                    "value": "4.0"
                },
                {
                    "value": "3.6"
                }
            ]
        }]
    }
}