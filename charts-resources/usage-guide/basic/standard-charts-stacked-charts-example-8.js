{
    type: 'stackedcolumn2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenue split by product category",
            "subCaption": "For current year",
            "xAxisname": "Quarter",
            "yAxisName": "% Revenue",
            "numberPrefix": "$",
            //To show revenue stack in Percentage distribution
            "stack100Percent": "1",
            "decimals": "1",
            //To show value as datavalue and percent value in tooltip
            "showPercentInTooltip": "1",
            "showValues": "1",
            "showPercentValues": "0",
            //Value font color
            "valueFontColor": "#ffffff",

            "theme": "fint"
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
            "seriesname": "Food Products",
            "data": [{
                "value": "11000"
            }, {
                "value": "15000"
            }, {
                "value": "13500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "11400"
            }, {
                "value": "14800"
            }, {
                "value": "8300"
            }, {
                "value": "11800"
            }]
        }]
    }
}
