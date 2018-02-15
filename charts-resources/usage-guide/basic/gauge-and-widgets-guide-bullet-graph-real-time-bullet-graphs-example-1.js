{
    "chart_1": {
        "type": "hbullet",
        "renderAt": "chart-container",
        "width": "450",
        "height": "62",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "Tyson",
                "subcaption": "Ponce",
                "captionFontSize": "11.5",
                "subcaptionFontSize": "11.5",
                "subcaptionFontBold": "1",
                "captionPadding": "4",
                "chartTopMargin": "15",
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
                "plotFillPercent": "39",
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
            "value": "3512",
            "target": "10000"
        },
        "events": {
            "rendered": function(evtObj, argObj) {
                var i1 = 3512,
                    chartRef = evtObj.sender;
                chartRef.intervalVar = setInterval(function() {
                    i1 = i1 + parseInt(Math.floor(Math.random() * 200), 10);
                    if (i1 < 9870) {
                        chartRef.feedData("value=" + i1 + "&target=10000");
                    } else {
                        clearInterval(chartRef.intervalVar);
                    }
                }, 15000);
            }
        }
    },
    "chart_2": {
        type: "hbullet",
        renderAt: "chart-container",
        width: "450",
        height: "53",
        dataFormat: "json",
        dataSource: {
            "chart": {
                "caption": "Henry",
                "subcaption": "Klein",
                "captionFontSize": "11.5",
                "subcaptionFontSize": "11.5",
                "subcaptionFontBold": "1",
                "captionPadding": "5",
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
            "value": "6954",
            "target": "10000"
        },
        "events": {
            "rendered": function(evtObj, argObj) {
                var i2 = 6954,
                    chartRef = evtObj.sender;
                chartRef.intervalVar = setInterval(function() {
                    i2 = i2 + parseInt(Math.floor(Math.random() * 400), 10);
                    if (i2 < 10970) {
                        chartRef.feedData("value=" + i2 + "&target=10000");
                    } else {
                        clearInterval(chartRef.intervalVar);
                    }
                }, 25000);
            }
        }
    },
    "chart_3": {
        type: "hbullet",
        renderAt: "chart-container",
        width: "450",
        height: "53",
        dataFormat: "json",
        dataSource: {
            "chart": {
                "caption": "Harry",
                "subcaption": "Bower",
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
            "value": "4987",
            "target": "10000"
        },
        "events": {
            "rendered": function(evtObj, argObj) {
                var i3 = 4987,
                    chartRef = evtObj.sender;
                chartRef.intervalVar = setInterval(function() {
                    i3 = i3 + parseInt(Math.floor(Math.random() * 300), 10);
                    if (i3 < 11750) {
                        chartRef.feedData("value=" + i3 + "&target=10000");
                    } else {
                        clearInterval(chartRef.intervalVar);
                    }
                }, 20000);
            }
        }
    },
    "chart_4": {
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
                        chartRef.feedData("value=" + i4 + "&target=10000");
                    } else {
                        clearInterval(chartRef.intervalVar);
                    }
                }, 12000);
            }
        }
    },
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