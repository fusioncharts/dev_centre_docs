---
title: Dynamically Add Chart Event Listener using Ruby on Rails | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using Ruby on Rails.
heading: Dynamically Add Chart Event Listener using Ruby on Rails
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using **FusionCharts ruby gem wrapper**.

A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

The full code of the above sample is given below:

```

```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains functions to embed the charts.

2. Add `<style>` for the buttons.

3. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`.

4. In the above sample:
	* Add a handler to track plot clicks.
	* Add an event listener is added for data plot click on the chart.
	* Set the default message is set when data plot tracking is enabled.
	* Add an event listener for `dataPlotClick` event when the message is updated with the values of the data plot.

5. Store the chart data in a JSON object.

6. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

7. Create the `<div>` element to render radio buttons using `<input>`.