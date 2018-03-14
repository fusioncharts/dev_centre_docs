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
            "is2D": "0",
            "streamlinedData": "0",

            //Show legend
            "showLegend": "1",
            "showLabels": "0",
            "legendPosition": "right",

            "theme": "fint"
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
