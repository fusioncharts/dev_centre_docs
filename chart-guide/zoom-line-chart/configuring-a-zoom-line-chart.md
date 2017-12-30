---
permalink: chart-guide/zoom-line-chart/configuring-a-zoom-line-chart.html
title: Configuring a Zoom Line Chart | FusionCharts
description: Using zoomline chart, you can limit the maximum number of data labels, set the distance between consecutive data plots and criteria for anchor display, etc
heading: Configuring a Zoom Line Chart
chartPresent: true
---

FusionCharts Suite XT allows you to configure several functional and cosmetic properties for zoom line charts.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/zoom-line-chart/configuring-a-zoom-line-chart.html#limiting-the-maximum-number-of-visible-data-labels">Limit the maximum number of data labels</a>

* <a href="{{ site.baseurl }}chart-guide/zoom-line-chart/configuring-a-zoom-line-chart.html#setting-the-distance-between-consecutive-data-plots">Set the distance between consecutive data plots</a>

* <a href="{{ site.baseurl }}chart-guide/zoom-line-chart/configuring-a-zoom-line-chart.html#setting-the-criteria-for-anchor-display">Set the criteria for anchor display</a>

* <a href="{{ site.baseurl }}chart-guide/zoom-line-chart/configuring-a-zoom-line-chart.html#preselecting-the-number-of-visible-data-plots">Pre-select the number of visible data plots</a>

* <a href="{{ site.baseurl }}chart-guide/zoom-line-chart/configuring-a-zoom-line-chart.html#customizing-the-appearance-of-a-zoom-line-chart">Customize the appearance of a zoom line chart</a>

## Limiting the Maximum Number of Visible Data Labels

By default the zoom line chart displays as many data labels as can be accommodated without causing a clutter. However, it is also possible to limit the maximum number of data labels that are visible at any given time.

A zoom line chart with the maximum number of labels limited looks like this:

{% embed_all chart-guide-zoom-line-chart-configuring-a-zoom-line-chart-example-1.js %}

In the above chart, the number of labels rendered on one screen is 12. To look at the preceding or following labels, you will need to use the scroll bar.

Given below is a brief description of the attribute used to limit the maximum number of visible data labels:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`numVisibleLabels`</td>
    <td>It is used to specify the maximum number of labels that will be rendered in one screen when the chart is first loaded.</td>
  </tr>
</table>


<p class="text-info">`numVisibleLabels` attribute only limits the number of visible data labels, it has no effect on the number of visible data points.</p>

## Setting the Distance between Consecutive Data Plots

FusionCharts XT zoom line chart allows configuration of the distance between consecutive data plots.

<p class="text-info"> The anchors in the zoom-line chart cannot be made clickable, because FusionCharts does not include the supporting API for defining an external URL for the data points. </p>

A zoom line chart with the distance between the consecutive data plots configured looks like this:

{% embed_all chart-guide-zoom-line-chart-configuring-a-zoom-line-chart-example-2.js %}

