{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
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
            "PlotfillAlpha": "0",
            "placeValuesInside": "0",
            "rotateValues": "0",
            "valueFontColor": "#333333"

        },
        "annotations": {
        "autoScale": "1",
        "scaleImages": "1",
        "origW": "400",
        "origH": "300",
        "groups": [{
          "id": "user-images",
          "items": [{
            "id": "butterFinger-icon",
            "type": "image",
            "url": "https://static.fusioncharts.com/sampledata/images/butterFinger.png",
            "x": "$dataset.0.set.0.CenterX - 28",
            "y": "$dataset.0.set.0.STARTY",
            "xScale": "50",
            "toy": "$dataset.0.set.0.ENDY + 2",
          }, {
            "id": "tom-user-icon",
            "type": "image",
            "url": "https://static.fusioncharts.com/sampledata/images/snickrs.png",
            "x": "$dataset.0.set.1.CenterX - 25",
            "y": "$dataset.0.set.1.STARTY",
            "xScale": "50",
            "toy": "$dataset.0.set.1.ENDY + 2",
          }, {
            "id": "Milton-user-icon",
            "type": "image",
            "url": "https://static.fusioncharts.com/sampledata/images/coffee_crisp.png",
            "x": "$dataset.0.set.2.CenterX - 25",
            "y": "$dataset.0.set.2.STARTY",
            "xScale": "50",
            "toy": "$dataset.0.set.2.ENDY + 2",
          }, {
            "id": "Brian-user-icon",
            "type": "image",
            "url": "https://static.fusioncharts.com/sampledata/images/100grand.png",
            "x": "$dataset.0.set.3.CenterX - 25",
            "y": "$dataset.0.set.3.STARTY",
            "xScale": "50",
            "toy": "$dataset.0.set.3.ENDY + 2",
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
