{
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of revenue by product categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "showPercentInTooltip": "0",
            "decimals": "1",
            //Theme
            "theme": "fusion"
        },
        "data": [{
                "label": "Food",
                "value": "285040"
            },
            {
                "label": "Apparels",
                "value": "146330",
                "valuePosition": "inside"
            },
            {
                "label": "Electronics",
                "value": "105070"
            },
            {
                "label": "Household",
                "value": "49100"
            }
        ]
    }
}