Given below is a  brief description of the attribute used to set distance between consecutive data plots:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pixelsPerPoint`</td>
    <td>It is used to specify the number of pixels that will be used to render a data point. A greater number of pixels will result in a higher quality display. This attribute is also used to set the distance between consecutive data plots.</td>
  </tr>
</table>


## Setting the Criteria for Anchor Display

In order to reduce clutter, you can make anchors visible only when the distance between consecutive data points reaches a certain minimum value. For instance, you can instruct the chart to show anchors only when consecutive data points are 25 pixels apart. If the chart contains plenty of data, then anchors will not be visible in macroscopic view, where the distance between consecutive data points is less than 25 pixels. The anchors become visible only when the chart is zoomed and the distance between consecutive data points increases to 25 pixels or above.

<p class="text-info"> The anchors in the zoom-line chart cannot be made clickable, because FusionCharts does not include the supporting API for defining an external URL for the data points. </p>

A zoom line chart with the criteria for anchor display defined looks like this:

{% embed_all chart-guide-zoom-line-chart-configuring-a-zoom-line-chart-example-3.js %}

Given below is a brief description of the attribute used to set the criteria for anchor display:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`anchorMinRenderDistance`</td>
    <td>It is used to specify the minimum distance, in pixels, between consecutive data points.</td>
  </tr>
</table>


## Preselecting the Number of Visible Data Plots

By default, the zoom line chart displays all the data plots in a single screen. However, it is possible to pre-select the maximum number of data plots that will be visible on a single screen at the time of rendering.

<p class="text-info"> The anchors in the zoom-line chart cannot be made clickable, because FusionCharts does not include the supporting API for defining an external URL for the data points. </p>

A zoom line chart rendered with pre-selected number of data plots looks like this:

{% embed_all chart-guide-zoom-line-chart-configuring-a-zoom-line-chart-example-4.js %}

Given below is a brief description of the attributes used to pre-select the number of visible data points:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`displayStartIndex`</td>
    <td>It is used to specify the index of the data label that will appear to the extreme left of the chart.</td>
  </tr>
  <tr>
    <td>`displayEndIndex`</td>
    <td>It is used to specify the index of the data label that will appear to the extreme right of the chart.</td>
  </tr>
</table>


## Customizing the Appearance of a Zoom Line Chart

FusionCharts Suite XT includes several options for customizing the appearance of a zoom line chart. Appearance of chart elements such as the scroll bar and toolbar can be configured with great deal of intricacy. Following table lists some of the customization attributes that are exclusive to the zoom line chart:

Given below is a brief description of some of the attributes that are exclusive to the customization of a zoom line chart::

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`palette`</td>
    <td>It is used to specify the hex code for a color theme that will be applied throughout the chart.</td>
  </tr>
  <tr>
    <td>`toolbarButtonColor`</td>
    <td>It is used to specify the hex code for the color of the toolbar buttons.</td>
  </tr>
  <tr>
    <td>`zoomPaneBgColor`</td>
    <td>It is used to specify the hex code for the background color of the zoom pane.</td>
  </tr>
  <tr>
    <td>`zoomPaneBgAlpha`</td>
    <td>It is used to specify the alpha of the zoom pane. Range: 0 to 100.</td>
  </tr>
  <tr>
    <td>`pinLineThicknessDelta`</td>
    <td>It is used to specify the thickness of the pinned line when the chart is put to pin line mode.</td>
  </tr>
  <tr>
    <td>`pinPaneBgColor`</td>
    <td>It is used to specify the background color of the pin pane.</td>
  </tr>
  <tr>
    <td>`pinPaneBgAlpha`</td>
    <td>It is used to specify the alpha of the pin pane.</td>
  </tr>
  <tr>
    <td>`showToolBarButtonTooltext`</td>
    <td>It is used to enable/disable the display of tooltips for toolbar buttons.  </td>
  </tr>
  <tr>
    <td>`btnResetChartTooltext`</td>
    <td>It is used to replace the default tooltext of the`Reset Chart` button with provided string.</td>
  </tr>
  <tr>
    <td>`btnZoomOutTooltext`</td>
    <td>It is used to replace the default tooltext of the `Zoom Out` button with provided string.</td>
  </tr>
  <tr>
    <td>`btnSwitchToZoomModeTooltext`</td>
    <td>It is used to replace the default tooltext of `Switch to Zoom Mode` with provided string.</td>
  </tr>
  <tr>
    <td>`btnSwitchToPinModeTooltext`</td>
    <td>It is used to replace the default tooltext of `Switch to Pin Mode` button with provided string.</td>
  </tr>
  <tr>
    <td>`scrollColor`</td>
    <td>It is used to specify the hex code of the color for the scroll bar.</td>
  </tr>
  <tr>
    <td>`scrollHeight`</td>
    <td>It is used to specify the height for scroll bar.</td>
  </tr>
</table>