{
    type: 'bubble',
    renderAt: 'chart-container',
    width: '550',
    height: '300',
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
            "numDivlines": "2",
            "showValues": "1",
            "plotTooltext": "$name : Profit Contribution - $zvalue%"
        },
        //x-axis segmented into categorical zone (Average Price) 
        //ranging 0-20, 20-40, etc.
        "categories": [{
            "category": [{
                    "label": "0",
                    "x": "0"
                },
                {
                    "label": "$20",
                    "x": "20",
                    "showverticalline": "1"
                },
                {
                    "label": "$40",
                    "x": "40",
                    "showverticalline": "1"
                },
                {
                    "label": "$60",
                    "x": "60",
                    "showverticalline": "1"
                },
                {
                    "label": "$80",
                    "x": "80",
                    "showverticalline": "1"
                }, {
                    "label": "$100",
                    "x": "100",
                    "showverticalline": "1"
                }
            ]
        }],
        "dataset": [{
            "color": "#00aee4",
            "data": [{
                    "x": "80",
                    "y": "15000",
                    "z": "24",
                    "name": "Nike"
                },
                {
                    "x": "60",
                    "y": "18500",
                    "z": "26",
                    "name": "Adidas"
                },
                {
                    "x": "50",
                    "y": "19450",
                    "z": "19",
                    "name": "Puma"
                },
                {
                    "x": "65",
                    "y": "10500",
                    "z": "8",
                    "name": "Fila"
                },
                {
                    "x": "43",
                    "y": "8750",
                    "z": "5",
                    "name": "Lotto"
                },
                {
                    "x": "32",
                    "y": "22000",
                    "z": "10",
                    "name": "Reebok"
                }, {
                    "x": "44",
                    "y": "13000",
                    "z": "9",
                    "name": "Woodland"
                }
            ]
        }],
        "vtrendlines": [{
            "line": [{
                    "startValue": "0",
                    "endValue": "20",
                    "isTrendZone": "1",
                    "color": "#adebff",
                    "alpha": "25",
                    "displayValue": " "
                },
                {
                    "startValue": "20",
                    "endValue": "40",
                    "isTrendZone": "1",
                    "color": "#adebff",
                    "alpha": "15",
                    "displayValue": " "
                },
                {
                    "startValue": "40",
                    "endValue": "60",
                    "isTrendZone": "1",
                    "displayValue": " "
                },
                {
                    "startValue": "60",
                    "endValue": "80",
                    "isTrendZone": "1",
                    "color": "#f2a485",
                    "alpha": "25",
                    "displayValue": " "
                },
                {
                    "startValue": "80",
                    "endValue": "100",
                    "isTrendZone": "1",
                    "color": "#f2a485",
                    "alpha": "15",
                    "displayValue": " "
                }
            ]
        }]
    }
}