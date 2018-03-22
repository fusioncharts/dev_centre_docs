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
            "theme": "fint"
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
                "isTrendZone": "1",
                "startvalue": "175000",
                "endValue": "150000",
                "color": "#8cbb2c",
                "alpha": "60",
                "valueOnRight": "1",
                "tooltext": "Quarterly sales target was $endDataValue to $startDataValue",
                "displayvalue": "Target"
            }]
        }]
    }
}
