{
    type: 'logmscolumn2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store footfall - Last quarter",
            "subCaption": "Top 5 stores",
            "xAxisName": "Quarter",
            "yAxisName": "No of visitors",

            //Log Base
            "base": "5",

            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Los Angeles Topanga"
            }, {
                "label": "Bakersfield Central"
            }, {
                "label": "Garden Groove harbour"
            }, {
                "label": "Crompton-Rancho Dom"
            }, {
                "label": "Daly City Serramonte"
            }]
        }],
        "dataset": [{
            "seriesname": "Total footfalls",
            "data": [{
                "value": "1960000"
            }, {
                "value": "1110000"
            }, {
                "value": "609000"
            }, {
                "value": "560000"
            }, {
                "value": "470000"
            }]
        }, {
            "seriesname": "No of Transactions",
            "data": [{
                "value": "126000"
            }, {
                "value": "92140"
            }, {
                "value": "36000"
            }, {
                "value": "46000"
            }, {
                "value": "83000"
            }]
        }]
    }
}
