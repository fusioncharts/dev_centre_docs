---
title: Data Aggregation & Binning | FusionCharts
description: This article outlines the steps to be executed for changing the default aggregation.
heading: Data Aggregation & Binning
---

FusionTime lets you build charts with large datasets. However, when a dataset contains too many records, the resulting chart may not help viewers comprehend the data easily. For instance, consider a scenario, where you have to plot 1,000,000 data points in a line, area, or column chart, on a canvas having dimensions of 500 x 400 pixels. In this case, the chart will try to accommodate all the data points within the available pixels, which will make the chart unreadable.

This is where data aggregation comes in handy. By default, FusionTime automatically groups the data for a specific period of time (For example, 2 months), based on the available pixel of the chart canvas. This automatic grouping of data is known as **data** **binning**. By default, once the data is grouped, FusionTime applies the `average` function to aggregate the data and display it in the chart.

## Change Default Aggregation

A chart with default data aggregation is shown below:

{% embed_ftChart online-sales-single-series %}

In the above chart, note that when you hover on the data plots a tooltip appears which shows the data bin for a specific period of time and the average of the values within that data bin. In this case, the data bin is for 10 days. So the chart shows the average sales value for 10 days.

However, you can change the aggregate function from `average` to any of the following:

- Sum
- Average
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

## Change Data Binning

The natural hierarchy of time aids in binning smaller units of time into larger units of time. For example, two bins, each of 12hr size can fall into one bin of 1 day (or 24 hours) bin. A user can zoom into 12hr bin and zoom out to 1-day bin.

The time series charts exploit this behavior of time to create data bins. Though it is suggested to follow the smartly suggested bins for each data, an enthusiastic developer can always modify this.

Take a look at the chart shown below:

{% embed_ftChart binning-sample-on-column-chart %}

You can see the data bins moving from {sequence of bins}
A developer can always modify this, by specifying the multipliers for each time unit in an array format. For example,
xAxis:

```json
{
    "binning": {
      "hour": [3, 6] //specify the array of valid multipliers
    }
}
```

The above multipliers for “hour” will limit the binning for “hour” to only 3 hrs and 6 hrs. For the time units where nothing is specified, the smartly determined bins will apply. With the above multipliers for “hour”, the multipliers for other time units (month, day, in this case), will be smartly determined. For example, in this case, when the multipliers of ‘day’ are not specified, the default choices of day binning, like {sequence of day binning options in this example} will prevail.
For situations where bins for specific time units are not required, one can simply provide an empty array against them. Consider,
xAxis:

```json
{
    "binning": {
      "month": [],
      "day": [],
      "hour": [3, 6],
      "minute": []
    }
}
```

Here, the empty arrays have been specified for `month`, `day` and `minute`. So, no binning will happen for these time units, and likewise, such time units will not be considered for data binning. A side result of the above json config is that the binning has been restricted by 6hrs on the higher side and 3hrs on the lower side, so maximum and minimum binning has applied.
