{
    type: 'mscombidy2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenue Vs Profit Vs Employees",
            "subCaption": "Last year",
            "xAxisname": "Month",
            "pYAxisName": "Amount (In USD)",
            "sYAxisName": "No. of Employees",
            "numberPrefix": "$",
            //Manually over-riding the y-axis limits
            "pYAxisMinValue": "1000",
            "pYAxisMaxValue": "25000",
            "sYAxisMinValue": "1400",
            "sYAxisMaxValue": "1700",
            "theme": "fusion",
            "showValues": "0"
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
            "seriesName": "Revenue",
            "showValues": "1",
            "data": [{
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "15000"
            }, {
                "value": "21000"
            }, {
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "17000"
            }, {
                "value": "22000"
            }, {
                "value": "19000"
            }, {
                "value": "23000"
            }]
        }, {
            "seriesName": "Profit",
            "renderAs": "area",
            "data": [{
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "7000"
            }, {
                "value": "1000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "8000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }]
        }, {
            "seriesName": "Employees",
            "parentYAxis": "S",
            "renderAs": "line",
            "data": [{
                "value": "1422"
            }, {
                "value": "1450"
            }, {
                "value": "1455"
            }, {
                "value": "1450"
            }, {
                "value": "1509"
            }, {
                "value": "1501"
            }, {
                "value": "1505"
            }, {
                "value": "1550"
            }, {
                "value": "1572"
            }, {
                "value": "1575"
            }, {
                "value": "1580"
            }, {
                "value": "1595"
            }]
        }]
    }
}
