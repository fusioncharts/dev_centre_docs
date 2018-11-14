{
    type: 'mscolumn3dlinedy',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise Quarterly Revenue vs. Profit %",
            "subCaption": "Harry's SuperMart - Last Year",
            "xAxisname": "Quarter",
            "pYAxisName": "Sales",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "25",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
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
                "seriesname": "Food Products",
                "data": [{
                        "value": "11000"
                    },
                    {
                        "value": "14000"
                    },
                    {
                        "value": "10500"
                    },
                    {
                        "value": "15000"
                    }
                ]
            },
            {
                "seriesname": "Non-Food Products",
                "data": [{
                        "value": "14400"
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
            },
            {
                "seriesname": "Profit %",
                "renderAs": "line",
                "parentYAxis": "S",
                "showValues": "0",
                "data": [{
                        "value": "14"
                    },
                    {
                        "value": "16"
                    },
                    {
                        "value": "15"
                    },
                    {
                        "value": "17"
                    }
                ]
            }
        ]
    }
}