---
title: Real-life Use Cases | FusionCharts
description: Check out real-life use cases where you can use annotations to interpret charts better.
heading: Real-life Use Cases
---

In the examples given below, you can see how annotations can be used in different scenarios.

## Add a data callout label

Refer to the code below:

```json
{
    "chart": {
        "caption": "Comparison of Quarterly Revenue",
        "subCaption": "Last Year",
        "showBorder": "0",
        "xAxisName": "Quarter",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
        "yAxisMaxValue": "50000",
        "showValues": "0",
        "showTooltip": "0",
        "animation": "0",
        "theme": "fusion"
    },
    "data": [{
        "label": "Q1",
        "value": "30400"
    }, {
        "label": "Q2",
        "value": "29800"
    }, {
        "label": "Q3",
        "value": "21800"
    }, {
        "label": "Q4",
        "value": "26800"
    }],
    "annotations": {
        "showbelow": "0",
        "groups": [{
            "id": "Callout",
            "items": [{
                "id": "CalloutBase",
                "type": "rectangle",
                "radius": "2",
                "alpha": "90",
                "fillColor": "#6baa01"
            }, {
                "id": "CalloutTriangle",
                "type": "polygon",
                "sides": "3",
                "startangle": "270",
                "alpha": "90",
                "fillColor": "#6baa01",
                "radius": "9"
            }, {
                "id": "CalloutLabel",
                "type": "Text",
                "fontSize": "12",
                "bold": "1",
                "fillcolor": "#ffffff"
            }]
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/pLvuerqt/) to edit the above chart.

> In the above chart, you can see how to use annotations to create a callout (using a rectangle, a polygon, and a text annotation, grouped together) above a column. The annotations are dynamically positioned using annotation macros. After the chart is rendered (when the [renderComplete](/api/fusioncharts/fusioncharts-events#rendercomplete) event is triggered), the quarter with the highest revenue is determined and the annotation group is positioned over the data plot representing that quarter.

## Provide more information about data plots

Refer to the code below:

```json
{
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
                "id": "none-label-bg",
                "type": "rectangle",
                "fillcolor": "#f8bd19",
                "x": "$canvasstartx - 60",
                "tox": "$canvasstartx - 15",
                "y": "$canvasendy - 20",
                "toy": "$canvasendy",
                "radius": "3"
            }, {
                "id": "none-dot",
                "type": "circle",
                "radius": "5",
                "x": "$canvasstartx - 5",
                "y": "$canvasendy - 10",
                "color": "#f8bd19"
            }, {
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
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/uc91ftc1/) to edit the above chart.

