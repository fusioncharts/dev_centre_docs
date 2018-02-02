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
            "xAxisNamePadding": "20",
            "yAxisNamePadding": "10",

            //X-axis name border properties
            "xAxisNameBorderColor": "#6666FF",
            "xAxisNameBorderAlpha": "50",
            "xAxisNameBorderPadding": "6",
            "xAxisNameBorderRadius": "3",
            "xAxisNameBorderThickness": "2",
            "xAxisNameBorderDashed": "1",
            "xAxisNameBorderDashLen": "4",
            "xAxisNameBorderDashGap": "2",

            //Y-axis name border properties
            "yAxisNameBorderColor": "#6666FF",
            "yAxisNameBorderAlpha": "50",
            "yAxisNameBorderPadding": "6",
            "yAxisNameBorderRadius": "3",
            "yAxisNameBorderThickness": "2",
            "yAxisNameBorderDashed": "1",
            "yAxisNameBorderDashLen": "4",
            "yAxisNameBorderDashGap": "2",

            //Theme
            "theme": "fint"
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
