{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '380',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Speedometer",
            "captionFont": "Arial",
            "captionFontColor": "#333333",
            "manageresize": "1",
            "origw": "320",
            "origh": "320",
            "tickvaluedistance": "-10",
            "bgcolor": "#FFFFFF",
            "upperlimit": "240",
            "lowerlimit": "0",
            "basefontcolor": "#FFFFFF",
            "majortmnumber": "9",
            "majortmcolor": "#FFFFFF",
            "majortmheight": "8",
            "majortmthickness": "5",
            "minortmnumber": "5",
            "minortmcolor": "#FFFFFF",
            "minortmheight": "3",
            "minortmthickness": "2",
            "pivotradius": "10",
            "pivotbgcolor": "#000000",
            "pivotbordercolor": "#FFFFFF",
            "pivotborderthickness": "2",
            "tooltipbordercolor": "#FFFFFF",
            "tooltipbgcolor": "#333333",
            "gaugeouterradius": "115",
            "gaugestartangle": "240",
            "gaugeendangle": "-60",
            "decimals": "0",
            "placevaluesinside": "1",
            "pivotfillmix": "",
            "showpivotborder": "1",
            "gaugeoriginx": "160",
            "gaugeoriginy": "160",
            "showborder": "0"
        },
        "dials": {
            "dial": [{
                "value": "65",
                "bgcolor": "000000",
                "bordercolor": "#FFFFFF",
                "borderalpha": "100",
                "basewidth": "4",
                "topwidth": "4",
                "borderthickness": "2",
                "valuey": "260"
            }]
        },
        "annotations": {
            "groups": [{
                "x": "160",
                "y": "160",
                "items": [{
                    "type": "circle",
                    "radius": "130",
                    "fillasgradient": "1",
                    "fillcolor": "#4B4B4B,#AAAAAA",
                    "fillalpha": "100,100",
                    "fillratio": "95,5"
                }, {
                    "type": "circle",
                    "x": "0",
                    "y": "0",
                    "radius": "120",
                    "showborder": "1",
                    "bordercolor": "cccccc",
                    "fillasgradient": "1",
                    "fillcolor": "#ffffff,#000000",
                    "fillalpha": "50,100",
                    "fillratio": "1,99"
                }]
            }, {
                "x": "160",
                "y": "160",
                "showbelow": "0",
                "scaletext": "1",
                "items": [{
                    "type": "text",
                    "y": "100",
                    "label": "KPH",
                    "fontcolor": "#FFFFFF",
                    "fontsize": "14",
                    "bold": "1"
                }]
            }]
        }
    },
    "events": {
        "initialized": function(evtObj, argObj) {
            var scoreArray = [],
                score,
                speedScore,
                flag,
                diff;
                evtObj.sender.resetInterval = setInterval(function() {
                    var i,
                        percent,
                        num = 30;
                    score = 40 +
                        parseInt(Math.floor(Math.random() * 170));
                    if (!speedScore) {
                        speedScore = score;
                    }
                    diff = (score - speedScore);

                    for (var i = 0; i < 5; i++) {
                        percent = num - (i * 5);
                        scoreArray[i] = diff * (percent / 100);
                    }
                    flag = 0;

                }, 1000);
                evtObj.sender.changeInterval = setInterval(function() {
                    if (speedScore && diff) {
                        speedScore += scoreArray[flag];
                        flag += 1;
						      evtObj.sender.feedData && evtObj.sender.feedData("value=" + speedScore);
                    }
                }, 2000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.resetInterval);
            clearInterval(evtObj.sender.changeInterval);
        }
    }
}
