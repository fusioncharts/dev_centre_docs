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
            //Tooltip customization        
            "toolTipBorderColor": "#FFFFFF",
            "toolTipBgColor": "#666666",
            "toolTipBgAlpha": "80",
            //Theme
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
        }]
    }
}
