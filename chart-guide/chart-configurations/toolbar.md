---
title: Manage UI Action Elements using Toolbar | FusionCharts
description: The advantage of toolbar is it manages all the UI action elements centrally, providing a uniform look and a better meaningful and logical grouping.
heading: Toolbar
breadcrumb: [["Home", "/"], ["Toolbar"]]
---

FusionCharts Suite XT introduces the toolbar, starting from version 3.11.0. The advantage of having a toolbar is that it manages all the UI action elements (context menus, checkboxes, buttons) centrally. This provides a clean, uniform look and a better, more meaningful and logical grouping.

The new toolbar has changed the way certain chart elements are implemented. The table below summarizes these changes:


Chart Type|Component|Previous Implementation|Current Implementation|
-|-|-|-
Multi-axis line chart|Checkboxes to show/hide axes lines|HTML checkboxes|Pure SVG exportable checkboxes|
Dragable column, line, and area charts|Menu to change y-axis limits|Menu placed at the bottom-left side of the chart|Context menu|
Drag-node chart|Menu to add/edit/delete nodes, labels, and connectors|Menu placed at the bottom-left side of the chart|Context menu|
Real-time charts|Message logger|Menu placed at the bottom-left side of the chart|Context menu|
Real-time charts|Real-time menu|Menu placed at the bottom-left side of the chart|Context menu|



The samples shown below showcase the difference between the current and the previous implementations.

The drag-node chart below shows the **current implementation of the toolbar**:

<chart>

The image below shows the **previous implementation**:

<image>

The multi-axis line chart below shows the **current implementation of the checkboxes** used to show/hide the axes lines. This implementation uses pure SVG exportable checkboxes while the previous implementation used HTML checkboxes.

<chart>

The image below shows the **previous implementation**:

<image>

The difference between the current and previous implementation of the checkboxes in the multi-axis line chart, is that you can configure the current checkboxes to set a custom checkbox color.

To do so, specify the hex code of the checkbox color using the `checkBoxColor` attribute. 

Refer to the code below:

```

{
    "chart": {
       "checkBoxColor": "#3333cc"
    },

 ```

The chart will look like as shown below:

<chart>

