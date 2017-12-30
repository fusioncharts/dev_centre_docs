---
permalink: basic-chart-configurations/canvas.html
title: Configure Canvas Area of a Chart | FusionCharts
description: With FusionCharts Suite XT, you can customize the canvas area of your chart. Chart canvas refers to the area in which the chart data is plotted.
heading: Canvas
chartPresent: true
---

This section shows you how to customize the canvas area of your chart. Chart canvas refers to the area in which the chart data is plotted excluding the area where titles, legends, and axis names are rendered.

The blue coloured area shown in the chart below is the canvas area:

{% embed_all configuring-your-chart-chart-canvas-example-1.js %}

In this section you will learn how to:

* <a href="{{ site.baseurl }}basic-chart-configurations/canvas.html#changing-the-canvas-fill-color">Change the canvas fill color</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/canvas.html#customizing-the-canvas-border">Customize the canvas border</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/canvas.html#using-gradient-fill-for-the-canvas">Use gradient fill for the canvas</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/canvas.html#configuring-the-3d-canvas">Configure a 3D canvas</a>

## Changing the canvas fill color

A live chart with its canvas fill color modified will look as below:

{% embed_all configuring-your-chart-chart-canvas-example-1.js %}

The attributes used to change canvas fill colour are described below:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`canvasBgColor`</td>
    <td>Sets canvas background color.  Accepts hex code. e.g. `#00ffaa`. </td>
  </tr>
  <tr>
    <td>`canvasBgAlpha`</td>
    <td>Sets transparency for canvas background. Valid range is `0` (completely transparent) to `100` (opaque).</td>
  </tr>
</table>


## Customizing the canvas border

By default, 2D charts are rendered with a border around the canvas. FusionCharts Suite XT allows you to customize the canvas border color, thickness and transparency.

A live chart with a modified canvas border will look as below:

{% embed_all configuring-your-chart-chart-canvas-example-2.js %}

Given below is a brief description of the attributes used to customize the canvas border:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showCanvasBorder`</td>
    <td>Set the value to `1` (default) to show the canvas border or set it to `0` to hide it.</td>
  </tr>
  <tr>
    <td>`canvasBorderColor`</td>
    <td>Specify canvas border color. Accepts hex code. e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`canvasBorderThickness`</td>
    <td>Specify canvas border thickness. Valid range is `0`(thin) to `5`(thick).</td>
  </tr>
  <tr>
    <td>`canvasBorderAlpha`</td>
    <td>Sets transparency of canvas border. Valid range is `0` (completely transparent) to `100` (opaque).</td>
  </tr>
</table>


## Using gradient fill for the canvas

Below is a sample chart with a gradient filled chart canvas:

{% embed_all configuring-your-chart-chart-canvas-example-3.js %}

The following attributes can be used to customize the chart canvas with a gradient fill:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`canvasBgColor`</td>
    <td>Sets canvas background color. For gradient effect, enter colors separated by comma. Accepts hex code, e.g. `#aabbcc`, `#112233`</td>
  </tr>
  <tr>
    <td>`canvasBgAlpha`</td>
    <td>Sets transparency for canvas background. Valid range is `0` (completely transparent) to `100` (opaque). In case multiple comma-separated colors are provided for the attribute `canvasBgColor`, corresponding opacity for each color can also be specified as comma separated values in this attribute, e.g. `25, 75, 50`.</td>
  </tr>
  <tr>
    <td>`canvasBgRatio`</td>
    <td>Specify canvas background ratio for gradients in percentage and separated by comma. The values should add up to `100`. e.g. for a three colour gradient, if you want to allocate 50% to first two and remaining to the last, you would need to specify the value as `25, 25, 50`.</td>
  </tr>
  <tr>
    <td>`canvasBgAngle`</td>
    <td>Specify canvas background angle (in degrees) in case of gradient. Valid range is `0` to `360`.</td>
  </tr>
</table>


## Configuring the 3D canvas

The canvas can be configured to have a 3D effect. A column chart with a 3D canvas will look like this:

{% embed_all configuring-your-chart-chart-canvas-example-4.js %}

Given below is a list of attributes that can be used to customize the 3D chart canvas:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`canvasBaseColor`</td>
    <td>Helps you specify the color for canvas base. Accepts hex code, e.g `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`showCanvasBg`</td>
    <td>Set it to `1` (default) to show canvas background or `0` to hide it.</td>
  </tr>
  <tr>
    <td>`showCanvasBase`</td>
    <td>Set it to `1` (default) to show canvas base or `0` to hide it.</td>
  </tr>
  <tr>
    <td>`canvasBaseDepth`</td>
    <td>Height of canvas base (in pixels).</td>
  </tr>
  <tr>
    <td>`canvasBgDepth`</td>
    <td>Depth of Canvas Background (in pixels).</td>
  </tr>
</table>
