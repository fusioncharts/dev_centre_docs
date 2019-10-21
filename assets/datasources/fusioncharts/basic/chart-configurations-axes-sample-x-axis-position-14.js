{
    type: 'bar2d',
    renderAt: 'chart-container',
    width: '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Top 5 Stores by Sales",
            "subCaption": "Last month",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "alignCaptionWithCanvas": "0",
            "xAxisPosition": "right"
        },

        "data": [{
                "label": "Bakersfield Central",
                "value": "880000"
            },
            {
                "label": "Garden Groove harbour",
                "value": "730000"
            },
            {
                "label": "Los Angeles Topanga",
                "value": "590000"
            },
            {
                "label": "Compton-Rancho Dom",
                "value": "520000"
            },
            {
                "label": "Daly City Serramonte",
                "value": "330000"
            }
        ]
    }
}