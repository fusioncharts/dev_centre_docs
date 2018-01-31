{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "captionAlignment": "left",
            "captionPadding": "25",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "theme": "fint"
        },

        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }],

        "annotations": {
            "groups": [{
                "id": "total-label",
                "items": [{
                    "id": "total-label-bg",
                    "type": "rectangle",
                    "radius": "3",
                    "x": "380",
                    "y": "25",
                    "toX": "480",
                    "toY": "55",
                    "fillColor": "#0075c2",
                    "alpha": "70"
                }, {
                    "id": "total-label-value",
                    "type": "text",
                    "fontColor": "#ffffff",
                    "fontSize": "10",
                    "x": "430",
                    "y": "40",
                    "wrapWidth": "90",
                    "wrapHeight": "15",
                    "text": "Total: $7.5M"
                }]
            }]
        }
    }
}
