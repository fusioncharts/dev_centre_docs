---
permalink: basic-chart-configurations/trend-lines-and-zones.html
title: Trend Lines and Zones | FusionCharts
description: Trend lines are customisable reference horizontal or vertical lines which aid in interpretation of data. Section talks about trend lines and zones
heading: Trend Lines and Zones
chartPresent: true
---

Trend lines are customizable reference horizontal or vertical lines which aid in interpretation of data. They can be used to set context or define limits and targets. For example, while plotting quarterly sales of a company, you might want to use a trendline to depict the target sales.

<p class="text-info">In the FusionCharts Suite XT context, trendlines do not show trends for data points. They are only used to add context to data. For showing trends in data, use regression lines.</p>

This section talks about:

* <a href="/basic-chart-configurations/trend-lines-and-zones#adding-tool-text-to-a-trend-line" class="smoth-scroll">Adding tool-text to a trend line</a>

* <a href="/basic-chart-configurations/trend-lines-and-zones#adding-trend-zones" class="smoth-scroll">Adding trend zones</a>

* <a href="/basic-chart-configurations/trend-lines-and-zones#customizing-trend-lines-and-trend-zones" class="smoth-scroll">Customizing trend lines and trend zones</a>

* <a href="/basic-chart-configurations/trend-lines-and-zones#customizing-the-trend-line-display-value-text" class="smoth-scroll">Customizing trend-line display value text</a>

* <a href="/basic-chart-configurations/trend-lines-and-zones#adding-dashed-trend-lines" class="smoth-scroll">Adding dashed trend lines</a>

* <a href="/basic-chart-configurations/trend-lines-and-zones#adding-slanted-trendlines" class="smoth-scroll">Adding slanted trend lines</a>

* <a href="/basic-chart-configurations/trend-lines-and-zones#configuring-the-trend-line-label" class="smoth-scroll">Configuring the trend line label</a>

* <a href="/basic-chart-configurations/trend-lines-and-zones#adding-trendlines-for-a-dual-y-axis-chart" class="smoth-scroll">Adding trend lines in a dual y-axis chart</a>

## Adding tool-text to a trend line

FusionCharts Suite XT allows you to specify custom tool-text which will be rendered when the mouse pointer is hovered over the trend line.

A column 2D chart with a defined tool-text for trend line looks as below:

{% embed_all configuring-your-chart-trend-lines-and-zones-example-1.js %}

Given below is the attribute used to add tool-text:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`toolText`</td>
   <td>It specifies the text that will be displayed when mouse is hovered over the trend line.</td>
 </tr>
</table>


## Adding trend zones

Trend zones are similar to trend lines except that they mark out an entire zone rather than just a line. A column 2D chart with a trend zone looks as below:

{% embed_all configuring-your-chart-trend-lines-and-zones-example-2.js %}

Given below are the attributes used to render a trend zone:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`isTrendZone`</td>
   <td>Set this to `1` to render a trend zone on the chart and `0` to hide it.</td>
 </tr>
 <tr>
   <td>`startValue`</td>
   <td>It specifies the starting point data-value for the trend-zone. </td>
 </tr>
 <tr>
   <td>`endValue`</td>
   <td>It specifies the ending point data-value for the trend zone.

If the `endValue` attribute is included in the code and `IsTrendZone` is set to `0`, the trend-line is rendered as a slanted line, starting at the `startValue` on the primary y-axis and ending at `endValue` on the secondary y-axis (this could be an imaginative secondary y-axis).</td>
 </tr>
</table>


## Customizing trend lines and trend zones

A column 2D chart with the trend line customized looks as below:

{% embed_all configuring-your-chart-trend-lines-and-zones-example-3a.js %}

Given below are the attributes used to customize trend lines and trend zones:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`color`</td>
   <td>It specifies the hex code for the color that will be used to render the trend-line/zone e.g. `#00ffaa`.</td>
 </tr>
 <tr>
   <td>`thickness`</td>
   <td>It specifies the thickness for the trend-line(in pixels). You cannot specify the thickness for a trend zone.</td>
 </tr>
 <tr>
   <td>`alpha`</td>
   <td>Sets the transparency of trend line/zone. Can take values from `0` (transparent) to `100` (opaque).</td>
 </tr>
</table>


A column 2D chart with the **trend zone** customized looks as below:

{% embed_all configuring-your-chart-trend-lines-and-zones-example-3b.js %}


## Customizing the trend-line display value text

Starting v3.8.0, FusionCharts allows you to also customize the display value text rendered with trend-lines.

A column chart with the trend-line's display value text customized looks as below:

{% embed_all configuring-your-chart-trend-lines-and-zones-example-6.js %}

