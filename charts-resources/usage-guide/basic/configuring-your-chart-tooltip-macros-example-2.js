{
        type: 'mscolumn2d',
        renderAt: 'chart-container',
        width: '300',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Comparison of Quarterly Revenue",
                "subCaption": "Last year Vs This year",
                "xAxisname": "Quarter",
                "yAxisName": "Amount (In USD)",
                "plottooltext": "<div><b>$label</b><br/> <b>Year: </b>$seriesname<br/><b>Sale: </b>$$value<br/></div>",
                "numberPrefix": "$",
                "theme": "fint",
                "legendItemFontBold" : "0",
                "legendItemFont": "Arial",
                "legendItemFontSize": "11",
                "legendItemFontColor": "#666666",
                "legendItemHoverFontColor": "#000000",
                "legendCaptionAlignment": "left",
                //Color of hidden legend item
                "legendItemHiddenColor": "#e8e8e8",
                "captionFontSize": "12",
                "subCaptionFontSize": "12"
            },
            "categories": [{
                "category": [{
                    "label": "Q1"
                }, {
                    "label": "Q2"
                }, {
                    "label": "Q3"
                }, {
                    "label": "Q4"
                }]
            }],
            "dataset": [{
                "seriesname": "Last Year",
                "data": [{
                    "value": "10000"
                }, {
                    "value": "11500"
                }, {
                    "value": "12500"
                }, {
                    "value": "15000"
                }]
            }, {
            "seriesname": "This Year",
                "data": [{
                    "value": "25400"
                }, {
                    "value": "29800"
                }, {
                    "value": "21800"
                }, {
                    "value": "26800"
                }]
            }]
        }
    }