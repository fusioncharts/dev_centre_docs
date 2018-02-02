{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 4 Chocolate Brands Sold",
            "subCaption": "Last Year",
            "xAxisName": "Brand",
            "yAxisName": "Amount (In USD)",
            "yAxisMaxValue": "120000",
            "numberPrefix": "$",
            "theme": "fint",
            "PlotfillAlpha": "0",
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#333333"

        },
        "annotations": {
            "width": "500",
            "height": "300",
            "autoScale": "1",
            "groups": [{
                "id": "user-images",
                "xScale_": "20",
                "yScale_": "20",
                "items": [{
                    "id": "butterFinger-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/butterFinger.png",
                    "x": "$xaxis.label.0.x - 30",
                    "y": "$canvasEndY - 150",
                    "xScale": "50",
                    "yScale": "40",
                }, {
                    "id": "tom-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/snickrs.png",
                    "x": "$xaxis.label.1.x - 26",
                    "y": "$canvasEndY - 141",
                    "xScale": "48",
                    "yScale": "38"
                }, {
                    "id": "Milton-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/coffee_crisp.png",
                    "x": "$xaxis.label.2.x - 22",
                    "y": "$canvasEndY - 134",
                    "xScale": "43",
                    "yScale": "36"
                }, {
                    "id": "Brian-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/100grand.png",
                    "x": "$xaxis.label.3.x - 22",
                    "y": "$canvasEndY - 131",
                    "xScale": "43",
                    "yScale": "35"
                }]
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
