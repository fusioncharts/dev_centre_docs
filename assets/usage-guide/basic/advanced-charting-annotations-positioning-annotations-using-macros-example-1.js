{
    type: 'spline',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Bakersfield Central - Total footfalls",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "showValues": "0",
            "showBorder": "1",
            "showTooltip": "0",
            "formatNumberScale": "0",
            "theme": "fusion"
        },
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1",
            "groups": [{
                "items": [{
                    "id": "dyn-labelBG",
                    "type": "rectangle",
                    "radius": "3",
                    "x": "$canvasEndX - 100",
                    "y": "$canvasStartY",
                    "tox": "$canvasEndX",
                    "toy": "$canvasStartY + 30",
                    "color": "#0075c2",
                    "alpha": "70"
                }, {
                    "id": "dyn-label",
                    "type": "text",
                    "fillcolor": "#ffffff",
                    "fontsize": "10",
                    "x": "$canvasEndX - 50",
                    "y": "$canvasStartY + 15",
                    "text": ""
                }]
            }]
        },
        "data": [{
            "label": "Mon",
            "value": "15123"
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "25507"
        }, {
            "label": "Thu",
            "value": "9110"
        }, {
            "label": "Fri",
            "value": "15529"
        }, {
            "label": "Sat",
            "value": "20803"
        }, {
            "label": "Sun",
            "value": "19202"
        }]
    },
    "events": {
        //beforeDataUpdate event is raised before data is made ready to be passed on to the chart. Calculate the sum of all footfalls here.
        "beforeDataUpdate": function(evt, args) {
            var i;
            valueTotal = 0;
            if (args.data.data) {
                for (i in args.data.data) {
                    //Add up footfalls for individual data points
                    valueTotal += parseInt(args.data.data[i].value);
                }
                //Format the number in chart's format
                valueTotal = "Total : " + evt.sender.formatNumber(valueTotal, '', {
                    "formatNumberScale": "0"
                });
            }
        },
        //This event is fired when the chart completes drawing.
        //By default, show the sum of all visits
        "rendered": function(evtObj, argObj) {
            var annotations = evtObj.sender.annotations;
            annotations.update("dyn-label", {
                "text": valueTotal
            });
        },
        //Upon roll over of a data point, change the label of annotation
        "dataplotrollover": function(evtObj, argObj) {
            var label = argObj.categoryLabel,
                value = argObj.dataValue,
                annotations = evtObj.sender.annotations,
                formattedValue = label + " : " + evtObj.sender.formatNumber(value);
            //Update the annotation with value of this data point
            annotations.update("dyn-label", {
                "text": formattedValue
            });
        },
        //Upon roll out from a data point, change back to total.
        "dataplotrollout": function(evtObj, argObj) {
            var annotations = evtObj.sender.annotations;
            annotations.update("dyn-label", {
                "text": valueTotal
            });
        }
    }
}
