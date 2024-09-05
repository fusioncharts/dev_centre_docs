---
title: Create Scroll Chart With FusionCharts Suite XT
description: Elevate your data presentation with FusionCharts Suite XT's scroll chart. Simplify complexity and make smarter decisions. Easily integrate advanced features.
heading: Scroll Chart
---

> These chart types belong to **FusionCharts XT**.

Scroll charts are used to avoid cluttering of plots, thereby providing a clean look. Scroll charts can show a larger number of data plots in a small space.

The types of scroll charts available in the FusionCharts Suite XT are :

- Scroll Column 2D Chart

- Scroll Bar 2D Chart

- Scroll Line 2D Chart

- Scroll Area 2D Chart

- Scroll Stacked Column 2D Chart

- Scroll Stacked Bar 2D Chart

- Scroll Combination 2D Chart (Single Y)

- Scroll Combination 2D Chart (Dual Y)

- Scroll Multi-series Stacked Column 2D

- Scroll Multi-series Stacked Column 2D + Line (Dual Y)

## Scroll Column 2D Chart

Let's create a **scroller plot** 2D chart to plot the sales trends for FY 2012 - FY 2013.

To create a scroll column 2D chart follow the steps given below:

- In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the chart type using the `type` attribute. To render a scroll column 2D chart, set `scrollcolumn2d`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/?chart=scrollcolumn2d) page of scroll column 2D chart.

The scroll column 2D chart for the above code looks like:

{% embed_all standard-charts-scroll-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/nAa33/) to edit the scroll column 2D chart.

## Scroll Bar 2D Chart

Now, let's create a scroll bar 2D chart. To render a scroll bar chart in 2D, change the value of the `type` attribute from `scrollColumn2D` to `scrollBar2D`. The rest of the data structure remains the same.

For the detailed list of attributes, refer to the [chart attributes](/chart-attributes/scrollbar2d) page of the scroll bar 2D chart.

A single-series **scroller vertica**l bar 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/zheqn0xc/) to edit the scroll bar 2D chart.

## Scroll Line 2D Chart

Now, let's create a scroll line 2D chart. To render a scroll line chart in 2D, change the value of the `type` attribute from `scrollBar2D` to `scrollline2d`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/?chart=scrollline2d) page of scroll line 2D chart.

A single-series scroll line 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/Pm3nf/) to edit the scroll line 2D chart.

## Scroll Area 2D Chart

Let's create the scroll area 2D chart. To render a scroll area chart in 2D, change the value of the `type` attribute from `scrollline2d` to `scrollarea2d`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/?chart=scrollarea2d) page of scroll area 2D chart.

A single-series scroll area 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/7neLV/) to edit the scroll area 2D chart.

## Scroll Stacked Column 2D Chart

Stacked charts are the multi-series charts with the plot datasets on top of each other. Now, let's create a scroll stacked column 2D chart. The example will plot the sales comparison w.r.t. the products and services for FY 2017-FY 2018.

To render a scroll stacked column chart in 2D, change the value of the `type` attribute to `scrollstackedcolumn2d`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/?chart=scrollstackedcolumn2d) page of scroll stacked column 2D chart.

A **scroller plot** column 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/t3SKj/) to edit the scroll stacked column 2D chart.

## Scroll Stacked Bar 2D Chart

Let's create a scroll stacked bar 2D chart. To render a scroll stacked bar chart in 2D, change the value of the `type` attribute to `scrollStackedBar2D`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/scrollstackedbar2d) page of the scroll stacked bar 2D chart.

A scroll stacked **scroller vertical** 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/nwf6em24/) to edit the above chart.

## Scroll Combination 2D Chart

Now, we will create a scroll combination 2D chart to plot the revenue and the profit earned, in dollars, and the profit for FY 2017-FY 2018.

To render a scroll combination 2D chart, change the value of the `type` attribute to `scrollcombi2d`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/?chart=scrollcombi2d) page of scroll combination 2D chart.

A scroll combination 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/6Y3jt/) to edit the scroll stacked column 2D chart.

## Scroll Combination 2D Dual Y-axis Chart

To create a scroll combination 2D **scroll chart** with a dual y-axis, change the value of the `type` attribute to `scrollcombidy2d`. Here we will plot the revenue and the profit earned, in dollars, and the profit percent for FY 2018-FY 2019.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/?chart=scrollcombidy2d) page of croll combination 2D dual y-axis chart.

The scroll combination 2D chart (dual Y) chart thus created looks like this:

{% embed_all standard-charts-scroll-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/cVXNg/) to edit the scroll combination 2D chart with a dual y-axis.

Now, let's customize the appearance and properties of the charts.

## Scroll Multi-series Stacked Column 2D

Let's create a scrollable multi-series stacked column 2D by setting the value of the `type` attribute to `scrollMSStackedColumn2D`.

For the detailed list of attributes, refer to the [chart attributes](/chart-attributes/scrollmsstackedcolumn2d) page of scroll multi-series stacked column 2D chart.

