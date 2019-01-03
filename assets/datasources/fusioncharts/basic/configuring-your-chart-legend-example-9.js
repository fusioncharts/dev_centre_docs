{
    type: 'mscolumn2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "subCaption": "FY2012-13 versus FY2013-14",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "theme": "fusion",
            "legendBgAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666",

            //New attributes for drawing a custom legend icon.

            "drawCustomLegendIcon": "1",
            "legendIconAlpha": "50",
            "legendIconBorderColor": "#123456",
            "legendIconBorderThickness": "3",
            "legendIconSides": "5",
            "legendIconStartAngle": "60"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "FY2012-2013",
            "data": [{
                "value": "10000"
            }, {
                "value": "11500"
            }, {
                "value": "12500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "FY2013-2014",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "26800"
            }]
        }]
    }
}
