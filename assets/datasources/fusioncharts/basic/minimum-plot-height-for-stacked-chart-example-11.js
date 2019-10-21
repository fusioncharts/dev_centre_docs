{
    type: 'stackedcolumn2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenue split by product category",
            "subCaption": "For current year",
            "xAxisname": "Quarter",
            "yAxisName": "Revenues (In USD)",
            "showValues": "1",
            "numberPrefix": "$",
            "minPlotHeightForValue": "15",
            "theme": "fusion"
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
                "seriesname": "Product 1",
                "data": [{
                        "value": "51000"
                    },
                    {
                        "value": "100000"
                    },
                    {
                        "value": "53500"
                    },
                    {
                        "value": "45000"
                    }
                ]
            },
            {
                "seriesname": "Product 2",
                "data": [{
                        "value": "10000"
                    },
                    {
                        "value": "3000"
                    },
                    {
                        "value": "11500"
                    },
                    {
                        "value": "5000"
                    }
                ]
            },
            {
                "seriesname": "Product 3",
                "data": [{
                        "value": "30000"
                    },
                    {
                        "value": "45000"
                    },
                    {
                        "value": "55500"
                    },
                    {
                        "value": "30000"
                    }
                ]
            },
            {
                "seriesname": "Product 4",
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
                "seriesname": "Product 5",
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