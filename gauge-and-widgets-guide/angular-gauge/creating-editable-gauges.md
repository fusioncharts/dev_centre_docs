---
permalink: gauge-and-widgets-guide/angular-gauge/creating-editable-gauges.html
title: Creating Editable Angular Gauge | FusionCharts
description: This section talks on how to convert a normal gauge to an editable one.
heading: Creating Editable Angular Gauge
chartPresent: true
---

The angular gauge in the FusionCharts Suite XT suite can also act as an input control, allowing users to visually drag and change the value of the dial. Once the value is updated, it can be retrieved by the gauge using the FusionCharts’ events.

In this section, you will be shown how you can:

* Convert a normal gauge to an editable one

## Converting a Normal Gauge to an Editable Gauge

A normal angular gauge can be converted to an editable gauge by converting all its dials to editable ones or just specific ones.

An angular gauge with two dials converted to an editable gauge with both dials editable looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-creating-editable-gauges-example-1.js %}

An angular gauge with only one dial editable looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-creating-editable-gauges-example-2.js %}

Given below is a brief description of the attribute used to convert a normal gauge to an editable gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`editMode`</td>
    <td>It is used to specify whether the gauge will be rendered as editable. Setting this attribute to 1 will render an editable gauge, setting it to 0 (default) will render a normal gauge. If a gauge has multiple dials and all have them have to be made editable, the `editMode` attribute is defined for the `chart` object. If a gauge has multiple dials and only specific dials have to be made editable, the `editMode` attribute is defined as a part of the `dial` object, which belongs to the `dials` object.</td>
  </tr>
</table>


### Method used to Create Editable Gauges in the Previous Versions

For users who have been using the previous versions, you this a brief recap of how to create an editable gauge.

Once the user has changed the value of the gauge, the gauge automatically calls the `FC_ChartUpdated(DOMId)` JavaScript function.

You will need to define this method in your HTML page and then write the JavaScript code to retrieve the data using `getData(index)` or `getDataForId(id)` method as shown below:

To look at the HTML + JavaScript code required to retrieve data from the dial when a user changes the value, click [here](http://docs.fusioncharts.com/widgets/Contents/Angular/Edit.html).