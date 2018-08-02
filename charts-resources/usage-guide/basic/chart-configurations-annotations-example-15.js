{
    
    type: 'msspline',
    renderAt: 'chart-container',
    width: '600',
    height: '450',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "xAxisName": "Day",
            "yAxisName": "No. of visitors",
            "yAxisNamePadding": "100",
            "showYAxisValues": "0",
            "theme": "fusion",
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
                "color": "#6baa01",
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

        //Using Annotations
        "annotations": {
            "origw": "600",
            "origh": "450",
            "autoscale": "1",
            "groups": [{
                "id": "ds1tips",
                "items": [{
                    "id": "indicator-line",
                    "type": "line",
                    "dashed": "1"
                }, {
                    "id": "tip1_1",
                    "type": "rectangle",
                    "fillcolor": "#6baa01",
                    "x": "$dataset.0.set.0.x + 5",
                    "y": "$dataset.0.set.0.y - 30",
                    "tox": "$dataset.0.set.0.x + 80",
                    "toy": "$dataset.0.set.0.y - 10",
                    "visible": "0"
                }]
            }, {
                // Drawing custom yaxisline using Annotation
                "id": "yaxisline",
                "items": [{
                    "id": "line",
                    "type": "line",
                    "color": "#f8bd19",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasstarty",
                    "tox": "$canvasstartx - 5",
                    "toy": "$canvasendy",
                    "thickness": "3"
                }, {
                    // Drawing custom label bg using Annotation
                    "id": "none-label-bg",
                    "type": "rectangle",
                    "fillcolor": "#f8bd19",
                    "x": "$canvasstartx - 60",
                    "tox": "$canvasstartx - 15",
                    "y": "$canvasendy - 20",
                    "toy": "$canvasendy",
                    "radius": "3"
                }, {
                    // Drawing circles on y-axis using Annotation
                    "id": "none-dot",
                    "type": "circle",
                    "radius": "5",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasendy - 10",
                    "color": "#f8bd19"
                }, {
                    // Drawing text as custom y-axis label using Annotation
                    "id": "none-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "text": "None",
                    "x": "$canvasstartx - 37",
                    "y": "$canvasendy - 12",
                    "fontsize": "12",
                    "bold": "1"
                }, {
                    "id": "few-label-bg",
                    "type": "rectangle",
                    "fillcolor": "#f8bd19",
                    "x": "$canvasstartx - 55",
                    "tox": "$canvasstartx - 15",
                    "y": "$canvasendy - 100",
                    "toy": "$canvasendy - 80",
                    "radius": "3"
                }, {
                    "id": "few-dot",
                    "type": "circle",
                    "radius": "5",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasendy - 90",
                    "color": "#f8bd19"
                }, {
                    "id": "few-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "text": "Few",
                    "x": "$canvasstartx - 35",
                    "y": "$canvasendy - 92",
                    "fontsize": "12",
                    "bold": "1"
                }, {
                    "id": "moderate-label-bg",
                    "type": "rectangle",
                    "fillcolor": "#f8bd19",
                    "x": "$canvasstartx - 85",
                    "tox": "$canvasstartx - 15",
                    "y": "$canvasendy - 180",
                    "toy": "$canvasendy - 160",
                    "radius": "3"
                }, {
                    "id": "moderate-dot",
                    "type": "circle",
                    "radius": "5",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasendy - 170",
                    "color": "#f8bd19"
                }, {
                    "id": "moderate-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "text": "Moderate",
                    "x": "$canvasstartx - 50",
                    "y": "$canvasendy - 172",
                    "fontsize": "12",
                    "bold": "1"
                }, {
                    "id": "maximum-label-bg",
                    "type": "rectangle",
                    "fillcolor": "#f8bd19",
                    "x": "$canvasstartx - 88",
                    "tox": "$canvasstartx - 15",
                    "y": "$canvasendy - 260",
                    "toy": "$canvasendy - 240",
                    "radius": "3"
                }, {
                    "id": "maximum-dot",
                    "type": "circle",
                    "radius": "5",
                    "x": "$canvasstartx - 5",
                    "y": "$canvasendy - 252",
                    "color": "#f8bd19"
                }, {
                    "id": "maximum-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "text": "High",
                    "x": "$canvasstartx - 52",
                    "y": "$canvasendy - 252",
                    "fontsize": "12",
                    "bold": "1"
                }]
            }, {
                "id": "dyn-label-grp",
                "items": [{
                    "id": "dyn-label-bg",
                    "type": "rectangle",
                    "radius": "3"
                }, {
                    "id": "dyn-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "fontsize": "12",
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

        "dataplotRollOver": function(evtObj, argObj) {
            var dsIndex = argObj.datasetIndex,
                dsName = argObj.datasetName,
                index = argObj.index,
                value = argObj.value,
                //Applying colors to individual dataset
                color = (dsIndex === 0) ? "#008ee4" : "#6baa01",
                annotations = evtObj.sender.annotations;
            annotations.update("dyn-label-bg", {
                "x": "$canvasstartx - 72",
                "tox": "$canvasstartx - 10",
                "y": ["$dataset", dsIndex, "set", index, "y+10"].join("."),
                "toy": ["$dataset", dsIndex, "set", index, "y-10"].join("."),
                "fillcolor": color
            });
            annotations.update("dyn-label", {
                "text": value,
                "x": "$canvasstartx - 42",
                "y": ["$dataset", dsIndex, "set", index, "y"].join(".")
            });
            annotations.update("indicator-line", {
                x: ["$canvasstartx"],
                tox: ["$canvasendx"],
                y: ["$dataset", dsIndex, "set", index, "y"].join("."),
                toy: ["$dataset", dsIndex, "set", index, "y"].join("."),
                "color": color
            });
            annotations.update("dyn-detail-label", {
                "text": "Total " + value + " vistiors {br} in " + dsName + " strore",
                "color": color,
                "y": ["$dataset", dsIndex, "set", index, "y + 15"].join(".")
            });
        },
        "dataplotRollOut": function(evtObj, argObj) {
            var annotations = evtObj.sender.annotations;
            annotations.hide("indicator-line");
            annotations.hide("dyn-label-bg");
            annotations.hide("dyn-label");
            annotations.hide("dyn-detail-label");
        }
    }
}
