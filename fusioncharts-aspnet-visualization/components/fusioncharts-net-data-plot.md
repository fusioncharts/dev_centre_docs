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

To display a different value instead of the numeric value of the data plot, set the value of `DisplayValue` property to the text you want to display. Refer to the code given below:

```
visualisationObj.Data.Series.ValueFormatting("C#").DisplayValue("27000 Users");
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-plot-display-value-example-6.js %}

### Set the Tooltext

Set the tooltip text for the data plot as string to the `ToolText` properties. Refer to the code given below:

```
visualisationObj.Data.Series.ValueFormatting("C#").ToolText("Programming Language:C#");
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-plot-text-example-7.js %}

### Data Value Position

If you've opted to show data values on the chart, `ValuePosition` property lets you adjust the vertical alignment of data values with respect to dataplots. By default, this attribute is set to AUTO mode in which the alignment of each data value is determined automatically based on the position of each plot point. In ABOVE mode, data values are displayed above the plot points unless a plot point is too close to the upper edge of the canvas while in BELOW mode, data values are displayed below the plot points unless a plot point is too close to the lower edge of the canvas.

Refer to the code given below:

```
visualisationObj.Values.Position = ValueFormat.ValuePosition.AUTO;
```

## Conditional Data Plot Formatting

Using FusionCharts.NET, you can also apply conditional formatting to the data plots of the chart and also apply the above customizations at the same time.

Following is the list of operations which can be applied to the data plot of the chart.

Operation | Data Type | Query
--- | --- | ---
`Null` | String, Number, Date/Time | &lt;field&gt; is `null`
`Not Null` | String, Number, Date/Time| &lt;field&gt; is `not null`
`Equal` | String, Number, Date/Time | &lt;field&gt; `=` &lt;value&gt;
`Not Equal` | String, Number, Date/Time | &lt;field&gt; `!=` &lt;value&gt;
`Begins With` | String | &lt;field&gt; `begins with` &lt;value&gt;
`Contains` | String | &lt;field&gt; `contains` &lt;value&gt;
`Ends With` | String | &lt;field&gt; `ends with` &lt;value&gt;
`Greater` | Number, Date/Time | &lt;field&gt; `>` &lt;value&gt;
`Greater or Equal` | Number, Date/Time | &lt;field&gt; `>=` &lt;value&gt;
`Less` | Number, Date/Time | &lt;field&gt; `<` &lt;value&gt;
`Less or Equal` | Number, Date/Time | &lt;field&gt; `<=` &lt;value&gt;
`Between` | Number, Date/Time | &lt;field&gt; `is between` &lt;value1&gt; to &lt;value2&gt;

## Logical Operator

FusionCharts.NET supports logical operators which filters the data based on some condition. The supported logical operators are:

* `AND` &
* `OR` operators

`AND` operator is used when you want to combine multiple conditions like **Between**, **Equals** or **Greater** whereas `OR` operator is used when you want to combine multiple conditions like Between, **Equals** or **Greater**. The output filtered will be based on one of the conditions.

Refer to the code below:

```
visualisationObj.Data.Series.ValueFormatting("SeriesName" , "value >= 20000 and value < 40000").ShowValue(true);
```

In the above code two condtional formatting `>=` & `<` has been used and one logical operator `and` has been used. This filters the data of the chart and renders a chart with filtered data plot.