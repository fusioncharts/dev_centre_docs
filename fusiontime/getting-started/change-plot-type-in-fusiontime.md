---
title: Change Plot Type | FusionCharts
description: This article outlines the steps to change the plot type.
heading: Change Plot Type
---

Plot represents a dataset which displays the relationship between two or more variables of a chart. Plot refers to a line in a line chart, a column in the column chart or an area in the area chart. 

In this article, we'll see how to change the plot types of the chart.

Let's create a time series chart using a **line** as the data plot showcasing online sales of SuperStore in the United States of America.

The chart is shown below:

{% embed_ftChart online-sales-single-series %}

To change the plot type of the above chart change the code below in the `index.html` file:

```
const dataStore = new FusionCharts.DataStore(data, schema);

new FusionCharts({
    type: 'timeseries',
	renderAt: 'container',
	width: "95%",
	height: 650,
	dataSource: {
        data: dataStore.getDataTable(),
        chart: {
        },
        caption: {
          text: 'Online Sales of a SuperStore in the US'
        },
        yAxis: [{
            columnName: 'Sales',
            plotType: 'column'
        }]
    }
}).render()
```

In the above code:

* Create an object for `y-axis` in `dataSource`.

* Set the `plotType` attribute to `column`.

The chart with the updated plot type is shown below:

{% embed_ftChart online-sales-single-series-column-data-plot %}

FusionTime includes several options to update the plot type of the chart. To know more, click [here]({% site.baseurl %}/fusiontime/fusiontime-component/plot-types-in-fusiontime).