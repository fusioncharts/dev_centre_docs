{
    type: 'line',
    renderAt: 'chart-container',
    width: '500',
    height: '250',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fusion",
            //Remove the comment for the canvasPadding attribute below to add custom padding. The chart adds a canvasPadding automatically.
            //"canvasPadding": "0"
        },

        "data": [{
            "label": "First Quarter",
            "value": "420000"
        }, {
            "label": "Second Quarter",
            "value": "810000"
        }, {
            "label": "Third Quarter",
            "value": "720000"
        }, {
            "label": "Fourth Quarter",
            "value": "550000"
        }]
    }
}
