{
    type: 'errorline',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenues and Profits",
            "subCaption": "Predicted for next year",
            "xAxisname": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "halferrorbar": "0",
            "plotTooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #999999; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}$seriesName : <b>$dataValue</b>{br}Deviation : <b>± $errorDataValue</b>",

            //Cosmetics
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "showBorder": "0",
            "bgColor": "#ffffff",
            "showValues": "0",
            "showShadow": "0",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineDashed": "1",
            "divLineDashLen": "1",
            "usePlotGradientColor": "0",
            "showplotborder": "0",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
            "showAlternateVGridColor": "0",
            "legendBgAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
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
            "seriesName": "Revenues",
            "dashed": "1",
            "dashlen": "2",
            "dashGap": "2",
            "data": [{
                "value": "16000",
                "errorvalue": "2000"
            }, {
                "value": "20000",
                "errorvalue": "4000"
            }, {
                "value": "18000",
                "errorvalue": "1000"
            }, {
                "value": "19000",
                "errorvalue": "1500"
            }, {
                "value": "15000",
                "errorvalue": "1000"
            }, {
                "value": "21000",
                "errorvalue": "4500"
            }, {
                "value": "16000",
                "errorvalue": "1500"
            }, {
                "value": "20000",
                "errorvalue": "3000"
            }, {
                "value": "17000",
                "errorvalue": "2000"
            }, {
                "value": "22000",
                "errorvalue": "4000"
            }, {
                "value": "19000",
                "errorvalue": "2500"
            }, {
                "value": "23000",
                "errorvalue": "3000"
            }]
        }, {
            "seriesName": "Profits",
            "dashed": "1",
            "dashlen": "2",
            "dashGap": "2",
            "data": [{
                "value": "8000",
                "errorvalue": "2000"
            }, {
                "value": "9000",
                "errorvalue": "2000"
            }, {
                "value": "7000",
                "errorvalue": "2700"
            }, {
                "value": "8000",
                "errorvalue": "2750"
            }, {
                "value": "6000",
                "errorvalue": "1200"
            }, {
                "value": "11000",
                "errorvalue": "3000"
            }, {
                "value": "6900",
                "errorvalue": "1250"
            }, {
                "value": "8000",
                "errorvalue": "1400"
            }, {
                "value": "6500",
                "errorvalue": "1200"
            }, {
                "value": "12000",
                "errorvalue": "3000"
            }, {
                "value": "6000",
                "errorvalue": "1500"
            }, {
                "value": "11000",
                "errorvalue": "2500"
            }]
        }]
    }
}
