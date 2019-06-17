---
title: Positioning Annotations Using Macros | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Positioning Annotations Using Macros
---

## Prerequisites

- [Create a simple chart using FusionCharts Suite XT](/getting-started/plain-javascript/your-first-chart-using-plain-javascript)
- [Introduction to Annotations](/chart-guide/chart-configurations/annotations/introduction-to-annotations)
- [Creating simple annotations](/chart-guide/chart-configurations/annotations/creating-annotations/create-annotations)

Annotation macros are predefined variables you can use to dynamically position individual annotation items. Since macros assume values at runtime, you can use them with all annotation positioning attributes. That way, you can position annotations relative to chart/gauge elements, such as caption, legend, etc. For example, for an annotation item, if you set `"x": "$captionStartX"`, `x` will take the value of the starting x-coordinate of the chart caption.

You can use any number of macros as variables with the positioning attributes. Use the **+** or **-** operators to add or subtract the macro values from each other or from a fixed number. For example, for an annotation item, assume that you set `"x": "$canvasStartX + $chartLeftMargin + 2"`. The starting x-coordinate of the item will now take a value that is the sum of the starting x-coordinate of the chart canvas, the chart's left margin, and a fixed length of two pixels added together.

> You can use only the **+** or **-** operators to create a macro expression. There should be at least one macro name to create a macro expression. Common mathematical expressions like **30 + 10 - 5**, which do not contain a macro, will not work.

When you resize a chart or a gauge, the values provided by macros are not scaled. Instead, they are replaced with the new values provided by the resized chart. However, the numeric values present in the macro expressions are scaled. For example, the value `10` in the expression `$chartStartY + 10` is scaled when you dynamically resize the chart. To avoid this, prefix the number with the $ symbol. For example, the value `10` in the expression `$chartStartY + $10` is NOT scaled when you dynamically resize the chart.

## Dynamically Position Annotations using Macros

You can dynamically position annotations with respect to the chart itself, as well as the chart elements like the legend, caption, canvas, axes, and the datasets.

## Position Annotations with respect to the Canvas

Use the macros `$canvasStartX`, `$canvasStartY`, `$canvasEndX`, `$canvasEndY`, `$canvasWidth`, and `$canvasHeight` to position annotations with respect to the chart canvas. Note that this only applies to charts that have canvas (primarily, cartesian charts).

Refer to the code below:

