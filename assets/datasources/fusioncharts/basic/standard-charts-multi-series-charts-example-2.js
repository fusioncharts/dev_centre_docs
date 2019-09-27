{
    type: 'mscolumn3d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Comparison of Quarterly Revenue",
            "xAxisname": "Quarter",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "plotFillAlpha": "80",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1"
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
            "seriesname": "Previous Year",
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
            "seriesname": "Current Year",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "26800"
            }]
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "12250",
                "color": "#5D62B5",
                "displayvalue": "Previous{br}Average",
                "valueOnRight": "1",
                "thickness": "1",
                "showBelow": "1",
                "tooltext": "Previous year quarterly target  : $13.5K"
            }, {
                "startvalue": "25950",
                "color": "#29C3BE",
                "displayvalue": "Current{br}Average",
                "valueOnRight": "1",
                "thickness": "1",
                "showBelow": "1",
                "tooltext": "Current year quarterly target  : $23K"
            }]
        }]
    }
}