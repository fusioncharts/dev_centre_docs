---
permalink: chart-guide/drag-able-charts/configuring-drag-able-charts.html
title: Configuring Drag-able Charts | FusionCharts
description: FusionCharts Suite XT allows you to configure the axis limits and division intervals for drag-able charts.
heading: Configuring Drag-able Charts
chartPresent: true
---

FusionCharts Suite XT allows you to configure the axis limits and division intervals for drag-able charts.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/drag-able-charts/configuring-drag-able-charts.html#changing-axis-limits">Change axis limits</a>
* <a href="{{ site.baseurl }}chart-guide/drag-able-charts/configuring-drag-able-charts.html#managing-chart-limits-using-javascript-api">Manage chart limits using JavaScript API</a>
* <a href="{{ site.baseurl }}chart-guide/drag-able-charts/configuring-drag-able-charts.html#snapping-to-the-nearest-divisional-lines">Snap to the nearest division interval</a>

## Changing Axis Limits

The chart, by default, calculates the y-axis upper and lower limits based on the data provided to it. If you want any column to assume a value not covered within this axis range, you can increase or decrease the limits using the menu button at the top-right of the chart.

![image alt text]({{ site.baseurl }}assets/images/chart-guide-drag-able-charts-configuring-drag-able-charts-image-1.jpg)

When the menu button is clicked, a pop-up with the options to increase or decrease the upper and lower limits is revealed. Clicking on this menu button will reveal a menu with the options to increase or decrease the upper and lower limits.

![image alt text]({{ site.baseurl }}assets/images/chart-guide-drag-able-charts-configuring-drag-able-charts-image-2.jpg)

When you select any of the above options, the chart limits are increased or decreased using auto-calculated intervals. However, If you want to set manual values for the upper/lower limits, you can just click the limits and edit them directly.

![image alt text]({{ site.baseurl }}assets/images/chart-guide-drag-able-charts-configuring-drag-able-charts-image-3.jpg)

![image alt text]({{ site.baseurl }}assets/images/chart-guide-drag-able-charts-configuring-drag-able-charts-image-4.jpg)

If you enter a limit value which cannot be accepted by the chart, the value will turn red to indicate that the value can not be accepted.

![image alt text]({{ site.baseurl }}assets/images/chart-guide-drag-able-charts-configuring-drag-able-charts-image-5.png)

## Managing Chart Limits Using JavaScript API

FusionCharts Suite XT allows you to set and retrieve the charts’ upper and lower limits using JavaScript APIs.

A drag-able area chart configured to manage chart limits using JavaScript API looks like this:

{% embed_all chart-guide-drag-able-charts-configuring-drag-able-charts-example-1.js %}

Give below is a brief description of the JavaScript functions used to manage chart limits:

<table>
  <tr>
    <th>Method Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`setUpperLimit()`</td>
    <td>It is used to specify the new upper limit for the chart. It takes a numeric value for the limit as the parameter. If the value is greater than the maximum value of all the data plots of the chart, the chart sets the new upper limit of the chart and returns true. If the value is less than the maximum value of the data plots, the chart does not set the upper limit and returns false.
    __Note:__ You have to provide a  callback Function if `asyncRender` is set to `1` (default) where you get the output of this function as a parameter of the callback function. The callback implementation does not require to listen to the `renderComplete` event.</td>
  </tr>
  <tr>
    <td>`setLowerLimit()`</td>
    <td>It is used to specify the new lower limit for the chart. It takes a numeric value for the limit as the parameter. If the value is less than the minimum value of all the data plots of the chart, the chart sets the new lower limit of the chart and returns true. If the value is greater than the minimum value of the data plots, the chart does not set the lower limit and returns false.
    __Note:__ You have to provide a  callback Function if `asyncRender` is set to `1` (default) where you get the output of this function as a parameter of the callback function. The callback implementation does not require to listen to the `renderComplete` event.</td>
  </tr>
  <tr>
    <td>`getUpperLimit()`</td>
    <td>It is used to return the current upper limit of the chart.
    __Note:__ You have to provide a  callback Function if `asyncRender` is set to `1` (default) where you get the output of this function as a parameter of the callback function. The callback implementation does not require to listen to the `renderComplete` event.</td>
  </tr>
  <tr>
    <td>`getLowerLimit()`</td>
    <td>It is used to return the current lower limit of the chart.
    __Note:__ You have to provide a  callback Function if `asyncRender` is set to `1` (default) where you get the output of this function as a parameter of the callback function. The callback implementation does not require to listen to the `renderComplete` event.</td>
  </tr>
</table>


## Snapping to the Nearest Divisional Lines

FusionCharts XT allows you to limit the dragging of data plots with respect to the divisional lines on the chart i.e. you can configure a data plot to snap to the nearest divisional line if it falls within a specified distance of the divisional line.

A drag-able column chart configured for snapping to the nearest div interval looks like this:

{% embed_all chart-guide-drag-able-charts-configuring-drag-able-charts-example-2.js %}

Given below is a brief description of the attributes used to configure snapping to the nearest divisional line:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`snapToDivOnly`</td>
    <td>It is used to specify whether the data points can be dragged only to the nearest divisional lines on the chart. That means, the data points cannot acquire a value between any two divisional lines and, as such, they will always fall on a divisional line value.</td>
  </tr>
  <tr>
    <td>`snapToDiv`</td>
    <td>When dragging the area plots, you can snap them to the nearest divisional line on chart. To do so, just set this attribute as `1`. The difference between this attribute and `snapToDivOnly` attribute is that `snapToDivOnly` attribute (when set to `1`) allows you to drag the data points onto a div line. But using this attribute, you can create a "sticky" kind of interface, so that when the data point is dropped near a divisional line, it assumes the divisional line value. However, if it is dropped at a farther location, it will stay where it is.</td>
  </tr>
  <tr>
    <td>`snapToDivRelaxation`</td>
    <td>It is used to specify the distance in pixels from the divisional lines where the data points will behave sticky. This attribute works only when the `snapToDiv` attribute is set to `1`.</td>
  </tr>
  <tr>
    <td>`doNotSnap`</td>
    <td>It is used to specify whether the data points will stick to any divisional lines. Setting this attribute to `1` will not allow the data points to stick to div lines, setting it to `0` will allow them to stick.</td>
  </tr>
</table>