{
	"chart_5": {
        type: "hbullet",
        renderAt: "chart-container",
        width: "450",
        height: "62",
        dataFormat: "json",
        dataSource: {
            "chart": {
                "caption": "Alisia",
                "subcaption": "Dotts",
                "captionFontSize": "11.5",
                "subcaptionFontSize": "11.5",
                "subcaptionFontBold": "1",
                "captionPadding": "5",
                "chartTopMargin": "5",
                "chartLeftMargin": "10",
                "chartRightMargin": "10",
                "chartBottomMargin": "5",
                "animation": "1",
                "upperLimit": "12000",
                "decimals": "2",
                "forceDecimals": "1",
                "showborder": "0",
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
            "value": "6555",
            "target": "10000"
        },
        "events": {
            "rendered": function(evtObj, argObj) {
                var i5 = 6555,
                    chartRef = evtObj.sender;
                chartRef.intervalVar = setInterval(function() {
                    i5 = i5 + parseInt(Math.floor(Math.random() * 50), 10);
                    if (i5 < 10120) {
                        chartRef.feedData("value=" + i5 + "&target=10000");
                    } else {
                        clearInterval(chartRef.intervalVar);
                    }
                }, 17000);
            }
        }
    }
}