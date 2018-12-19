---
title: Data Plot | FusionCharts
description: This article outlines the steps of how to configure the data plots.
heading: Data Plot
---

Data plot refers to the columns of the column chart, lines in a line chart, pie/doughnut slices in a pie/doughnut chart. You can enhance the way your data plot looks using colors, gradients and hover effects.

## Customize Data Plots

In FusionCharts.NET, you can customize the data plots in the following ways with the help of different instance methods of the `ValueFormatting` object (which accepts a string argument) of `Series` object under the `Data` object, which is in turn under the `visualizationObj` object:

### Set Transparency of Plot

Set the transparency of the data plot between `0` (transparent) and `100` (opaque) using the `Alpha` properties. Refer to the code given below:

```
visualisationObj.Data.Series.ValueFormatting("C#").Alpha(50);
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-plot-transparency-example-1.js %}

### Color Individual Data Plots

Set the color of the individual data plots as hex code using the `Color` property. Refer to the code given below:

```
visualisationObj.Data.Series.ValueFormatting("C#").Color(50);
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-plot-color-example-2.js %}

### Dashed data Plot Border

THe `Dashed` property is used when you want the border of the data plot to be appeared as dashed. This is particularly useful when you want to highlight a data. Refer to the code given below:

```
visualisationObj.Data.Series.ValueFormatting("C#").Dashed(true);
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-plot-dashed-example-3.js %}

### Show/Hide Individual value

To hide the individual plot value, set the value of the `ShowValue` property to `false`. Refer to the code given below:

```
visualisationObj.Data.Series.ValueFormatting("C#").ShowValue(false);
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-plot-showhide-example-4.js %}

### Link Values to External Resources

To link a data plot values to an external resource, set the value of the `Link` properties to the link of the resource. Refer to the code given below:

```
visualisationObj.Data.Series.ValueFormatting("C#").Link("https://www.fusioncharts.com/");
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-plot-value-link-example-5.js %}

### Set the Display Value

### Set the Tooltext

### Data Value Position

If you've opted to show data values on the chart, `ValuePosition` property lets you adjust the vertical alignment of data values with respect to dataplots. By default, this attribute is set to AUTO mode in which the alignment of each data value is determined automatically based on the position of each plot point. In ABOVE mode, data values are displayed above the plot points unless a plot point is too close to the upper edge of the canvas while in BELOW mode, data values are displayed below the plot points unless a plot point is too close to the lower edge of the canvas.

Refer to the code given below:

```
visualisationObj.Values.Position = ValueFormat.ValuePosition.AUTO;
```

## Conditional Data Plot Formatting

