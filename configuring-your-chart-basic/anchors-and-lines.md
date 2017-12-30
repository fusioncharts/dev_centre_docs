---
permalink: basic-chart-configurations/anchors-and-lines.html
title: Anchors and Lines | FusionCharts
description: Anchors help to identify the data point better in the chart. They also show a tooltip showing the data plot details when the mouse is hovered over them
heading: Anchors and Lines
chartPresent: true
---

Each data point in a line/spline/area chart is represented by an anchor. Anchors help to identify the data point better in the chart. They also show a tooltip showing the data plot details when the mouse is hovered over them, and can be linked to other pages as well.

This article talks about:

* <a href="{{ site.baseurl }}basic-chart-configurations/anchors-and-lines.html#customizing-anchor-display">Customizing anchor display</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/anchors-and-lines.html#customizing-anchor-properties">Customizing anchor properties</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/anchors-and-lines.html#customizing-anchors-for-specific-data-points">Customizing anchors for specific data points</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/anchors-and-lines.html#adding-external-images-in-anchors-of-line--spline-charts">Adding external images in anchors of line & spline charts</a>

## Customizing anchor display

The anchors and their corresponding tooltips are displayed by default. A line chart with anchors hidden looks as below:

{% embed_all configuring-your-chart-anchors-and-lines-example-1.js %}

Given below is the attribute used to display anchors in a chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawAnchors`</td>
    <td>Set this to `1`(default) to show anchors or `0` to hide them.</td>
  </tr>
</table>






## Customizing anchor properties

A line chart with customized anchors looks as below:

{% embed_all configuring-your-chart-anchors-and-lines-example-2.js %}

Given below are the attributes used to customize the appearance of anchors:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`anchorSides`</td>
    <td>It specifies the number of sides the anchor will have, depending on the shape of the anchor you want to render. This attribute takes values between `3` and `20`.</td>
  </tr>
  <tr>
    <td>`anchorRadius`</td>
    <td>It specifies the radius of the anchors(in pixels).</td>
  </tr>
  <tr>
    <td>`anchorBorderColor`</td>
    <td>It specifies the hex code of the color that will be used to render the anchor borders e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`anchorBorderThickness`</td>
    <td>It specifies the thickness of the anchor borders(in pixels).</td>
  </tr>
  <tr>
    <td>`anchorBgColor`</td>
    <td>It specifies the hex code for the color that will be applied to the anchor background e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`anchorBgAlpha`</td>
    <td>Sets the transparency of anchor background. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>






## Customizing anchors for specific data points

FusionCharts Suite XT allows you to highlight a particular data point by customizing specific anchor points explicitly. To highlight a specific anchor, you need to customize the cosmetics for only that particular anchor. A line chart with anchors for specific data points customized looks as below:

{% embed_all configuring-your-chart-anchors-and-lines-example-3.js %}

To configure anchors for a specific data point, use the anchor customization attributes within the data object. 



## Adding external images in anchors of Line & Spline charts

External images are now supported in anchor of line and area type charts. This allows you to use different images for each anchor, and lets you highlight special values.

A line chart with external images in the anchors looks as below:

{% embed_all configuring-your-chart-anchors-and-lines-example-4.js %}

Given below are the attributes used to configure external images in anchors:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`anchorImageUrl`</td>
    <td>Specifies the URL of the image to be used in place of the anchor.</td>
  </tr>
  <tr>
    <td>`anchorImageAlpha`</td>
    <td>Sets the transparency of anchor image. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`anchorImageScale`</td>
    <td>It is used to specify the scale of the externally loaded image.</td>
  </tr>
  <tr>
    <td>`anchorImageHoverScale`</td>
    <td>It is used to specify the scale of the externally loaded image while the user hovers the mouse pointer over the anchor.</td>
  </tr>
  <tr>
    <td>`anchorImageHoverAlpha`</td>
    <td>Defines the transparency of anchor image when the user hovers the mouse pointer over the anchor. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>