Given below are the attributes used to customize the trend-line display value text:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`trendValueFont`</td>
   <td>Sets the font family for the trend-line display value.</td>
 </tr>
 <tr>
   <td>`trendValueFontSize`</td>
   <td>Sets the font size for the trend-line display value.</td>
 </tr>
 <tr>
   <td>`trendValueFontBold`</td>
   <td>Sets whether the trend-line display value will be bold formatted. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not. </td>
 </tr>
 <tr>
   <td>`trendValueFontItalic`</td>
   <td>Sets whether the trend-line display value will be italicized. Setting this attribute to `1` will italicize the text, setting it to `0` (default) will not.</td>
 </tr>
 <tr>
   <td>`trendValueAlpha`</td>
   <td>Sets the transparency for the trend-line display value. This attribute takes values between `0` (transparent) and `100` (opaque; default).</td>
 </tr>
 <tr>
   <td>`trendValueBgColor`</td>
   <td>Sets the hex color code for the background of the trend-line display value.</td>
 </tr>
 <tr>
   <td>`trendValueBgAlpha`</td>
   <td>Sets the transparency for the background of the trend-line display value. This attribute takes values between `0` (transparent) and `100` (opaque; default). </td>
 </tr>
 <tr>
   <td>`trendValueBorderColor`</td>
   <td>Sets the hex color code for the border around the trend-line display value.</td>
 </tr>
  <tr>
   <td>`trendValueBorderAlpha`</td>
   <td>Sets the transparency for the border around the trend-line display value. This attribute takes values between `0` (transparent) and `100` (opaque; default). </td>
 </tr>
 <tr>
   <td>`trendValueBorderPadding`</td>
   <td>Sets padding for the border around the trend-line display value.</td>
 </tr>
 <tr>
   <td>`trendValueBorderRadius`</td>
   <td>Sets the radius for the border around the trend-line display value. </td>
 </tr>
 <tr>
   <td>`trendValueBorderThickness`</td>
   <td>Sets the thickness for the border around the trend-line display value. </td>
 </tr>
 <tr>
   <td>`trendValueBorderDashed`</td>
   <td>Sets whether the border around the trend-line display value will be drawn as a dashed line. Setting this attribute to `1` will draw the border as a dashed line, setting it to `0` (default) will draw it as a straight line.</td>
 </tr>
 <tr>
   <td>`trendValueBorderDashLen`</td>
   <td>Sets the length of each dash, if the border around the trend-line display value is drawn as a dashed line.</td>
 </tr>
 <tr>
   <td>`trendValueBorderDashGap`</td>
   <td>Sets the gap between each dash, if the border around the trend-line display value is drawn as a dashed line.</td>
 </tr>
</table>


## Adding dashed trend lines

A column 2D chart with a dashed trendline looks as below:

{% embed_all configuring-your-chart-trend-lines-and-zones-example-4a.js %}

Given below are the attributes used to render a dashed trendline instead of the continuous line:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`dashed`</td>
   <td>Set this to `1` to make trend lines dashed or `0` (default) to make them normal.</td>
 </tr>
 <tr>
   <td>`dashLen`</td>
   <td>Sets the length of each dash of a trend line(in pixels).</td>
 </tr>
 <tr>
   <td>`dashGap`</td>
   <td>Sets the gap between two consecutive dashes in trend lines (in pixels).</td>
 </tr>
</table>


## Adding slanted trendlines

A line chart with a slanted trend line is as shown below:

{% embed_all configuring-your-chart-trend-lines-and-zones-example-4b.js %}

Given below are the attributes used to render a slanted trend line:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`startValue`</td>
   <td>It specifies the starting point data-value for the slanted trend line. This data value is plotted on the y-axis on the left.</td>
 </tr>
 <tr>
   <td>`endValue`</td>
   <td>It specifies the ending point data-value for the slanted trend line. This data value is plotted on the imaginary y-axis on the right.</td>
 </tr>
</table>


## Configuring the trend line label

FusionCharts Suite XT allows you to show the trendline label to the right of the chart canvas. A column 2D chart with the trendline label rendered on the right looks as below:

{% embed_all configuring-your-chart-trend-lines-and-zones-example-5a.js %}

Given below is the attribute used to render the trend line label on the right:

<table>
 <tr>
   <td>Attribute</td>
   <td>Description</td>
 </tr>
 <tr>
   <td>`valueOnRight`</td>
   <td>If set to `1`, it renders the trend-line label on the right or `0`(default) to render on the left.</td>
 </tr>
</table>


## Adding trendlines for a dual y-axis chart

A dual y-axis chart has 2 y-axes. So when you are defining a trendline, you also need to define which axis the line has to be defined on.

This can be done using the `parentYAxis` attribute of the `line` object.

By default, the trend-line shows up on the primary y-axis but if you want to show it on the secondary y-axis you have to configure the same by setting `parentYAxis` equal to `S`.
