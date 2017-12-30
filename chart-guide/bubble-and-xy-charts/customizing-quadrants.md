---
permalink: chart-guide/bubble-and-xy-charts/customizing-quadrants.html
title: Customizing Quadrants | FusionCharts
description: In this section, you will be shown how you can draw quadrants at default positions, draw quadrants at user-defined positions, display quadrant labels, customize quadrant labels and customize quadrant lines.
heading: Customizing Quadrants
chartPresent: true
---

FusionCharts Suite XT allows you to customize the quadrants drawn on bubble and XY charts.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/bubble-and-xy-charts/customizing-quadrants.html#drawing-quadrants-on-bubble-and-scatter-charts">Draw quadrants at default positions</a>

* <a href="{{ site.baseurl }}chart-guide/bubble-and-xy-charts/customizing-quadrants.html#drawing-quadrants-at-user-defined-positions">Draw quadrants at user-defined positions</a>

* <a href="{{ site.baseurl }}chart-guide/bubble-and-xy-charts/customizing-quadrants.html#displaying-quadrant-labels">Display quadrant labels</a>

* <a href="{{ site.baseurl }}chart-guide/bubble-and-xy-charts/customizing-quadrants.html#customizing-quadrant-labels">Customize quadrant labels</a>

* <a href="{{ site.baseurl }}chart-guide/bubble-and-xy-charts/customizing-quadrants.html#customizing-quadrant-lines">Customize quadrant lines</a>

## Drawing Quadrants on Bubble and Scatter Charts

Dividing the canvas of a bubble/scatter chart into quadrants makes analysis of the chart easier.

A bubble chart rendered with quadrants looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-customizing-quadrants-example-1.js %}

Given below is a brief description of the attribute used to draw quadrants:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawQuadrant`</td>
    <td>It is used to specify whether quadrants will be drawn for the bubble chart. Setting this attribute to `1` will draw quadrants for the chart, setting it to `0` (default) will not draw them.</td>
  </tr>
</table>

## Drawing Quadrants at User-defined Positions

A bubble chart rendered with quadrants drawn at user-defined positions looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-customizing-quadrants-example-2.js %}

Given below is a brief description of the attributes used to draw quadrants at user-defined positions:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`quadrantXVal`</td>
    <td>It is used to specify the position of the vertical quadrant line.

The value of this attribute must be within the range of its corresponding relative axis (and not pixels).</td>
  </tr>
  <tr>
    <td>`quadrantYVal`</td>
    <td>It is used to specify the position of the horizontal quadrant line.

The value of this attribute must be within the range of its corresponding relative axis (and not pixels).</td>
  </tr>
</table>

## Displaying Quadrant Labels

A bubble chart with quadrant labels displayed looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-customizing-quadrants-example-3.js %}

Given below is a brief description of the attributes used to specify quadrant labels:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`quadrantLabelTL`</td>
    <td>It is used to specify the label to be rendered for the top-left quadrant.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTR`</td>
    <td>It is used to specify the label to be rendered for the top-right quadrant.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBL`</td>
    <td>It is used to specify the label to be rendered for the bottom-left quadrant.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBR`</td>
    <td>It is used to specify the label to be rendered for the bottom-right quadrant.</td>
  </tr>
</table>

## Customizing Quadrant Labels

A bubble chart showcasing the cosmetic attributes for quadrant labels is shown below:

{% embed_all chart-guide-bubble-and-xy-charts-customizing-quadrants-example-5.js %}

