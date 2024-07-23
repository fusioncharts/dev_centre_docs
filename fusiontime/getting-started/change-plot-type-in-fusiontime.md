---
title: Change Plot Type | FusionCharts
description: Find versatile plot types & enhance visualization. Transform your charts effortlessly with FusionCharts. Click here to explore more such tactics.
heading: Change Plot Type
---

## The chart is shown below:

Plot refers to a line in the line chart, a column in the column chart or an area in the area chart.

In this article, we'll see how to change the [plot types](/fusiontime/fusiontime-component/plot-types-in-fusiontime) of the chart.

Let's create a time series chart using a **line** as the data plot showcasing online sales of SuperStore in the United States of America.

The chart is shown below:

{% embed_ftChart online-sales-single-series %}

To change the plot type of the above chart change the code below in the `index.html` file:

```javascript
let fusionDataStore = new FusionCharts.DataStore();
let fusionTable = fusionDataStore.createDataTable(data, schema);

new FusionCharts({
  type: "timeseries",
  renderAt: "container",
  width: "95%",
  height: 650,
  dataSource: {
    data: fusionTable,
    chart: {},
    caption: {
      text: "Online Sales of a SuperStore in the US"
    },
    yaxis: {
      plot: {
        value: "Sales",
        type: "column"
      }
    }
  }
}).render();
```

In the above code:

- Create `plot` object for `y-axis` in `dataSource`.

- Set the `type` attribute to `column`.

The chart with the updated plot type is shown below:

{% embed_ftChart online-sales-single-series-column-data-plot %}

Click [here](https://jsfiddle.net/fusioncharts/dw4ntp5a/) to edit the above chart.

FusionTime includes several options to update the plot type of the chart. To know more, click [here](/fusiontime/fusiontime-component/plot-types-in-fusiontime).
