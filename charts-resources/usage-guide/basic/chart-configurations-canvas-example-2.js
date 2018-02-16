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
            "placevaluesInside": "1",
            "rotatevalues": "1",
            "valueFontColor": "#ffffff",
            //Changing canvas background color
            "canvasbgColor": "#1790e1",
            //Changing canvas background alpha
            "canvasbgAlpha": "10",
            "canvasBorderThickness": "1",
            //Hiding alternate horizontal grid
            "showAlternateHGridColor": "0",
            "bgColor": "#eeeeee",
            "theme": "fint"
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