```json

    "chart": {
        ...
    },
    "annotations": {
        ...
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
            }]
        }]
    },
    "data": [
        ...
    ]
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/jnkfyu5d/) to edit the above chart.

> In the chart above, the annotation items (a rectangle and a text label) showing the total footfall at Bakersfield Central are positioned at the top-right corner of the canvas. The values of the attributes `x`, `y`, `toX`, and `toY` are specified with respect to the canvas start and end position, using annotation macros.

## Position annotations with respect to datasets

Use the `$dataset` macro to add the position information of the plots in a dataset to the annotation. You can apply the "dataset_index [separator] set [separator] set_index [separator] position_key" sub-token to the macro. 

Possible values you can assign to the position_key include `X`, `Y`, `STARTX`, `STARTY`, `ENDX`, `ENDY`, `CENTERX`, and `CENTERY`. 

For example, you can use the following values to position a rectangle above the second column in a column chart:

* x:$dataset.0.set.1.STARTX

* y:$dataset.0.set.1.STARTY

* tox:$dataset.0.set.1.STARTX+100

* toy:$dataset.0.set.1.STARTY-40

Refer to the code below::

```json
{
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
            "color": "#6267b7",
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
            "id": "ds1tips",
            "items": [{
                "id": "indicator-line",
                "type": "line",
                "dashed": "1"
            }, {
                "id": "tip1_1",
                "type": "rectangle",
                "visible": "0",
                "fillcolor": "#0075c2",
                "x": "$dataset.0.set.0.x + 5",
                "y": "$dataset.0.set.0.y - 30",
                "tox": "$dataset.0.set.0.x + 80",
                "toy": "$dataset.0.set.0.y - 10"
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
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/sxp10xpd/) to edit the above chart.

> In the chart above, the annotation items (the horizontal dashed line, a text label on a rectangle at extreme left of the dashed line, and the label with the store name and the total number of visitors on the extreme right side of the line) are dynamically positioned, so that they appear when you hover the mouse pointer over the corresponding anchor. You can use annotation macros to do this, simply by specifying values for the `x`, `y`, `tox` and `toy` attributes with respect to the dataset position.

## Position annotations with respect to the axes

Use the following macros to position annotations with respect to the x and y-axes:

### **$yaxis**

Use the `$yaxis` macro to add the position information of the y-axis labels to the annotation. You can apply the "yaxis_index [separator] label [separator] label_index [separator] position_key" sub-token to the macro.

Possible values you can assign to the position_key include `X`, `Y`, `STARTX`, `STARTY`, `ENDX`, `ENDY`, `CENTERX`, and `CENTERY`.

For example, you can position a text on the y axis, using the following values:

* x: $yaxis.0.label.1.startx -12,

* y: $yaxis.0.label.0.starty - 5

### **$xaxis**

Use the `$xaxis` macro to add the position information of the x-axis labels to the annotation. You can apply the "xaxis_index [separator] label [separator] label_index [separator] position_key" sub-token to the macro.

Possible values you can assign to the position_key are the same as the ones you can use with the $yaxis macro.

For example, you can position a text on the x axis, using the following values:

* x: $xaxis.label.1.startx+2

* y: $xaxis.label.0.starty+3

Refer to the code below:

```json
{
    "chart": {
        "caption": "Bakersfield Central - Total footfalls",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "yAxisNamePadding": "20",
        "paletteColors": "#008ee4",
        "bgAlpha": "0",
        "borderAlpha": "20",
        "canvasBorderAlpha": "0",
        "plotBorderAlpha": "10",
        "captionpadding": "20",
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
                "id": "high-labels-zone",
                "type": "rectangle",
                "x": "$yaxis.0.label.5.startx + 5",
                "y": "$yaxis.0.label.5.starty",
                "tox": "$yaxis.0.label.3.endx",
                "toy": "$yaxis.0.label.3.starty",
                "color": "#6baa01",
                "alpha": "20"
            }, {
                "id": "high-label",
                "type": "text",
                "text": "High",
                "x": "$yaxis.0.label.4.startx - 5",
                "y": "$yaxis.0.label.4.starty",
                "rotateText": "1",
                "color": "#6baa01"
            }, {
                "id": "moderate-labels-zone",
                "type": "rectangle",
                "x": "$yaxis.0.label.3.startx + 5",
                "y": "$yaxis.0.label.3.starty",
                "tox": "$yaxis.0.label.2.endx",
                "toy": "$yaxis.0.label.1.starty",
                "color": "#f8bd19",
                "alpha": "20"
            }, {
                "id": "moderate-label",
                "type": "text",
                "text": "Moderate",
                "x": "$yaxis.0.label.2.startx - 5",
                "y": "$yaxis.0.label.2.starty",
                "rotateText": "1",
                "color": "#f8bd19"
            }, {
                "id": "low-labels-zone",
                "type": "rectangle",
                "x": "$yaxis.0.label.1.startx - 3",
                "y": "$yaxis.0.label.1.starty",
                "tox": "$yaxis.0.label.0.endx",
                "toy": "$yaxis.0.label.0.endy",
                "color": "#e44a00",
                "alpha": "20"
            }, {
                "id": "low-label",
                "type": "text",
                "text": "Low",
                "x": "$yaxis.0.label.1.startx - 12",
                "y": "$yaxis.0.label.0.starty - 5",
                "rotateText": "1",
                "color": "#e44a00"
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
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/bhqg0p4e/) to edit the above chart.

> In the above chart, the annotation items, showing the low, moderate, and high footfall ranges, are dynamically positioned over the y-axis using annotation sub-token macros.

## Position annotations with respect to other chart elements

Use the following macros to dynamically position annotations with respect to the chart and its other elements:

- Define the annotation position attributes - `x`, `y`, `toX`, `toY`, etc relative to the chart, using the macros `$chartStartX`, `$chartStartY`, `$chartEndX`, `$chartEndY`, `$chartCenterX`, `$chartCenterY`, `$chartWidth`, and `$chartHeight`.

- Position the annotations with respect to the chart margins, using the macros `$chartTopMargin`, `$chartBottomMargin`, `$chartLeftMargin`, and `$chartRightMargin`.

- Position the annotation relative to the chart caption and subcaption, using the macros `$captionStartX`, `$captionStartY`, `$captionEndX`, `$captionEndY`, `$captionWidth`, `$captionHeight`, `$subCaptionStartX`, `$subCaptionStartY`, `$subCaptionEndX`, `$subCaptionEndY`, `$subCaptionWidth`, and `$subCaptionHeight`.

- Position annotations around a legend, using the macros `$legendStartX`, `$legendStartY`, `$legendEndX`, `$legendEndY`, `$legendWidth`, and `$legendHeight`. Note that these macros are only applicable to cartesian charts.

- Position annotations around gauges using the macros `$gaugeStartX`, `$gaugeStartY`, `$gaugeEndX`, `$gaugeEndY`, `$gaugeCenterX`, and `$gaugeCenterY`.

- Position annotations with respect to the start angle and end angle of an angular gauge, using the macros `$gaugeStartAngle` and `$gaugeEndAngle`.

- Position annotations with respect to the radius of a bulb gauge, using the macro `$gaugeRadius`.

- Position annotations with respect to the width of the entire funnel or pyramid plot, using the macro `$plotWidth`.

- Position annotations with respect to half-width of the entire funnel or pyramid plot, using the macro `$plotSemiWidth`.