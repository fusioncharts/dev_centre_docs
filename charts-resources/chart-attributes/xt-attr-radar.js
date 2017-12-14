{
    type: 'radar',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Budget analysis",
            "subCaption": "Current month",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "numberPrefix": "$",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "subcaptionFontBold": "0",
            "paletteColors": "#008ee4,#6baa01",
            "bgColor": "#ffffff",
            "radarfillcolor": "#ffffff",
            "showBorder": "0",
            "showShadow": "0",
            "showCanvasBorder": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "divLineAlpha": "10",
            "usePlotGradientColor": "0",
            "numberPreffix": "$",
            "legendBorderAlpha": "0",
            "legendShadow": "0"
        },
        "categories": [{
            "category": [{
                "label": "Marketing"
            }, {
                "label": "Product Management"
            }, {
                "label": "Customer Service"
            }, {
                "label": "Human Resource"
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
