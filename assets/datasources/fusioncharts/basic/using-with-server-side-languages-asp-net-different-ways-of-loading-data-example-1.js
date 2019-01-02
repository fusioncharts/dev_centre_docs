{
    type: 'msline',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales by Product",
            "numberPrefix": "$",
            "formatNumberScale": "1",
            "placeValuesInside": "1",
            "decimals": "0",

            "paletteColors": "#0075c2,#1aaf5d",
            "bgcolor": "#ffffff",
            "showBorder": "0",
            "showShadow": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "showAxisLines": "0",
            "showAlternateHGridColor": "0",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "xAxisName": "Day",
            "showValues": "0"
        },
        "categories": [{
            "category": [{
                "label": "A"
            }, {
                "label": "B"
            }, {
                "label": "C"
            }, {
                "label": "D"
            }, {
                "label": "E"
            }, {
                "label": "F"
            }]
        }],
        "dataset": [{
            "seriesname": "Current Year",
            "data": [{
                "value": "567500"
            }, {
                "value": "815300"
            }, {
                "value": "556800"
            }, {
                "value": "734500"
            }, {
                "value": "676800"
            }, {
                "value": "648500"
            }]
        }, {
            "seriesname": "Previous Year",
            "data": [{
                "value": "367300"
            }, {
                "value": "584500"
            }, {
                "value": "754000"
            }, {
                "value": "456300"
            }, {
                "value": "754500"
            }, {
                "value": "437600"
            }]
        }]

    }
}
