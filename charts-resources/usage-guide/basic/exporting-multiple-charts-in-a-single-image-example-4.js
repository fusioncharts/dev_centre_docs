{
    	id : 'chart-4',
        type: 'column2d',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "subCaption": "2012",
                "chartTopMargin": "2",
                "subCaptionFontBold": "1",
                "rotatevalues": "0",
                "numberprefix": "$",
                "numbersuffix": "B",
                "yAxisMaxValue": "250",
                "plotToolText": "<div>Revenue : <b>$datavalue</b></div>",
                "theme": "zune"
            },            
            "data": [
                {
                    "label": "iPhone",
                    "value": "125.04"
                }, 
                {
                    "label": "iPad",
                    "value": "58.31"
                }, 
                {
                    "label": "iPod",
                    "value": "42.63"
                }
            ]
        }
    }