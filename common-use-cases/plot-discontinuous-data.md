---
permalink: api/tutorials/plot-discontinuous-data.html
title: Plot Discontinuous Data | FusionCharts
description: FusionCharts XT lets you do this very easily, just leaving the value attribute blank will do the trick.
heading: Plot Discontinuous Data
chartPresent: true
layout: page
---

You might often want to plot charts with incomplete data points - that is, missing data. For example, when plotting a monthly sales chart, you might not have data for all the months.

You might just want to indicate the missing data with a blank space on the chart, not plotting anything at that particular place.

FusionCharts XT lets you do this very easily, just leaving the value attribute blank will do the trick.

This is how a chart with discontinuous data would look like:

{% embed_chart plot-discontinuous-data-example-1.js %}

The data structure of the above chart is shown here:

{% embed_data plot-discontinuous-data-example-1.js %}


## Connecting Null Data
In our above Line chart, we were showing a break for the months of May and June. If you do not want to show this break for May and Jun, and want April to directly connect to July, you can do so using the `connectNullData` attribute.

This is how a chart with null data connected looks like:

{% embed_chart plot-discontinuous-data-example-2.js %}

The data structure of the above chart is shown here:

{% embed_data plot-discontinuous-data-example-2.js %}

Here we make use of the `dashed` attribute to differentiate between continuous data and the disconnected points.

The `dashed` attribute must be specified just before the discontinuity starts.

