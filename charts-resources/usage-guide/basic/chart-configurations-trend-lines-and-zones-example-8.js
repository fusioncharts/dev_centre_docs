{

    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '550',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for the last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "theme": "fusion",
            //Attributes to configure Trend Values
            "trendValueFont": "Arial",
            "trendValueFontSize": "12",
            "trendValueFontBold": "1",
            "trendValueFontItalic": "1",
            "trendValueAlpha": "80"
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
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "700000",
                "color": "#1aaf5d",
                "valueOnRight": "1",
                "displayvalue": "Monthly Target"
            }]
        }]
    }
}