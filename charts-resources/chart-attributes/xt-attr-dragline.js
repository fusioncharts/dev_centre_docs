{
    type: 'dragline',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales Projections",
            "subCaption": "iPhone vs Samsung Galaxy",
            "xAxisName": "Quarter",
            "yAxisName": "No. of Units",
            "paletteColors": "#0075c2,#1aaf5d",
            "showalternatehgridcolor": "0",
            "bgAlpha": "0",
            "borderAlpha": "20",
            "usePlotGradientColor": "0",
            "canvasBorderAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "showXAxisLine": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "25",
            "showBorder": "0"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3(E)"
            }, {
                "label": "Q4(E)"
            }]
        }],
        "dataset": [{
            "seriesname": "Apple",
            "valuePosition": "ABOVE",
            "allowDrag": "0",
            "data": [{
                "value": "1200"
            }, {
                "value": "1500",
                "dashed": "1"
            }, {
                "value": "1300",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "900",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }, {
            "seriesname": "Samsung",
            "allowDrag": "0",
            "data": [{
                "value": "600"
            }, {
                "value": "850",
                "dashed": "1"
            }, {
                "value": "1000",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "1200",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }]
    }
}
