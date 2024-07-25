---
title: Changelog | FusionCharts
description: Upgrade to FusionCharts 3.19.x to enjoy enhanced features, bug fixes, and improved performance. Check out the detailed version history for all updates. Try now!
heading: Version 3.19.x
---

<h2 class="sub-heading">Version 3.19</h2>

<p class="release-date">2nd August, 2022</p>

<h4>New Features</h4>

-  FusionCharts Version 3.19 introduces the new Grouped Stacked Bar chart called the `MSStackedBar2D` chart. 
-  FusionCharts version 3.19 added the functionality to show the percentage value with the corresponding legend in the `Doughnut` and `Pie` chart type.
-  FusionCharts version 3.19 updated `Angular` integration to support `Angular` versions 11, 12, and 13.
-  FusionCharts version 3.19 updated `React` integration to support `React` versions 16, 17, and 18.

<h4>Improvements</h4>

-  FusionCharts version 3.19 improved the PDF encoding allowing users to save and export PDF files on a local server. Previously, saving a PDF resulted in a corrupted file.
-  Starting FusionCharts version 3.19, the FusionMap feature now shows the Indian region of Ladakh as a separate entity. 
-  FusionCharts version 3.19 allows users to define the legend container's width.
-  FusionCharts version 3.19 improved the readability of `Multiseries` charts by preventing plotted value series from overlapping when using the same or similar values.

<h4>Fixes</h4>

-  Starting FusionCharts version 3.19, the `addGroup` method renders annotations correctly. Previously, the `addGroup` method removed existing Annotations.
-  Starting FusionCharts version 3.19, Android applications no longer crash when exporting charts using the react-native plugin.
-  Spline charts display all datasets correctly even if dataset values contain zeros. Previously, the data plots did not display correctly if one dataset had zero as a value. 
-  Legend items in Timeseries charts are now working correctly. Previously, when toggled, the legend shifted positions upon mouse hovering. 
-  The `BoxandWhisker2D` chart shows all data correctly when exported in `XLSX` or `CSV` format. Previously, the exported chart displayed erroneous null values.
-  FusionCharts version 3.19 updated the license activation mechanism so that once the user adds the license activation code, the charts render without the watermark logo. 
-  All items in `Sankey` charts are visible and work as expected. Previously, some tooltips and values were not fully visible when there was a large difference in values.
-  Starting FusionCharts version 3.19, Hovering over legends displays all `plothighlighteffect` values as expected. Previously, if `plotHighlightEffect` is enabled, then any `plothighlighteffect` applied at the dataset level did not display upon hovering over the legends.
-  Exporting using the ASP.NET private export handler is working correctly. PDFs are readable and exported as expected. Previously, the exported PDF was not readable.
-  Using the `vline` attribute in Line charts now works correctly. Previously, if `vline` was set to true for the first data plot, the data plot did not display.
-  The `Treemap` chart renders correctly when using the `sliceanddice` algorithm. Previously, the chart did not render correctly if using the `sliceanddice` algorithm with `vertical` and `horizontal` slicing mode.
-  The `Dragnode` chart displays all tooltips correctly when hovering over any part of each node. Previously, some nodes did not display tooltips when hovered over.
-  FusionCharts version 3.19 loads and works as expected with the Zkoss library. Previously, loading the library resulted in an error message in the console.
