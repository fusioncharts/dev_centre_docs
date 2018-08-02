{
    type: 'funnel',
    renderAt: 'chart-container',
    width: '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Website visits",
            "subcaption": "Purchase - Conversion analysis for last year",
            "decimals": "1",
            "is2D": "1",
            "labelDistance": "15",
            "plotTooltext": "Success : $percentOfPrevValue",
            "showPercentValues": "1",
            //Use same slant angle
            "useSameSlantAngle": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Unique Website Visits",
            "value": "1460000"
        }, {
            "label": "Programme Details Section Visits",
            "value": "930000"
        }, {
            "label": "Attempts to Register",
            "value": "540000"
        }, {
            "label": "Successful Registrations",
            "value": "210000"
        }, {
            "label": "Logged In",
            "value": "190000"
        }, {
            "label": "Purchased on Introductory Offers",
            "value": "120000"
        }]
    }
}
