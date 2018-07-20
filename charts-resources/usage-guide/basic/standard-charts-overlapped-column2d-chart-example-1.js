{
    type: "overlappedColumn2d",
    renderAt: "chartContainer",
    width: "700",
    height: "400",
    dataFormat: "json",
    dataSource: {
        "chart": {
            "caption": "Healthcare Expenditure per capita (Public vs Private sector)",
            "subCaption": "in 2016",
            "xAxisName": "Country",
            "yAxisName": "Amount (in USD)",
            "showValues": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Switzerland"
            }, {
                "label": "USA"
            }, {
                "label": "Canada"
            }, {
                "label": "Australia"
            }, {
                "label": "OECD-35"
            }, {
                "label": "Israel"
            }]
        }],
        "dataset": [{
            "seriesname": "Public",
            "data": [{
                "value": "5038"
            }, {
                "value": "4860"
            }, {
                "value": "3341"
            }, {
                "value": "3190"
            }, {
                "value": "2937"
            }, {
                "value": "1702"
            }]
        }, {
            "seriesname": "Private",
            "data": [{
                "value": "2881"
            }, {
                "value": "5032"
            }, {
                "value": "1412"
            }, {
                "value": "1518"
            }, {
                "value": "1066"
            }, {
                "value": "1120"
            }]
        }]
    }
}