---
permalink: chart-guide/marimekko-chart/creating-a-marimekko-chart.html
title: Creating a Marimekko Chart | FusionCharts
description: Marimekko charts are stacked column charts with columns of variable width. They are primarily used for marketing analysis.
heading: Creating a Marimekko Chart
chartPresent: true
---

Marimekko charts are stacked column charts with columns of variable width. They are primarily used for marketing analysis.

The following three dimensions of marketing data can be represented using a Marimekko chart:

* Total value of a market segment

* Combined share of all competitors in a market segment

* Individual share of competitors in a market segment

In this section, you will be shown how you can create a Marimekko Chart.

## Creating a Marimekko Chart

A simple Marimekko chart that shows the top 3 Electronic Brands (Bose, Dell, and Apple) in the top 3 revenue earning states (California, Washington, and Nevada) looks like this:

{% embed_all chart-guide-marimekko-chart-creating-a-marimekko-chart-example-1.js %}

The Marimekko chart shown above, when seen in the default mode, helps you instantly figure out the following:

* The top three manufactures within each state (Bose, Dell, and Apple) and the individual sales of each manufacturer within a state, indicated by the partitions in the stacked column.

* The total sales by manufacturers across all three states for the given duration (a month, in this case), shown on top of the stacked column for each manufacturer. For example, the total sales for Bose, $848K, is shown above the first column.

* The percentage market share for each manufacturer, shown as a percentage label between the stacked columns. For example, Bose has a total market share of approximately 46%, as shown by the label between the data plots for Bose and Dell.

As you can see in the chart data, the actual sales data has been provided. The Marimekko chart automatically converts these values into percentage values based on the size of a market segment and the percentage share held by competitors in each segment.

The percentage share of each manufacturer within a segment is shown in the tooltip text for that partition. For example, the percentage share for Bose in Washington is approximately 25%; it can be seen in the tooltip text shown when the mouse pointer is hovered over the partition for Washington in the first column.

The height of columns can be used to compare the TAM (Total Available Market) per market segment.

## Brief Explanation of the JSON Data Structure

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```


Given below is a brief description of the attributes used to render the above Marimekko chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. To render a Marimekko chart, the value for this attribute will be `marimekko`.</td>
  </tr>
  <tr>
    <td>`renderAt`</td>
    <td>It is used to specify the container object where the chart will be rendered.</td>
  </tr>
  <tr>
    <td>`width`</td>
    <td>It is used to specify the width of the chart.</td>
  </tr>
  <tr>
    <td>`height`</td>
    <td>It is used to specify the height of the chart.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>It is used to specify the type of data that will passed to the `chart` object. This attribute takes two values: __json__, where the JSON data to render the chart is passed to the `dataSource` attribute, and __jsonurl__, where the relative path to a .json file is passed to the `dataSource` attribute. <br> Similarly, __xml__ and __xmlurl__ are also valid values. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>It is used to specify the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`caption`</td>
    <td>It is used to specify the chart caption. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`subCaption`</td>
    <td>It is used to specify the chart sub-caption. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`xAxisName`</td>
    <td>It is used to specify the x-axis name. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`yAxisName`</td>
    <td>It is used to specify the y-axis name. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`numberPrefix`</td>
    <td>It is used to specify the character that will precede all numeric values on the chart, for example, the __$__ symbol for the currency symbol. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for a data item. The label is rendered on the x-axis. This attribute belongs to the `category` object array, which in turn belongs to the `categories` object array.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the value for a data item. This attribute belongs to the `data` object array, which in turn belongs to the `dataset` object array.</td>
  </tr>
  <tr>
    <td>`seriesName`</td>
    <td>It is used to specify a name for the dataset. This name is shown in the legend box rendered below the chart. This attribute belongs to the `dataset` object array.</td>
  </tr>
</table>