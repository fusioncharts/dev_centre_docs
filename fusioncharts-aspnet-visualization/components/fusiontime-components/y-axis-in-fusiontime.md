---
title: Y-Axis | FusionCharts
description: Explore FusionTime's y-axis for ASP.NET, offering intuitive control over date ranges for dynamic data visualization. Learn more now!
heading: Y-Axis
---

A timeseries chart can have one or more Y-axes. The latter situation occurs when you need to build a multi-series or multivariate chart.

## A Y-axis in a timeseries chart looks as shown in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-y-axis.png" alt="Y-axis" width="700" height="420">

### Configure Y-axis

Use the `YAxes` object of the `timeSeries` instance of the `TimeSeriesChart` class to define a Y-axis. After that, use the following to configure the axes.

- Set the aggregation function using the `Aggregation` property of `YAxes` object. which accepts enum of type `TimeSeriesAggregation.Function`. `TimeSeriesAggregation.Function` can accept one of the enum values from `SUM`, `COUNT`, `MAX`, `MIN`, `LAST`, `FIRST`, `AVERAGE`, `VARIANCE` or `STDDEV`.

- Set the axis type using the `AxisType` property of the `YAxes` object, which accepts enum of type `TimeSeriesYAxisObject.YAxisType`. `TimeSeriesYAxisObject.YAxisType` can accept the following enum values:

  - `LINEAR`
  - `LOG`

- Set a prefix for the values on the Y-axis using the `Prefix` property of the `Format` object. `Prefix` accepts a string type parameter.

- Set a suffix for the values on the Y-axis using the `Suffix` property of the `Format` object. `Suffix` accepts a string type parameter.

- Set the maximum value for the Y-axis using the double type `Max` property of the `YAxes` object.

- Set the minimum value for the Y-axis using the double type `Min` property of the `YAxes` object.

- Set the plot type using the `PlotType` property of the `YAxes` object, which accepts enum of type `TimeSeriesYAxisObject.SeriesPlotType`. `TimeSeriesYAxisObject.SeriesPlotType` can accept the enum values from `LINE`, `COLUMN`, `AREA`, `SPLINE`, `STEPLINE`, `OHLC` and `CANDLESTICK`.

- Set the Y-axis title using the string type `Title` property of the `YAxes` object.

- Finally, to set the plot type for the chart, use the `Add()` method of the `Plot` object.

Refer to the code given below:

```csharp
/* add different configuration */
timeSeries.YAxes.Aggregation = TimeSeriesAggregation.Function.COUNT;
timeSeries.YAxes.AxisType = TimeSeriesYAxisObject.YAxisType.LINEAR;
timeSeries.YAxes.Format.Prefix = "$";
timeSeries.YAxes.Format.Suffix = "K";
timeSeries.YAxes.Max = 30000;
timeSeries.YAxes.Min = 10000;
timeSeries.YAxes.PlotType = TimeSeriesYAxisObject.SeriesPlotType.AREA;
timeSeries.YAxes.Title = "Total Sales";
timeSeries.YAxes.Plot.Add("GDP", TimeSeriesYAxisObject.YAxisType.LOG, TimeSeriesAggregation.Function.LAST);
```

The chart will look as shown below:

{% embed_ftChart online-sales-multi-variate %}

### Add More Plots

If you want to add another plot to a chart (for multi-series charts), overload the `Add()` method of the `Plot` object. You can overload the `Add()` method in four different ways, as given below:

- `Plot.Add(string param)` - The `Add()` method accepts the name of the plot as a string.

- `Plot.Add(string param,TimeSeriesYAxisObject.YAxisType.LOG param)` - The `Add()` method accepts the name of the plot as a string and the type of the Y-axis as the `TimeSeriesYAxisObject.YAxisType` enum. The enum can have the following values:

  - `LINEAR`

  - `LOG`

- Plot.Add(string param,TimeSeriesAggregation.Function.LAST param) - The `Add()` method accepts the name of the plot as a string and the aggregation function applied to the Y-axis as the `TimeSeriesAggregation.Function` enum. The enum can accept one of the values from `SUM`, `COUNT`, `MAX`, `MIN`, `LAST`, `FIRST`, `AVERAGE`, `VARIANCE` or `STDDEV`.

- `Plot.Add(string param,TimeSeriesYAxisObject.YAxisType.LOG param,TimeSeriesAggregation.Function.LAST param)` - The `Add()` method accepts the name of the plot as a string, the type of the Y-axis as the `TimeSeriesYAxisObject.YAxisType` enum, and the aggregation function applied to the Y-axis as the `TimeSeriesAggregation.Function` enum.

You can overload the `Add()` method in one of the ways given above, to add more than one Y-axis to a timeseries chart.

Refer to the code below:

```csharp
/* add another plot */
/* required for Multiple Data plots */
timeSeries.YAxes.Plot.Add("Population", TimeSeriesYAxisObject.YAxisType.LOG, TimeSeriesAggregation.Function.LAST);
```

The chart will look as shown below:

{% embed_ftChart online-sales-multi-series %}

### Add a Y-axis

If you want to build a multivariate chart, you will need to create more than one Y-axis. Once you are done creating the first Y-axis, use the `AddNew()` method of the `YAxes` object to create a second Y-axis. You can repeat this process as many times as you need to.

Refer to the code given below:

```csharp
/* add another YAxis */
/* this is for Multivariate chart */
timeSeries.YAxes.AddNew();
```

The chart will look as shown below:

{% embed_ftChart online-sales-multi-variate %}
