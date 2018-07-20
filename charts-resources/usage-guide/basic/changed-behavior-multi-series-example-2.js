{
    "type": "mscombidy2d",
    "renderAt": "chartContainer",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "Major League Baseball - Season Rankings",
            "subCaption": "Teams in the Lead",
            "xAxisName": "Team",
            "yAxisName": "Matches",
            "syAxisName": "Wins",
            "theme": "fusion",
            "syaxismaxvalue": "100",
            "showValues": "0"
        },
        "categories": [{
            "category": [{
                "label": "Boston Red Sox"
            }, {
                "label": "New York Yankees"
            }, {
                "label": "Tampa Bay Rays"
            }, {
                "label": "Toronto Blue Jays"
            }, {
                "label": "Baltimore Orioles"
            }, {
                "label": "Cleveland Indians"
            }, {
                "label": "Detroit Tigers"
            }, {
                "label": "Minnesota Twins"
            }, {
                "label": "Chicago White Sox"
            }, {
                "label": "Kansas City Royals"
            }]
        }],
        "dataset": [{
                "seriesname": "Matches",
                "data": [{
                        "value": "88"
                    }, {
                        "value": "84"
                    }, {
                        "value": "86"
                    }, {
                        "value": "86"
                    }, {
                        "value": "85"
                    }, {
                        "value": "85"
                    }, {
                        "value": "88"
                    }, {
                        "value": "83"
                    }, {
                        "value": "86"
                    }, {
                        "value": "86"
                    }

                ]
            },
            {
                "seriesname": "Wins",
                "parentYAxis": "S",
                "renderAs": "column",
                "data": [{
                    "value": "57"
                }, {
                    "value": "54"
                }, {
                    "value": "42"
                }, {
                    "value": "39"
                }, {
                    "value": "24"
                }, {
                    "value": "46"
                }, {
                    "value": "38"
                }, {
                    "value": "35"
                }, {
                    "value": "29"
                }, {
                    "value": "25"
                }, ]
            },

        ]
    }
}