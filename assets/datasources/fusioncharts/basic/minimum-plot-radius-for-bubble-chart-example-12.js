{
    type: 'bubble',
    renderAt: 'chart-container',
    width: '600',
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
            "xAxisName": "Average Price",
            "yAxisName": "Units Sold",
            "numDivlines": "2",
            "showValues": "1",
            "showTrendlineLabels": "0",
            "plotTooltext": "$name : Profit Contribution - $zvalue%",
            "drawQuadrant": "1",
            "quadrantLineAlpha": "80",
            "quadrantLineThickness": "3",
            "quadrantXVal": "50",
            "quadrantYVal": "15000",
            //Quadrant Labels
            "quadrantLabelTL": "Low Price / High Sale",
            "quadrantLabelTR": "High Price / High Sale",
            "quadrantLabelBL": "Low Price / Low Sale",
            "quadrantLabelBR": "High Price / Low Sale",
            //Cosmetics
            "yAxisLineThickness": "1",
            "yAxisLineColor": "#999999",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "theme": "fusion",
            "minRadiusForValue": "15"

        },
        "categories": [{
            "category": [{
                    "label": "$0",
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
                },
                {
                    "x": "44",
                    "y": "13000",
                    "z": "9",
                    "name": "Woodland"
                }
            ]
        }],
        "trendlines": [{
            "line": [{
                    "startValue": "20000",
                    "endValue": "30000",
                    "isTrendZone": "1",
                    "color": "#aaaaaa",
                    "alpha": "14"
                },
                {
                    "startValue": "10000",
                    "endValue": "20000",
                    "isTrendZone": "1",
                    "color": "#aaaaaa",
                    "alpha": "7"
                }
            ]
        }],
        "vTrendlines": [{
            "line": [{
                "startValue": "44",
                "isTrendZone": "0",
                "color": "#0066cc",
                "thickness": "1",
                "dashed": "1",
                "displayValue": "Gross Avg."
            }]
        }]
    }
}