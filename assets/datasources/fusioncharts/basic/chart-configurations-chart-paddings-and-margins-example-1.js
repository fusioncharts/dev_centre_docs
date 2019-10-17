{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Monthly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Amount (In USD)",
            //Modifying chart left margin
            "chartLeftMargin": "40",
            //Modifying chart top margin
            "chartTopMargin": "40",
            //Modifying chart right margin
            "chartRightMargin": "40",
            //Modifying chart bottom margin
            "chartBottomMargin": "40",
            "numberPrefix": "$",
            "showBorder": "1"
        },
        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    }
}
