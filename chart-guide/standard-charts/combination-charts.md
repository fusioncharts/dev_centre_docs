---
title: Combination Charts | FusionCharts
description: Combination charts allow you to plot multiple datasets on the same chart. But an added advantage with using combination charts is that you can also plot multiple chart types on the same chart.
heading: Combination Charts
---

> These chart types belong to **FusionCharts XT**.

Combination charts are similar to [multi-series charts](/chart-guide/standard-charts/multi-series-charts). They allow you to plot multiple datasets on the same chart. But an added advantage of using combination charts is that you can also plot multiple chart types on the same chart. For example, you can show the column, line, and area chart on the same chart canvas.

> Combination charts can be rendered in either 2D or 3D, can have single or dual y-axes, and can be stacked or multi series in nature.

The combination charts available in the FusionCharts Suite XT are:

- 2D Single Y-axis Combination Chart

- 3D Single Y-axis Combination Chart

- 2D Dual Y-axis Combination Chart

- 3D Dual Y-axis Combination Chart

- Column 3D + Line Single Y-axis Chart

- Column 3D + Line Dual Y-axis Chart

- Stacked Column 2D Line Single Y-axis Chart

- Stacked Column 3D Line Single Y-axis Chart

- Stacked Column 2D Line Dual Y-axis Chart

- Stacked Column 3D Line Dual Y-axis Chart

- Stacked Area 2D Line Dual Y-axis Chart

- Multi Series Stacked Column 2D + Line Dual Y-axis Chart

## 2D Single Y-axis Combination Chart

Let's create our first combination chart to showcase the comparison of actual revenue, projected revenue and the profit earned for each month of the last year. All three metrics have been plotted using different chart types - the actual revenue earned is plotted using a column chart, the projected revenue is plotted using a line chart, and the profit earned is plotted using an area chart.

To create a single y-axis combination chart in 2D follow the steps below:

- In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the chart type using the `type` attribute. To render a multi-series combination chart, set `mscombi2D`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=mscombi2d) page of single y-axis combination chart.

A 2D combination chart with a single y-axis looks like this:

{% embed_all standard-charts-combination-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/4REJ5/) to edit the single y combination chart in 2D.

## 3D Single Y-axis Combination Chart

To render a single y-axis combination chart in 3D, change the value of the `type` attribute from `mscombi2d` to `mscombi3d`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=mscombi3d) page of 3D single y-axis combination chart.

A single y-axis combination chart in 3D looks like:

{% embed_all standard-charts-combination-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/rjy87gfy/) to edit the single y combination chart in 3D.

## 2D Dual Y-axis Combination Chart

Now, let's create a dual y-axis combination chart in 2D. For this, change the value of the `type` attribute from `mscombi2d` to `mscombidy2d`.

In this chart, we will show a comparison between the revenue, profit, and the profit percentage. The revenue and the profit will be shown as the amount in dollars, but the profit percentage will require a different unit - percentage. These cannot be plotted on a single y-axis. FusionCharts Suite XT allows you to have two y-axes, a primary y-axis, and a secondary y-axis if you have two data of two different numeric units to plot.

Therefore, we've plotted the amount in USD on the primary y-axis (the one on the left) and the profit % on the secondary y-axis (the one on the right).

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=mscombidy2d) page of 2D dual y-axis combination chart.

A 2D combination chart with dual y-axis looks like this:

{% embed_all standard-charts-combination-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/S52bN/) to edit the dual y-axis combination chart in 2D.

You can also build the above combination chart using Spline and Spline Area. To define any one of the dataset to spline or spline area, set the `renderAs` attribute to `spline` or `splineArea` respectively.

In the above sample, let's plot the **Profit %** in `spline` and **Profit** in `splineArea`. With these changes, the chart looks like this:

{% embed_all standard-charts-combination-chart-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/ocn63gv8/) to edit the dual y-axis combination chart with `spline` and `splineArea` as data plots.

## 3D Dual Y-axis Combination Chart

Now, let's create a dual y-axis combination chart in 3D. For this, change the value of the `type` attribute from `mscombidy2d` to `mscombidy3d`.

In this chart, we will show a comparison between the revenue, profit, and the profit percentage. The revenue and the profit will be shown as the amount in dollars, but the profit percentage will require a different unit - percentage. These cannot be plotted on a single y-axis. FusionCharts Suite XT allows you to have two y-axes, a primary y-axis, and a secondary y-axis if you have two data of two different numeric units to plot.

Therefore, we've plotted the amount in USD on the primary y-axis (the one on the left) and the profit % on the secondary y-axis (the one on the right).

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=mscombidy3d) page of a 3D dual y-axis combination chart.

A dual y-axis combination chart in 3D looks like as shown below:

{% embed_all standard-charts-combination-chart-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/vfLta47y/) to edit the dual y-axis combination chart in 3D.

## Column 3D + Line Single Y-axis Chart

Now, let's create a column and line multi-series chart in 3D. For this, set the value of the `type` attribute to `mscolumnline3d`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=mscolumnline3d) page of column 3D + line single y-axis chart.

The following chart will showcase the comparsion between the fixed cost, variable cost and the budgeted cost for a year. The fixed cost and the variable cost will be shown in column and the budgeted cost will be shown by a line.

The above multi-series series chart looks like:

{% embed_all standard-charts-combination-chart-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/s585beou/) to edit the column 3D + line single y-axis chart.

## Column 3D + Line Dual Y-axis Chart

To render a column 3D and line multi-series chart with dual y-axis, change the value of the `type` attribute from `mscolumnline3d` to `mscolumn3dlinedy`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=mscolumn3dlinedy) page of column 3D + line dual y-axis chart.

