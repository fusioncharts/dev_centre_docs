---
permalink: advanced-chart-configurations/events/introduction-to-events.html
title: Introduction to Events | FusionCharts
description: Customize and enhance your charts using events in FusionCharts. Discover detailed guides and examples for effective advanced chart configurations. Learn more!
heading: Introduction to Events
chartPresent: true
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. The FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

## Take a look at the column chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one data plot and see how the text (the slice label and the no. of visitors) rendered below the chart changes.

For example, if you roll the mouse pointer over the **Senior** slice, the following text is displayed is below the chart:
**Age group: Senior**
**No. of visitors: 491000**

This happens because the `dataPlotRollOver` and the `dataPlotRollOut` events are configured for this pie chart. Every time, the mouse pointer is rolled over any pie slice, the `dataPlotRollOver` event is triggered. In response to this event, the text shown below the chart is updated to reflect the details for that pie slice.
Every time, the mouse pointer is rolled out of a pie slice, the `dataPlotRollOut` event is triggered. In response to this event, the text below the chart returns to its original value.
