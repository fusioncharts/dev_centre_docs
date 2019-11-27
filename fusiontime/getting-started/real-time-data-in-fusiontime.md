---
title: Real-Time Dynamic Data Update | FusionCharts
description: This article defines how to use time-series charts to display dynamically updating time series data.
heading: Real-Time Data Update
---

FusionTime v2.0 onwards, you can use time-series charts to display dynamically updating time series data.

In this article, we will see how chart data can be updated dynamically in FusionTime, using the API `FusionCharts#feedData`. This API periodically updates the chart with fresh data. With the addition of new data, a concern of the total time period which is being shown in the chart often becomes a concern. To mitigate it, an optional chart level control called 'timeSpread' has also been introduced to the time-series charts.

A real-time chart looks as shown below:

LIVE CHART

Click [here] to edit the above chart.

The initial data for the above chart is shown below:

[[Table]]

Now, let's create the schema for the above table.

[[Schema]]

To define the schema, create a `schema.json` file and copy the following code:

```

```

### Dynamically Update Chart Data

To automatically update chart data, invoke the `FusionCharts#feedData` API. This API accepts an array of rows of data as an optional parameter. Note that if you do not provide an array of rows, or if the array of rows is empty, the invocation will be ignored by the chart.

Each row of data is interpreted using the schema that you provided while creating the chart. If the rows you provide now do not match the schema, the chart may behave in an unexpected manner.

> You cannot alter the schema using the `FusionCharts#feedData` API.

Refer to the code given below:

```javascript
type Row = Array<number | string>;
declare class FusionCharts {
  feedData(data?: Array<Row>): FusionCharts;
}
```

In the above code, you can see how `feedData` has been used to add new rows to the datatable. This addition will happen after the time interval you declare. When you render this chart, you will see it asynchronously render the new data values in the plot.The axes, range selectors, time navigator, legends, etc., will also be updated.

### Configure Time Spread

When there are a large number of data values constantly being fed into a chart, it can slow down browser performance, or even cause a browser crash. To avoid this, use the optional chart level attribute `timeSpread`, to specify the total time interval you want to display in the chart at a given instant.

Define `timeSpread` in terms of `unit`, which accepts one of the following values:

- `millisecond`

- `second`

- `minute`

- `hour`

- `day`

- `month`

- `year`

You can also assign a `multiplier` (default value: 1) to the time period. Note that you can omit the `multiplier` if you want, but the `unit` is mandatory. If you skip the `unit`, then the `timeSpread` attribute will be ignored.

If you provide an invalid `timespread`, or none at all, then the chart will look for a time period in the data you have already provided to the chart. Any time period in the data will automatically be used as the default value of `timeSpread`. If there is no data in the chart, then the `timeSpread` will be set to accommodate four bins of time in the time navigator.

Refer to the following code:

```javascript
type timeUnit =
  | "millisecond"
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "month"
  | "year";

interface FCTSDataSource {
  chart?: {
    timeSpread?: {
      unit: timeUnit,
      multiplier?: number
    }
  };
}
```

> If the `timeSpread` selected from data already present in the chart is so small that less than four bins can be accommodated in it, then it will be restricted to a value which allows four bins to be displayed.
