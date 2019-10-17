{
    type: 'msstepline',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenue Vs Expense",
            "subcaption": "Last year",
            "xaxisname": "Month",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            //Use Forward steps
            "useForwardSteps": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan"
            }, {
                "label": "Feb"
            }, {
                "label": "Mar"
            }, {
                "label": "Apr"
            }, {
                "label": "May"
            }, {
                "label": "Jun"
            }, {
                "label": "Jul"
            }, {
                "label": "Aug"
            }, {
                "label": "Sep"
            }, {
                "label": "Oct"
            }, {
                "label": "Nov"
            }, {
                "label": "Dec"
            }]
        }],
        "dataset": [{
            "seriesname": "Revenue",
            "linethickness": "3",
            "anchorradius": "3",
            "data": [{
                "value": "374000"
            }, {
                "value": "350000"
            }, {
                "value": "380000"
            }, {
                "value": "340000"
            }, {
                "value": "398000"
            }, {
                "value": "326000"
            }, {
                "value": "448000"
            }, {
                "value": "379000"
            }, {
                "value": "355000"
            }, {
                "value": "374000"
            }, {
                "value": "348000"
            }, {
                "value": "402000"
            }]
        }, {
            "seriesname": "Expense",
            "linethickness": "3",
            "anchorradius": "3",
            "data": [{
                "value": "100000"
            }, {
                "value": "115000"
            }, {
                "value": "135000"
            }, {
                "value": "150000"
            }, {
                "value": "110000"
            }, {
                "value": "98000"
            }, {
                "value": "118000"
            }, {
                "value": "197000"
            }, {
                "value": "228000"
            }, {
                "value": "249000"
            }, {
                "value": "229000"
            }, {
                "value": "208000"
            }]
        }]
    }

}
