---
permalink: chart-guide/heat-map-chart/handling-out-of-range-data.html
title: Handling Out-of-range Data | FusionCharts
description: In heat map if the data values are beyond the numeric ranges defined in the colorRange object, the chart will show blank data plots
heading: Handling Out-of-range Data
chartPresent: true
---

If the data values are beyond the numeric ranges defined in the `colorRange` object, the chart will show blank data plots. For example, the numeric range defined is 0-30, 30-70 and 70-100 and in the `data` object there are values such as -10 and 123. The chart will display all the data values within the range but will show blank data plots in place of -10 and 123.

A chart with a blank data plot rendered for out-of-range data looks like this:

{% embed_all chart-guide-heat-map-chart-handling-out-of-range-data-example-1.js %}

In the above chart, the cells that represent the job happiness index for the accounting department at Compton-Rancho Dom and the marketing department at Garden Groove Harbour are blank.

Look at the data structure. The data values specified for the accounting department at Compton-Rancho Dom and the marketing department at Garden Groove Harbour fall outside the defined range.

To avoid such blank data plots, you can enable percentage mapping for heat map charts.

## Using Percentage Mapping to Handle Out-of-range Data

Percentage mapping is a feature that allows the chart to display the data values in percentage.

A heat map chart with percentage mapping looks like this:

{% embed_all chart-guide-heat-map-chart-handling-out-of-range-data-example-2.js %}

Given below is a brief description of the attribute used to enable percentage mapping:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`mapByPercent`</td>
    <td>It is used to specify whether percentage mapping will be enabled for heat map charts. Setting this attribute to `1` will enable percentage mapping, setting it to `0` (default) will disable it. This attribute is used with the `colorRange` object.</td>
  </tr>
</table>


When percentage mapping is used, the lowest data value from the JSON data is considered to be the lower limit and will be displayed as 0%; the highest data value is considered as the upper limit and will be displayed as 100%. Color ranges have to be created with 0 as the lower limit and 100 as the upper limit.


<p class="text-info"> You can choose to enable percentage mapping even when all your data values fall within the defined range.</p>

<p class="text-info">In category based heat map chart, if you provide a category name by the attribute colorRangeLabel through the `data` element which is not defined in the `colorRange` element, the chart will show blank dataplot. </p>
