{
    type: 'spline',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total footfall in Bakersfield Central",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "paletteColors": "#008ee4",
            "bgAlpha": "0",
            "borderAlpha": "20",
            "canvasBorderAlpha": "0",
            "plotBorderAlpha": "10",
            "captionpadding": "20",
            "showXAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "showValues": "0",
            "showAlternateHGridColor": "0"
        },
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1",
            "groups": [{
                "items": [{
                    "id": "zone",
                    "type": "rectangle",
                    "x": "$xaxis.label.6.x",
                    "y": "$canvasEndY",
                    "tox": "$xaxis.label.7.x",
                    "toy": "$canvasStartY",
                    "color": "#6baa01",
                    "alpha": "20",
                }, {
                    "id": "label",
                    "type": "text",
                    "text": "Weekend",
                    "fillcolor": "#666666",
                    "fontSize": "10",
                    "bold": "1",
                    "x": "$xaxis.label.7.x - 25",
                    "y": "$canvasEndY - 35"
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
            "vline": "true",
            "lineposition": "0",
            "color": "#6baa01",
            "labelHAlign": "left",
            "label": "National holiday"
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
    events: {
        'annotationRollOver': function(evtObj, argObj) {
            var annotations = evtObj && evtObj.sender.annotations,
                dispLabel = "";
            dispLabel = evtObj.sender.options.dataSource.data[6].label + ": " + evtObj.sender.options.dataSource.data[6].value + "{br}" + evtObj.sender.options.dataSource.data[7].label + ": " + evtObj.sender.options.dataSource.data[7].value;
            annotations && annotations.update("zone", {
                "alpha": "60"
            });
            annotations && annotations.update("label", {
                "text": dispLabel

            });
        },
        'annotationRollOut': function(evtObj, argObj) {
            var annotations = evtObj && evtObj.sender.annotations;

            annotations && annotations.update("zone", {
                "alpha": "20"
            });
            annotations && annotations.update("label", {
                "text": "Weekend",
            });
        }
    }
}
