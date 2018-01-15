---
permalink: advanced-chart-configurations/annotations/using-annotation-events.html
title: Using Annotation Events | FusionCharts
description: FusionCharts Suite XT lets you capture events for the annotations rendered on your charts and perform a corresponding action.
heading: Using Annotation Events
chartPresent: true
---

## Prerequisites:

* [Creating a simple chart using the FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Introduction to Annotations](/advanced-charting/annotations/introduction)

* [Creating Annotations](/advanced-charting/annotations/creating-annotations/introduction)

* [Grouping Annotations](/advanced-charting/annotations/grouping-annotations)

FusionCharts Suite XT lets you capture events for the annotations rendered on your charts and perform a corresponding action. Events let you tap user interactions with annotations such as clicking an annotation, hovering over an annotation and so on.

FusionCharts Suite XT includes the following annotation events:

* `annotationRollOver`

* `annotationRollOut`

* `annotationClick`

This article describes the annotation events.

A spline chart configured to demonstrate the `annotationRollOver` and `annotationRollOut` events is shown below:

{% embed_chart advanced-charting-annotations-using-annotation-events-example-1.js %}



In the above chart, a rectangle annotation is used to mark weekends.

Every time you hover the mouse pointer over the annotation group, the transparency of the rectangle annotation item changes. Also, a text annotation showing the footfall data for Saturday and Sunday is rendered.

Every time you hover the mouse pointer out of the annotation group, the transparency of the rectangle annotation item is reverted to its original value and the text annotation value is updated to display Weekend.

A brief description of the annotation events is as follows:

<table>
  <tr>
    <th>Event Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`annotationRollOver`
</td>
    <td>It is triggered every time the mouse pointer is hovered over an annotation. For touch devices, the event is triggered when you tap an annotation after previously tapping anywhere on the chart, outside the annotation.</td>
  </tr>
  <tr>
    <td>`annotationRollOut`</td>
    <td>It is triggered every time the mouse pointer hovers out of an annotation, after hovering over it. For touch devices, the event is triggered when you tap anywhere on the chart, outside the annotation, after previously tapping the annotation.</td>
  </tr>
  <tr>
    <td>`annotationClick`</td>
    <td>It is triggered every time an annotation is clicked. </td>
  </tr>
</table>


Attributes passed under the `argObj` parameter of these events are as follows:

* `chartX`

* `chartY`

* `pageX`

* `pageY`

* `annotationId`

* `annotationOptions`

* `groupId`

* `groupOptions`

For more information on these parameters, click [here](/api/fusioncharts/namespaces/annotations#events).

The complete data structure for the spline chart with annotation events is given below:

{% embed_data advanced-charting-annotations-using-annotation-events-example-1.js %}
