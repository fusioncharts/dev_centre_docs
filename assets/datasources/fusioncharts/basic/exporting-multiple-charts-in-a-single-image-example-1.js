{
        type: 'column2d',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales report of Apple products",
                "subcaption": "2015",
                "chartTopMargin": "5",
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
                    "value": "231.22"
                },
                {
                    "label": "iPad",
                    "value": "54.85"
                },
                {
                    "label": "iPod",
                    "value": "20.38"
                }
            ]
        }
    }
