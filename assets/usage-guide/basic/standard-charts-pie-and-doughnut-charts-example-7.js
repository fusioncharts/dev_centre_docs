{
    type: 'doughnut2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of revenue by product categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "startingAngle": "20",
            "showPercentValues": "1",
            "showPercentInTooltip": "0",
            "enableSmartLabels": "0",
            "enableMultiSlicing": "0",
            "decimals": "1",
            "useDataPlotColorForLabels": "1",
            //Theme
            "theme": "fusion"
        },
        "data": [{
            "label": "Food",
            "value": "285040"
        }, {
            "label": "Apparels",
            "value": "146330"
        }, {
            "label": "Electronics",
            "value": "105070"
        }, {
            "label": "Household",
            "value": "49100",
            "isSliced": "1"
        }]
    }
}
