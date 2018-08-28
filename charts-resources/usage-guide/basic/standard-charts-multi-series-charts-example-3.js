{
    type: 'msbar2d',
    renderAt: 'chart-container',
    width: '600',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)",
            "numberPrefix": "$"
        },
        "categories": [{
            "category": [{
                    "label": "Bakersfield Central"
                },
                {
                    "label": "Garden Groove harbour"
                },
                {
                    "label": "Los Angeles Topanga"
                },
                {
                    "label": "Compton-Rancho Dom"
                },
                {
                    "label": "Daly City Serramonte"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "Food Products",
                "data": [{
                        "value": "17000"
                    },
                    {
                        "value": "19500"
                    },
                    {
                        "value": "12500"
                    },
                    {
                        "value": "14500"
                    },
                    {
                        "value": "17500"
                    }
                ]
            },
            {
                "seriesname": "Non-Food Products",
                "data": [{
                        "value": "25400"
                    },
                    {
                        "value": "29800"
                    },
                    {
                        "value": "21800"
                    },
                    {
                        "value": "19500"
                    },
                    {
                        "value": "11500"
                    }
                ]
            }
        ],
        "trendlines": [{
            "line": [{
                    "startvalue": "15000",
                    "color": "#5D62B5",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Food"
                },
                {
                    "startvalue": "22000",
                    "color": "#29C3BE",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Non-food"
                }
            ]
        }]
    }
}