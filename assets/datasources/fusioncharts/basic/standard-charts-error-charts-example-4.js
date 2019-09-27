{
    type: 'errorbar2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "xaxisname": "Systems",
            "yaxisname": "Life Span (years)",
            "caption": "Systems Life Span - Top 3 stores",
            "subcaption": "(With Error Values)",
            "numbersuffix": " Years",
            //Error bar configuration
            "halferrorbar": "0",
            "errorBarColor": "#990000",
            "errorBarAlpha": "50",
            "errorBarThickness": "2",
            "errorBarWidthPercent": "30"
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
