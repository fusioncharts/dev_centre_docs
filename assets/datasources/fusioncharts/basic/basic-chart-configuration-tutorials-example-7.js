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
            "bgColor": "EEEEEE,CCCCCC",
            "bgAlpha": "70,80",
            "bgRatio": "60, 40",
            "canvasBgAlpha": "0",
            "canvasBgColor": "#1790e1",
            "canvasBgAlpha": "10",
            "showCanvasBorder": "1",
            "canvasBorderColor": "#666666",
            "canvasBorderThickness": "4",
            "canvasBorderAlpha": "80",
            "paletteColors": "#008ee4, #9b59b6, #6baa01, #e44a00",
            "usePlotGradientColor": "1",
            "plotGradientColor": "#ffffff",
            "showPlotBorder": "1",
            "plotBorderDashed": "1",
            "plotBorderDashLen": "4",
            "plotBorderDashGap": "4",
            "plotBorderThickness": "1",
            "plotBorderColor": "#000000",
            "plotToolText": "On <b>$label</b> <br/> Petrol price updated to <b>$datavalue</b>",
            "theme": "zune"
        },
        "data": [{
            "label": "Feb 4 2015",
            "value": "62.01"
        }, {
            "label": "Mar 1, 2015",
            "value": "66.18",
            "color": "#8e0000",
            "alpha": "80",
            //properties to override individual plot border
            "dashed": "0"
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