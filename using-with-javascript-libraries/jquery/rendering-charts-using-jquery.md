---
permalink: using-with-javascript-libraries/jquery/rendering-charts-using-jquery.html
title: Rendering Charts Using jQuery | FusionCharts
description: The FusionCharts jQuery helper lets you easily render new charts in an HTML element. In this section, you will be shown how these methods work.
heading: Rendering Charts Using jQuery
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts JQuery Helper can be downloaded from <a href="http://www.fusioncharts.com/jquery-charts" target="_blank">here</a>.</p>

The FusionCharts jQuery helper lets you easily render new charts in an HTML element.

For rendering new charts, you can use the following jQuery methods:

<table>
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`insertFusionCharts`</td>
    <td>It renders charts inside specified HTML elements, replacing the existing contents.</td>
  </tr>
  <tr>
    <td>`appendFusionCharts`</td>
    <td>It renders charts at the end of the specified HTML elements, preserving the existing contents.</td>
  </tr>
  <tr>
    <td>`prependFusionCharts`</td>
    <td>It renders charts at the beginning of the specified HTML elements, preserving the existing contents.</td>
  </tr>
</table>


In this section, you will be shown how these methods work.

## The insertFusionCharts Method

The `insertFusionCharts` method renders charts inside a specified HTML element. If the HTML element had other chart(s) rendered, they will all be replaced to display only the new chart. The HTML element is specified using the jQuery selector. In case multiple HTML elements are selected, a chart will be rendered inside each selected element.

A chart rendered using the `insertFusionCharts` method is shown below:

{% embed_chart using-with-javascript-libraries-jquery-rendering-charts-using-jquery-example-1.js %}

The code snippet that shows how you can insert a new chart is given below:

```javascript
$("#chart-container").insertFusionCharts({
    type: 'hlineargauge',
    width: '400',
    height: '150',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            ...
        },
        "colorRange": {
            "color": [
                ...
            ]
        },
        "pointers": {
            "pointer": [
                ...
            ]
        }
    }
});
```

In the above example, the horizontal linear gauge has been rendered using the `insertFusionCharts` method. The constructor object is passed as an argument to the `insertFusionCharts` method.

## The appendFusionCharts Method

The `appendFusionCharts` method renders a chart at the end of the specified HTML element, preserving the existing charts in that element.

A column 2D chart appended to an existing pie 2D chart looks like this:

{% embed_chart using-with-javascript-libraries-jquery-rendering-charts-using-jquery-example-2.js %}

The code snippet that shows how you can append a chart is given below:

```javascript
$('#chart-container').insertFusionCharts({
    type: 'pie2d',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
                ...
        },
        "data": [...]
    }
});

$('#btnClone').click(function() {
    // Clone the chart to create a column chart representation of the same data
    $(‘#chart-container’).cloneFusionCharts(function() {
        // Append the cloned chart to the same chart container
        $(‘#chart-container’).appendFusionCharts(this[0]);
    }, {
        'id': 'chart-clone',
        'type': 'column2d'
    });
});
```

In the above code snippet, the `cloneFusionCharts` method is used to create a column-chart clone of the existing pie-chart.This method finds all the charts in the selected element and returns a list of their clones.

The `cloneFusionCharts` method accepts two arguments:

* An anonymous callback function: An array of cloned charts (in `this` Array) is passed to this function for further processing

* A configuration object: An object containing chart configurations which are applied to each cloned chart

For more information on cloning a chart, click [here](/using-with-javascript-libraries/jquery/api-reference).

## The prependFusionCharts Method

The `prependFusionCharts` method works similar to the `appendFusionCharts` method, except that it renders the chart at the beginning of the specified HTML element.

A column 2D chart prepended to an existing pie 2D chart looks like this:

{% embed_chart using-with-javascript-libraries-jquery-rendering-charts-using-jquery-example-3.js %}

The code snippet that shows how you can prepend a chart is given below:

```javascript
$('#chart-container').insertFusionCharts({
    type: 'pie2d',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            ...
        },
        "data": [
            ...
        ]
    }
});

$('#btnClone').click(function() {
    // Clone the chart to create a column chart representation of the same data
    $(‘#chart-container’).cloneFusionCharts(function() {
        // Prepend the cloned chart to the same chart container
        $(‘#chart-container’).prependFusionCharts(this[0]);
    }, {
        'id': 'chart-clone',
        'type': 'column2d'
    });
});
```

Similar to the `appendFusionCharts` method example, the `cloneFusionCharts` method is used here to clone the existing pie chart, which is then prepended as a column chart.