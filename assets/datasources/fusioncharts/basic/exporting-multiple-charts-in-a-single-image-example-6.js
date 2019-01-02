{
        id : 'chart-2',
        type: 'column2d',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "subcaption": "2014",
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
                    "value": "169.22"
                }, 
                {
                    "label": "iPad",
                    "value": "67.99"
                }, 
                {
                    "label": "iPod",
                    "value": "26.38"
                }
            ]
        }
    }