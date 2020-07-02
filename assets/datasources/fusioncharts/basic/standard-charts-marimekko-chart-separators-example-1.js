{
    type: 'marimekko',
    renderAt: 'chart-container',
    width: '100%',
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
        "showPlotBorder" : "1",
        "plotBorderThickness":"0.25",
        //Hide X-axis percent value
        "showxaxispercentvalues": "0",
        "showsum": "1",
        "theme": "fint",
        "formatNumberScale": "0",
        "decimals": "2",
        "forceDecimals": "1",
        
        "inDecimalSeparator": ",",
        "inThousandSeparator": ".",
        "DecimalSeparator": ",",
        "ThousandSeparator": "."
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Bose",
                    "widthPercent": "45"
                },
                {
                    "label": "Dell",
                    "widthPercent": "30"
                },
                {
                    "label": "Apple",
                    "widthPercent": "25"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "California",
            "data": [
                {
                    "value": "335.000,50"
                },
                {
                    "value": "225.100,40"
                },
                {
                    "value": "164.200,30"
                }
            ]
        },
        {
            "seriesname": "Washington",
            "data": [
                {
                    "value": "215.000,35"
                },
                {
                    "value": "198.000,80"
                },
                {
                    "value": "120.000,30"
                }
            ]
        },
        {
            "seriesname": "Nevada",
            "data": [
                {
                    "value": "298.000,40"
                },
                {
                    "value": "109.300,20"
                },
                {
                    "value": "153.600,80"
                }
            ]
        }
    ]
}
}
