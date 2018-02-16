{
    type: 'doughnut2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "exportenabled": "1",
            "exportMode": "server",
            "caption": "Split of Revenue by Product Categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "use3DLighting": "0",
            "showShadow": "0",
            "enableSmartLabels": "0",
            "startingAngle": "50",
            "showLabels": "0",
            "showPercentValues": "1",
            "showLegend": "1",
            "legendShadow": "0",
            "legendBorderAlpha": "0",
            "centerLabel": "Revenue from $label: $value",
            "centerLabelBold": "1",
            "showTooltip": "0",
            "decimals": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "useDataPlotColorForLabels": "1",
            "showValues": "0"
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