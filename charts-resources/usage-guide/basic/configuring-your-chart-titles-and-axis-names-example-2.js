{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            //Caption cosmetics 
            "captionFont": "Arial",
            "captionFontSize": "18",
            "captionFontColor": "#993300",
            "captionFontBold": "1",
            "subcaptionFont": "Arial",
            "subcaptionFontSize": "14",
            "subcaptionFontColor": "#993300",
            "subcaptionFontBold": "0",
            //Theme
            "theme": "fusion"
        },
        "data": [{
            "label": "Q1",
            "value": "1950000"
        }, {
            "label": "Q2",
            "value": "1450000"
        }, {
            "label": "Q3",
            "value": "1730000"
        }, {
            "label": "Q4",
            "value": "2120000"
        }]
    }
}
