---
permalink: gauge-and-widgets-guide/spark-charts/configuring-spark-line-chart.html
title: Configuring Spark Line Chart | FusionCharts
description: You can show period blocks on a spark line chart using colored bands, helping you to easily interpret the periods on the chart.
heading: Configuring Spark Line Chart
chartPresent: true
---

FusionCharts Suite XT allows you to configure the functional and cosmetic properties of the spark line chart.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/spark-charts/configuring-spark-line-chart#defining-period-blocks-for-the-chart" class="smoth-scroll">Define period blocks for the chart</a>

* <a href="/gauge-and-widgets-guide/spark-charts/configuring-spark-line-chart#configuring-open-close-high-and-low-points" class="smoth-scroll">Configure open, close, and high/low points</a>

* <a href="/gauge-and-widgets-guide/spark-charts/configuring-spark-line-chart#configuring-line-and-anchor-cosmetics" class="smoth-scroll">Configure line and anchor cosmetics</a>

* <a href="/gauge-and-widgets-guide/spark-charts/configuring-spark-line-chart#showing-only-points-but-no-lines" class="smoth-scroll">Show only points and no lines</a>

* <a href="/gauge-and-widgets-guide/spark-charts/configuring-spark-line-chart#customizing-trend-lines" class="smoth-scroll">Add trend-lines/trend-zones</a>

* <a href="/gauge-and-widgets-guide/spark-charts/configuring-spark-line-chart#customizing-trend-lines" class="smoth-scroll">Configure hover effects</a>

## Defining Period Blocks for the Chart

You can show period blocks on a spark line chart using colored bands, helping you to easily interpret the periods on the chart.

A spark line chart configured to show a period block looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-1.js %}

Given below is a brief description of the attributes used to define period blocks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`periodLength`</td>
    <td>It is used to specify the number of data points that each period block will encapsulate. </td>
  </tr>
  <tr>
    <td>`periodColor`</td>
    <td>It is used to specify the hex code for the color that will be used to render the period block, e.g. #CCCCCC.</td>
  </tr>
  <tr>
    <td>`periodAlpha`</td>
    <td>It is used to specify the transparency for the period block. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 60. </td>
  </tr>
</table>


## Configuring Open, Close, High, and Low Points

By default, the spark line chart highlights the open, close, high, and low points and also shows their value. You can configure the chart to:

* Change the color of the open, close, high, and low points

* Show/hide anchors

* Show/hide anchor values

### Changing the Color of the Open, Close, High, and Low Points

A spark line chart configured for the colors of the open, close, high, and low points looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-2.js %}

Given below is a brief description of the attributes used to define colors for the points:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`openColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the opening value anchor, e.g. #444444. </td>
  </tr>
  <tr>
    <td>`closeColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the closing value anchor, e.g. #AC34EF. </td>
  </tr>
  <tr>
    <td>`highColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the high value anchor, e.g. #435DEF. </td>
  </tr>
  <tr>
    <td>`lowColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the low value anchor, e.g. #DDDDDD. </td>
  </tr>
</table>


### Showing Selective Points

A spark line chart with the open, close, high, and low anchor points hidden looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-3.js %}

The chart is rendered with four check boxes below the chart: __Show Open Anchor?__, __Show Close Anchor?__, __Show High Anchor?__, and __Show Low Anchor?__. Selecting the check boxes shows the respective anchor points, clearing them hides the respective anchor points.

Given below is a brief description of the attributes used to show/hide anchors:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showOpenAnchor`</td>
    <td>It is used to specify whether the opening anchor point will be shown. Setting this attribute to `0` will hide the anchor, setting it to `1` (default) will show it. </td>
  </tr>
  <tr>
    <td>`showCloseAnchor`</td>
    <td>It is used to specify whether the closing anchor point will be shown. Setting this attribute to `0` will hide the anchor, setting it to `1` (default) will show it. </td>
  </tr>
  <tr>
    <td>`showHighAnchor`</td>
    <td>It is used to specify whether the high anchor point will be shown. Setting this attribute to `0` will hide the anchor, setting it to `1` (default) will show it. </td>
  </tr>
  <tr>
    <td>`showLowAnchor`</td>
    <td>It is used to specify whether the low anchor point will be shown. Setting this attribute to `0` will hide the anchor, setting it to `1` (default) will show it. </td>
  </tr>
</table>


### Showing/Hiding Anchor Point Values

A spark line chart configured to hide the anchor point values looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-4.js %}

The chart is rendered with four check boxes below the chart: __Show Open Value?__, __Show Close Value?__, __Show High Value?__, and __Show Low Value?__. Selecting the check boxes shows the respective anchor values, clearing them hides the respective anchor values.

Given below is a brief description of the attributes used to show/hide anchor point values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showOpenValue`</td>
    <td>It is used to specify whether the opening value will be shown. Setting this attribute to `0` will hide the value, setting it to `1` (default) will show the value. </td>
  </tr>
  <tr>
    <td>`showCloseValue`</td>
    <td>It is used to specify whether the closing value will be shown. Setting this attribute to `0` will hide the value, setting it to `1` (default) will show the value. </td>
  </tr>
  <tr>
    <td>`showHighLowValue`</td>
    <td>It is used to specify whether the high and low values will be shown. Setting this attribute to `0` will hide the values, setting it to `1` (default) will show the values. </td>
  </tr>
