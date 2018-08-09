{
    type: 'mscolumnline3d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Cost Analysis",
            "xaxisname": "Quarters",
            "yaxisname": "Cost",
            "numberprefix": "$",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                    "label": "Quarter 1"
                },
                {
                    "label": "Quarter 2"
                },
                {
                    "label": "Quarter 3"
                },
                {
                    "label": "Quarter 4"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "Fixed Cost",
                "data": [{
                        "value": "235000"
                    },
                    {
                        "value": "225100"
                    },
                    {
                        "value": "222000"
                    },
                    {
                        "value": "230500"
                    }
                ]
            },
            {
                "seriesname": "Variable Cost",
                "data": [{
                        "value": "230000"
                    },
                    {
                        "value": "143000"
                    },
                    {
                        "value": "198000"
                    },
                    {
                        "value": "327600"
                    }
                ]
            },
            {
                "seriesname": "Budgeted cost",
                "renderas": "Line",
                "data": [{
                        "value": "455000"
                    },
                    {
                        "value": "334000"
                    },
                    {
                        "value": "426000"
                    },
                    {
                        "value": "403000"
                    }
                ]
            }
        ]
    }

}