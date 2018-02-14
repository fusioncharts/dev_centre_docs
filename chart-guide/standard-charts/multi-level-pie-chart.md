---
title: Multi-level Pie Chart | FusionCharts
description: The multi-level pie chart is a special type of chart that allows you to show symmetrical/asymmetrical tree structures in a consolidated pie-like structure
heading: Multi-level Pie Chart
breadcrumb: [["Home", "/"], ["Multi-level Pie Chart"]]
---

The multi-level pie chart is a special type of chart that allows you to show symmetrical and asymmetrical tree structures in a consolidated pie-like structure. It presents the entire hierarchical data in a single-screen snapshot, which makes it a preferred choice over a tree view. Also, the pie slices can assume numerical values and thereby divide the visual segments in a ratio based on the numerical values. The chart also offers advanced interactivity options like visual path tracing from any child to parent.

This chart can be used to show various types of data like:

* Organization structure

* Multi-tiered data presentation, e.g. keyword analysis

* Inter-linked tree data, e.g. friends of friends

* Sales breakup, e.g. for top product categories

As an example, we will create a multi-level pie chart that shows the sales breakup of top product categories for the last quarter at Harry's SuperMart.

To create a multi-level pie chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a multi-level pie chart, set `multilevelpie`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes you can check the API reference page of multi-level pie chart.

The multi-level pie chart thus rendered looks like this:

{% embed_all standard-charts-multi-level-pie-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/njjra2r4/ "@@open-newtab") to edit the multi-level pie chart.