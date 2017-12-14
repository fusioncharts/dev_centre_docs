{
    type: 'inversemsline',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Average Page Load Time (hsm.com)",
            "subCaption": "Last Week",
            "showBorder": "0",
            "xAxisName": "Day",
            "yAxisName": "Time (In Sec)",
            "numberSuffix": "s",

            //Cosmetics
            "lineThickness": "2",
            "paletteColors": "#008ee4,#6baa01",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "showBorder": "0",
            "bgColor": "#ffffff",
            "showShadow": "0",
            "showLegend": "0",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineDashed": "1",
            "divLineDashLen": "1",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
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
