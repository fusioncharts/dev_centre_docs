---
permalink: basic-chart-configurations/tool-tips.html
title: Customizing the Tooltips | FusionCharts
description: A tooltip is displayed when the mouse is hovered over a particular data point. This article talk about customizing the tooltip.
heading: Tooltips
chartPresent: true
---

A tooltip is displayed when the mouse is hovered over a particular data point. It denotes valuable information such as:

* For a single series charts, it denotes the name and data value

* For pie & doughnut charts, it denotes name and value/percentage

* For a multi-series & combination chart, it denotes a series name, category name, and data value

This article explains how you can:

* <a href="/basic-chart-configurations/tool-tips#customizing-tooltips" class="smoth-scroll">Customize tooltips</a>

* <a href="/basic-chart-configurations/tool-tips#tooltip-text-across-multiple-lines" class="smoth-scroll">Show tooltip text across multiple lines</a>

This article also includes:

* <a href="/basic-chart-configurations/tool-tips#introduction-to-macros" class="smoth-scroll">Introduction to Macros</a>

* <a href="/basic-chart-configurations/tool-tips#adding-html-tables-in-tooltips" class="smoth-scroll">Adding HTML tables in tooltips</a>

* <a href="/basic-chart-configurations/tool-tips#advanced-usage-of-tooltip-macros" class="smoth-scroll">Advanced usage of tooltip macros</a>

## Customizing tooltips

A column 2D chart with customized tooltip border and background looks as below:

{% embed_all configuring-your-chart-tool-tips-example-1.js %}

Here is a brief description of the attributes used to customize tooltips:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showToolTip`</td>
    <td>Set the value to `1` (default) to enable the tooltip or set it to `0` to disable it.</td>
  </tr>
  <tr>
    <td>`toolTipBgColor`</td>
    <td>Specify background Color for tooltip. Accepts hex code. e.g. `#fffffff`(default).</td>
  </tr>
  <tr>
    <td>`toolTipBorderColor`</td>
    <td>Specify tooltip border color. Accepts hex code. e.g. `#545454`.</td>
  </tr>
  <tr>
    <td>`toolTipSepChar`</td>
    <td>The character specified as the value of this attribute separates the name and value displayed in tool tip. Accepts any string. e.g. `,` (default), `--`</td>
  </tr>
  <tr>
    <td>`showToolTipShadow`</td>
    <td>Set the value to `1` (default) to enable the tooltip-shadow or set it to `0` to disable it.</td>
  </tr>
</table>


## Tooltip text across multiple lines

A column 2D chart with the tooltip text across multiple lines looks as below:

{% embed_all configuring-your-chart-tool-tips-example-2.js %}

Given below is a brief description of the `toolText` attribute used for this:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`toolText`</td>
    <td>By default, FusionCharts XT shows the data item name and value as tool tip text for that data item. But, if you want to display more information for the data item as tool tip. you can distlay the tooltip-text in multiline format. Use `{br}` to add line break in the text. e.g. `Quarter 1{br}Total Sale: $195K{br}Rank: 1` </td>
  </tr>
</table>


## Introduction to Macros

FusionCharts Suite XT 3.4 introduces macros to configure dynamic and contextual content in tooltips. This allows you to build custom tooltext for data points on the chart and saves a lot of manual effort by providing deeper customization.

Each chart contains labels, raw values, formatted values, display values etc. as variables that can be used in conjunction with your custom text to form the complete tooltext.

Some of the points to remember while using macros for tooltips:

1. Macros are case-insensitive

2. A macro which is not applicable will be treated as string

3. To use a macro name as text in tooltip use "\" before the "$" sign. Example: to show "$value" in tooltip use "\$value" in `tooltext` attribute.

4. Tooltext can also be configured from corresponding parent nodes (that is, chart, dataset, etc).

## Adding HTML tables in tooltips

Using the `plotToolText` attribute , you can add dynamic HTML tables in tooltips too. A box and whisker chart with customized tooltips having tables and macros looks as below:

{% embed_all configuring-your-chart-tool-tips-example-3.js %}

Below is a brief description of the attributes used:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotToolText`</td>
    <td>In `plotToolText` not only text or text containing macros, you can also provide HTML string as a value. All applicable styles and CSS will be applicable in this. e.g.
    <code>&lt;div id='headerdiv'&gt;$label&lt;/div&gt;&lt;div&gt;&lt;table width='120' border='1'&gt;&lt;tr&gt;&lt;td class='labelDiv'&gt;Total Sale&lt;/td&gt;&lt;td class='allpadding'&gt;$value&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class='labelDiv'&gt;Quarter&lt;/td&gt;&lt;td class='allpadding'&gt;$label&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;</code>
    </td>
  </tr>
</table>


## Advanced usage of tooltip macros

You can use the new `plotToolText` attribute introduced in FusionCharts Suite XT 3.4 to use macros in your chart to make it more informative.

A column 2D chart with customized tooltips to display a detailed pie 2D chart looks as below:

{% embed_all configuring-your-chart-tool-tips-example-5.js %}

This can be made possible by using `rollover()` and `rollout()`events on the data plot that can be used to display the pie 2D chart for each data plot when the mouse pointer is hovered over it.





