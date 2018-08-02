{
    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales Summary",
            "subcaption": "Last year",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            "theme": "fusion"
        },
        "data": [{
            "label": "Q1",
            "value": "195000"
        }, {
            "label": "Q2",
            "value": "155000"
        }, {
            "label": "Q3",
            "value": "178000"
        }, {
            "label": "Q4",
            "value": "192000"
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "175000",
                "color": "#8cbb2c",
                "thickness": "4",
                "alpha": "60",
                "displayvalue": "Target - $175K"
            }]
        }]
    }
}
