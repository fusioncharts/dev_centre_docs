---
permalink: troubleshooting/mismatch-between-chart-type-and-data-source.html
title: Mismatch between Chart Type and Data Source | FusionCharts
description: Chart data needs to be in the correct format for FusionCharts to be able to render the chart. This page states how to ensure the data format is always correct.
heading: Mismatch between Chart Type and Data Source
chartPresent: false
---

Please note that all supported chart types do not follow the same dataSource structure.

In certain cases, charts of similar genre have same dataSource structures. For example, all single-series charts have same dataSource structures; so line, column, bar, and area charts can be rendered with same dataSource. Similarly, it applies to multi-series charts as well.

However, some chart types have unique dataSource structures, like Gantt charts, that cannot be supported by any other chart types.

To ensure chart type and dataSource compatibility, check the appropriate dataSource structures for your required chart type [here]({% site.baseurl %}/chart-guide/standard-charts/line-area-and-column-charts '@@open-newtab') and change the structure accordingly.