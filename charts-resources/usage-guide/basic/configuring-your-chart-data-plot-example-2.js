{
    type: 'mscolumn2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales - By employee",
            "subcaption": "Last year",
            "xaxisname": "Employee",
            "yaxisname": "Amount (in USD)",
            "numberprefix": "$",
            "showValues": "0",
            //Pallatte Colors
            "paletteColors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82",
            //Theme
            "theme": "fusion"

        },
        "categories": [{
            "category": [{
                "label": "Mark"
            }, {
                "label": "John"
            }, {
                "label": "Symonds"
            }, {
                "label": "Peter"
            }]
        }],
        "dataset": [{
            "seriesname": "Q1",
            "data": [{
                "value": "27400"
            }, {
                "value": "29800"
            }, {
                "value": "25800"
            }, {
                "value": "26800"
            }]
        }, {
            "seriesname": "Q2",
            "data": [{
                "value": "29600"
            }, {
                "value": "32600"
            }, {
                "value": "31800"
            }, {
                "value": "36700"
            }]
        }, {
            "seriesname": "Q3",
            "data": [{
                "value": "29700"
            }, {
                "value": "31900"
            }, {
                "value": "34800"
            }, {
                "value": "24800"
            }]
        }, {
            "seriesname": "Q4",
            "data": [{
                "value": "35000"
            }, {
                "value": "27500"
            }, {
                "value": "32500"
            }, {
                "value": "34000"
            }]
        }]
    }
}
