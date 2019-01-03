{
    type: 'mscombidy2d',
    renderAt: 'chart-container',
    width: '550',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenue Vs Profit",
            "subCaption": "Last year",
            "xAxisname": "Month",
            "pYAxisName": "Revenue (In USD)",
            "sYAxisName": "Profit (In USD)",
            "numberPrefix": "$",
            "sNumberPrefix": "$",
            "showValues": "0",
            //Setting both axes to synchronize the limits
            "syncAxisLimits": "1",
            //Theme 
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
            "parentYAxis": "S",
            "renderAs": "line",
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
        }]
    }
}
