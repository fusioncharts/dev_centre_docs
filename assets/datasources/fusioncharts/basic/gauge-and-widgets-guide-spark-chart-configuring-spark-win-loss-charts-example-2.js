{
    type: 'sparkwinloss',
    renderAt: 'chart-container',
    width: '400',
    height: '60',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Bobby Fischer (vs. Spassky)",
            "subcaption": "World Chess Championship 1972",
            "subCaptionFontSize": "11",
            "numberPrefix": "$",
            "chartBottomMargin": "20",
            //Configuring win color (In this case success)
            "winColor": "#00cc33",
            //Configuring loss color (In this case failure)
            "lossColor": "#cc0000",
            //Configuring draw color
            "drawColor": "#0075c2"
        },
        "dataset": [{
            "data": [{
                "value": "L"
            }, {
                "value": "L"
            }, {
                "value": "W"
            }, {
                "value": "D"
            }, {
                "value": "W"
            }, {
                "value": "W"
            }, {
                "value": "D"
            }, {
                "value": "W"
            }, {
                "value": "D"
            }, {
                "value": "W"
            }, {
                "value": "L"
            }, {
                "value": "D"
            }, {
                "value": "W"
            }, {
                "value": "D"
            }, {
                "value": "D"
            }, {
                "value": "D"
            }, {
                "value": "D"
            }, {
                "value": "D"
            }, {
                "value": "D"
            }, {
                "value": "D"
            }, {
                "value": "W"
            }]
        }]
    }
}
