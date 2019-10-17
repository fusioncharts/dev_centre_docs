{
    type: 'stackedarea2dlinedy',
    renderAt: 'container',
    width: '550',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Energy Data for consumption vs. Price ",
            "subCaption": "2010-2014",
            "xAxisname": "Year",
            "pYAxisName": "Total consumption-in billion BTU",
            "sYAxisName": "Price-in USD per million BTU",
            "sNumberSuffix": "M",
            "theme": "fusion",
            "showanchors": "0",
        },
        "categories": [{
            "category": [{
                    "label": "2010"
                },
                {
                    "label": "2011"
                },
                {
                    "label": "2012"
                },
                {
                    "label": "2013"
                },
                {
                    "label": "2014"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "Coal",
                "data": [{
                        "value": "41656762"
                    },
                    {
                        "value": "39327714"
                    },
                    {
                        "value": "34761848"
                    },
                    {
                        "value": "36077545"
                    },
                    {
                        "value": "35993151"
                    }
                ]
            },
            {
                "seriesname": "Electricity",
                "data": [{
                        "value": "25623035"
                    },
                    {
                        "value": "25588952"
                    },
                    {
                        "value": "25212289"
                    },
                    {
                        "value": "25418495"
                    },
                    {
                        "value": "25690310"
                    }
                ]
            },
            {
                "seriesname": "Natural Gas",
                "data": [{
                        "value": "49267013"
                    },
                    {
                        "value": "50029967"
                    },
                    {
                        "value": "52276699"
                    },
                    {
                        "value": "53716269"
                    },
                    {
                        "value": "55026395"
                    }
                ]
            },
            {
                "seriesname": "LPG",
                "data": [{
                        "value": "5641972"
                    },
                    {
                        "value": "5677909"
                    },
                    {
                        "value": "5823618"
                    },
                    {
                        "value": "6333475"
                    },
                    {
                        "value": "6180102"
                    }
                ]
            },
            {
                "seriesname": "Total Price",
                "renderAs": "line",
                "showanchors": "1",
                "parentYAxis": "S",
                "showValues": "0",
                "data": [{
                        "value": "3386.97"
                    },
                    {
                        "value": "3571.81‬"
                    },
                    {
                        "value": "5370.72‬"
                    },
                    {
                        "value": "5658.28‬"
                    },
                    {
                        "value": "5974.85‬‬"
                    }
                ]
            }
        ]
    }
}