{
    type: 'treemap',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "plotborderfillcolor": "fff",
            "plotborderthickness": "0",
            "animation": "0",
            "labelGlow" : "0",
            "horizontalPadding" : "1",
            "verticalPadding" : "1",
            "caption": "Harry's SuperMart: Product-wise Revenue",
            "subcaption": "Previous Year"   
        },
        "data": [        
            {
                "label": "Harry's SuperMart",
                "value": "1000",
                "data": [
                    {
                        "label": "Food Products",
                        "value": "400",
                        "data": [
                            {
                                "label": "Dairy",
                                "value": "70"
                            },
                            {
                                "label": "Cereals",
                                "value": "80"
                            },
                            {
                                "label": "Poultry",
                                "value": "150"
                            },
                            {
                                "label": "Vegetables",
                                "value": "100"
                            }
                        ]
                    },
                    {
                        "label": "Non-food Products",
                        "value": "600",
                        "data": [
                            {
                                "label": "Apparel",
                                "value": "400",
                                "data": [
                                    {
                                        "label": "Men's Wear",
                                        "value": "150"
                                    },
                                    {
                                        "label": "Women's Wear",
                                        "value": "200"
                                    },
                                    {
                                        "label": "Children's Wear",
                                        "value": "50"
                                    }
                                ]
                            },
                            {
                                "label": "Kitchenware",
                                "value": "150"
                            },
                            {
                                "label": "Electronics",
                                "value": "50"
                            }
                        ]
                    }   
                ]
            }
        ],
        "colorrange": {
            "mapbypercent": "0",
            "gradient": "1",
            "minvalue": "0",
            "startlabel": "Poor",
            "endlabel": "Good",
            "color": [
                {
                    "code": "FF3300",
                    "maxvalue": "100",
                    "label": "BAD"
                },
                {
                    "code": "33CC33",
                    "maxvalue": "200",
                    "label": "AVERAGE"
                }
            ]
        }
    }   
}