Given below is a brief description of the quadrant label cosmetic attributes:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`quadrantLabelFont`</td>
    <td>This attribute lets you set the font for all quadrant labels. Default value: Base font</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLFont`</td>
    <td>This attribute lets you set the font for the top-left quadrant label. Default value: Base font</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRFont`</td>
    <td>This attribute lets you set the font for the top-right quadrant label. Default value: Base font</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLFont`</td>
    <td>This attribute lets you set the font for the bottom-left quadrant label. Default value: Base font</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRFont`</td>
    <td>This attribute lets you set the font for the bottom-right quadrant label. Default value: Base font</td>
  </tr>
  <tr>
    <td>`quadrantLabelFontColor`</td>
    <td>This attribute lets you set the font color for all quadrant labels. Default value: Base font color</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLFontColor`</td>
    <td>This attribute lets you set the font color for the top-left quadrant label. Default value: Base font color</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRFontColor`</td>
    <td>This attribute lets you set the font color for the top-right quadrant label. Default value: Base font color</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLFontColor`</td>
    <td>This attribute lets you set the font color for the bottom-left quadrant label. Default value: Base font color</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRFontColor`</td>
    <td>This attribute lets you set the font color for the bottom-right quadrant label. Default value: Base font color</td>
  </tr>
  <tr>
    <td>`quadrantLabelFontAlpha`</td>
    <td>This attribute lets you set the font transparency of all quadrant labels. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLFontAlpha`</td>
    <td>This attribute lets you set the font transparency of the top-left quadrant label. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRFontAlpha`</td>
    <td>This attribute lets you set the font transparency of the top-right quadrant label. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLFontAlpha`</td>
    <td>This attribute lets you set the font transparency of the bottom-left quadrant label. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRFontAlpha`</td>
    <td>This attribute lets you set the font transparency of the bottom-right quadrant label. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelFontSize`</td>
    <td>This attribute lets you set the font size for all quadrant labels.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLFontSize`</td>
    <td>This attribute lets you set the font size for the top-left quadrant label.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRFontSize`</td>
    <td>This attribute lets you set the font size for the top-right quadrant label.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLFontSize`</td>
    <td>This attribute lets you set the font size for the bottom-left quadrant label.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRFontSize`</td>
    <td>This attribute lets you set the font size for the bottom-right quadrant label.</td>
  </tr>
  <tr>
    <td>`quadrantLabelFontBold`</td>
    <td>This attribute lets you specify whether the label text for all quadrants will be bold formatted. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLFontBold`</td>
    <td>This attribute lets you specify whether the top-left quadrant label text will be bold formatted. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
   <tr>
    <td>`quadrantLabelTRFontBold`</td>
    <td>This attribute lets you specify whether the top-right quadrant label text will be bold formatted. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
   <tr>
    <td>`quadrantLabelBLFontBold`</td>
    <td>This attribute lets you specify whether the bottom-left quadrant label text will be bold formatted. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
   <tr>
    <td>`quadrantLabelBRFontBold`</td>
    <td>This attribute lets you specify whether the bottom-right quadrant label text will be bold formatted. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
  <tr>
    <td>`quadrantLabelFontItalic`</td>
    <td>This attribute lets you specify whether the label text for all quadrants will be italicized. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLFontItalic`</td>
    <td>This attribute lets you specify whether the top-left quadrant label text will be italicized. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRFontItalic`</td>
    <td>This attribute lets you specify whether the top-right quadrant label text will be italicized. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr> 
  <tr>
    <td>`quadrantLabelBLFontItalic`</td>
    <td>This attribute lets you specify whether the bottom-left quadrant label text will be italicized. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRFontItalic`</td>
    <td>This attribute lets you specify whether the bottom-right quadrant label text will be italicized. Setting this attribute to `1` will bold format the text, setting it to `0` (default) will not.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBorderColor`</td>
    <td>This attribute lets you set the hex color code for all quadrant label borders.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBorderColor`</td>
    <td>This attribute lets you set the hex color code for the top-left quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRBorderColor`</td>
    <td>This attribute lets you set the hex color code for the top-right quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLBorderColor`</td>
    <td>This attribute lets you set the hex color code for the bottom-left quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRBorderColor`</td>
    <td>This attribute lets you set the hex color code for the bottom-right quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBorderAlpha`</td>
    <td>This attribute lets you set the border transpareny for all quadrant labels. This attribute takes values between 0 (transparent) and 100 (opaque;default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBorderAlpha`</td>
    <td>This attribute lets you set the transpareny of the top-left quadrant label border. This attribute takes values between 0 (transparent) and 100 (opaque;default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRBorderAlpha`</td>
    <td>This attribute lets you set the transpareny of the top-right quadrant label border. This attribute takes values between 0 (transparent) and 100 (opaque;default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLBorderAlpha`</td>
    <td>This attribute lets you set the transpareny of the bottom-left quadrant label border. This attribute takes values between 0 (transparent) and 100 (opaque;default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRBorderAlpha`</td>
    <td>This attribute lets you set the transpareny of the bottom-right quadrant label border. This attribute takes values between 0 (transparent) and 100 (opaque;default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelBorderThickness`</td>
    <td>This attribute lets you set the border thickness for all quadrant labels. </td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBorderThickness`</td>
    <td>This attribute lets you set the thickness of the top-left quadrant label border. </td>
  </tr>
  <tr>
    <td>`quadrantLabelTRBorderThickness`</td>
    <td>This attribute lets you set the thickness of the top-right quadrant label border. </td>
  </tr>
  <tr>
    <td>`quadrantLabelBLBorderThickness`</td>
    <td>This attribute lets you set the thickness of the bottom-left quadrant label border. </td>
  </tr>
  <tr>
    <td>`quadrantLabelBRBorderThickness`</td>
    <td>This attribute lets you set the thickness of the bottom-right quadrant label border. </td>
  </tr>
  <tr>
    <td>`quadrantLabelBorderPadding`</td>
    <td>This attribute lets you set the border padding for all quadrant labels.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBorderPadding`</td>
    <td>This attribute lets you set the padding for the top-left quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRBorderPadding`</td>
    <td>This attribute lets you set the padding for the top-right quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLBorderPadding`</td>
    <td>This attribute lets you set the padding for the bottom-left quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRBorderPadding`</td>
    <td>This attribute lets you set the padding for the bottom-right quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBorderRadius`</td>
    <td>This attribute lets you set the border radius for all quadrant labels.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBorderRadius`</td>
    <td>This attribute lets you set the radius of the top-left quadrant label border.</td>
  </tr>
   <tr>
    <td>`quadrantLabelTRBorderRadius`</td>
    <td>This attribute lets you set the radius of the top-right quadrant label border.</td>
  </tr>
   <tr>
    <td>`quadrantLabelBLBorderRadius`</td>
    <td>This attribute lets you set the radius of the bottom-left quadrant label border.</td>
  </tr>
   <tr>
    <td>`quadrantLabelBRBorderRadius`</td>
    <td>This attribute lets you set the radius of the bottom-right quadrant label border.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBorderDashed`</td>
    <td>This attribute lets you specify whether all quadrant label borders will be drawn as dashed lines. Setting this attribute to `1` will draw the border as a dashed line, setting it to `0` (default) will draw it as a straight line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBorderDashed`</td>
    <td>This attribute lets you specify whether the top-left quadrant label border will be drawn as a dashed-line. Setting this attribute to `1` will draw the border as a dashed line, setting it to `0` (default) will draw it as a straight line.</td>
  </tr>
   <tr>
    <td>`quadrantLabelTRBorderDashed`</td>
    <td>This attribute lets you specify whether the top-right quadrant label border will be drawn as a dashed-line. Setting this attribute to `1` will draw the border as a dashed line, setting it to `0` (default) will draw it as a straight line.</td>
  </tr>
   <tr>
    <td>`quadrantLabelBLBorderDashed`</td>
    <td>This attribute lets you specify whether the bottom-left quadrant label border will be drawn as a dashed-line. Setting this attribute to `1` will draw the border as a dashed line, setting it to `0` (default) will draw it as a straight line.</td>
  </tr>
   <tr>
    <td>`quadrantLabelBRBorderDashed`</td>
    <td>This attribute lets you specify whether the bottom-right quadrant label border will be drawn as a dashed-line. Setting this attribute to `1` will draw the border as a dashed line, setting it to `0` (default) will draw it as a straight line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBorderDashlen`</td>
    <td>This attribute lets you set the length of each dash for all quadrant label borders, if the borders are drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBorderDashlen`</td>
    <td>This attribute lets you set the length of each dash, if the top-left quadrant label border is drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRBorderDashlen`</td>
    <td>This attribute lets you set the length of each dash, if the top-right quadrant label border is drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLBorderDashlen`</td>
    <td>This attribute lets you set the length of each dash, if the bottom-left quadrant label border is drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRBorderDashlen`</td>
    <td>This attribute lets you set the length of each dash, if the bottom-right quadrant label border is drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBorderDashgap`</td>
    <td>This attribute lets you set the distance between each dash for all quadrant label borders, if the borders are drawn as a dashed lines.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBorderDashgap`</td>
    <td>This attribute lets you set the distance between each dash, if the top-left quadrant label border is drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRBorderDashgap`</td>
    <td>This attribute lets you set the distance between each dash, if the top-right quadrant label border is drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLBorderDashgap`</td>
    <td>This attribute lets you set the distance between each dash, if the bottom-left quadrant label border is drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRBorderDashgap`</td>
    <td>This attribute lets you set the distance between each dash, if the bottom-right quadrant label border is drawn as a dashed line.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBgColor`</td>
    <td>This attribute lets you set the hex color code for the background of all quadrant labels.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBgColor`</td>
    <td>This attribute lets you set the hex color code for the background of the top-left quadrant label.</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRBgColor`</td>
    <td>This attribute lets you set the hex color code for the background of the top-right quadrant label.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLBgColor`</td>
    <td>This attribute lets you set the hex color code for the background of the bottom-left quadrant label.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRBgColor`</td>
    <td>This attribute lets you set the hex color code for the background of the bottom-right quadrant label.</td>
  </tr>
  <tr>
    <td>`quadrantLabelBgAlpha`</td>
    <td>This attribute lets you set the background transparency for all quadrant labels. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelTLBgAlpha`</td>
    <td>This attribute lets you set the background transparency for the top-left quadrant label. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelTRBgAlpha`</td>
    <td>This attribute lets you set the background transparency for the top-right quadrant label. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelBLBgAlpha`</td>
    <td>This attribute lets you set the background transparency for the bottom-left quadrant label. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
  <tr>
    <td>`quadrantLabelBRBgAlpha`</td>
    <td>This attribute lets you set the background transparency for the bottom-right quadrant label. This attribute takes values between 0 (transparent) and 100 (opaque; default).</td>
  </tr>
</table>

## Customizing Quadrant Lines

A bubble chart rendered with customized quadrant lines looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-customizing-quadrants-example-4.js %}

Given below is a brief description of the attributes used to customize quadrant lines:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`quadrantLineThickness`</td>
    <td>It is used to specify the thickness of quadrant lines.</td>
  </tr>
  <tr>
    <td>`quadrantLineAlpha`</td>
    <td>It is used to specify the transparency of the quadrant lines. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 100.</td>
  </tr>
  <tr>
    <td>`quadrantLineColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the quadrant lines.</td>
  </tr>
  <tr>
    <td>`quadrantLineIsDashed`</td>
    <td>It is used to specify if the quadrant lines will be rendered as dashed lines. Setting this attribute to `1` will render the quadrant lines as dashed lines, setting it to `0` will render them as whole lines.</td>
  </tr>
  <tr>
    <td>`quadrantLineDashLen`</td>
    <td>It is used to specify the length of each dash, if the quadrant lines are rendered as dashed lines.</td>
  </tr>
  <tr>
    <td>`quadrantLineDashGap`</td>
    <td>It is used to specify the gap between each dash, if the quadrant lines are rendered as dashed lines.</td>
  </tr>
  <tr>
    <td>`quadrantLabelPadding`</td>
    <td>It is used to specify the space between quadrant labels and the associated quadrant lines.</td>
  </tr>
</table>