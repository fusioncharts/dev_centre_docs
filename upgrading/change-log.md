---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.15.x
---

<h2 class="sub-heading">Version 3.15.0-sr.1</h2>

<p class="release-date">6th December, 2019</p>

<h4>Fixes</h4>

- The APIs `getJSONData()` and `getXMLData()` now work properly in Sunburst charts. Previously, these were erroneously returning nested objects, such as subcategories along with categories.

<h2 class="sub-heading">Version 3.15.0</h2>

<p class="release-date">5th December, 2019</p>

<h4>New Features</h4>

- FusionCharts Version 3.15.0 introduces 3 new chart types - the Sankey Diagram, the Sunburst Chart, and the Chord Diagram. All of these charts belong to PowerCharts XT.

  - The [Sankey Diagram](/chart-guide/standard-charts/sankey-diagram) is a type of flow diagram, which depicts the flow of resources from one point to another.

  - The [Chord Diagram](/chart-guide/standard-charts/chord-diagram) is a graphical method of displaying flows or connections among relatable entities.

  - The [Sunburst Chart](/chart-guide/standard-charts/sunburst-chart) helps in visualizing relationships within hierarchical data. It displays hierarchy through a series of concentric rings, each of which corresponds to a different level within the hierarchy.

- Starting v3.15.0, [scrolling](/chart-guide/standard-charts/box-and-whisker-chart#specify-visibility-of-categories) can be enabled in the box and whisker chart. You can use `numVisiblePlot` attribute to control the number of plot points visible on the chart canvas.

- The `min`, `q1`, `median`, `q3`, `max`, `mean`, `median`, `md`, `sd`, and `outlier` of the [box and whisker](/chart-guide/standard-charts/box-and-whisker-chart#specifying-pre-processed-data) chart can now be directly mentioned within the data object. So from now on, box and whisker chart can be used in two ways:

  - Provide values and expect the chart to determine the summarised values.

  - Provide summarised values to a box and whisker plot.

<h4>Improvements</h4>

- In Treemap, the attribute `navigationBarHeight` can now be used to control the height of the navigation bar of the chart after drill down.

- The following improvements have been made to the **Box and Whisker** chart:

  - Data values (mean, MD, SD, QD, and outlier) can now be displayed along with icons using the following attributes:

    - `showMeanValue`

    - `showMDValue`

    - `showSDValue`

    - `showQDValue`

    - `showOutlierValue`

  When any of the above attributes are explicitly enabled, the chart will always display the corresponding value, even if the attributes `showValue` or `showValues` is disabled or enabled.

  - Position of the values (mean, MD, SD, QD, and outlier) can now be displayed either **above** or **below** the data plot using the following attributes:

    - `meanValuePosition`

    - `MDValuePosition`

    - `SDValuePosition`

    - `QDValuePosition`

    - `outlierValuePosition`

  - Custom border colors can now be assigned to the icons (for mean, MD, SD, QD, and outlier) using the following attributes:

    - `meanIconBorderColor`

    - `MDIconBorderColor`

    - `SDIconBorderColor`

    - `QDIconBorderColor`

    - `outlierIconBorderColor`

    Previously, only the default black border was visible for the above icons.

- In Radar Charts, long labels and the chart border were displaced when the `radarRadius` was explicitly mentioned and the chart was resized. This version onwards, the chart has been optimized for resizing, to ensure such issues no longer occur.

- In this version, 31 core map files have been updated. Click [here](/upgrading/maps-improvement/maps-improvement-3-15-0) to get the list of updated maps.

<h4>Fixes</h4>

- In a box and whisker chart, when hovered over an icon (for mean, MD, SD, QD, or outlier) where `meanIconShape`, `MDIconShape`, `SDIconShape`, `QDIconShape`, or `outlierIconShape` is set to **spoke**, the spokes now get highlighted properly.

- In Doughnut chart, the `$label` macro is now working properly for the `centerLabel` attribute.

- Pie and Doughnut charts now use canvas space more effectively.

- In Pie and Doughnut charts, the `tooltipBorderRadius` attribute now works properly.

- In a Gantt chart, when the width was set in percentage and the `scrollToDate` attribute was used, resizing the browser changed the start date in the chart. The issue has been fixed.

- The data object attribute, when set to `visible` for the events `legendItemRollover` and `legendItemRollout`, was showing incorrect value. The issue has been fixed.
