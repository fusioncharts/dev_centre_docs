---
permalink: basic-chart-configurations/vertical-div-lines.html
title: Vertical Div Lines | FusionCharts
description: Vertical div lines are vertical lines running through the canvas in a chart. These lines help in relating the data to its respective label
heading: Vertical Div Lines
chartPresent: true
---

Vertical divisional (or div) lines are vertical lines running through the canvas in a chart. They help in relating the data to its respective label, when there is large amount of data.

<p class="text-info">Vertical div lines are applicable only to line, area, spline, splineArea,  and XY type charts.</p>

The image below shows vertical div lines rendered in a line chart:

![Configuring Your Chart - Vertical Div Lines]({{ site.baseurl }}assets/images/vertical_div_lines.png)

This section talks about:

* <a href="{{ site.baseurl }}basic-chart-configurations/vertical-div-lines.html#rendering-vertical-divisional-lines">Rendering vertical divisional lines</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/vertical-div-lines.html#customizing-display-of-vertical-divisional-lines">Customizing display of vertical divisional lines</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/vertical-div-lines.html#customizing-vertical-grid-bands">Customizing vertical grid bands</a>

## Rendering vertical divisional lines

By default, vertical divisional lines are not rendered in a chart. A line chart with vertical div lines explicitly rendered is shown below:

{% embed_all configuring-your-chart-vertical-div-lines-example-1.js %}

Given below is the attribute used to render vertical div lines in a chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`numVDivLines`</td>
    <td>It specifies the number of vertical divisional lines to be rendered in the chart. </td>
  </tr>
</table>






## Customizing display of vertical divisional lines

A line chart with customized vertical div lines is as shown below:

{% embed_all configuring-your-chart-vertical-div-lines-example-1.js %}

Given below are the attributes used to customize the appearance of vertical div lines:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`vDivLineColor`</td>
    <td>If specifies the hex code for the color that will be used to render the vertical divisional lines. e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`vDivLineThickness`</td>
    <td>Sets the thickness of the vertical axis division lines(in pixels).</td>
  </tr>
  <tr>
    <td>`vDivLineAlpha`</td>
    <td>Sets the transparency of vertical divisional lines. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>






### Using dashed divisional lines

You can render vertical divisional lines as dashed lines, instead of the default continuous lines. A line chart with dashed lines as vertical div lines is shown below:

{% embed_all configuring-your-chart-vertical-div-lines-example-2.js %}

Given below are the attributes used to render dashed vertical div lines:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`vDivLineDashed`</td>
    <td>Set this to `1` to make vertical div lines dashed or `0` (default) to make them normal.</td>
  </tr>
  <tr>
    <td>`vDivLineDashLen`</td>
    <td>Sets the length of each dash of vertical div line(in pixels).</td>
  </tr>
  <tr>
    <td>`vDivLineDashGap`</td>
    <td>Sets the gap between two consecutive dashes in vertical div lines (in pixels).</td>
  </tr>
</table>






## Customizing vertical grid bands

### Showing/hiding vertical grid bands

Vertical grid bands, by default, do not appear between the vertical divisional lines. A line chart with alternate vertical grid bands enabled is shown below:

{% embed_all configuring-your-chart-vertical-div-lines-example-3.js %}

Given below is the attribute used to render the alternate grid bands:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showAlternateVGridColor`</td>
    <td>Set this to `1` to show vertical grid bands or `0` to hide them.</td>
  </tr>
</table>






### Customizing display of vertical grid bands

A line chart with customized vertical grid bands looks as below:

{% embed_all configuring-your-chart-vertical-div-lines-example-4.js %}

Given below are the attributes used to customize the vertical grid bands:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`alternateVGridColor`</td>
    <td>It specifies the hex code for the color that will be used to render the vertical grid bands. e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`alternateVGridAlpha`</td>
    <td>It specifies the transparency of the vertical grid bands. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>






