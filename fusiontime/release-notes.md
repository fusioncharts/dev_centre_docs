---
title: Release Notes | FusionCharts
description: This article elaborates on the style definition of FusionTime.
heading: Release Notes
---

<h2 class="sub-heading">Version 1.0.0</h2>

<p class="release-date">27th February, 2019</p>

- This marks the release of first version of [FusionTime](https://www.fusioncharts.com/fusiontime)! One can now create high performing time series visualizations and stock charts in Javascript very easily.

- The usage of a special [data layer](/fusiontime/getting-started/how-fusion-time-works) in FusionTime ensures that a seamless experience of the out-of-the-box features of time series visualization is available even with a high volume of time series data.

  - You can now perform a number of data operations, like, [sort](/fusiontime/fusiontime-data-engine/sort), [filter](/fusiontime/fusiontime-data-engine/filter), [groupBy](/fusiontime/fusiontime-data-engine/groupby), [pivot](/fusiontime/fusiontime-data-engine/pivot), etc. with the in-browser [store](/fusiontime/fusiontime-data-engine/overview) of tabular data, available with the data layer.

- Based on the requirement one can create either a [simple time series chart](/fusiontime/getting-started/create-your-first-chart-in-fusiontime), a [multivariate chart](/fusiontime/getting-started/create-your-multi-variate-chart-in-fusiontime), a [chart with multiple data plots](/fusiontime/getting-started/create-your-multi-series-chart-in-fusiontime), or a dual Y Axis chart, etc., with equal ease.

- FusionTime supports all the [standard plot types](/fusiontime/fusiontime-component/plot-types-in-fusiontime) - line, area, column, stock charts, etc and their variants.

- Some important components of FusionTime include:

  - [Time axis](/fusiontime/fusiontime-component/time-axis) - xAxis of the chart is used as the time axis. Based on the size of the chart and the atomicity of the available time series data, FusionTime auto-aggregates data to represent the pattern in an understandable way.

  - [Time Navigator](/fusiontime/fusiontime-component/time-navigator) - the pattern of the entire data is visible in this component. Active window helps to focus on data of a given time range in greater detail.

  - [Standard range selector](/fusiontime/fusiontime-component/standard-range-selector) - helps the user select standard time periods

  - [Custom range selector](/fusiontime/fusiontime-component/custom-range-selector) - helps the user specify a specific time period

  - [Y Axis](/fusiontime/fusiontime-component/y-axis-in-fusiontime) - is the axis on which measures are plotted. It can come in either a linear or log scale. It can be plotted either on the left or right side of the canvas.

  - [Crossline](/fusiontime/fusiontime-component/crossline-in-fusiontime) - gives you quick context of data when you are interacting on the chart.

  - [Time marker](/fusiontime/fusiontime-component/time-marker) - helps you mark important events on the time axis.

  - [Data marker](/fusiontime/fusiontime-component/data-markers) - helps you mark important events on data plots.

  - [Reference line](/fusiontime/fusiontime-component/reference-line-in-fusiontime) - helps you to quickly compare data plots against a fixed value.

- FusionTime comes with three themes (Fusion, Gammel, Candy).

- CSS styling can be applied using the [style definition](/fusiontime/getting-started/style-definition) specifications.

- Charts created with FusionTime can be [exported](/fusiontime/getting-started/export-charts-fusiontime) into jpg, png, svg, and pdf formats.

- You can also use FusionTime from different technologies (angular, angular JS, react, vue, ember, jquery) using the existing FusionCharts wrappers.

- The charts created with FusionTime are responsive and work well on touch devices.
