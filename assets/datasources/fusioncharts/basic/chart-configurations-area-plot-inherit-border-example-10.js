{
    type: 'area2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "plotFillColor": "69D5D1",
            "caption": "Sales of Liquor",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "showPlotBorder": "1",
            "inheritPlotBorderColor": "1",
            "plotBorderThickness": "6"
        },

        "data": [{
                "label": "Mon",
                "value": "4123"
            },
            {
                "label": "Tue",
                "value": "4633"
            },
            {
                "label": "Wed",
                "value": "5507"
            },
            {
                "label": "Thu",
                "value": "4910"
            },
            {
                "label": "Fri",
                "value": "5529"
            },
            {
                "label": "Sat",
                "value": "5803"
            },
            {
                "label": "Sun",
                "value": "6202"
            }
        ]
    }
}