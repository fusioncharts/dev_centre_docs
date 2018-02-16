{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fint"
        },
        "data": [{
            "label": "Jan",
            "value": "420000",
            //Using color attribute to specifically add color to each data plot
            "color": "#008ee4"
        }, {
            "label": "Feb",
            "value": "810000",
            "color": "#008ee4"
        }, {
            "label": "Mar",
            "value": "720000",
            "color": "#008ee4"
        }, {
            "label": "Apr",
            "value": "550000",
            "color": "#9b59b6"
        }, {
            "label": "May",
            "value": "910000",
            "color": "#9b59b6"
        }, {
            "label": "Jun",
            "value": "510000",
            "color": "#9b59b6"
        }, {
            "label": "Jul",
            "value": "680000",
            "color": "#6baa01"
        }, {
            "label": "Aug",
            "value": "620000",
            "color": "#6baa01"
        }, {
            "label": "Sep",
            "value": "610000",
            "color": "#6baa01"
        }, {
            "label": "Oct",
            "value": "490000",
            "color": "#e44a00"
        }, {
            "label": "Nov",
            "value": "900000",
            "color": "#e44a00"
        }, {
            "label": "Dec",
            "value": "730000",
            "color": "#e44a00"
        }]
    }
}
