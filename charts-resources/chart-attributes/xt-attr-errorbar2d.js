{
    type: 'errorbar2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Machinery lifespan range",
            "subcaption": "Means & standard deviations",
            "xAxisName": "Systems",
            "yAxisName": "Life Span",
            "numberSuffix": " Years",
            "halfErrorBar": "0",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "showValues": "0",
            "errorBarColor": "666666",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "showXAxisLine": "1",
            "axisLineAlpha": "25",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendBgAlpha": "0",
            "showShadow": "0",
            "showAlternateHgridColor": "0",
            "showHoverEffect": "1"
        },
        "categories": [{
            "category": [{
                "label": "Central AC"
            }, {
                "label": "Computers"
            }, {
                "label": "Bar-code Scanners"
            }, {
                "label": "Packaging Machines"
            }, {
                "label": "Chilling Compartments"
            }]
        }],
        "dataset": [{
            "seriesname": "Daly City Serramonte",
            "data": [{
                "value": "8",
                "errorvalue": "2"
            }, {
                "value": "3",
                "errorvalue": "0.5"
            }, {
                "value": "2",
                "errorvalue": "1"
            }, {
                "value": "6",
                "errorvalue": "1.8"
            }, {
                "value": "8",
                "errorvalue": "1.2"
            }]
        }, {
            "seriesname": "Bakersfield Central",
            "data": [{
                "value": "7",
                "errorvalue": "1"
            }, {
                "value": "4",
                "errorvalue": "0.5"
            }, {
                "value": "2",
                "errorvalue": "1"
            }, {
                "value": "4",
                "errorvalue": "0.8"
            }, {
                "value": "7",
                "errorvalue": "1"
            }]
        }, {
            "seriesname": "Garden Groove harbour",
            "data": [{
                "value": "9",
                "errorvalue": "2"
            }, {
                "value": "3",
                "errorvalue": "0.7"
            }, {
                "value": "3",
                "errorvalue": "1"
            }, {
                "value": "6",
                "errorvalue": "1.8"
            }, {
                "value": "7",
                "errorvalue": "1.2"
            }]
        }]
    }
}