The scroll multi-series stacked column 2D chart thus looks like as shown below:

{% embed_all standard-charts-scroll-charts-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/83f0oy9a/) to edit the above chart.

## Scroll Multi-series Stacked Column 2D + Line Dual Y-Axis Chart

Let's create a scrollable multi-series stacked column 2D **scroller plot** and line chart with dual y-axis. Create the chart by setting the value of the `type` attribute to `scrollMSStackedColumn2DLineDy`.

For the detailed list of attributes, refer to the [chart attributes](/chart-attributes/scrollmsstackedcolumn2dlinedy) page of scroll multi-series stacked column 2D + line dual y-axis chart.

The scroll multi-series stacked column 2D + line dual y-axis chart thus looks like as shown below:

{% embed_all standard-charts-scroll-charts-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/y6smqx5o/) to edit the above chart.

## Configure the Number of Visible Data Plots

Scroll charts are generally used to avoid cluttering. With that in FusionCharts, you can also configure the number of data plots that will be visible in the scroll pane when the chart is first loaded. To configure this specify the number of visible plots using the `numVisiblePlot` attribute.

Refer to the code given below:

```json
{
  "chart": {
    "numVisiblePlot": "12"
  }
}
```

A scroll chart with the number of visible data plots set to twelve looks like this:

{% embed_chart standard-charts-scroll-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/15tzb20e/) to edit the scroll column 2D chart.

## Render a Scroll Bar with Gradient Effect

By default, a scroll chart has a flat scroll bar. You can opt to render a gradient scroll to visually enhance your chart. To render the scroll in gradient set the `flatScrollBars` attribute to `0`.

Refer to the code given below:

```json
{
  "chart": {
    "flatScrollBars": "0"
  }
}
```

A scroll chart with a gradient scroll bar looks like this:

{% embed_chart standard-charts-scroll-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/ssfngtce/) to edit the scroll column 2D chart.

## Customizing the Scroll Bar

The scroll bar of the **scroller plot** can be customized using the cosmetic properties. To the customize the scroll bar, follow the steps below:

- Specify the hex code for the scroll color code using the `scrollColor` attribute.

- Specify the height of the scroll bar using the `scrollHeight` attribute.

- Set the distance of the scroll bar from the canvas using the `scrollPadding` attribute.

Refer to the code given below:

```json
{
  "chart": {
    "scrollColor": "#3a4660",
    "scrollHeight": "12",
    "scrollPadding": "5"
  }
}
```

A scroll chart with the cosmetic properties of the scroll bar customized looks like this:

{% embed_chart standard-charts-scroll-charts-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/guawyxge/) to edit the scroll column 2D chart.

## Position Scroll Bar

FusionCharts XT suite now allows you to decouple the scrollbar from the X-axis. Earlier, the scrollbar was always coupled with the X-axis. Now, a new attribute `scrollPosition` has been introduced, which lets you position the scrollbar irrespective of the position of X-axis.

- In charts where the X-axis is located at the bottom or the top (as in a column chart), you can set the value of the `scrollPosition` attribute to `top` or `bottom`.

- In charts where the X-axis is located to the left or the right (as in a bar chart), you can set the value of the `scrollPosition` attribute to `left` or `right`.

Refer to the code below:

```javascript
{
    "chart": {
        "scrollPosition": "top"
    }
}
```

The column 2D **scroll chart** will look as shown below:

{% embed_chart scroll-column-2d-showcasing-scroll-position.js %}

Click [here](https://jsfiddle.net/fusioncharts/bwopg620/) to edit the above chart.

## Looking to leverage scroll charts? FusionCharts Suite XT is here to help

Get started with FusionCharts Suite XT today and unlock the power of scroller plot to present your data clearly and concisely. Elevate your charts to the next level and make informed decisions with FusionCharts. Try it now!

Elevate your data with FusionCharts Suite XT's scroll chart – simplify complexity, make smarter decisions!

## FAQs

### Can the number of visible data plots in a scroll chart be configured?
Yes, FusionCharts allows users to configure the number of visible data plots in a scroll chart using the numVisiblePlot attribute. This feature lets users control the amount of data displayed initially, improving the chart's readability.

### Can I integrate scroll charts with other features of FusionCharts, such as drill-downs and annotations?
Yes, FusionCharts supports the integration of scroll charts with various advanced features, including drill-downs, annotations, and real-time updates. This enables users to create interactive and informative charts that provide deeper insights into their data.

### Are there any performance considerations when using scroll charts with large datasets?
While scroll charts can effectively handle large datasets, users should be mindful of potential performance implications, especially when rendering charts with thousands or millions of data points. Optimizations such as data aggregation and lazy loading can help mitigate performance issues.

### How can I get started with creating scroll charts using FusionCharts?
Getting started with scroll charts in FusionCharts is easy! Simply sign up for a FusionCharts account, download the library, and follow the comprehensive documentation and tutorials to create scroll charts tailored to your data visualization needs.
