{
    type: 'scrollcombidy2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenues and Profits",
            "subCaption": "(FY 2012 to FY 2013)",
            "xAxisname": "Month",
            "pYAxisName": "Amount (In USD)",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "50",
            "showValues": "1",
            "numVisiblePlot": "12",
            "flatScrollBars": "1",
            "scrollheight": "10",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan 2012"
            }, {
                "label": "Feb 2012"
            }, {
                "label": "Mar 2012"
            }, {
                "label": "Apr 2012"
            }, {
                "label": "May 2012"
            }, {
                "label": "Jun 2012"
            }, {
                "label": "Jul 2012"
            }, {
                "label": "Aug 2012"
            }, {
                "label": "Sep 2012"
            }, {
                "label": "Oct 2012"
            }, {
                "label": "Nov 2012"
            }, {
                "label": "Dec 2012"
            }, {
                "label": "Jan 2013"
            }, {
                "label": "Feb 2013"
            }, {
                "label": "Mar 2013"
            }, {
                "label": "Apr 2013"
            }, {
                "label": "May 2013"
            }, {
                "label": "Jun 2013"
            }, {
                "label": "Jul 2013"
            }, {
                "label": "Aug 2013"
            }, {
                "label": "Sep 2013"
            }, {
                "label": "Oct 2013"
            }, {
                "label": "Nov 2013"
            }, {
                "label": "Dec 2013"
            }]
        }],
        "dataset": [{
            "seriesName": "Revenues",
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
            }, {
                "value": "24000"
            }, {
                "value": "25000"
            }, {
                "value": "26000"
            }, {
                "value": "24000"
            }, {
                "value": "19000"
            }, {
                "value": "22000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "22000"
            }, {
                "value": "21000"
            }, {
                "value": "23000"
            }, {
                "value": "24000"
            }]
        }, {
            "seriesName": "Profits",
            "renderAs": "area",
            "showValues": "0",
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
            }, {
                "value": "6000"
            }, {
                "value": "7000"
            }, {
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "9000"
            }, {
                "value": "2000"
            }, {
                "value": "6000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }, {
                "value": "4000"
            }, {
                "value": "6000"
            }]
        }, {
            "seriesName": "Profit %",
            "parentYAxis": "S",
            "renderAs": "line",
            "showValues": "0",
            "data": [{
                "value": "25"
            }, {
                "value": "25"
            }, {
                "value": "16.66"
            }, {
                "value": "21.05"
            }, {
                "value": "6.66"
            }, {
                "value": "33.33"
            }, {
                "value": "6.25"
            }, {
                "value": "25"
            }, {
                "value": "5.88"
            }, {
                "value": "36.36"
            }, {
                "value": "10.52"
            }, {
                "value": "30.43"
            }, {
                "value": "25"
            }, {
                "value": "28"
            }, {
                "value": "15.38"
            }, {
                "value": "20.83"
            }, {
                "value": "15.79"
            }, {
                "value": "40.91"
            }, {
                "value": "11.11"
            }, {
                "value": "31.58"
            }, {
                "value": "9.09"
            }, {
                "value": "33.33"
            }, {
                "value": "17.39"
            }, {
                "value": "25"
            }]
        }]
    }
}
