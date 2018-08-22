{
    type: 'doughnut3d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Revenue by Product Categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "data": [{
            "label": "Food",
            "value": "28504"
        }, {
            "label": "Apparels",
            "value": "14633"
        }, {
            "label": "Electronics",
            "value": "10507"
        }, {
            "label": "Household",
            "value": "4910"
        }]
    }
}
