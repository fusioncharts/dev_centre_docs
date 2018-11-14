{
    type: 'msstackedcolumn2dsplinedy',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales of Liquor",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Mon",
            "value": "4123"
        }, {
            "label": "Tue",
            "value": "4633"
        }, {
            "label": "Wed",
            "value": "5507"
        }, {
            "label": "Thu",
            "value": "4910"
        }, {
            "label": "Fri",
            "value": "5529"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
