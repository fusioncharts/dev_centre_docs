---
title: Tooltip | FusionCharts
description: This article outlines the steps of how to configure the tooltip
heading: Tooltip
---

A tooltip is a small box that pops up when you hover the mouse pointer over a particular data point. It displays context-sensitive information about the data point, which can include the name of the data series that the plot belongs to and it's value in whole number/percentage.

In the image given below, you can see a tooltip labeled:

<<Image>>

## Customize Tooltips

You can customize tooltips by using different properties of the `ToolTip` object under the `visualizationObj` object.

### Show/Hide Tooltips

To hide tooltips, set the value of the `Show` properties to `false`. Refer to the code given below:

```
visualisationObj.ToolTip.Show = false;|

```

### Customize Background Color

Use the hex code type `BGColor` properties to set the background color for tooltips. Refer to the code given below:

```
visualisationObj.ToolTip.BGColor = "#000000";|

```

### Customize Border Color

Use the hex code type `BorderColor` properties to set the border color for tooltips. Refer to the code given below:

```
visualisationObj.ToolTip.BorderColor = "#00ff00";|

```

### Customize Separator Character

Use the character type `SepChar` properties to set the separator character, which should be displayed in tooltips. This will come in handy when you want to display multiple data values in the tooltip. Refer to the code given below:

```
visualisationObj.ToolTip.SepChar = '/';|

```

### Display Tooltip Shadow

Use the Boolean type `ShowShadow` properties to set whether a shadow should be displayed below the tooltip. Refer to the code given below:

```
visualisationObj.ToolTip.ShowShadow = false;|

```

### Customize Tooltip Text Color

Use the hex code type `Color` properties to set the text color for tooltips. Refer to the code given below:

```
visualisationObj.ToolTip.Color = "ff00f0";|

```

### Set Border Transparency

Use the integer type `BorderAlpha` properties to set the transparency of the tooltip border. `BorderAlpha` accepts values between `0` (transparent) and `100` (opaque). Refer to the code given below:

```
visualisationObj.ToolTip.BorderAlpha = 1;|

```

### Set Tooltip Text

Use the string type `PlotToolText` properties to set the text for a tooltip. Refer to the code given below:

```
visualisationObj.ToolTip.PlotToolText = "column chart tooltip text";|

```

The chart is shown below:

<<Live Chart>>

