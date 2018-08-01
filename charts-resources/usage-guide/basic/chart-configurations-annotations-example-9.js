{
    
    type: 'msspline',
    renderAt: 'chart-container',
    width: '550',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "theme": "fusion",
            "animation": "0",
            "showValues": "0",
            "showTooltip": "0"
        },

        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "vline": "true",
                "lineposition": "0",
                "color": "#0075c2",
                "labelHAlign": "right",
                "labelPosition": "0",
                "label": "National holiday"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "annotations": {
            "groups": [{
                //Create tool-tip style annotation with a dotted line 
                "id": "ds1tips",
                "items": [{
                        "id": "indicator-line",
                        "type": "line",
                        "dashed": "1"
                    },
                    //Rectangular background, on which text will appear, next to y-axis, for the tool-tip stlye annotation
                    {
                        "id": "tip1_1",
                        "type": "rectangle",
                        "visible": "0",
                        "fillcolor": "#0075c2",
                        "x": "$dataset.0.set.0.x + 5",
                        "y": "$dataset.0.set.0.y - 30",
                        "tox": "$dataset.0.set.0.x + 80",
                        "toy": "$dataset.0.set.0.y - 10"
                    }
                ]
            }, {
                //Labels for the dynamic tool-text
                "id": "dyn-label-grp",
                "items": [{
                    "id": "dyn-label-bg",
                    "type": "rectangle",
                    "radius": "3"
                }, {
                    "id": "dyn-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "fontsize": "11",
                    "bold": "1"
                }, {
                    "id": "dyn-detail-label",
                    "type": "text",
                    "align": "right",
                    "x": "$canvasendx",
                    "bgcolor": "#ffffff"
                }]
            }]
        },
        "dataset": [{
            "seriesname": "Bakersfield Central",
            "data": [{
                "value": "15123"
            }, {
                "value": "14233"
            }, {
                "value": "25507"
            }, {
                "value": "9110"
            }, {
                "value": "15529"
            }, {
                "value": "20803"
            }, {
                "value": "19202"
            }]
        }, {
            "seriesname": "Los Angeles Topanga",
            "data": [{
                "value": "13400"
            }, {
                "value": "12800"
            }, {
                "value": "22800"
            }, {
                "value": "12400"
            }, {
                "value": "15800"
            }, {
                "value": "19800"
            }, {
                "value": "21800"
            }]
        }]
    },
    "events": {
        "dataplotrollover": function(evtObj, argObj) {
            var dsIndex = argObj && argObj.datasetIndex,
                dsName = argObj && argObj.datasetName,
                index = argObj && argObj.index,
                value = argObj && argObj.value,
                color = (dsIndex === 0) ? "#0075c2" : "#1aaf5d",
                annotations = evtObj && evtObj.sender.annotations;

            //Dynamically update the annotation label to change positioning
            annotations && annotations.update("dyn-label-bg", {
                "x": "$canvasstartx - 55",
                "tox": "$canvasstartx - 10",
                "y": ["$dataset", dsIndex, "set", index, "y+10"].join("."),
                "toy": ["$dataset", dsIndex, "set", index, "y-10"].join("."),
                "fillcolor": color,
            });

            //Change the text
            annotations && annotations.update("dyn-label", {
                "text": value,
                "x": "$canvasstartx - 32",
                "y": ["$dataset", dsIndex, "set", index, "y"].join(".")
            });

            //Change the position of dotted line
            annotations && annotations.update("indicator-line", {
                x: ["$canvasstartx"],
                tox: ["$canvasendx"],
                y: ["$dataset", dsIndex, "set", index, "y"].join("."),
                toy: ["$dataset", dsIndex, "set", index, "y"].join("."),
                "color": color
            });

            //Change the detailed text. All data is regrieved from argObj
            annotations && annotations.update("dyn-detail-label", {
                "text": dsName + " store -{br} " + "Total visitors last week: " + value,
                "color": color,
                "y": ["$dataset", dsIndex, "set", index, "y - 15"].join(".")
            });
        },
        "dataplotrollout": function(evtObj, argObj) {
            var annotations = evtObj && evtObj.sender.annotations;
            if (annotations) {
                annotations.hide("indicator-line");
                annotations.hide("dyn-label-bg");
                annotations.hide("dyn-label");
                annotations.hide("dyn-detail-label");
            }
        }
    }

}
