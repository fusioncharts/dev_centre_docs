---
permalink: advanced-chart-configurations/annotations/controlling-annotations-dynamically.html
title: Controlling Annotations Dynamically | FusionCharts
description: FusionCharts Suite XT lets you control annotations dynamically using the FusionCharts API. List of API methods to control annotations dynamically.
heading: Controlling Annotations Dynamically
chartPresent: true
---

## Prerequisites:

* [Creating a simple chart using FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Introduction to Annotations](/advanced-charting/annotations/introduction)

* [Creating Annotations](/advanced-charting/annotations/creating-annotations/introduction)

* [Grouping Annotations](/advanced-charting/annotations/grouping-annotations)

FusionCharts Suite XT lets you control annotations dynamically  using the FusionCharts API. These methods let you create, update, set the visibility of, and delete annotation groups and items at run-time.

Dynamic control of annotations is specifically helpful when you want to augment your charts with context sensitive information. For instance, you can show, hide, or update the color for an annotation group or item using the respective methods.

This article describes the API methods that let you create, manipulate, and delete annotations dynamically.

A spline chart that demonstrates how annotations can be controlled dynamically is shown below:

{% embed_chart advanced-charting-annotations-controlling-annotations-dynamically-example-1.js %}



The API methods to control annotations dynamically are:

<table>
  <tr>
    <th>Method Name</th>
    <th>Method Description</th>
    <th>Parameter Description</th>
  </tr>
  <tr>
    <td>`addGroup(options)`</td>
    <td>Adds a group that can hold multiple annotation items within it.</td>
    <td>`options` defines the characteristics of the group to be added. For instance, `id` defines the unique identification string for the group.</td>
  </tr>
  <tr>
    <td>`addItem(groupId, options, drawImmediate)`</td>
    <td>Adds an annotation item to the specified group. If the groupId is not specified, a new group is created and the annotation item is added to it.</td>
    <td>`groupId` lets you specify the id of the group that to which the annotation item will be added.
`options` defines the characteristics of the annotation item to be added
`drawImmediate` is a boolean value that specifies if the annotation item has to be drawn immediately or not. The default value is `false` that does not draw the item immediately.</td>
  </tr>
  <tr>
    <td>`show(id)`</td>
    <td>Shows the specified annotation group or item on the chart.</td>
    <td>`id` parameter lets you specify the identification string of the group or item to be shown.</td>
  </tr>
  <tr>
    <td>`hide(id)`</td>
    <td>Hides the specified annotation group or item from the chart.</td>
    <td>`id` parameter lets you specify the identification string of the group to be hidden.</td>
  </tr>
  <tr>
    <td>`update(id,{key:value})`</td>
    <td>Updates the properties of the specified annotation group or an individual item in the specified group.</td>
    <td>`id` lets you specify the identification string of the annotation group or item to be updated.
`key` lets you specify the property of the annotation group or item that has to be updated.
`value` lets you specify the new value for the property of the annotation group or item to be updated.</td>
  </tr>
  <tr>
    <td>`destroy(id)`</td>
    <td>Removes the group or an annotation item based on the id specified.</td>
    <td>`id` lets you specify the identification string of the group or annotation item to be removed.</td>
  </tr>
  <tr>
    <td>`clear()`</td>
    <td>Removes all the annotation groups and items within the groups.</td>
    <td></td>
  </tr>
</table>


The complete data structure for the spline chart is given below:

{% embed_data advanced-charting-annotations-controlling-annotations-dynamically-example-1.js %}
