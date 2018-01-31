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
            "theme": "fint",
            "xAxisName": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "placevaluesInside": "1",
            "rotatevalues": "1",
            "bgColor": "#eeeeee,#cccccc",
            //Adding canvas background gradient colors(Comma separated)
            "canvasbgColor": "#eeeeee,#b3b3b3",
            //Changing canvas baground alpha
            "canvasbgAlpha": "100",
            //Adding canvas background color ratio
            "canvasBgRatio": "40,60",
            //Adding canvas background angle
            "canvasBgAngle": "0"

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