</table>


## Configuring Line and Anchor Cosmetics

### Configuring Line Cosmetics

A spark line chart configured for line cosmetics looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-5.js %}

Given below is a brief description of the attributes used to configure line cosmetics:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`lineColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the lines on the chart, e.g. #EDA345. </td>
  </tr>
  <tr>
    <td>`lineThickness`</td>
    <td>It is used to specify the thickness of the lines on the chart, e.g. 5.</td>
  </tr>
  <tr>
    <td>`lineAlpha`</td>
    <td>It is used to specify the transparency of the lines on the chart. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 45.</td>
  </tr>
</table>


### Configuring Anchor Cosmetics

A spark line chart configured for the anchor cosmetics looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-6.js %}

Given below is a brief description of the attributes used to configure anchor cosmetics:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawAnchors`</td>
    <td>It is used to specify whether anchors should be drawn for the chart. Setting this attribute to `1` will draw the anchors, setting it to `0` (default) will hide them. If the anchors are not shown, then the tooltip and links won't work.
    </td>
  </tr>
  <tr>
    <td>`anchorSides`</td>
    <td>It is used to specify the number of sides an anchor will have. This will determine the shape of the anchor. For example, an anchor with three sides will represent a triangle, an anchor with four sides will represent a square.</td>
  </tr>
  <tr>
    <td>`anchorRadius`</td>
    <td>It is used to set the radius, in pixels, of the anchor, e.g. 40. </td>
  </tr>
  <tr>
    <td>`anchorColor`</td>
    <td>It is used to specify the hex code of the color that will be applied to the anchors, e.g. #333333.</td>
  </tr>
  <tr>
    <td>`anchorAlpha`</td>
    <td>It is used to specify the transparency of the anchors. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 40.</td>
  </tr>
</table>


## Showing Only Points but No Lines

You can also show only points, representing the data values, on the chart, without any line segments connecting them.

A spark line chart configured to show only points, without any line segments, looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-7.js %}

Given below is a brief description of the attribute used to hide line segments:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
    <tr>
    <td>`lineAlpha`</td>
    <td>It is used to specify the transparency of the lines on the chart. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 45. To hide line segments, set `"lineAlpha": "0"`</td>
  </tr>
</table>



## Adding Trend-lines/Trend-zones

### Adding Trend-lines

A spark line chart rendered with a trend-line looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-8.js %}

Given below is a brief description of the attributes used to render a trend-line:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-line. For example, if you want to plot a slanted trend-line from value 102 to 109, the starting value will be 102.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-line. For example, if you want to plot a slanted trend-line from value 102 to 109, the ending value will be 109.</td>
  </tr>
</table>


### Customizing Trend-lines

A spark line chart with the cosmetic properties of trend-lines configured looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-9.js %}

Given below is a brief description of the attributes used to configure trend-line cosmetics:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-line and its associated text, e.g. #AB3456. </td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>It is used to specify the thickness of the trend-line, e.g. 5.</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>It is used to specify whether the trend-line will be rendered as a dashed line. Setting this attribute to `1` will render the trend-line as a dashed line, setting it `0` (default) will render it as a whole line. </td>
  </tr>
  <tr>
    <td>`dashLen`</td>
    <td>It is used to specify the length of each dash, if the trend-line is rendered as a dashed line, e.g. 5.</td>
  </tr>
  <tr>
    <td>`dashGap`</td>
    <td>It is used to specify the gap between each dash, if the trend-line is rendered as a dashed line, e, g. 2. </td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>It is used to specify the transparency of the trend-line. this attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
</table>


### Adding Trend-zones

A spark line chart rendered with a trend-zone looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-10.js %}

Given below is a brief description of the attributes used to render a trend-zone:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isTrendZone`</td>
    <td>It is used to specify whether the chart will be rendered with a trend-zone. Setting this attribute to `1` will render a trend-zone, setting it to `0` (default) will render a trend-line.</td>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-zone. For example, if you want to plot a trend-zone from value 102 to 109, the starting value will be 102.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-zone. For example, if you want to plot a trend-zone from value 102 to 109, the ending value will be 109.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-zone and its associated text, e.g. #543ACD. </td>
  </tr>
</table>


## Configuring Hover Effects

You can use hover effects to improve the visual representation of your chart.

A spark line chart configured to enable hover effects looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-line-chart-example-11.js %}

Given below is a brief description of the attributes used to configure hover effects:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`openHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the opening value anchor when the mouse pointer is hovered over it, e.g. #43DE56. </td>
  </tr>
  <tr>
    <td>`closeHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the closing value anchor when the mouse pointer is hovered over it, e.g. #AD3452. </td>
  </tr>
  <tr>
    <td>`highHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the high value anchor when the mouse pointer is hovered over it, e.g. #ACDE34. </td>
  </tr>
  <tr>
    <td>`lowHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the low value anchor when the mouse pointer is hovered over it, e.g. #BE35DF. </td>
  </tr>
</table>