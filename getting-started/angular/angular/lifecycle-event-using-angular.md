---
title: Lifecycle Events using Angular | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using angular-fusioncharts component.
heading: Lifecycle Events using Angular
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart using `angular-fusioncharts` component.

A chart is shown below:

{% embed_chartData lifecycle-event-example-1.js json %}























The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

3. Created a component to include `react-fusioncharts` component.

4. In the above sample:
	* Callback handler for `beforeDataUpdate` event has been used.
	* Callback handler for `dataUpdated` event has been used.
	* Callback handler for `drawComplete` event has been used.
	* Callback handler for `renderComplete` event has been used.

5. `render()` function is added to create the `button` inside the `<div>`.

6. A `DOM` element has been created and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.