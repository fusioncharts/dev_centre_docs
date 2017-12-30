---
permalink: basic-chart-configurations/data-values.html
title: Data Values | FusionCharts
description: Data values are plot values. The section talks about configuring text labels, rotation of data values, placement of data values and displaying data values.
heading: Data Values
chartPresent: true
---

Data values are plot values i.e. values of each data plot (line, column, bar, pie) displayed on the chart.

![FusionCharts data values]({{ site.baseurl }}assets/images/data_values.png)

This section talks about:

* <a href="{{ site.baseurl }}basic-chart-configurations/data-values.html#configuring-text-labels-instead-of-numeric-data-values">Configuring text labels instead of numeric data values</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/data-values.html#configuring-rotation-of-data-values">Configuring rotation of data values</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/data-values.html#configuring-placement-of-data-values-inside-columns">Configuring placement of data values</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/data-values.html#configuring-display-of-data-values">Configuring display of data values</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/data-values.html#customizing-data-value-properties">Customizing data value properties</a>

## Configuring text labels instead of numeric data values

Instead of displaying numeric data values, you can use text labels to denote data values for each data item.

A column 2D chart with custom text instead of numeric data values looks as below:

{% embed_all configuring-your-chart-data-values-example-1.js %}

Given below is the attribute used to configure text as the data value:

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>Used to display a custom text instead of the numerical value of data. </td>
  </tr>
</table>






## Configuring rotation of data values

You can display data values in the following modes:

* Normal mode

* Rotated mode

### Normal Mode

In the normal mode, you can display data values horizontally as shown below:

{% embed_all configuring-your-chart-data-values-example-2.js %}

### Rotated Mode

In the rotated mode, you can rotate data values in a chart as shown below

{% embed_all configuring-your-chart-data-values-example-3.js %}

Given below is the attribute used to rotate data values in the chart:

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`rotateValues`</td>
    <td>Set to `1` to rotate data values and `0` to keep them horizontal.</td>
  </tr>
</table>






## Configuring placement of data values inside columns

You can place data values inside a chart and you can also rotate it for better clarity.

A column 2D chart with data values placed inside columns looks as shown below:

{% embed_all configuring-your-chart-data-values-example-5.js %}

Given below is the attribute used to place data values inside columns:

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`placevaluesInside`</td>
    <td>Set this to `1` to show data values inside the column or to `0` to show values outside. By default, the chart tries to show the values outside the column. </td>
  </tr>
</table>






## Configuring display of data values

You can display specific data values as described in this sub-section.

A column 2D chart with specific data values placed inside columns looks as below:

{% embed_all configuring-your-chart-data-values-example-6.js %}

Given below is the attribute used to display only specific data values:

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`showValues`</td>
    <td>Set it to `1` to show all data values in a chart and to `0` to hide it.</td>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>Set it to `1` to show a particular data value and to `0` to hide it. This setting overrides the `showValues` setting at the chart object level.</td>
  </tr>
</table>






### Skipping y-axis values

If there are a large number of values to be displayed along the y-axis, FusionCharts Suite XT allows you to display only every nth y-axis value.

A column 2D chart with y-axis values skipped to render only alternate values looks as below:

{% embed_all configuring-your-chart-data-values-example-7.js %}

Given below is the attribute used to skip y-axis values:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`yAxisValuesStep`</td>
    <td>Setting this variable to `n` will show the first value (from bottom) and every n-th value after that. e.g., a chart showing data for 12 months and set with `yAxisValuesStep`: `3` will show labels for January, April, July and October. The rest of the values will be skipped.

This attribute can also assume default values based on the space available in the chart to render y-axis values, and can override the values provided to avoid overlapping of y-axis values.</td>
  </tr>
</table>






## Customizing data value properties

You can customize the data value properties in terms of font, border, background, and alpha. Let us understand each of them in detail.

### Font Properties

A column 2D chart with a blue color font and other customizations applied, looks as below:

{% embed_all configuring-your-chart-data-values-example-8.js %}

Given below is the list of attributes used to customize the font for data values:

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`valueFont`</td>
    <td>Sets the font family for data-values, e.g. `Arial`</td>
  </tr>
  <tr>
    <td>`valueFontColor`</td>
    <td>Sets the font color for data-values in hex code, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`valueFontSize`</td>
    <td>Specifies the data-value font size, with a range of `0` to `72`.</td>
  </tr>
  <tr>
    <td>`valueFontBold`</td>
    <td>`1` (default) sets font to bold and `0` sets it to normal.</td>
  </tr>
  <tr>
    <td>`valueFontItalic`</td>
    <td>`1` italicizes the font and `0` (default) sets it to normal.</td>
  </tr>
  <tr>
    <td>`valueAlpha`, `valueFontAlpha`</td>
    <td>Sets the transparency for text, background and border of the data values. Value ranges from `0`(transparent) to `100`(opaque).</td>
  </tr>
</table>






### Customizing data value border

A Pie 2D chart with a dashed border around the data values looks as below:

{% embed_all configuring-your-chart-data-values-example-9.js %}

Given below is the list of attributes used to customize the border for data values:

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`valueBorderColor`</td>
    <td>Sets the color of border around data value in hex code, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`valueBorderAlpha`</td>
    <td>Sets the transparency of border of the data values. Value ranges from `0`(transparent) to `100`(opaque).</td>
  </tr>
  <tr>
    <td>`valueBorderThickness`</td>
    <td>Sets data-value border thickness(in pixels).</td>
  </tr>
  <tr>
    <td>`valueBorderRadius`</td>
    <td>Sets data-value border radius(in pixels).</td>
  </tr>
  <tr>
    <td>`valueBorderDashed`</td>
    <td>`1` makes data-value border dashed and `0` sets it to normal  (default).</td>
  </tr>
  <tr>
    <td>`valueBorderDashGap`</td>
    <td>Sets the gap between two consecutive dashes of data-value border (in pixels).</td>
  </tr>
  <tr>
    <td>`valueBorderDashLen`</td>
    <td>Sets the length of each dash in data-value border (in pixels).</td>
  </tr>
  <tr>
    <td>`valueBorderHoverAlpha`</td>
    <td>Sets the value border alpha on hover</td>
  </tr>
</table>






### Customizing data value background

A Pie 2D chart with background properties for data values applied looks as below:

{% embed_all configuring-your-chart-data-values-example-10.js %}

Given below is the list of attributes used to customize the background for data values:

<table>
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`valueBgColor`</td>
    <td>Sets the background color of data value text in hex code, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`valueBgAlpha`</td>
    <td>Sets the transparency of text-background of the data values. Value ranges from `0`(transparent) to `100`(opaque).</td>
  </tr>
  <tr>
    <td>`valueBgHoverAlpha`</td>
    <td>Sets the value background alpha on hover</td>
  </tr>
</table>





