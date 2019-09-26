{
    type: 'mssplinearea',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Number of Footfalls Last Week",
            "subCaption": "Garden Groove harbour vs Crompton-Rancho Dom",
            "xAxisName": "Day",
            "yAxisName": "No. of Footfalls",
            "showXAxisLine": "1",
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
                "vline": "true",
                "lineposition": "0",
                "color": "#F2726F",
                "labelHAlign": "right",
                "labelPosition": "0",
                "label": "National holiday"
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
            "seriesname": "Garden Groove harbour",
            "data": [{
                "value": "15123"
            }, {
                "value": "14233"
            }, {
                "value": "21507"
            }, {
                "value": "9110"
            }, {
                "value": "14829"
            }, {
                "value": "17503"
            }, {
                "value": "20202"
            }]
        }, {
            "seriesname": "Crompton-Rancho Dom",
            "data": [{
                "value": "11400"
            }, {
                "value": "12800"
            }, {
                "value": "17800"
            }, {
                "value": "10400"
            }, {
                "value": "11800"
            }, {
                "value": "13100"
            }, {
                "value": "20800"
            }]
        }]
    }
}
