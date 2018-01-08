---
permalink: gauge-and-widgets-guide/linear-gauge/creating-editable-gauges.html
title: Creating Editable Linear Gauge | FusionCharts
description: The linear gauge in FusionCharts Suite XT can act as an input control, allowing users to visually drag and change the value of pointer.
heading: Creating Editable Linear Gauge
chartPresent: true
---

The linear gauge in FusionCharts Suite XT can act as an input control, allowing users to visually drag and change the value of pointer. Once the value is updated, it can be retrieved from the chart using client-side JavaScript events.

In this section, you will be shown how you can create an editable gauge.

## Creating an Editable Gauge

An editable gauge is a normal gauge configured to process real-time updates.

A normal linear gauge converted into an editable one looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-creating-editable-gauges-example-1.js %}

Given below is a brief description of the attribute used to create an editable gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`editMode`</td>
    <td>It is used to specify whether the gauge will be rendered as editable. Setting this attribute to `1` will render an editable gauge, setting it to `0` (default) will render a normal gauge.<br/>
    </td>
  </tr>
</table>

<p class="text-info"> If a gauge has multiple pointers and all have them have to be made editable, the `editMode` attribute is defined for the `chart` object. If a gauge has multiple pointers and only specific ones have to be made editable, the `editMode` attribute is defined as a part of the `pointer` object, which belongs to the `pointers` object.</p>


### Method used to Create Editable Gauges in the Previous Versions

For users who have been using the previous versions, this a brief recap of how to create an editable gauge.

Once a user has changed the value of the gauge, the gauge automatically calls the `FC_ChartUpdated(DOMId)` JavaScript function.

You will need to define this method in your HTML page and then write the JavaScript code to retrieve the data using `getData(index)` or `getDataForId(id)` method.

To look at the HTML + JavaScript code required to retrieve data from the gauge when a user changes the value, click [here](http://docs.fusioncharts.com/widgets/Contents/Linear/Edit.html).