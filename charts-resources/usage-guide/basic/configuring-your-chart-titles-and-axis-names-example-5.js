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
            "datalabelColor": "#999999",
            //X-axis name cosmatics
            "xAxisNameFont": "Arial",
            "xAxisNameFontSize": "12",
            "xAxisNameFontColor": "#993300",
            "xAxisNameFontBold": "1",
            "xAxisNameFontItalic": "1",
            "xAxisNameAlpha": "80",

            //Y-axis name cosmatiocs
            "yAxisNameFont": "Arial",
            "yAxisNameFontSize": "12",
            "yAxisNameFontColor": "#993300",
            "yAxisNameFontBold": "1",
            "yAxisNameFontItalic": "1",
            "yAxisNameAlpha": "80",

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
