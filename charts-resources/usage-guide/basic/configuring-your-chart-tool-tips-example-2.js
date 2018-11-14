{
    type: 'column2d',
    renderAt: 'chart-container',
    
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales Summary",
            "subcaption": "For last year",
            "xaxisname": "Quarter",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            //Theme
            "theme": "fusion"
        },
        "data": [{
            "label": "Q1",
            "value": "195000",
            "tooltext": "Quarter 1{br}Total Sale: $195K{br}Rank: 1"
        }, {
            "label": "Q2",
            "value": "155000",
            "tooltext": "Quarter 2{br}Total Sale: $155K{br}Rank: 4"
        }, {
            "label": "Q3",
            "value": "178000",
            "tooltext": "Quarter 3{br}Total Sale: $178K{br}Rank: 3"
        }, {
            "label": "Q4",
            "value": "192000",
            "tooltext": "Quarter 4{br}Total Sale: $192K{br}Rank: 4"
        }]
    }
}
