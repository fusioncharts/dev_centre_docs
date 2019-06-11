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
            "showPercentValues": "1",
            "showPercentInTooltip": "0",
            "decimals": "1",
            "enableSmartLabels": "1",
            "use3DLighting": "1",
            "radius3D": "50",
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
            "value": "49100"
        }]
    }
}