> The above chart compares the footfall at two stores, Bakersfield Central and Los Angeles Topanga. When you hover the mouse pointer over a data plot, it triggers the [dataplotRollover](/api/fusioncharts/fusioncharts-events#dataplotrollover-247) event. Consequently, an annotation group (containing a line, a label, and text annotation) is shown, which displays additional information about the data plot. When you hover the mouse pointer out of the data plot, it triggers the [dataPlotRollOut](/api/fusioncharts/fusioncharts-events#dataplotrollout) event and the annotation group is hidden.

Macro sub-tokens are used to position the annotation group with respect to the axes and datasets. The `hide()` method is used to hide the group.

## Customize the Y-axis

Refer to the code below:

```json
{
    "chart": {
        "caption": "Bakersfield Central - Total footfalls",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "theme": "fusion"
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

{% embed_chart chart-configurations-annotations-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/ov9kx01n/) to edit the above chart.

> The above chart showcases annotations positioned dynamically, with respect to the y-axis, using macros. The annotations are used to mark three different ranges - low, moderate and high, with three different colors.

## Add More Context to the Chart

Refer to the code below:

```json
{
    "chart": {
        "caption": "Customer Satisfaction Score",
        "subcaption": "Los Angeles Topanga",
        "plotToolText": "Current Score: $value",
        "theme": "fusion",
        "chartBottomMargin": "50",
        "showValue": "1"
    },
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "4.5",
            "code": "#e44a00"
        }, {
            "minValue": "4.5",
            "maxValue": "7.5",
            "code": "#f8bd19"
        }, {
            "minValue": "7.5",
            "maxValue": "10",
            "code": "#6baa01"
        }]
    },
    "dials": {
        "dial": [{
            "value": "8.9"
        }]
    },
    "trendPoints": {
        "point": [{
            "startValue": "6.8",
            "color": "#0075c2",
            "dashed": "1"
        }, {
            "startValue": "9.5",
            "color": "#0075c2",
            "dashed": "1"
        }, {
            "startValue": "6.8",
            "endValue": "9.5",
            "color": "#0075c2",
            "radius": "185",
            "innerRadius": "80"
        }]
    },
    "annotations": {
        "origw": "450",
        "origh": "300",
        "autoscale": "1",
        "showBelow": "0",
        "groups": [{
            "id": "arcs",
            "items": [{
                "id": "national-cs-bg",
                "type": "rectangle",
                "x": "$chartCenterX+2",
                "y": "$chartEndY - 45",
                "tox": "$chartCenterX + 130",
                "toy": "$chartEndY - 25",
                "fillcolor": "#f8bd19"
            }, {
                "id": "national-cs-text",
                "type": "Text",
                "color": "#ffffff",
                "label": "National Average : 7.2",
                "fontSize": "12",
                "align": "left",
                "x": "$chartCenterX + 7",
                "y": "$chartEndY - 35"
            }, {
                "id": "state-cs-bg",
                "type": "rectangle",
                "x": "$chartCenterX-2",
                "y": "$chartEndY - 45",
                "tox": "$chartCenterX - 103",
                "toy": "$chartEndY - 25",
                "fillcolor": "#6baa01"
            }, {
                "id": "state-cs-text",
                "type": "Text",
                "color": "#ffffff",
                "label": "State Average : 8",
                "fontSize": "12",
                "align": "right",
                "x": "$chartCenterX - 7",
                "y": "$chartEndY - 35"
            }, {
                "id": "store-cs-bg",
                "type": "rectangle",
                "x": "$chartCenterX-130",
                "y": "$chartEndY - 22",
                "tox": "$chartCenterX + 150",
                "toy": "$chartEndY - 2",
                "fillcolor": "#0075c2"
            }, {
                "id": "state-cs-text",
                "type": "Text",
                "color": "#ffffff",
                "label": "Store's Customer Satisfaction Range: 6.8 to 9.5",
                "fontSize": "12",
                "align": "center",
                "x": "$chartCenterX + 10",
                "y": "$chartEndY - 12"
            }]
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/gkwnc4q3/) to edit the above chart.

> The above gauge shows the customer satisfaction score with some significant data like, the state average and the national average, using annotation shapes and text elements.

## Annotate images for better visualization

Refer to the code below:

```json
{
    "chart": {
        "caption": "Sales figures for top 4 chocolate brands - FY2013-2014",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Brand",
        "yAxisName": "Amount (In USD)",
        "yAxisMaxValue": "120000",
        "numberPrefix": "$",
        "theme": "fusion",
        "PlotfillAlpha": "0",
        "placeValuesInside": "0",
        "rotateValues": "0",
        "valueFontColor": "#333333",
        "valuePadding": 10
    },
    "annotations": {
        "width": "500",
        "height": "300",
        "autoScale": "1",
        "groups": [{
            "id": "user-images",
            "xScale_": "20",
            "yScale_": "20",
            "items": [{
                "id": "butterFinger-icon",
                "type": "image",
                "url": "https://static.fusioncharts.com/sampledata/images/butterFinger.png",
                "x": "$xaxis.label.0.x - 30",
                "y": "$canvasEndY - 150",
                "xScale": "50",
                "yScale": "40"
            }, {
                "id": "tom-user-icon",
                "type": "image",
                "url": "https://static.fusioncharts.com/sampledata/images/snickrs.png",
                "x": "$xaxis.label.1.x - 26",
                "y": "$canvasEndY - 141",
                "xScale": "48",
                "yScale": "38"
            }, {
                "id": "Milton-user-icon",
                "type": "image",
                "url": "https://static.fusioncharts.com/sampledata/images/coffee_crisp.png",
                "x": "$xaxis.label.2.x - 22",
                "y": "$canvasEndY - 134",
                "xScale": "43",
                "yScale": "36"
            }, {
                "id": "Brian-user-icon",
                "type": "image",
                "url": "https://static.fusioncharts.com/sampledata/images/100grand.png",
                "x": "$xaxis.label.3.x - 22",
                "y": "$canvasEndY - 131",
                "xScale": "43",
                "yScale": "35"
            }]
        }]
    },
    "data": [{
        "label": "Butterfinger",
        "value": "92000"
    }, {
        "label": "Snickers",
        "value": "87000"
    }, {
        "label": "Coffee Crisp",
        "value": "83000"
    }, {
        "label": "100 Grand",
        "value": "80000"
    }]
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/rpsrtk8a/) to edit the above chart.

> In the above chart, images of brands are shown instead of the conventional 2D column data plots. Using these annotations makes the chart more intuitive while also increasing its visual appeal. Imagine how easy it becomes for your audience to read data in a chart like this, especially if the data is for a large number of brands.

## Use Events to Trigger Display of Annotation Items

Refer to the code below:

```json
{
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
                "tox": "$xaxis.label.0.x",
                "toy": "$canvasStartY",
                "color": "#6baa01",
                "alpha": "20",
            }, {
                "id": "label",
                "type": "text",
                "text": "Weekend",
                "fillcolor": "#666666",
                "fontSize": "12",
                "bold": "1",
                "x": "$xaxis.label.7.x + 350",
                "y": "$canvasEndY - 20"
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

{% embed_chart chart-configurations-annotations-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/3Lnm59z6/) to edit the above chart.

> In the above chart, you can see how to use events on annotation items. If you hover the mouse pointer on the Weekend zone (represented by a green rectangle on the chart), it triggers the events **annotationRollOver** and **annotationRollOut**, which show the total footfall on Saturday and Sunday.

## Create a Collaborative Dashboard

Click [here](http://www.fusioncharts.com/dashboards/collaboration/) to see a collaborative dashboard that is a complex and practical example of how to use annotations, to add more information to a chart.

Notice the callout that renders above the data plot for April. The callout is an annotation. When this callout is clicked, **annotationClick** event is triggered. This navigates the user to a view that shows the monthly sales analysis for April in the left pane and user comments on this analysis in the right pane. Every time a comment is added, the text annotation (showing the number of comments) alongside the callout is updated.

Annotations, thus, let you add more information to your charts, creatively.