{
    type: 'logmsline',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store footfall vs Online visitors ",
            "subCaption": "Last Year",
            "xAxisName": "Quarter",
            "yAxisName": "USD",
            "paletteColors": "#008ee4,#6baa01,#e44a00",
            "bgAlpha": "0",
            "borderAlpha": "20",
            "canvasBorderAlpha": "0",
            "LegendShadow": "0",
            "legendBorderAlpha": "0",
            "showXAxisLine": "1",
            "showValues": "0",
            "showBorder": "0",
            "showAlternateHgridColor": "0",
            "base": "10",
            "numberprefix": "$",
            "axisLineAlpha": "10",
            "divLineAlpha": "10",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
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
            "seriesname": "Total footfalls",
            "data": [{
                "value": "126734"
            }, {
                "value": "159851"
            }, {
                "value": "197393"
            }, {
                "value": "168560"
            }, {
                "value": "199428"
            }]
        }, {
            "seriesname": "Online Visits",
            "data": [{
                "value": "1126059"
            }, {
                "value": "1292145"
            }, {
                "value": "1496849"
            }, {
                "value": "1460249"
            }, {
                "value": "1083962"
            }]
        }]
    }
}
