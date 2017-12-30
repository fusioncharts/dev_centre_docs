---
permalink: basic-chart-configurations/div-lines-and-grids.html
title: Div Lines and Grids | FusionCharts
description: Divisional lines are horizontal lines running along the canvas enabling easier visual reference of plot values against the y-axis
heading: Div Lines and Grids
chartPresent: true
---

Divisional lines are horizontal lines running along the canvas. They enable easier visual reference of plot values against the y-axis and for comparison across data points. In scatter and bubble charts, there are additional vertical divisional lines for better visualization.

By default, FusionCharts Suite XT automatically adds div lines based on the minimum and maximum y-axis values. However, several customization options for div lines are available too.

This article talks about:

* <a href="{{ site.baseurl }}basic-chart-configurations/div-lines-and-grids.html#customizing-number-of-divisional-lines">Customizing number of divisional lines</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/div-lines-and-grids.html#customizing-display-of-divisional-lines">Customizing display of divisional lines</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/div-lines-and-grids.html#customizing-horizontal-grid-bands">Customizing horizontal grid bands</a>

## Customizing number of divisional lines

In certain cases, you might want to explicitly specify the y-axis minimum & maximum values as well as the number of divisional lines. To do this, you need to disable the automatic adjustment of divisional lines and explicitly define the y-axis upper and lower limits as well as the number of divisional lines to render.  A column 2D chart with explicitly specified number of divisional lines is shown below:

{% embed_all configuring-your-chart-div-lines-and-grids-example-1.js %}

Given below are the attributes used to adjust divisional lines:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`adjustDiv`</td>
    <td>If set to `0`, it disables the automatic adjustment of divisional lines and allows you to explicitly specify the number of div lines to render as well as the y-axis lower and upper limits.</td>
  </tr>
  <tr>
    <td>`yAxisMinValue` and `yAxisMaxvalue`</td>
    <td>They specify the lower and upper limits, respectively, for the y-axis.</td>
  </tr>
  <tr>
    <td>`numDivLines`</td>
    <td>It specifies the number of divisional lines to render.</td>
  </tr>
</table>






## Customizing display of divisional lines

A multi-series column 2D chart with customized div lines(explicitly defined) looks as below:

{% embed_all configuring-your-chart-div-lines-and-grids-example-2.js %}

Given below are the attributes used to customize the appearance of the divisional lines:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`divLineColor`</td>
    <td>If specifies the hex code for the color that will be used to render the horizontal divisional lines. e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`divLineThickness`</td>
    <td>Sets the thickness of the horizontal divisional lines(in pixels).</td>
  </tr>
  <tr>
    <td>`divLineAlpha`</td>
    <td>Sets the transparency of the divisional lines. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>






### Using dashed divisional lines

FusionCharts Suite XT allows you to render the divisional lines as dashed lines, instead of the default continuous lines.

A line chart with dashed div lines looks as below:

{% embed_all configuring-your-chart-div-lines-and-grids-example-3.js %}



Given below are the attributes used to render divisional lines as dashed:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`divLineDashed`</td>
    <td>Set this to `1` to make divisional lines dashed or `0` (default) to make them normal.</td>
  </tr>
  <tr>
    <td>`divLineDashLen`</td>
    <td>Sets the length of each dash of divisional lines(in pixels).</td>
  </tr>
  <tr>
    <td>`divLineDashGap`</td>
    <td>Sets the gap between two consecutive dashes in divisional lines (in pixels).</td>
  </tr>
</table>






## Customizing horizontal grid bands

To further aid data visualization, alternate spaces between grid lines can be colored to create grid bands.

### Showing/hiding horizontal grid bands

Horizontal grid bands, by default, do not appear between the divisional lines. A column 2D chart with horizontal grid bands enabled is shown here:

{% embed_all configuring-your-chart-div-lines-and-grids-example-4.js %}

Given below is the attribute used to show/hide the horizontal grid bands:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`showAlternateHGridColor`</td>
    <td>Set this to `1` to show horizontal grid bands or `0` to hide them.</td>
  </tr>
</table>






### Customizing horizontal grid bands

A column 2D chart with customized horizontal grid bands looks as below:

{% embed_all configuring-your-chart-div-lines-and-grids-example-5.js %}

Given below are the attributes used to customize the horizontal grid bands:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`alternateHGridColor`</td>
    <td>It specifies the hex code for the color that will be used to render the horizontal grid bands. e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`alternateHGridAlpha`</td>
    <td>It specifies the transparency of the horizontal grid bands. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>





