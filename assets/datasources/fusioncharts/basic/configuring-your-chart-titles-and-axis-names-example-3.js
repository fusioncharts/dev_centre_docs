{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subCaption": "(Last year)",
            "rotateYAxisName": "0",
            "numberPrefix": "$",
            //Caption alignment attributes
            "alignCaptionWithCanvas": "1",
            "captionHorizontalPadding": "2",
            "captionOnTop": "0",
            "captionAlignment": "right",
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
