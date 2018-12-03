---
title: Tooltip | FusionCharts
description: This article defines the tooltips.
heading: Tooltips
---

A tooltip is a rectangular box that displays additional information on a particular data plot when you hover on the data plot. In FusionTime, charts have consolidated tooltips which display the detail of the hovered element.

<Annotated Image>

The above image is of a single series chart which displays valuable information in tooltips, such as: 

* **Date**
* **Column** name
* **Value** of that particular data plot.

Now, let's create a multi-series chart which will compare online sales of SuperStore in United States of America and India.

{% embed_ftChartData online-sales-multi-series %}

In the given example, you can see a chart with multipe data plots - displaying the sales figures of a company in India and the US. Hover the mouse pointer anywhere in the canvas and you will see a consolidated tooltip showing the names and values for both data plots at that point. 

By default, the tooltip is displayed. To hide the tooltip set the `showToolTip` attribute to `0`.

Refer to the code below:

```
{
    chart: { },
    "showToolTip": "0", // Disables the Tooltip
    caption: {
        text: 'Online Sales of a SuperStore in India & the US'
    }
}
```

### Tooltips in Time Markers

Tooltips help you gain additional, context-sensitive information from time markers. When you hover the mouse pointer over a time marker, a tooltip appears with information on the value of the marker, as well as a description about the data. When a time marker represents a range, the corresponding tooltip displays information on the range instead.

IMAGE

### Tooltips in Data Markers

Tooltips can provide additional information about the data represented by data markers. When you hover the mouse pointer over a data marker, a tooltip can appear and display the data value, as well as a small description.

IMAGE