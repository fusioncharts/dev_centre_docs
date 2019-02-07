---
title: Y-Axis | FusionCharts
description: This article defines the y-axis.
heading: Y-Axis
---

In FusionTime, the `yAxis` object can be specified within the `dataSource` object of the FusionCharts constructor.

It will accept inputs in two forms - an array of `yAxis` objects or an array of Strings.

An example of array of `yAxis` objects is shown in the code below:

```json
yAxis: [{
    plot: {
        value: 'Sales',
    },
}, {
    plot: {
        value: 'Shipping Cost',
    }
}],
```

Refer to the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-y-axis.png" alt="Y-axis" width="700" height="420">

An array of strings is applicable when you want to provide different configurations for multiple canvases. Refer to the code below:

```json
"yAxis": [{
    "plot": ["Sales", "Shipping Cost"]
}]
```

Refer to the chart below:

{% embed_ftChart online-sales-multi-variate %}

To configure the y-axis you can:

- Set the column name using the `value` attribute under the `plot` object to specify the column which is mapped to the y-axis.
- Set the y-axis title using the `title` attribute under the `yAxis` object.
- Set the suffix and prefix of the y-axis values using the `suffix` and `prefix` attributes under the `format` object within the `yAxis` object.

Refer to the code below:

```json
yAxis: [{
    plot: {
        "value": "Sales",
    },
    "title": "Total Sales",
}, {
    format: {
        "prefix": "$",
    }
}],
```

## Style Definition

You can add CSS styling to set the cosmetic properties of y-axis. To set the styling, instead of creating a separate CSS file, you can define the styling using `StyleDefinition` object.

Now, let's define the `styleDefinition` object and set the **font color** in an object. The code is given below:

```json
styleDefinition: {
    "colorstyle": {
        "fill": "#ff0000"
    }
}
```

Once the `StyleDefinition` is defined, you can refer it for the various components using `colorstyle` attribute.

The syntax to set the `StyleDefintion` to the y-axis label is given below:

```json
{
  "yAxis": [
    {
      "plot": "Sales",
      "title": "Sales",
      "style": {
        "title": "colorstyle"
      }
    }
  ]
}
```

In the above code, `colorStyle` object is called to set the color of the caption.

The chart after applying the above attributes will look like as shown below:

{% embed_ftChart online-sales-single-series-style-definition-y-axis %}

In the above sample, **font color** of the y-axis label has been changed.

The code to update the cosmetic properties of other elements in **y-axis** is given below:

```json
{
  "yAxis": [
    {
      "title": "Sales",
      "style": {
        "ticks": {
          "major": Style,
          "minor": Style,
          "context": Style
        },
        "text": {
          "major": Style,
          "minor": Style,
          "context": Style
        },
        "line": Style,
        "gridLine": Style,
        "gridBand": Style
      }
    }
  ]
}
```

# Y-Axis

A timeseries chart can have one or more Y-axes. The latter situation occurs when you need to build a multi-series or multivariate chart.

A Y-axis in a timeseries chart looks as shown in the image below:

<<Screenshot>>

### Configure Y-axis

Use the `YAxes` object of the `timeSeries` instance of the `TimeSeriesChart` class to define a Y-axis. After that, use the following to configure the axes.

- Set the aggregation function using the `Aggregation` property of `YAxes` object. which accepts enum of type `TimeSeriesAggregation.Function`. `TimeSeriesAggregation.Function` can accept one of the enum values listed <<here>>.

- Set the axis type using the `AxisType` property of the `YAxes` object, which accepts enum of type `TimeSeriesYAxisObject.YAxisType`. `TimeSeriesYAxisObject.YAxisType` can accept the following enum values:

  - LINEAR

  - LOG

- Set a prefix for the values on the Y-axis using the `Prefix()` method of the `Format` object. `Prefix()` accepts a string type parameter.

- Set a suffix for the values on the Y-axis using the `Suffix()` method of the `Format` object. `Suffix()` accepts a string type parameter.

- Set the maximum value for the Y-axis using the double type `Max` property of the `YAxes` object.

- Set the minimum value for the Y-axis using the double type `Min` property of the `YAxes` object.

- Set the plot type using the `PlotType` property of the `YAxes` object, which accepts enum of type `TimeSeriesYAxisObject.SeriesPlotType`. `TimeSeriesYAxisObject.SeriesPlotType` can accept the enum values mentioned <<here>>.

- Set the Y-axis title using the string type `Title` property of the `YAxes` object.

- Finally, to set the plot type for the chart, use the `Add()` method of the `Plot` object.

Refer to the code given below:

```

/* add different configuration */
timeSeries.YAxes.Aggregation = TimeSeriesAggregation.Function.COUNT;
timeSeries.YAxes.AxisType = TimeSeriesYAxisObject.YAxisType.LINEAR;
timeSeries.YAxes.Format.Prefix = "$";
timeSeries.YAxes.Format.Suffix = "K";
timeSeries.YAxes.Max = 30000;
timeSeries.YAxes.Min = 10000;
timeSeries.YAxes.PlotType = TimeSeriesYAxisObject.SeriesPlotType.AREA;
timeSeries.YAxes.Title = "Total Sales";
timeSeries.YAxes.Plot.Add("GDP", TimeSeriesYAxisObject.YAxisType.LOG, TimeSeriesAggregation.Function.LAST);|

```

The chart will look as shown below:

> > Live chart>>

### Add More Plots

If you want to add another plot to a chart (for multi-series charts), overload the `Add()` method of the `Plot` object. You can overload the `Add()` method in four different ways, as given below:

- `Plot.Add(string param)` - The `Add()` method accepts the name of the plot as a string.

- `Plot.Add(string param,TimeSeriesYAxisObject.YAxisType.LOG param)` - The `Add()` method accepts the name of the plot as a string and the type of the Y-axis as the `TimeSeriesYAxisObject.YAxisType` enum. The enum can have the following values:

  - `LINEAR`

  - `LOG`

- Plot.Add(string param,TimeSeriesAggregation.Function.LAST param) - The `Add()` method accepts the name of the plot as a string and the aggregation function applied to the Y-axis as the `TimeSeriesAggregation.Function` enum. The enum can accept one of the values listed <<here>>.

- `Plot.Add(string param,TimeSeriesYAxisObject.YAxisType.LOG param,TimeSeriesAggregation.Function.LAST param)` - The `Add()` method accepts the name of the plot as a string, the type of the Y-axis as the `TimeSeriesYAxisObject.YAxisType` enum, and the aggregation function applied to the Y-axis as the `TimeSeriesAggregation.Function` enum.

You can overload the `Add()` method in one of the ways given above, to add more than one Y-axis to a timeseries chart.

Refer to the code below:

```
/* add another plot */
/* required for Multiple Data plots */
timeSeries.YAxes.Plot.Add("Population", TimeSeriesYAxisObject.YAxisType.LOG, TimeSeriesAggregation.Function.LAST);|
```

The chart will look as shown below:

> > Live chart>>

### Add a Y-axis

If you want to build a multivariate chart, you will need to create more than one Y-axis. Once you are done creating the first Y-axis, use the `AddAnotherYAxis()` method of the `YAxes` object to create a second Y-axis. You can repeat this process as many times as you need to.

Refer to the code given below:

```
/* add another YAxis */
/* this is for Multivariate chart */
timeSeries.YAxes.AddAnotherYAxis();|
```

The chart will look as shown below:

> > Live chart>>
