{
    type: 'logmscolumn2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store footfall vs Online visitors ",
            "subCaption": "Last Year",
            "xAxisName": "Quarter",
            "yAxisName": "No of visitors",
            "base": "10",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Total footfalls",
            "data": [{
                "value": "126734"
            }, {
                "value": "159851"
            }, {
                "value": "197393"
            }, {
                "value": "168560"
            }, {
                "value": "199428"
            }]
        }, {
            "seriesname": "Online Visits",
            "data": [{
                "value": "1126059"
            }, {
                "value": "1292145"
            }, {
                "value": "1496849"
            }, {
                "value": "1460249"
            }, {
                "value": "1083962"
            }]
        }]
    }
}