The chart looks like as shown below:

{% embed_all standard-charts-combination-chart-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/MSDV4/) to edit the column 3D + line dual y-axis chart.

## Stacked Column 2D Line Single Y-axis Chart

Now, let's create a combination of stacked column and a line chart in 2D. For this, set the value of `type` attribute to `stackedcolumn2dline`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedcolumn2dline) page of stacked column 2D line single y-axis chart.

The following chart will showcase the comparison between the revenue of food products and non-food products of Harry's SuperMart. With that profit for it will be shown using a line chart.

The above chart looks like:

{% embed_all standard-charts-combination-chart-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/4uz2u8yd/) to edit the stacked column 2D line single y-axis chart.

## Stacked Column 3D Line Single Y-axis Chart

To render the stacked column 3D and line chart with single y-axis, change the value of the `type` attribute from `stackedcolumn2dline` to `stackedcolumn3dline`. Rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedcolumn3dline) page of stacked column 2D line single y-axis chart.

The above stacked column 3D line looks like:

{% embed_all standard-charts-combination-chart-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/gu8jk5yj/) to edit the stacked column 3D line single y-axis chart.

## Stacked Column 2D Line Dual Y-axis Chart

To render the stacked column 2D and line chart with dual y-axis, change the value of the `type` attribute from `stackedcolumn3dline` to `stackedcolumn2dlinedy`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/stackedcolumn2dlinedy) page of the stacked column 2D line dual y-axis chart.

The stacked column 2D line dual y-axis chart looks like:

{% embed_all standard-charts-combination-chart-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/nkr4v76L/) to edit the stacked column 2D line dual y-axis chart.

## Stacked Column 3D Line Dual Y-axis Chart

To render the stacked column 3D and line chart with dual y-axis, change the value of the `type` attribute from `stackedcolumn2dlinedy` to `stackedcolumn3dlinedy`. Rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedcolumn3dlinedy) page of stacked column 3D line dual y-axis chart.

The above stacked column 3D line looks like:

{% embed_all standard-charts-combination-chart-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/7chax01w/) to edit the stacked column 3D line dual y-axis chart.

## Stacked Area 2D Line Dual Y-axis Chart

Now let's see how can you create a stacked area 2D and line chart with dual y-axis. To render the chart, change the value of the `type` attribute from `stackedcolumn3dlinedy` to `stackedarea2dlinedy`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/stackedarea2dlinedy) page of the stacked area 2D line dual y-axis chart.

The stacked area 2D line dual y-axis chart looks like:

{% embed_all standard-charts-combination-chart-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/9qrfu4tn/) to edit the stacked area 2D line dual y-axis chart.

## Multi Series Stacked Column 2D + Line Dual Y-axis Chart

To render the multi-series stacked column + line dual y-axis chart in 2D, set the value of `type` attribute to `msstackedcolumn2dlinedy`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=msstackedcolumn2dlinedy) page of multi-series stacked column 2D line dual y-axis chart.

The chart looks like:

{% embed_all standard-charts-combination-chart-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/8d3px3xp/) to edit the stacked column 2D line dual y-axis chart.

Now, let's customize the appearance and properties of the combination charts.

## Plot Trend Elements

For a dual y-axis chart, you can plot trend-lines for both, the primary y-axis and the secondary y-axis. The following sample will showcase the average revenue trend-line which will be plotted against the primary y-axis that shows the amount in USD. The average profit percent trend-line will be plotted against the secondary y-axis that shows the profit percent.

To plot a trend-lines on a chart, follow the steps given below:

- Create a `trendlines` object to render one or more than one trend-lines.

- Create a `line` object for a particular trend-line.

- In `line` object, set the `startValue` attribute to specify the starting value for the trend-line. Whereas, set the `endValue` to specify the ending value for the trend-line.

- Set the `color` attribute to specify the hex code for the color. This attribute is used when you render the trend-line and its associated text.

- Set the `displayValue` attribute to specify a string caption to be displayed with the trend-line.

- Specify the `isTrendZone` attribute to set whether a chart will be rendered with a trend-line or a trend-zone. The default value for this attribute is `1`, which renders the trend-zone. Setting it to `0` will render a trend-line.

> This attribute belongs to the line object, which in turn belongs to the trendlines object.

FusionCharts Suite XT includes several options to customize trend elements. To know more about the trend elements in a single y-axis chart, click [here](/chart-guide/chart-configurations/trend-lines-and-zones). To know more about the dual y-axis chart, click [here](/chart-guide/chart-configurations/trend-lines-and-zones#add-trend-lines-for-a-dual-yaxis-chart).

Refer to the code given below:

```json
{
  "chart": {
      ...
  },
  "data": [],
  "trendlines": [{
    "line": [{
      "startValue": "18833",
      "color": "#0075c2",
      "valuePadding": "20",
      "displayvalue": "Average{br}Revenue"
    },
    {
      "startValue": "21",
      "parentYAxis": "s",
      "color": "#f2c500",
      "displayvalue": "Average{br}Profit %"
    }]
  }]
}
```

A combination chart rendered with two trend-lines looks like this:

{% embed_chart standard-charts-combination-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/pj4koo6s/) to edit the combination chart.

## Placing the Secondary Axis on the Left

You can choose to swap positions of the primary and secondary axes using a single attribute i.e., `primaryAxisOnLeft`. Set this attribute to `1`, to render the primary axis on the left and the secondary axis on right.

Refer to the code given below:

```json
{
  "chart": {
    "primaryAxisOnLeft": "0"
  }
}
```

A combination chart rendered with the positions of the axes swapped looks like this:

{% embed_chart standard-charts-combination-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/b0jw9h1L/) to edit the combination chart.
