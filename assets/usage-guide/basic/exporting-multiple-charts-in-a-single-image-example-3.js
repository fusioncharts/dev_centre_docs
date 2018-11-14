{
        id : 'chart-3',
        type: 'column2d',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "subcaption": "2013",
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
                    "value": "150.26"
                }, 
                {
                    "label": "iPad",
                    "value": "71.04"
                }, 
                {
                    "label": "iPod",
                    "value": "35.16"
                }
            ]
        }
    }