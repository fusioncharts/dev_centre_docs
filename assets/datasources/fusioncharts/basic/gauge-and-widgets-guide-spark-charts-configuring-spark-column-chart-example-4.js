{
    type: 'sparkcolumn',
    renderAt: 'chart-container',
    width: '300',
    height: '80',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Revenue by Month",
            "subcaption": "Last year",
            "subCaptionFontSize": "11",
            "numberPrefix": "$",
            "highColor": "#6baa01",
            "lowColor": "#e44a00",
            "chartBottomMargin": "30"
        },
        "dataset": [{
            "data": [{
                "value": "783000"
            }, {
                "value": "601000"
            }, {
                "value": "515000"
            }, {
                "value": "315900"
            }, {
                "value": "388000"
            }, {
                "value": "433000"
            }, {
                "value": "910000"
            }, {
                "value": "798000"
            }, {
                "value": "483300"
            }, {
                "value": "562000"
            }, {
                "value": "359400"
            }, {
                "value": "485000"
            }]
        }],
        //Adding trendlines in chart
        "trendlines": [{
            "line": [{
                "startvalue": "550000",
                "endValue": "700000",
                //Trendline related cosmetics
                "color": "#ff0000",
                "thickness": "1",
                "dashed": "1",
                "dashedlen": "3",
                "dashgap": "3",
                "alpha": "100"
            }]
        }]
    }
}
