---
title: Change default aggregation | FusionCharts
description: This article outlines the steps to be executed for changing the default aggregation.
heading: Change default aggregation
---

FusionTime lets you build charts with large datasets. However, when a dataset contains too many records, the resulting chart may not help viewers comprehend the data easily. For instance, consider a scenario, where you have to plot 1,000,000 data points in a line, area, or column chart, on a canvas having dimensions of 500 x 400 pixels. In this case, the chart will try to accommodate all the data points within the available pixels, which will make the chart unreadable.

This is where data aggregation comes in handy. By default, FusionTime automatically groups the data for a specific period of time (For example, 2 months), based on the available pixel of the chart canvas. This automatic grouping of data is known as **data** **binning**. By default, once the data is grouped, FusionTime applies the `average` function to aggregate the data and display it in the chart.

The data bin is always built as per the available pixels in the chart and cannot be configured.

A chart with default data aggregation is shown below:

{% embed_ftChart online-sales-single-series %}

In the above chart, note that when you hover on the data plots a tooltip appears which shows the data bin for a specific period of time and the average of the values within that data bin. In this case, the data bin is for 15 days. So the chart shows the average sales value for 15 days.

However, you can change the aggregate function from `average` to any of the following:

- Sum

- Average

- Count

- Min

- Max

- First

- Last

To change the aggregate function refer to the code below:

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    yAxis: [
      {
        plot: {
          value: "XYZ",
          aggregation: "Sum"
        }
      }
    ]
  }
});
```

In the above code we have:

- Set the value of the `aggregation` property as `sum` under the `plot` object.
