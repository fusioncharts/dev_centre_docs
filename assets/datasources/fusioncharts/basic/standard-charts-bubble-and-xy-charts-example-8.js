{
    type: 'bubble',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Sales Analysis of Shoe Brands",
            "subcaption": "Last Quarter",
            "xAxisMinValue": "0",
            "xAxisMaxValue": "100",
            "yAxisMinValue": "0",
            "yAxisMaxValue": "30000",
            "plotFillAlpha": "70",
            "plotFillHoverColor": "#6baa01",
            "showPlotBorder": "0",
            "xAxisName": "Average Price",
            "yAxisName": "Units Sold",
            "xNumberPrefix": "$",
            "showValues": "1",
            "showCanvasBorder": "0",
            "showTrendlineLabels": "0",
            "plotTooltext": "$name : Profit Contribution - $zvalue%",
            "adjustVDiv": "1",
            "showXAxisValues": "1",
            "numVDivlines": "5",
            "xAxisValuesStep": "1",
            "vDivlineColor": "ff0000",
            "vDivlineThickness": "5",
            "vDivlineAlpha": "70",
            "vDivlineIsDashed": "1",
            "vDivlineDashLen": "4",
            "vDivlineDashGap": "3",
            "showAlternateVGridColor": "1",
            "alternateVGridColor": "0ffff0",
            "alternateVGridAlpha": "40",
            "valueFontSize": "10"
        },
        "categories": [{
            "category": [{
                "label": "0",
                "x": "0"
            }, {
                "label": "$10",
                "x": "10",
                "showverticalline": "1"
            }, {
                "label": "$30",
                "x": "30",
                "showverticalline": "1"
            }, {
                "label": "$50",
                "x": "50",
                "showverticalline": "1"
            }, {
                "label": "$70",
                "x": "70",
                "showverticalline": "1"
            }, {
                "label": "$90",
                "x": "90",
                "showverticalline": "1"
            }]
        }],
        "dataset": [{
            "color": "#00aee4",
            "data": [{
                "x": "80",
                "y": "15000",
                "z": "24",
                "name": "Nike"
            }, {
                "x": "60",
                "y": "18500",
                "z": "26",
                "name": "Adidas"
            }, {
                "x": "50",
                "y": "19450",
                "z": "19",
                "name": "Puma"
            }, {
                "x": "65",
                "y": "10500",
                "z": "8",
                "name": "Fila"
            }, {
                "x": "43",
                "y": "8750",
                "z": "5",
                "name": "Lotto"
            }, {
                "x": "32",
                "y": "22000",
                "z": "10",
                "name": "Reebok"
            }, {
                "x": "44",
                "y": "13000",
                "z": "9",
                "name": "Woodland"
            }]
        }],
        "trendlines": [{
            "line": [{
                "startValue": "20000",
                "endValue": "30000",
                "isTrendZone": "1",
                "color": "#aaaaaa",
                "alpha": "14"
            }, {
                "startValue": "10000",
                "endValue": "20000",
                "isTrendZone": "1",
                "color": "#aaaaaa",
                "alpha": "7"
            }]
        }]
    }
}