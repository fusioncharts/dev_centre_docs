{
    type: "hbullet",
    renderAt: "chart-container",
    width: "450",
    height: "53",
    dataFormat: "json",
    dataSource: {
        "chart": {
            "caption": "Jenny",
            "subcaption": "Oh",
            "captionFontSize": "11.5",
            "subcaptionFontSize": "11.5",
            "subcaptionFontBold": "1",
            "captionPadding": "3",
            "chartTopMargin": "5",
            "chartLeftMargin": "10",
            "chartRightMargin": "10",
            "chartBottomMargin": "10",
            "animation": "1",
            "upperLimit": "12000",
            "showLimits": "0",
            "showborder": "0",
            "showTickValues": "0",
            "decimals": "2",
            "forceDecimals": "1",
            "numberprefix": "$",
            "targetFillPercent": "75",
            "targetColor": "#444444",
            "plotFillPercent": "40",
            "plotFillColor": "#444444",
            "formatNumberScale": "1",
            "baseFontColor": "595959",
            "plotToolText": "<div>Sales : <b>$$value</b></div>",
            "targettooltext": "Target : <b>$$targetvalue</b>",
            "theme": "zune"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "6000",
                "code": "#999498"
            }, {
                "minValue": "6000",
                "maxValue": "9000",
                "code": "#c5c2c6"
            }, {
                "minValue": "9000",
                "maxValue": "12000",
                "code": "#e1dee2"
            }]
        },
        "value": "3254",
        "target": "10000"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var i4 = 3254,
                chartRef = evtObj.sender;
            chartRef.intervalVar = setInterval(function() {
                i4 = i4 + parseInt(Math.floor(Math.random() * 150), 10);
                if (i4 < 8742) {
                    chartRef.feedData && chartRef.feedData("value=" + i4 + "&target=10000");
                } else {
                    clearInterval(chartRef.intervalVar);
                }
            }, 12000);
        }
    }
}
