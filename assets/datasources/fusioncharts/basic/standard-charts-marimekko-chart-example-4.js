{
    type: 'marimekko',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 3 Electronic Brands in Top 3 Stores",
            "subcaption": "Last month",
            "aligncaptiontocanvas": "0",
            "yaxisname": "Statewise Sales (in %)",
            "xaxisname": "Brand",
            "numberprefix": "$",
            "showPlotBorder": "1",
            "plotBorderThickness": "0.25",
            //Hide X-axis percent value
            "showxaxispercentvalues": "0",
            "showsum": "1",

            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Bose",
                "widthPercent": "45"
            }, {
                "label": "Dell",
                "widthPercent": "30"
            }, {
                "label": "Apple",
                "widthPercent": "25"
            }]
        }],
        "dataset": [{
            "seriesname": "California",
            "data": [{
                "value": "335000"
            }, {
                "value": "225100"
            }, {
                "value": "164200"
            }]
        }, {
            "seriesname": "Washington",
            "data": [{
                "value": "215000"
            }, {
                "value": "198000"
            }, {
                "value": "120000"
            }]
        }, {
            "seriesname": "Nevada",
            "data": [{
                "value": "298000"
            }, {
                "value": "109300"
            }, {
                "value": "153600"
            }]
        }]
    }
}
