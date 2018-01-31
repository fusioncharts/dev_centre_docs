{
    type: 'radar',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Budget Analysis",
            "subCaption": "Current month",
            "numberPreffix": "$",
            "theme": "fint",
            "radarfillcolor": "#ffffff"
        },
        "categories": [{
            "category": [{
                "label": "Marketing"
            }, {
                "label": "Product Management"
            }, {
                "label": "Customer Service"
            }, {
                "label": "Human Resources"
            }, {
                "label": "Sales & Distribution"
            }]
        }],
        "dataset": [{
            "seriesname": "Allocated Budget",
            "data": [{
                "value": "19000"
            }, {
                "value": "16500"
            }, {
                "value": "14300"
            }, {
                "value": "10000"
            }, {
                "value": "9800"
            }]
        }, {
            "seriesname": "Actual Cost",
            "data": [{
                "value": "6000"
            }, {
                "value": "9500"
            }, {
                "value": "11900"
            }, {
                "value": "8000"
            }, {
                "value": "9700"
            }]
        }]
    }
}
