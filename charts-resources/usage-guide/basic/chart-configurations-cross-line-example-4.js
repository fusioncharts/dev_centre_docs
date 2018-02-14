{
    type: 'MSColumn2D',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales report of Apple products",
            "subcaption": "In Billion $",
            "yaxismaxvalue": "250",
            "decimals": "0",
            "numberprefix": "$",
            "numbersuffix": "B",
            "placevaluesinside": "1",
            "valuefontbold": "1",
            "rotatevalues": "0",
            "divlinealpha": "50",
            "plotfillalpha": "80",
            "drawCrossLine": "1",
            "crossLineColor": "#bebec5",
            "crossLineAlpha": "100",
            "crossLineAnimatiion": "1",
            "crossLineAnimatiionDuration": "10",
            "theme": "zune"
        },
        "categories": [{
            "category": [{
                    "label": "2012"
                },
                {
                    "label": "2013"
                },
                {
                    "label": "2014"
                },
                {
                    "label": "2015"
                },
                {
                    "label": "2016"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "iPod",
                "data": [{
                        "value": "42.63"
                    },
                    {
                        "value": "35.16"
                    },
                    {
                        "value": "26.38"
                    },
                    {
                        "value": "20.38"
                    },
                    {
                        "value": "14.23"
                    }
                ]
            },
            {
                "seriesname": "iPhone",
                "data": [{
                        "value": "125.04"
                    },
                    {
                        "value": "150.26"
                    },
                    {
                        "value": "169.22"
                    },
                    {
                        "value": "231.22"
                    },
                    {
                        "value": "285.67"
                    }
                ]
            },
            {
                "seriesname": "iPad",
                "data": [{
                        "value": "58.31"
                    },
                    {
                        "value": "71.04"
                    },
                    {
                        "value": "67.99"
                    },
                    {
                        "value": "54.85"
                    },
                    {
                        "value": "60.53"
                    }
                ]
            }
        ]
    }
}