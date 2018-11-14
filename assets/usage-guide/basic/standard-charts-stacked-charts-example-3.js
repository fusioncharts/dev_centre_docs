{
    type: 'stackedarea2d',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Harry's SuperMart",
            "subCaption": "Product-wise quarterly revenue in current year",
            "xAxisname": "Quarter",
            "yAxisName": "Amount",
            "numberPrefix": "$"
        },
        "categories": [{
            "category": [{
                    "label": "Q1"
                },
                {
                    "label": "Q2"
                },
                {
                    "label": "Q3"
                },
                {
                    "label": "Q4"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "Food Products",
                "data": [{
                        "value": "11000"
                    },
                    {
                        "value": "15000"
                    },
                    {
                        "value": "13500"
                    },
                    {
                        "value": "15000"
                    }
                ]
            },
            {
                "seriesname": "Non-Food Products",
                "data": [{
                        "value": "11400"
                    },
                    {
                        "value": "14800"
                    },
                    {
                        "value": "8300"
                    },
                    {
                        "value": "11800"
                    }
                ]
            }
        ]
    }
}