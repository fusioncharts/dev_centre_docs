---
permalink: gauge-and-widgets-guide/gantt-chart/adding-scroll-to-chart.html
title: Adding Scroll to Chart | FusionCharts
description: The Gantt chart supports scrolling for both, the data table and the Gantt view pane. This section about vertical scrolling for data table and gantt pane
heading: Adding Scroll to Chart
chartPresent: true
---

The Gantt chart supports scrolling for both, the data table and the Gantt view pane.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/gantt-chart/adding-scroll-to-chart#enabling-vertical-scrolling" class="smoth-scroll">Enable vertical scrolling</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/adding-scroll-to-chart#enabling-scroll-for-the-data-table" class="smoth-scroll">Enable scroll for the data table</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/adding-scroll-to-chart#enabling-scrolling-for-the-gantt-pane" class="smoth-scroll">Enable scroll for the Gantt pane</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/adding-scroll-to-chart#configuring-scroll-properties" class="smoth-scroll">Configure scroll properties</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/adding-scroll-to-chart#scroll-to-a-specific-date" class="smoth-scroll">Scroll to a particular date</a>

## Enabling Vertical Scrolling

Vertical scrolling is enabled by default depending on the height of the chart. If the number of processes fit within the height of the chart, vertical scrolling will not appear. You can also manually enable or disable vertical scrolling.

A Gantt chart with vertical scrolling disabled looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-scroll-to-chart-example-1.js %}

Given below is a brief description of the attribute used to enable/disable vertical scrolling:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useVerticalScrolling`</td>
    <td>It is used to specify whether a vertical scroll bar will be enabled for the chart. Setting this attribute to `0` will disable the vertical scroll bar, setting it to `1`(default) will enable.
    By default, the vertical scroll bar appears depending on the height of the chart.</td>
  </tr>
</table>


## Enabling Scroll for the Data Table

The data table automatically starts to scroll when you add data columns that do not fit in the specified area of the grid.

A Gantt chart with a scroll rendered for the data table looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-scroll-to-chart-example-2.js %}



As you can see above, the scroll bar for data-grid automatically becomes active when the data in grid cannot fit itself in one screen.

To disable the scrollbar for data-grid, you have three options:

* Increase the chart width so that the data-grid fits completely in one screen.

* Set the `ganttWidthPercent` attribute to a lower value (0-100) for the global `chart` object. This attribute indicates the percent space (width) the Gantt pane takes. If the Gantt takes lesser space, the grid will get more space and will fit in the full labels.

* Set the `showFullDataTable` attribute to '0' (false) for the `chart` object. This asks the chart to wrap and truncate the data labels and try to squeeze them in the required space (only if possible).

## Enabling Scrolling for the Gantt Pane

By default, the Gantt pane never automatically scrolls, unless you explicitly specify it. To enable scrolling for the Gantt pane, you'll first need to decide the following - "What time frame should be visible in one screen of the Gantt pane?" Once this is decided and specified for the chart, the rest of time frame is shown upon scrolling. For example, you may decide that instead of showing the complete data, you want to see the data for only three months at one time.

A Gantt chart rendered to enable scrolling for the Gantt pane looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-scroll-to-chart-example-3.js %}

Given below is a brief description of the attributes used to enable scrolling for the Gantt pane:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`ganttPaneDuration`</td>
    <td>It is used to specify the timeline a Gantt pane will represent at a given point, if you want to enable the scroll. For example, if you want your Gantt pane to show the data for only three months in one screen and then scroll the rest, set the value of this attribute to 3.</td>
  </tr>
  <tr>
    <td>`ganttPaneDurationUnit`</td>
    <td>It is used to specify the unit of your chosen duration, if you have opted to scroll through the Gantt pane.The possible values for this attribute are `y`,`m`,`d`, `h`, `mn`, and `s`.</td>
  </tr>
</table>


Given below is a brief description of the values that the `ganttPaneDurationUnit` attribute can take:

<table>
  <tr>
    <th>Value</th>
    <th>What it represents?</th>
  </tr>
  <tr>
    <td>`y`</td>
    <td>No. of years to display </td>
  </tr>
  <tr>
    <td>`m`</td>
    <td>No. of months to display</td>
  </tr>
  <tr>
    <td>`d`</td>
    <td>No. of days to display</td>
  </tr>
  <tr>
    <td>`h`</td>
    <td>No. of hours to display</td>
  </tr>
  <tr>
    <td>`mn`</td>
    <td>No. of minutes to display</td>
  </tr>
  <tr>
    <td>`s`</td>
    <td>No. of seconds to display </td>
  </tr>
</table>


<p class="text-info">If the duration specified by you is more than the actual time span of the chart, the scroll bar for the Gantt pane is not displayed.</p>

## Configuring Scroll Properties

You can configure several cosmetic properties for the scroll bar.

A Gantt chart with the scroll cosmetic properties configured looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-scroll-to-chart-example-4.js %}

Given below is a brief description of the attributes used to configure scroll cosmetics:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`scrollColor`</td>
    <td>It is used to specify the hex code of the color for the scroll bar, e.g. #CC0000. </td>
  </tr>
  <tr>
    <td>`scrollPadding`</td>
    <td>It is used to specify the vertical padding between the scroll bar and the chart canvas.</td>
  </tr>
  <tr>
    <td>`scrollHeight`</td>
    <td>It is used to specify the height of the scroll bar.</td>
  </tr>
  <tr>
    <td>`scrollBtnWidth`</td>
    <td>It is used to specify the width of the scroll buttons.</td>
  </tr>
  <tr>
    <td>`scrollBtnPadding`</td>
    <td>It is used to specify the horizontal padding between the scroll bar and the scroll buttons. </td>
  </tr>
  <tr>
    <td>`flatScrollBars`</td>
    <td>It is used to specify whether scroll bars will be rendered as flat scroll bars. Setting this attribute to `0` will render the scroll bars with a gradient effect, setting it `1` (default) will render them as flat scroll bars. </td>
  </tr>
</table>


All our previous charts are with flat scrollbars.

<p class="text-info">If you do not find this attribute in the data do not be surprised, as this attribute is set in the theme, we are using for the fiddles.</p>


## Scroll to a Specific Date

For the Gantt chart, you can specify the date from where the chart will initially render.

The Social Media Optimization Gantt chart, that starts from Aug’14, configured to start rendering from Sept’14 looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-scroll-to-chart-example-5.js %}

Given below is a brief description of the attribute used to set the date from which the chart will initially render:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`scrollToDate`</td>
    <td>It is used to specify the date to which the chart will automatically scroll at the time of rendering. This attribute works only when the `ganttPaneDuration` and the `ganttPaneDurationUnit` attributes are set as per the requirement. </td>
  </tr>
</table>