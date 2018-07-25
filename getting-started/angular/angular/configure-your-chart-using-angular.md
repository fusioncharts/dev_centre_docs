---
title: Configuring your Chart using Angular | FusionCharts
description: This article focuses on different type of configurations possible using Angular.
heading: Configuring your Chart using Angular
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization easy. These features include chart update, annotations, trend-lines, and events.

This article focuses on how you can configure the following:use the React `props` object and `react-fusioncharts` component to:

* Update Chart Data (using React `Props` object)
* Update Chart Attributes (using React `Props` object)
* Add Annotations (using `react-fusioncharts` component)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update chart** data to update the chart data):

{% embed_chart configure-charts-using-angular-example-1.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

The full code of the above sample is given below:

```
CODE
```

## Update Chart Attributes

A chart, configured to update the **chart caption** and **sub-caption** alignment dynamically, is shown below (click any one of the radio buttons shown below the chart to change the caption and sub-caption alignment):

{% embed_chart configure-charts-using-angular-example-2.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

The full code of the above sample is given below:

```
CODE
```

## Add Annotations

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

A spline chart using annotations to highlight a particular anchor along with text is shown below:

{% embed_chart configure-charts-using-angular-example-3.js %}

The JSON data to render the above chart is given below:

```
{
    "chart": {
        "caption": "Average Monthly Temperature in Texas",
        "yAxisName": "Average Monthly Temperature",
        "anchorradius": "5",
        "plotToolText": "Average temperature in $label is <b>$dataValue</b>",
        "showHoverEffect": "1",
        "showvalues": "0",
        "numberSuffix": "°C",
        "theme": "fusion",
        "anchorBgColor": "#72D7B2",
        "paletteColors": "#72D7B2"
    },
    "annotations": {
        "groups": [{
            "id": "anchor-highlight",
            "items": [{
                "id": "high-star",
                "type": "circle",
                "x": "$dataset.0.set.7.x",
                "y": "$dataset.0.set.7.y",
                "radius": "12",
                "color": "#cc0000",
                "border": "2",
                "borderColor": "#0075c2"
            }, {
                "id": "label",
                "type": "text",
                "text": "Hottest Month",
                "fillcolor": "#0075c2",
                "rotate": "90",
                "x": "$dataset.0.set.7.x+75",
                "y": "$dataset.0.set.7.y-2"
            }]
        }]
    },
    "data": [{
        "label": "Jan",
        "value": "1"
    }, {
        "label": "Feb",
        "value": "5"
    }, {
        "label": "Mar",
        "value": "10"
    }, {
        "label": "Apr",
        "value": "12"
    }, {
        "label": "May",
        "value": "14"
    }, {
        "label": "Jun",
        "value": "16"
    }, {
        "label": "Jul",
        "value": "20"
    }, {
        "label": "Aug",
        "value": "22"
    }, {
        "label": "Sep",
        "value": "20"
    }, {
        "label": "Oct",
        "value": "16"
    }, {
        "label": "Nov",
        "value": "7"
    }, {
        "label": "Dec",
        "value": "2"
    }]
},
```

The full code of the above sample is given below:

```
CODE
```