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
            "yAxisNamePadding": "14",
            "numberPrefix": "$",

            //X-axis name background properties
            "xAxisNameFont": "Arial",
            "xAxisNameFontSize": "14",
            "xAxisNameBgColor": "#3399ff",
            "xAxisNameBgAlpha": "20",
            "xAxisNameFontAlpha": "50",
            "xAxisNameBorderPadding": "10",

            //Y-axis name background properties
            "yAxisNameFont": "Arial",
            "yAxisNameFontSize": "14",
            "yAxisNameBgColor": "#3399ff",
            "yAxisNameBgAlpha": "20",
            "yAxisNameFontAlpha": "50",
            "yAxisNameBorderPadding": "10",
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
