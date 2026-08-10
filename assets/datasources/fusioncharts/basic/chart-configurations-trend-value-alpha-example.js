{
 type: 'column2d',
        renderAt: 'chart-container',
        id: 'myChart',
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
                "theme": "fint",
                //Alpha setting for trendlines/zones (Global)
                "trendValueAlpha": "100",
                "trendLineAlpha": "25"

            },
            "data": [
                {
                    "label": "Q1",
                    "value": "195000"
                }, 
                {
                    "label": "Q2",
                    "value": "155000"
                }, 
                {
                    "label": "Q3",
                    "value": "178000"
                }, 
                {
                    "label": "Q4",
                    "value": "192000"
                }
            ],
            "trendlines": [
                {
					                    
                    "line": [
                        {
                            "startValue": "75000",
                           "endValue": "150000",
                           "isTrendZone": "1",
                            "color": "#FF0000",
                            "valueOnRight": "1",
                            "displayvalue": "Target - $175K"
                            
                        }
                    ]
                }
            ]
        }
    }
