{
    type: 'doughnut2d',
    renderAt: 'chart-container',
    width: '550',
    height: '450',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Revenue by Product Categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "bgColor": "#ffffff",
            "startingAngle": "310",
            "showLegend": "1",
            "defaultCenterLabel": "Total revenue: $64.08K",
            "centerLabel": "Revenue from $label: $value",
            "centerLabelBold": "1",
            "showTooltip": "0",
            "labelFontColor": "#ffffff",
            "decimals": "0",
            "theme": "fusion",
            "valuePosition": "inside",
            "minAngleForValue": "75"
        },
        "data": [{
                "label": "Food",
                "value": "28504"
            },
            {
                "label": "Apparels",
                "value": "14633"
            },
            {
                "label": "Electronics",
                "value": "10507"
            },
            {
                "label": "Household",
                "value": "4910"
            }
        ]
    }
}