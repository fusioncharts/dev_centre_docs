---
permalink: basic-chart-configurations/cross-line.html
title: Cross Line | FusionCharts
description: Cross line is a vertical line/area used as quick reference for the data plots. The tooltip that appears is consolidated with all the information required.
heading: Cross Line
chartPresent: true
---

Cross line is a vertical line/area used as quick reference for the data plots. So what it does, is, when you hover on the canvas a line/area appears highlighting the data plots along with the information in a tooltip. The tooltip that appears is consolidated with all the information required, for example, data values, labels of each data plot and also the color of the data plots. A cross line appears as shown in the image below: 

![Cross Line]({{ site.baseurl }}assets/images/basic-chart-configurations-cross-line-1.png)

In this section learn how to:

* <a href="{{ site.baseurl }}basic-chart-configurations/cross-line.html#customize-the-cross-line">Customize the Cross line</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/cross-line.html#configure-the-consolidated-tooltip">Configure the consolidated tooltip</a>

## Customize the Cross line

In multi-series charts, when you hover on the chart canvas a color band appears highlighting the corresponding data plots for that particular section of the canvas. This color band is the crossline of the chart. You can customize the color, opacity and animation of the cross line.

### Customizing the Color

You can customize the color of the trend band using `crossLineColor` attribute. A multi series column chart with a customized band color looks as shown below:

{% embed_all configuring-your-chart-cross-line-example-1.js %}

Given below is the attribute used to customize the color of the cross line:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`crossLineColor`</td>
    <td>It specifies the color of the cross line. Default Color Value is `#EEEEEE`.</td>
  </tr>
</table>

### Customizing the Opacity

You can customize the opacity of the cross line using `crossLineAlpha` attribute. A multi-series column chart with a customized transparency (set to `20`) of the cross line looks as shown below:

![Cross Line with customized opacity]({{ site.baseurl }}assets/images/basic-chart-configurations-cross-line-2.png)

Given below is the attribute used to customize the opacity of the cross line:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`crossLineAlpha`</td>
    <td>Sets the transparency of cross line. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>

### Enabling/Disabling Animation

FusionCharts allows you to control the animation for the cross line of the chart.You can enable or disable it as per your requirement. 

If the animation is enabled, you can also set the animation duration for the cross line of your chart. A multi-series area chart with animation looks as below:

{% embed_all configuring-your-chart-cross-line-example-2.js %}

Given below are the attributes used to enable/disable animation and set the animation duration for the cross line:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`crossLineAnimation`</td>
    <td>This attribute gives you the option to control animation of the cross line. If you do not want to animate it, set this as `0`.</td>
  </tr>
  <tr>
    <td>`crossLineAnimationDuration`</td>
    <td>It specifies the animation duration for the cross line of the chart only if `crossLineAnimation` is set to `1`.</td>
  </tr>
</table>

## Configure the Consolidated Tooltip

Tooltip is a common element, used to display information when you hover on a particular data point. A consolidated tooltip has been introduced with the cross line which can be used in multi-series charts to get the detailed information of the hovered plots. A multi-series line chart with a consolidated tooltip looks as shown below:

{% embed_all configuring-your-chart-cross-line-example-3.js %}

In the above chart, by default the `plotColorInTooltip` attribute has been set to `1`. Set plotColorInTooltip: `0`, to turn off the color of the plot in the tooltip as shown in the image below:

![Cross Line with customized tooltip]({{ site.baseurl }}assets/images/basic-chart-configurations-cross-line-3.png)

Apply `tooltipGrayOutColor` attribute to specify the color of the unfocused plot in the tooltip. In the image below the label color of the unfocused plot in the tooltip has been set to `#3377ff`  as shown in the image below:

![Cross Line with customized grayout in tooltip]({{ site.baseurl }}assets/images/basic-chart-configurations-cross-line-4.png)

The consolidated tooltip can be customized using following attributes:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotColorInTooltip`</td>
    <td>It specifies whether to display the color of the plots with labels in the tooltip. If you do not want to display the color, set this to `0`.</td>
  </tr>
  <tr>
    <td>`tooltipGrayOutColor`</td>
    <td>It specifies the color of the unfocused plot in the tooltip for all multi-series charts. Accepts hex code. e.g. `#AAAAAA` (default).</td>
  </tr>
  <tr>
    <td>`toolTipBgColor`</td>
    <td>Specify background Color for tooltip. Accepts hex code, e.g., `#fffffff` (default).</td>
  </tr>
  <tr>
    <td>`toolTipBorderColor`</td>
    <td>Specify tooltip border color. Accepts hex code. e.g. `#545454`.</td>
  </tr>
  <tr>
    <td>`toolTipSepChar`</td>
    <td>The character specified as the value of this attribute separates the name and value displayed in tooltip. Accepts any string. e.g. `,` (default), `--`</td>
  </tr>
  <tr>
    <td>`showToolTipShadow`</td>
    <td>Set the value to `1` (default) to enable the tooltip-shadow or set it to `0` to disable it.</td>
  </tr>
</table>