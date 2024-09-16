---
title: All About Stacked Bar Charts & Column Charts
description: Upgrade your data visualization with FusionCharts. Learn about stacked bar charts & column charts, their benefits & customization options. Explore now!
heading: Stacked Charts
---

> These chart types belong to **FusionCharts XT**.

## Introduction

Stacked charts are similar to [multi-series charts](/chart-guide/standard-charts/multi-series-charts), but plot datasets on top of each other, instead of the clustered side-by-side placement adopted by multi-series charts. **Stacked bar charts**/column charts help in displaying the cumulative magnitude of two or more data series. They help in representing a data value as a sum of two or more values. Each data series can be distinguished by the color of its section in the stack.

The FusionCharts Suite XT includes the following types of stacked charts:

* Stacked Column 2D Chart

* Stacked Column 3D Chart

* Stacked Area 2D Chart

* Stacked Bar 2D Chart

* Stacked Bar 3D Chart

## Stacked Column 2D Chart

A stacked column 2D chart looks as follows:

{% embed_chartAnatomy stacked-chart.json %}

As an example, we will create a stacked column 2D chart to plot the revenue split for each quarter of the current year by product category - food products and non-food products. The data plots for each category are rendered using two distinct colors to help interpretation. The data plots for non-food products are stacked above the data plots for food products, instead of alongside as in multi-series charts.

To create **stacked column charts** in 2D follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a stacked column 2D chart, set `stackedcolumn2d`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedcolumn2d) page of stacked column 2D chart.

The stacked column 2D chart thus created looks like this:

{% embed_all standard-charts-stacked-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/15zbv887/) to edit the stacked column 2D chart.

## Stacked Column 3D Chart

To render **stacked column charts** in 3D, change the value of the `type` attribute from `stackedcolumn2d` to `stackedcolumn3d`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedcolumn3d) page of stacked column 3D chart.

A stacked column chart in 3D looks like:

{% embed_all standard-charts-stacked-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/z14fubaq/) to edit the stacked column 3D chart.

## Stacked Area 2D Chart

To render a stacked area chart in 2D, change the value of the `type` attribute from `stackedcolumn3d` to `stackedarea2d`. The rest of the data structure remains the same.

{% embed_chartAnatomy stacked-area-chart.json %}

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedarea2d) page of stacked area 2D chart.

A stacked area chart in 2D looks like:

{% embed_all standard-charts-stacked-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/3RYK6/) to edit the stacked area 2D chart.

## Stacked Bar 2D Chart

To render **stacked bar charts** in 2D, change the value of the `type` attribute from `stackedarea2d` to `stackedbar2d`. The rest of the data structure remains the same.

{% embed_chartAnatomy stacked-bar-chart.json %}

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedbar2d) page of stacked bar 2D chart.

A stacked bar chart in 2D looks like:

{% embed_all standard-charts-stacked-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/obga4uw9/) to edit the stacked bar 2D chart.

## Stacked Bar 3D Chart

To render **stacked bar charts** in 3D, change the value of the `type` attribute from `stackedbar2d` to `stackedbar3d`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedbar3d) page of stacked bar 3D chart.

A stacked bar chart in 3D looks like:

{% embed_all standard-charts-stacked-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/L6gg6ow3/) to edit the stacked bar 3D chart.

> Some of the other stacked charts are shown in [combination charts](/chart-guide/standard-charts/combination-charts) and [scroll charts](/chart-guide/standard-charts/scroll-charts) section.

Now, let's customize the appearance and properties of the charts. 

## Display the Cumulative Sum

You can opt to show the sum of all stacked data plots in a column above that column.  To show the sum of all stacked data plots, set the `showSum` attribute to `1`.

Refer to the code given below:

```json
{
  "chart": {
    "showSum": "1"
  },
}
```
A stacked column 2D chart with the cumulative sum rendered above its corresponding column looks like this:

{% embed_chart standard-charts-stacked-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/15zbv887/) to edit the above stacked column 2D chart.

## Create 100% Stacked Charts

You can use **stacked column charts** to show the percentage distribution for individual items of a dataset. These stacked charts are called 100% Stacked Charts. The y-axis, instead of representing the actual data values, represents the percentage values. 

To create a 100% stacked column chart, set the `stack100Percent` attribute to `1`. 

Refer to the code given below:

```json
{
  "chart": {
    "stack100Percent": "1"
  },
}
```

A 100% stacked column 2D chart looks like this:

{% embed_chart standard-charts-stacked-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/pcgxjcLb/) to edit the above stacked column 2D chart.

## Show Percent Values in Tooltips

By default, actual data values are rendered in tool-tips. Set the `showPercentInToolTip`  to `1` to show the percentage values in tooltips.

Refer to the code given below:

```json
{
  "chart": {
    "showPercentInTooltip": "1"
  },
}
```
A stacked column chart configured to show percent values in tooltips looks like this:

{% embed_chart standard-charts-stacked-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/dwu9w555/) to edit the above stacked column 2D chart.

## Conclusion

**Stacked bar charts**/column charts in FusionCharts Suite XT effectively visualize cumulative data across multiple series, which is ideal for showing total magnitudes and individual contributions. Its types include 2D and 3D columns, area, and bar charts. Customize by setting the type attribute and other options like cumulative sums, 100% stacking for percentage distributions, and tooltips. 

These features enhance data clarity, making stacked charts a powerful and visually appealing data visualization tool. Overall, stacked charts offer a clear and visually appealing way to present complex cumulative data, enhancing interpretability and insight.

## Upgrade Your Data Visualization Game with FusionCharts Suite XT
Ready to enhance your data visualization projects? Try FusionCharts Suite XT today and create **stacked bar charts**/column charts to effectively display your data's cumulative magnitude and individual contributions. Start exploring and visualizing your data with powerful, customizable stacked charts today!

## FAQs

### What is a stacked bar chart and when should it be used?
The **stacked bar charts** displays multiple data series as horizontal bars stacked on top of each other, with each segment distinguished by different colors. It's ideal for showing the composition of total values, comparing parts to the whole, displaying cumulative data, and visualizing trends over time. Best used with a limited number of data points, stacked bar charts effectively simplify and clarify complex data sets.

### What is a stacked column chart, and when should it be used?
A stacked column chart displays multiple data series as vertical columns stacked on top of each other, with each segment distinguished by different colors. It is ideal for showing the composition of total values, comparing parts to the whole, displaying cumulative data, and visualizing trends over time. Best used with a limited number of columns, stacked column charts effectively simplify and clarify complex data sets.

### How do you read data from stacked charts? 
To read data from stacked charts, start by identifying the total height of each bar (in a stacked bar chart) or column (in **stacked column chart**s), which represents the cumulative value of all data series for that category. 

Each segment within the bar or column is distinguished by color and represents an individual data series, showing its contribution to the total. By examining the height or size of each colored segment, you can determine the individual values and proportions of each data series relative to the whole.
