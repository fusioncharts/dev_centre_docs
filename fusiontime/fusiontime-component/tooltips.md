---
title: Tooltip | FusionCharts
description: This article defines the tooltips.
heading: Tooltips
---

A tooltip is a rectangular box that displays additional information of a particular data plot when you hover on the data plot. In FusionTime, charts have consolidated tooltips which display the detail of the hovered element.

<img src="{% site.BASE_URL %}/images/fusiontime-component-tooltip.png" alt="Tooltip" width="700" height="420">

The above image is of a tooltip which displays infomration of the data plot, such as: 

* **Date**
* **Column** name
* **Value** of that particular data plot.

Now, let's create a chart with multiple plots which will compare online sales of SuperStore in the US and India.

{% embed_ftChart online-sales-multi-series %}

In the given example, hover on the data plot and you will see a consolidated tooltip showing the names and values for both data plots at that point of time. 

By default, the tooltip is displayed. To hide the tooltip set the `showToolTip` attribute to `0`.

See it live! Click [here](https://jsfiddle.net/fusioncharts/34k6zde5/).

Refer to the code below:

```
{
      data: dataStore,
      chart: {
    showTooltip: "0"
    },
    caption: {
        text: 'Online Sales of a SuperStore in the US'
    },
    yAxis: {
        "plot": {
            "value": "Sales",
            "type": "line"
        },
        "referenceLine": [{
            "label": "Daily Target",
            "value": 300,
 				}],
    }
    }
```

### Tooltips in a multivariate chart 

In FusionTime, you can have different canvases for different measures visualized in a multivariate chart. When you hover on a data plot, by default tooltips get displayed in all the canvases of the chart. Refer to the image below:

<multivariate tooltip image>

To disable multiple tooltips, set the `multiCanvasTooltip` attribute to `0`.

See it live! Click [here](https://jsfiddle.net/fusioncharts/6L5tf0x4/).

Refer to the code below:

```
{
      data: dataStore,
      chart:{
      showTooltip: "0"
      },
      yAxis: [{
          plot: 'Sales',
          title: 'Sales',
          referenceLine: [{
            label: 'Controlled Temperature',
            value: '6'
          }]
        },
        {
          plot: 'Quantity',
          title: 'Quantity)',
          referenceLine: [{
            label: 'Controlled Carbon mono-oxide',
            value: '3'

          }]
        }
      ],
}
```

### Tooltips in Time Markers

Tooltips help you gain additional, context-sensitive information from [time markers](/fusiontime/fusiontime-component/time-marker). When you hover the mouse pointer over a time marker, a tooltip appears with information on the value of the marker, as well as a description about the data. When a time marker represents a range, the corresponding tooltip displays information on the range instead.

<img src="{% site.BASE_URL %}/images/fusiontime-component-time-marker-tooltip.png" alt="Time Marker Tooltip" width="700" height="420">

### Tooltips in Data Markers

Tooltips can provide additional information about the data represented by [data markers](/fusiontime/fusiontime-component/data-markers). When you hover the mouse pointer over a data marker, a tooltip can appear and display the data value, as well as a small description.

<img src="{% site.BASE_URL %}/images/fusiontime-component-data-marker-tooltip.png" alt="Data Marker Tooltip" width="700" height="420">


