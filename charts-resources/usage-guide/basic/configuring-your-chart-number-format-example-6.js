{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "caption": "AMC payable",
            "subcaption": "For cooling units",
            "xaxisname": "Unit",
            "yaxisname": "Amount payable (In USD)",
            "rotateValues": "0",
            "placeValuesInside": "0",
            "valueFontColor": "#000000",
            "valueBgColor": "#FFFFFF",
            "valueBgAlpha": "50",
            //Adding a suffix to a number
            "numberSuffix": "/day",
            //Adding a prefix to a number
            "numberPrefix": "$"
        },
        "data": [{
            "label": "CU-2441",
            "value": "12.52"
        }, {
            "label": "CU-3433",
            "value": "14.57"
        }, {
            "label": "CU-434",
            "value": "17.37"
        }]
    }
}
