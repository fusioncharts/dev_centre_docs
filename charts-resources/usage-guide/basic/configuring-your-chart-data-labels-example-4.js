{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fusion",
            //Configure x-axis labels to display in staggered mode
            "labelDisplay": "stagger",
            "staggerLines": "3"
        },
        "data": [{
            "label": "January",
            "value": "420000"
        }, {
            "label": "February",
            "value": "810000"
        }, {
            "label": "March",
            "value": "720000"
        }, {
            "label": "April",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "June",
            "value": "510000"
        }, {
            "label": "July",
            "value": "680000"
        }, {
            "label": "August",
            "value": "620000"
        }, {
            "label": "September",
            "value": "610000"
        }, {
            "label": "October",
            "value": "490000"
        }, {
            "label": "November",
            "value": "900000"
        }, {
            "label": "December",
            "value": "730000"
        }]
    }
}
