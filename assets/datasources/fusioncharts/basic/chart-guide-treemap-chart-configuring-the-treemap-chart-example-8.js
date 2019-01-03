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
                "fontcolor" : "fff",
                "fillcolor": "#303030",
                "data": [
                    {
                        "label": "Food Products",
                        "value": "400",
                        "fontcolor" : "fff",
                        "fillcolor": "#527a7a",
                        "data": [
                            {
                                "label": "Dairy",
                                "value": "80",
                                "fillcolor": "#99ffcc"
                            },
                            {
                                "label": "Cereals",
                                "value": "70",
                                "fillcolor": "#e5fff2"
                            },
                            {
                                "label": "Poultry",
                                "value": "150",
                                "fillcolor": "#00cc66"
                            },
                            {
                                "label": "Vegetables",
                                "value": "100",
                                "fillcolor": "#33ff99"
                            }
                        ]
                    },
                    {
                        "label": "Non-food Products",
                        "value": "600",
                        "fontcolor" : "fff",
                        "fillcolor": "#404040",
                        "data": [
                            {
                                "label": "Apparel",
                                "value": "400",
                                "fontcolor" : "fff",
                                "fillcolor": "#666",
                                "data": [
                                    {
                                        "label": "Men's Wear",
                                        "value": "150",
                                        "fillcolor": "ff8080"
                                    },
                                    {
                                        "label": "Women's Wear",
                                        "value": "200",
                                        "fillcolor": "#ff6666",
                                        "fontcolor": "#6600ff"
                                    },
                                    {
                                        "label": "Children's Wear",
                                        "value": "50",
                                        "fillcolor": "#ffcccc"
                                    }
                                ]
                            },
                            {
                                "label": "Kitchenware",
                                "value": "150",
                                "fillcolor": "#e6b3ff"
                            },
                            {
                                "label": "Electronics",
                                "value": "50",
                                "fillcolor": "#eeccff"
                            }
                        ]
                    }
                ]
            }
        ]
    }    
}