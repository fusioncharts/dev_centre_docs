{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Price of Petrol in Bangalore",
            "subCaption": "In the last 6 months",
            "xAxisName": "Petrol Price Change Date",
            "yAxisName": "Petrol Price",
            "numberPrefix": "₹",
            "paletteColors": "#0075c2",
            "rotatevalues": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "showBorder": "1",
            //color of the border
            "borderColor": "#000000",
            //thickness of the border
            "borderThickness": "3",
            "borderAlpha": "100",
            "plotToolText": "On <b>$label</b> <br/> Petrol price updated to <b>$datavalue</b>",
            "theme": "zune"
        },
        "data": [{
            "label": "Feb 4 2015",
            "value": "62.01"
        }, {
            "label": "Mar 1, 2015",
            "value": "66.18"
        }, {
            "label": "April 2, 2015",
            "value": "66.05"
        }, {
            "label": "May 1, 2015",
            "value": "69.5"
        }, {
            "label": "Jun 16, 2015",
            "value": "72.94"
        }, {
            "label": "Jul 1, 2015",
            "value": "73.38"
        }]
    }
}