{
    type: 'bubble',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
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
            "numDivlines": "2",
            "xNumberPrefix": "$",
            "showValues": "1",
            //Setting x-axis label mode to "AUTO"
            //which ignores the properties of categories element defined
            "xAxisLabelMode": "AUTO",
            "showTrendlineLabels": "0",
            "plotTooltext": "$name : Profit Contribution - $zvalue%"
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
                "label": "$20",
                "x": "20",
                "showverticalline": "1"
            }, {
                "label": "$30",
                "x": "30",
                "showverticalline": "1"
            }, {
                "label": "$40",
                "x": "40",
                "showverticalline": "1"
            }, {
                "label": "$50",
                "x": "50",
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
