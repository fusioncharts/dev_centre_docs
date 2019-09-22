{
    type: 'mscolumn2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Most popular programming language",
            "subCaption": "2017 - 2018",
            "xAxisName": "Programming Language",
            "yAxisName": "Users",
            "showLegend": "1",
            "interactiveLegend": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Java"
            }, {
                "label": "Python"
            }, {
                "label": "JavaScript"
            }, {
                "label": "C++"
            }, {
                "label": "C#"
            }, {
                "label": "PHP"
            }, {
                "label": "Perl"
            }]
        }],
        "dataset": [{
            "seriesname": "Users",
            "data": [{
                "value": "62000"
            }, {
                "value": "46000"
            }, {
                "value": "38000"
            }, {
                "value": "31000"
            }, {
                "value": "27000"
            }, {
                "value": "14000"
            }, {
                "value": "14000"
            }]
        }]
    }
}