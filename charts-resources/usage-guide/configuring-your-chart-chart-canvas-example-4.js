{
    type: 'column3d',
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
            "theme": "fint",
            "numberPrefix": "$",
            "placevaluesInside": "1",
            "rotatevalues": "1",
            //Showing canvas bg to apply background color
            "showCanvasBg": "1",
            //Shwoing canvas base to apply base color
            "showCanvasBase": "1",
            //Changing canvas base depth
            "canvasBaseDepth": "14",
            //Changing canvas background depth
            "canvasBgDepth": "5",
            //Changing canvas base color
            "canvasBaseColor": "#aaaaaa",
            //Changing canvas background color
            "canvasBgColor": "#eeeeee"
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
