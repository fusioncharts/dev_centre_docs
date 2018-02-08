---
permalink: basic-chart-configurations/fonts.html
title: Configure Font Properties for a Chart | FusionCharts
description: Font properties for a chart include the font family, font size, and font color for the text rendered inside and outside the chart canvas.
heading: Fonts
chartPresent: true
---

Font properties for a chart include the font family, font size, and font color for the text rendered inside and outside the chart canvas.

This section will describe how you can customize the font properties for a chart. This section discusses:

* <a href="/basic-chart-configurations/fonts#base-font-group" class="smoth-scroll">Base font group</a>

* <a href="/basic-chart-configurations/fonts#outside-canvas-base-font-group" class="smoth-scroll">Outside canvas base font group</a>

## Base font group

The base font group is used to customize the font properties for the text rendered on the chart.

A column 2D chart with customized base font properties looks as below:

{% embed_all configuring-your-chart-fonts-example-1.js %}

Given below is a brief description of the attributes used to customize this text:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`baseFont`</td>
    <td>It specifies the font family to be used for rendering the text on the chart.</td>
  </tr>
  <tr>
    <td>`baseFontSize`</td>
    <td>It specifies the font size for all the values and names in the chart that lie on the canvas. This attribute takes values between `0` and `72`.</td>
  </tr>
  <tr>
    <td>`baseFontColor`</td>
    <td>It specifies the hex color code for all the values and the names in the chart that lie on the canvas.</td>
  </tr>
</table>


## Outside canvas base font group

The outside canvas base font group is used to customize the font properties for the text placed outside the chart canvas.

A column 2D chart with customized outside canvas base font properties looks as below:

{% embed_all configuring-your-chart-fonts-example-2.js %}

Given below is a brief description of the attributes used to customize this text:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`outCnvBaseFont`</td>
    <td>It specifies the font family to be used for rendering all the values and the names in the chart that lie outside the canvas.</td>
  </tr>
  <tr>
    <td>`outCnvBaseFontSize`</td>
    <td>It specifies the font size for all the text that lies outside the canvas. This attribute takes values between `0` and `72`.</td>
  </tr>
  <tr>
    <td>`outCnvBaseFontColor`</td>
    <td>It specifies the hex color code for all the text in the chart that lies outside the canvas.
</td>
  </tr>
</table>






<p class = "text-info">Notice that, `outCanvasBaseFont` group overrides the setting of the `baseFont` group.</p>
