{
    type: 'scatter',
    renderAt: 'chart-container',
    width: '650',
    height: '350',
    dataFormat: 'json',
    dataSource: {
    "chart": {
        "theme": "fusion",
        "caption": "Sales of Beer & Ice-cream vs Temperature",
        "subCaption": "Los Angeles Topanga",
        "xAxisName": "Average Day Temperature",
        "yAxisName": "Sales (In USD)",
        "xAxisMinValue": "23",
        "xAxisMaxValue": "95",
        "yNumberPrefix": "$",
        "xNumberSuffix": "&deg; F"
    },
    "categories": [
        {
            "category": [
                {
                    "x": "23",
                    "label": "23° F",
                    "showverticalline": "0"
                },
                {
                    "x": "32",
                    "label": "32° F",
                    "showverticalline": "1"
                },
                {
                    "x": "50",
                    "label": "50° F",
                    "showverticalline": "1"
                },
                {
                    "x": "68",
                    "label": "68° F",
                    "showverticalline": "1"
                },
                {
                    "x": "80",
                    "label": "80° F",
                    "showverticalline": "1"
                },
                {
                    "x": "95",
                    "label": "95° F",
                    "showverticalline": "1"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Ice Cream",
            "showregressionline": "1",
            "data": [
                {
                    "x": "23",
                    "y": "1560"
                },
                {
                    "x": "24",
                    "y": "1500"
                },
                {
                    "x": "24",
                    "y": "1680"
                },
                {
                    "x": "25",
                    "y": "1780"
                },
                {
                    "x": "25",
                    "y": "1620"
                },
                {
                    "x": "26",
                    "y": "1810"
                },
                {
                    "x": "27",
                    "y": "2310"
                },
                {
                    "x": "29",
                    "y": "2620"
                },
                {
                    "x": "31",
                    "y": "2500"
                },
                {
                    "x": "32",
                    "y": "2410"
                },
                {
                    "x": "35",
                    "y": "2880"
                },
                {
                    "x": "36",
                    "y": "3910"
                },
                {
                    "x": "34",
                    "y": "3960"
                },
                {
                    "x": "38",
                    "y": "4080"
                },
                {
                    "x": "40",
                    "y": "4190"
                },
                {
                    "x": "41",
                    "y": "4170"
                },
                {
                    "x": "42",
                    "y": "4280"
                },
                {
                    "x": "54",
                    "y": "5180"
                },
                {
                    "x": "53",
                    "y": "5770"
                },
                {
                    "x": "55",
                    "y": "5900"
                },
                {
                    "x": "56",
                    "y": "5940"
                },
                {
                    "x": "58",
                    "y": "6090"
                },
                {
                    "x": "61",
                    "y": "6086"
                },
                {
                    "x": "67",
                    "y": "6100"
                },
                {
                    "x": "68",
                    "y": "6200"
                },
                {
                    "x": "70",
                    "y": "6360"
                },
                {
                    "x": "75",
                    "y": "6450"
                },
                {
                    "x": "79",
                    "y": "6650"
                },
                {
                    "x": "80",
                    "y": "6710"
                },
                {
                    "x": "79",
                    "y": "6975"
                },
                {
                    "x": "82",
                    "y": "7000"
                },
                {
                    "x": "85",
                    "y": "7150"
                },
                {
                    "x": "86",
                    "y": "7160"
                },
                {
                    "x": "86",
                    "y": "7200"
                },
                {
                    "x": "88",
                    "y": "7230"
                },
                {
                    "x": "87",
                    "y": "7210"
                },
                {
                    "x": "86",
                    "y": "7480"
                },
                {
                    "x": "89",
                    "y": "7540"
                },
                {
                    "x": "89",
                    "y": "7400"
                },
                {
                    "x": "90",
                    "y": "7500"
                },
                {
                    "x": "92",
                    "y": "7640"
                }
            ]
        },
        {
            "seriesname": "Beer",
            "showregressionline": "1",
            "data": [
                {
                    "x": "23",
                    "y": "3160"
                },
                {
                    "x": "24",
                    "y": "3000"
                },
                {
                    "x": "24",
                    "y": "3080"
                },
                {
                    "x": "25",
                    "y": "3680"
                },
                {
                    "x": "25",
                    "y": "3320"
                },
                {
                    "x": "26",
                    "y": "3810"
                },
                {
                    "x": "27",
                    "y": "5310"
                },
                {
                    "x": "29",
                    "y": "3620"
                },
                {
                    "x": "31",
                    "y": "4100"
                },
                {
                    "x": "32",
                    "y": "3910"
                },
                {
                    "x": "35",
                    "y": "4280"
                },
                {
                    "x": "36",
                    "y": "4210"
                },
                {
                    "x": "34",
                    "y": "4160"
                },
                {
                    "x": "38",
                    "y": "4480"
                },
                {
                    "x": "40",
                    "y": "4890"
                },
                {
                    "x": "41",
                    "y": "4770"
                },
                {
                    "x": "42",
                    "y": "4880"
                },
                {
                    "x": "54",
                    "y": "4980"
                },
                {
                    "x": "53",
                    "y": "4770"
                },
                {
                    "x": "55",
                    "y": "4900"
                },
                {
                    "x": "56",
                    "y": "4940"
                },
                {
                    "x": "58",
                    "y": "4990"
                },
                {
                    "x": "61",
                    "y": "5086"
                },
                {
                    "x": "67",
                    "y": "5100"
                },
                {
                    "x": "68",
                    "y": "4700"
                },
                {
                    "x": "70",
                    "y": "5360"
                },
                {
                    "x": "75",
                    "y": "5150"
                },
                {
                    "x": "79",
                    "y": "5450"
                },
                {
                    "x": "80",
                    "y": "5010"
                },
                {
                    "x": "79",
                    "y": "4975"
                },
                {
                    "x": "82",
                    "y": "5400"
                },
                {
                    "x": "85",
                    "y": "5150"
                },
                {
                    "x": "86",
                    "y": "5460"
                },
                {
                    "x": "86",
                    "y": "5000"
                },
                {
                    "x": "88",
                    "y": "5200"
                },
                {
                    "x": "87",
                    "y": "5410"
                },
                {
                    "x": "86",
                    "y": "5480"
                },
                {
                    "x": "89",
                    "y": "5440"
                },
                {
                    "x": "89",
                    "y": "5300"
                },
                {
                    "x": "90",
                    "y": "5500"
                },
                {
                    "x": "92",
                    "y": "5240"
                }
            ]
        }
    ],
    "vtrendlines": [
        {
            "line": [
                {
                    "startvalue": "23",
                    "endvalue": "32",
                    "istrendzone": "1",
                    "displayvalue": " ",
                    "color": "#adebff",
                    "alpha": "25"
                },
                {
                    "startvalue": "23",
                    "endvalue": "32",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Very cold"
                },
                {
                    "startvalue": "32",
                    "endvalue": "50",
                    "istrendzone": "1",
                    "displayvalue": " ",
                    "color": "#adebff",
                    "alpha": "15"
                },
                {
                    "startvalue": "32",
                    "endvalue": "50",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Cold"
                },
                {
                    "startvalue": "50",
                    "endvalue": "68",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Moderate"
                },
                {
                    "startvalue": "68",
                    "endvalue": "80",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Hot"
                },
                {
                    "startvalue": "68",
                    "endvalue": "80",
                    "istrendzone": "1",
                    "displayvalue": " ",
                    "color": "#f2a485",
                    "alpha": "15"
                },
                {
                    "startvalue": "80",
                    "endvalue": "95",
                    "istrendzone": "1",
                    "alpha": "0",
                    "displayvalue": "Very hot"
                },
                {
                    "startvalue": "80",
                    "endvalue": "95",
                    "istrendzone": "1",
                    "displayvalue": " ",
                    "color": "#f2a485",
                    "alpha": "25"
                }
            ]
        }
    ]
}
}