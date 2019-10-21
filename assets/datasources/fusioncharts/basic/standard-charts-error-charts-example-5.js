{
    type: 'errorscatter',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "xaxisname": "Months",
            "yaxisname": "Revenue (In $)",
            "caption": "Revenue forecast",
            "subcaption": "Next Year",
            //Error Bar Configuration
            "halfverticalerrorbar": "0",
            "verticalErrorBarColor": "#990000",
            "verticalErrorBarThickness": "2",
            "verticalErrorBarAlpha": "50",
            "verticalErrorBarWidth": "8"

        },
        "categories": [{
            "category": [{
                "label": "Jan",
                "x": "20",
            }, {
                "label": "Feb",
                "x": "30",
            }, {
                "label": "Mar",
                "x": "40",
            }, {
                "label": "Apr",
                "x": "50",
            }, {
                "label": "May",
                "x": "60",
            }, {
                "label": "Jun",
                "x": "70",
            }, {
                "label": "Jul",
                "x": "80",
            }, {
                "label": "Aug",
                "x": "90",
            }, {
                "label": "Sep",
                "x": "100",
            }, {
                "label": "Oct",
                "x": "110",
            }, {
                "label": "Nov",
                "x": "120",
            }, {
                "label": "Dec",
                "x": "130",
            }]
        }],
        "dataset": [{
            "color": "",
            "anchorradius": "8",
            "anchorbgcolor": "#7ed37e",
            "data": [{
                "y": "450000",
                "x": "20",
                "verticalErrorValue": "50000"
            }, {
                "y": "860000",
                "x": "30",
                "verticalErrorValue": "69000"
            }, {
                "y": "750000",
                "x": "40",
                "verticalErrorValue": "69000"
            }, {
                "y": "570000",
                "x": "50",
                "verticalErrorValue": "60000"
            }, {
                "y": "910000",
                "x": "60",
                "verticalErrorValue": "50000"
            }, {
                "y": "580000",
                "x": "70",
                "verticalErrorValue": "55000"
            }, {
                "y": "610000",
                "x": "80",
                "verticalErrorValue": "87000"
            }, {
                "y": "620000",
                "x": "90",
                "verticalErrorValue": "45000"
            }, {
                "y": "520000",
                "x": "100",
                "verticalErrorValue": "59000"
            }, {
                "y": "530000",
                "x": "110",
                "verticalErrorValue": "72000"
            }, {
                "y": "950000",
                "x": "120",
                "verticalErrorValue": "69000"
            }, {
                "y": "770000",
                "x": "130",
                "verticalErrorValue": "69000"
            }]
        }]
    }
}
