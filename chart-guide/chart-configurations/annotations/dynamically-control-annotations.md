---
title: Dynamically Control Annotations | FusionCharts
description: You can create, update, set the visibility of, or even delete a single annotation or a group of them at runtime with methods through FusionCharts API.
heading: Dynamically Control Annotations
---

## Prerequisites

- [Create a simple chart using FusionCharts Suite XT](/getting-started/plain-javascript/your-first-chart-using-plain-javascript)
- [Introduction to Annotations](/chart-guide/chart-configurations/annotations/introduction-to-annotations)
- [Creating simple annotations](/chart-guide/chart-configurations/annotations/creating-annotations/create-annotations)
- [Grouping Annotations](/chart-guide/chart-configurations/annotations/grouping-annotations)

You can use methods available within FusionCharts Suite XT to create, update, set the visibility of, and delete annotation groups and items at runtime, with the FusionCharts API. This is especially helpful when you want to augment your charts with context sensitive information. For instance, you can show, hide, or update the color for an annotation group or item using the respective methods.

Use the following methods to dynamically create, manipulate, and delete annotations:

- Add a group that can hold multiple annotation items within it, using the `addGroup(options)` method. Use the `options` parameter to define the characteristics of the group.

- Add an annotation item to a specified group, using the `addItem(groupId, options, drawImmediate)` method.

  - Use the `groupId` parameter to specify the id of the group, to which the annotation item will be added. If you leave this parameter unspecified, a new group will be created and the annotation item added to it.

  - Use the `options` parameter to define the characteristics of the annotation item to be added.

  - Use the `drawImmediate` parameter to specify whether the annotation item has to be drawn immediately, or not. This property is of the Boolean type and accepts either true or false as values.

- Show a specific annotation group or item on the chart, using the `show(id)` method. Use the `id` parameter to specify the identification string of the group or item to be shown.

- Hide a specific annotation group or item from the chart, using the hide(id) method. Use the `id` parameter to specify the identification string of the group or item to be hidden.

- Update the properties of a specific annotation group, or an individual item in a specific group, using the `update(id,{key:value})` method.

  - Use the `id` parameter to specify the identification string of the group or item to be updated.

  - Use the `key` parameter to specify the property of the annotation group or item to be updated.

  - Use the `value` parameter to specify the new value for the property of the annotation group or item to be updated.

- Remove a specific group or an annotation item, using the `destroy(id)` method. Use the `id` parameter to specify the identification string of the group or item to be removed.

- Removes all annotation groups and items within the groups, using the clear() method.

Refer to the code below:

```json
{
  "chart": {
    "caption": "Total footfall in Bakersfield Central",
    "subCaption": "Last week",
    "xAxisName": "Day",
    "yAxisName": "No. of Visitors",
    "showValues": "1",
    "theme": "fusion"
  },
  "annotations": {
    "origw": "400",
    "origh": "300",
    "autoscale": "1"
  },
  "data": [
    {
      "label": "Mon",
      "value": "15123"
    },
    {
      "label": "Tue",
      "value": "14233"
    },
    {
      "label": "Wed",
      "value": "25507"
    },
    {
      "label": "Thu",
      "value": "9110"
    },
    {
      "label": "Fri",
      "value": "15529"
    },
    {
      "label": "Sat",
      "value": "20803"
    },
    {
      "label": "Sun",
      "value": "19202"
    }
  ]
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/a39kuoj5/) to edit the above chart.
