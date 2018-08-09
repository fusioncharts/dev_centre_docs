{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales figures for top 4 chocolate brands - FY2013-2014",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Brand",
            "yAxisName": "Amount (In USD)",
            "yAxisMaxValue": "120000",
            "numberPrefix": "$",
            "theme": "fusion",
            "chartBottomMargin": "70",
            "PlotfillAlpha": "100",
            "placeValuesInside": "1",
            "rotateValues": "0",
            "valueFontColor": "#333333",
            "valuePadding": "-10"
        },
        "annotations": {
            "width": "500",
            "height": "300",
            "autoScale": "1",
            "groups": [{
                "id": "user-images",
                "items": [

                    {
                        "id": "dyn-label-bg",
                        "type": "rectangle",
                        "showBorder": "1",
                        "borderColor": "12345d",

                        "fillcolor": "ffffff",
                        "x": "$canvasEndY-245",
                        "y": "$canvasEndY+45",
                        "tox": "$canvasEndX+10",
                        "toy": "$canvasEndY + 80"

                    }, {
                        "id": "dyn-label",
                        "type": "text",
                        "fillcolor": "#000000",
                        "fontsize": "13",
                        "text": "Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years",
                        "bold": "1",
                        "wrap": "1",
                        "wrapWidth": "350",
                        "x": "$canvasEndY-20",
                        "y": "$canvasEndY + 60",
                    }
                ]
            }]
        },
        "data": [{
            "label": "Butterfinger",
            "value": "92000"
        }, {
            "label": "Snickers",
            "value": "87000"
        }, {
            "label": "Coffee Crisp",
            "value": "83000"
        }, {
            "label": "100 Grand",
            "value": "80000"
        }]
    }
}
