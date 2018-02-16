{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly revenue",
            "subCaption": "Last year",
            "xAxisName": "Quarter (Click to drill down)",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fint"
        },

        "data": [{
            "label": "Q1",
            "value": "1950000",
            "link": "newchart-json-q1"
        }, {
            "label": "Q2",
            "value": "1970000",
            "link": "newchart-json-q2"
        }, {
            "label": "Q3",
            "value": "1910000",
            "link": "newchart-json-q3"
        }, {
            "label": "Q4",
            "value": "2120000",
            "link": "newchart-json-q4"
        }],

        "linkeddata": [{
            "id": "q1",
            "linkedchart": {
                "chart": {
                    "caption": "Monthly Revenue",
                    "subcaption": "First Quarter",
                    "xAxisName": "Month",
                    "yAxisName": "Revenue (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint"
                },
                "data": [{
                    "label": "Jan",
                    "value": "420000"
                }, {
                    "label": "Feb",
                    "value": "810000"
                }, {
                    "label": "Mar",
                    "value": "720000"
                }]
            }
        }, {
            "id": "q2",
            "linkedchart": {
                "chart": {
                    "caption": "Monthly Revenue",
                    "subcaption": "Second Quarter",
                    "xAxisName": "Month",
                    "yAxisName": "Revenue (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint"
                },
                "data": [{
                    "label": "Apr",
                    "value": "550000"
                }, {
                    "label": "May",
                    "value": "910000"
                }, {
                    "label": "Jun",
                    "value": "510000"
                }]
            }
        }, {
            "id": "q3",
            "linkedchart": {
                "chart": {
                    "caption": "Monthly Revenue",
                    "subcaption": "Third Quarter",
                    "xAxisName": "Month",
                    "yAxisName": "Revenue (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint"
                },
                "data": [{
                    "label": "Jul",
                    "value": "680000"
                }, {
                    "label": "Aug",
                    "value": "620000"
                }, {
                    "label": "Sep",
                    "value": "610000"
                }]
            }
        }, {
            "id": "q4",
            "linkedchart": {
                "chart": {
                    "caption": "Monthly Revenue",
                    "subcaption": "Fourth Quarter",
                    "xAxisName": "Month",
                    "yAxisName": "Revenue (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint"
                },
                "data": [{
                    "label": "Oct",
                    "value": "490000"
                }, {
                    "label": "Nov",
                    "value": "900000"
                }, {
                    "label": "Dec",
                    "value": "730000"
                }]
            }
        }]
    }
}
