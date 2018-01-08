---
permalink: chart-guide/combination-charts/creating-combination-charts.html
title: Creating Combination Charts | FusionCharts
description: Combination charts allow you to plot multiple datasets on the same chart. But an added advantage with using combination charts is that you can also plot multiple chart types on the same chart.
heading: Creating Combination Charts
chartPresent: true
---

Combination charts are similar to [multi-series charts]{% linkTo tutorials/chart-guide/multi-series-charts/creating-multi-series-charts.md %}, they allow you to plot multiple datasets on the same chart. But an added advantage with using combination charts is that you can also plot multiple chart types on the same chart. For example, you can show the column, line, and area chart on the same chart canvas.


Combination charts can be rendered in either 2D or 3D, can have single or dual y-axes, and can be stacked or multi series in nature.

The combination charts available in the FusionCharts Suite XT are:

* 2D Single Y Combination (Combi 2D)

* 3D Single Y Combination (Combi 3D)

* 2D Dual Y Combination (Combi DY2D)

* Column 3D + Line Single Y

* Column 3D + Line Dual Y

* Stacked Column 2D Line Single Y

* Stacked Column 3D Line Single Y

* Stacked Column 3D Line Dual Y

* Multi Series Stacked Column 2D + Line Dual Y

In this section, you will be shown a how you can create combination charts.

## Creating a 2D Single Y Combination Chart(Combi 2D)

A 2D combination chart with a single y-axis looks like this:

{% embed_all chart-guide-combination-charts-creating-combination-charts-example-1.js %}

In the above chart, we have compared the actual revenue, the projected revenue and the profit earned for each month of the last year. All three metrics have been plotted using different chart types - the actual revenue earned is plotted using a column chart, the projected revenue is plotted using a line chart, and the profit earned is plotted using an area chart.

Using a different chart type for each metric ensures easy interpretation of the data being shown.



## Creating a 2D Dual Y Combination (Combi DY2D)

A 2D combination chart with dual y-axis looks like this:

{% embed_all chart-guide-combination-charts-creating-combination-charts-example-2.js %}

In the above chart, we have shown a comparison between the revenue, profit, and the profit percentage. The revenue and the profit will be shown as amount in dollars but the profit percentage will require a different unit - percentage. These cannot be plotted on a single y-axis. FusionCharts Suite XT allows you to have two y-axes, a primary y-axis and a secondary y-axis, if you have two data of two different numeric units to plot.

Therefore, we’ve plotted the amount in USD on the primary y-axis (the one on the left) and the profit % on the secondary y-axis (the one on the right).



## Brief Explanation

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```

Given below is a brief description of the data structure needed to render a combination chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a column 2D chart, the value for this attribute will be `column2d`.</td>
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
    <td>It is used to specify the type of data that will passed to the chart object. This attribute takes two values: `json`, where the JSON data to render the chart is passed to the `dataSource` attribute, and `jsonurl`, where the relative path to a .json file is passed to the `dataSource` attribute.</td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
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
    <td>It is used to specify the name for the x-axis.</td>
  </tr>
  <tr>
    <td>`yAxisName`</td>
    <td>It is used to specify the name for the y-axis.</td>
  </tr>
  <tr>
    <td>`pYAxisName`</td>
    <td>It is used to specify the name for the primary y-axis. This attribute is used in place of the `yAxisName` attribute, if you are plotting a dual y-axis chart.</td>
  </tr>
  <tr>
    <td>`sYAxisName`</td>
    <td>It is used to specify the name for the secondary y-axis. This attribute is used with the `pYAxisName` attribute, in place of the `yAxisName` attribute, if you are plotting a dual y-axis chart.</td>
  </tr>
  <tr>
    <td>`numberPrefix`</td>
    <td>It is used to specify the character that will precede all numeric values on the chart, e.g. `$` for the currency symbol. If you are plotting a dual y-axis chart, this attribute is used to specify the prefix for the primary y-axis values.</td>
  </tr>
  <tr>
    <td>`sNumberSuffix`</td>
    <td>It is used to specify the suffix character for the secondary y-axis values. </td>
  </tr>
  <tr>
    <td>`sYAxisMaxValue`</td>
    <td>It is used to specify the upper limit (maximum value) for the secondary y-axis. </td>
  </tr>
  <tr>
    <td>`theme`</td>
    <td>It is used to specify the theme for the chart.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for a data item. The label is rendered on the x-axis. This attribute belongs to the `category` object, which in turn belongs to the `categories` object.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the value for a data item. This attribute belongs to the `data` object, which in turn belongs to the `dataset` object. The `dataset` object is an object array that can be used to make multiple datasets.</td>
  </tr>
  <tr>
    <td>`seriesName`</td>
    <td>It is used to specify a name for the dataset. This name is shown in the legend box rendered below the chart. This attribute belongs to the `dataset` object. The `dataset` object is an object array that can be used to make multiple datasets.</td>
  </tr>
  <tr>
    <td>`renderAs`</td>
    <td>It is used to specify the chart type that will be used to render a dataset. This attribute belongs to the `dataset` object.

<p class="text-info"> By default all datasets are rendered using column charts, unless the `renderAs` attribute has been explicitly defined.</p></td>
  </tr>
  <tr>
    <td>`showValues`</td>
    <td>It is used to specify whether the data values corresponding to each data plot will be shown on the chart. Setting this attribute to `0` will hide the values, setting it to `1` (default) will show them.</td>
  </tr>
</table>