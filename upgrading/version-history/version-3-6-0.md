---
title: Version 3.6.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.6.0.
heading: Version 3.6.0
---

<p class="release-date"> 14th January, 2015 </p>

#### Improvements

- Added support for self hosted export servers in **Java**.

- Added Server Side Wrappers for **PHP**, **ASP.NET**, **RoR**.

- Added support for long labels in radar charts.

- Added support for realtime update of `tooltip` for realtime charts.

- Added name attribute to all html input elements PowerCharts.

- Zoomline chart now supports `tooltip` functionality.

- Gantt chart now supports `dateSeparator` attribute.

- Added support for `displayValue` in Milestone of Gantt Chart.

#### Fixes

- Logo/Images can now be exported while exporting a chart (experimental).

- Captions now align with chart area in MultiAxisLine chart.

- High-low values can now be toggled using `showHighLowValue` in Sparkline chart.

- Crossline labels of Zoomline chart are now rendered using using anti-collision methods.

- Plot click event now returns standard arguments.

- Pointer shadow now present in Horizontal Linear gauge.

- Fixed Axis name `bg-color` attribute.

- `valuePosition` attribute now works for line series of Pareto charts.

- `dataIndex` argument is now present in `slicingStart/slicingEnd` event.

- Plot labels in MultiLevelPie are now aligned vertically middle.

- Value close to zero now appear in Scroll Stacked Column charts.

- Fixed `tooltip` updation after drilling down to child chart in Chrome (Windows)

- Removed export button in exported chart image in ASP.NET export server

- In Angular Gauge, macros `$chartCenterY`, `$gaugeCenterY` now return correct values.

- `exportCallBack` now works for charts exported and saved at server.

- Fixed link function call in dragnode chart, when a node is dragged.

- Legend Icon can now be configured for line chart when `drawAnchors` is 0.

- Fixed Pipe Line(|) display on spark line chart when high and low values are not visible.
