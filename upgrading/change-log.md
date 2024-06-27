---
title: Changelog | FusionCharts
description: This section discusses the change in features and attributes with the latest released version.
heading: Version 4.0.x
---

<h2 class="sub-heading">Version 4.0.0</h2>

<p class="release-date">27th June, 2024</p>

<h4>New Features</h4>

- An attribute called `autoUpdateStartEndDateColumn` was introduced. This attribute updates the actual start date / actual end date columns in the `Gantt` Chart when taskbars are getting dragged.
- An attribute called `allowTaskbarOverlap` was introduced. When this attribute is set to 1, it allows the dragging of the taskbar over adjacent taskbars in the `Gantt` Chart.
- The attributes `marginLeft`, `marginRight`, `marginTop`, and `marginBottom` were introduced in the milestone option of `Gantt charts`. These attributes are used to position the milestone per the numeric value provided.

<h4>Improvements</h4>

- FusionCharts version 4.0.0 improved the behavior of **taskbar dragging** in `Gantt` charts. Now you will also drag the connectors along with the taskbar, and they will stay connected until the drag ends.
- FusionCharts version 4.0.0 introduced the **increase/decrease width functionality** for taskbars. Whenever the taskbar hovers, the stretch icon at both ends of the taskbar can be used to increase/decrease the same width. An arrow icon was added at the end of taskbars for increasing/decreasing width.
- FusionCharts version 4.0.0 improved the behavior of **taskbar dragging** in the case of parent and child taskbars. The parent taskbars will auto-extend in case the child taskbars are dragged.
- Upgraded framework integrations for `React`, `Angular`, `Vue` & `Svelte`.
  - `React FusionCharts` upgraded to v18. `React` upgraded to version 18 in package.json file.
  - `Angular FusionCharts` upgraded to v17. `Angular` packages version upgraded to 17 in package.json folder. Typescript packages are also upgraded to support angular 17.
  - `Vue FusionCharts` upgraded to v3. `Vue` package already had v3, only a minor version upgrade was done in package.json file.
  - `Svelte FusionCharts` upgraded to v4. `Svelte` was upgraded to the latest version 4 in package.json file. The bundler used in the svelte package was rollup which had some old APIs, they were replaced with the new APIs.
- FusionCharts ASP.Net has been updated to support **.NET versions** (6.0, 7.0, and 8.0).
- FusionCharts 4.0.0 enhanced **product stability** and **security** through Automation Repository Upgrade & Optimization.  

<h4>Fixes</h4>

- Resolved the issue of `plotHighlightEffect` attribute resetting all the dataset-level attributes when series were shown/hidden using legends.
- Fixed the issue of `resizeTo` method not working when the chart was rendered using XML data format.
- Fixed the issue where charts were not exported on **iPad** with **Safari browser**.
- Fixed the issue where taskbar drags position update event `dataplotdragmove` was printing duplicate values in `Gantt` charts.
- Resolved the issue when the tooltip was not visible on the delayed part of taskbars in `Gantt` charts.
- Resolved the visual bug with data labels and their background when `transposeAxis` was enabled for multi-series bar charts. Improved the visual clarity of `Multi-series Bar` charts by addressing `transposeAxis` attribute bug.
- Resolved an issue where inline styles used for `Pie` chart watermarks and tooltips triggered CSP errors, potentially hindering chart display.
- Fixed the bug where the scroll bar position was getting reset to the initial position, when `setChartData` is used to update the chart’s data.
- Handled the case of negative values for radial bar in `Radial Bar` charts. For negative values, the radial bar will stick to the 0 position.
- Fixed the issue where `React FusionCharts` wrapper was not working in strict mode. In `react` wrapper, if the chart is already rendered then the `dispose` method is used to delete the instance to avoid render callback in loop.
- Resolved the issue where data values were not visible for plots in the `Bar2D` chart when the bar width value was very low.
- Optimized user experience with `Gauge` charts through seamless resizing.


