{
    type: 'inversemsline',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Average Page Load Time (hsm.com)",
            "subCaption": "Last Week",
            "xAxisName": "Day",
            "yAxisName": "Time (In Sec)",
            "numberSuffix": "s",

            //Cosmetics
            "lineThickness": "2",
            "showLegend": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "dataset": [{
            "seriesname": "Loading Time",
            "allowDrag": "0",
            "data": [{
                "value": "6"
            }, {
                "value": "5.8"
            }, {
                "value": "5"
            }, {
                "value": "4.3"
            }, {
                "value": "4.1"
            }, {
                "value": "3.8"
            }, {
                "value": "3.2"
            }]
        }]
    }
}
