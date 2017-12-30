---
permalink: chart-guide/drag-able-charts/introduction.html
title: Introduction to Drag-able Chart | FusionCharts
description: Drag-able charts allow you to visually morph the data to update the figures on the chart. These charts derive their basic features from the multi-series column, the multi-series line, and the multi-series area charts.
heading: Introduction to Drag-able Chart
chartPresent: true
---

Drag-able charts are a special set of charts that allow you to visually manipulate the data on a chart and then submit it back. These charts can be used intensively for simulations, financial planning, etc.

In this section, you will be introduced to the:

* <a href="{{ site.baseurl }}chart-guide/drag-able-charts/introduction.html#basics-of-drag-able-charts">Basics of drag-able charts</a>
* <a href="{{ site.baseurl }}chart-guide/drag-able-charts/introduction.html#types-of-drag-able-charts">Types of drag-able charts</a>

## Basics of Drag-able Charts

Drag-able charts allow you to visually morph the data to update the figures on the chart. These charts derive their basic features from the multi-series column, the multi-series line, and the multi-series area charts.

FusionCharts Suite XT offers the following three types of drag-able charts:

* <a href="{{ site.baseurl }}chart-guide/drag-able-charts/introduction.html#drag-able-column-2d">Drag-able column 2D chart</a>
* <a href="{{ site.baseurl }}chart-guide/drag-able-charts/introduction.html#drag-able-line-2d">Drag-able line 2D chart</a>
* <a href="{{ site.baseurl }}chart-guide/drag-able-charts/introduction.html#drag-able-area-2d">Drag-able area 2D chart</a>

Once you are done with the visual updating of data, you can submit the data:

1. Either back to the server as form data(like HTML Forms)

2. Or, to JavaScript functions present on the same page as the chart. These JavaScript functions can then process the data and do the needful.

## Types of Drag-able Charts

### Drag-able Column 2D

A simple drag-able column 2D chart looks like this:

{% embed_all chart-guide-drag-able-charts-introduction-example-1.js %}

In the above chart, the Estimated Demand data plot is drag-able. A table is rendered below the chart which reflects the visually-updated data on the chart.

### Drag-able Line 2D

A simple drag-line 2D chart looks like this:

{% embed_all chart-guide-drag-able-charts-introduction-example-2.js %}

In the above chart, the anchors representing the Q3 and Q4 sales estimates for Apple and Samsung are drag-able. A table is rendered below the chart which reflects the visually-updated data on the chart.

### Drag-able Area 2D

A simple drag-able area 2D chart looks like this:

{% embed_all chart-guide-drag-able-charts-introduction-example-3.js %}

In the above chart, the anchors representing the Q3 and Q4 sales estimates for Apple and Samsung are drag-able. A table is rendered below the chart which reflects the visually-updated data on the chart.