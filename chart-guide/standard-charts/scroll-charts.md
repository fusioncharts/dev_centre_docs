---
title: Scroll Chart | FusionCharts
description: Charts with scrolls allows you to plot large quantities of data. They are also used to avoid cluttering of plots.
heading: Scroll Chart
---

Scroll charts are used to avoid cluttering of plots, thereby providing a clean look. Scroll charts can show a larger number of data plots in a small space.

The types of scroll charts available in the FusionCharts Suite XT are :

* Scroll Column 2D chart

* Scroll Line 2D chart

* Scroll Area 2D chart

* Scroll Stacked Column 2D chart

* Scroll Combination 2D chart (Single Y)

* Scroll Combination 2D chart (Dual Y)

## Scroll Column 2D chart

Let's create a scroll column 2D chart to plot the sales trends for FY 2012 - FY 2013. 

To create a scroll column 2D chart, set the `type` attribute to `scrollColumn2d`.

For a detailed list of attributes you can check the API reference page of scroll column chart.

The scroll column 2D chart for the above code looks like:

{% embed_all standard-charts-scroll-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/nAa33/) to edit the scroll column 2D chart.

## Scroll Line 2D chart

Now, let's create a scroll line 2D chart. To render a scroll line chart in 2D, change the value of the `type` attribute from `scrollColumn2d` to `scrollline2d`. The rest of the data structure remains the same.

A single-series scroll line 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/Pm3nf/) to edit the scroll line 2D chart.

## Scroll Area 2D

Let's create the scroll area 2D chart. To render a scroll area chart in 2D, change the value of the `type` attribute from `scrollline2d` to `scrollarea2d`. The rest of the data structure remains the same.

A single-series scroll area 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/7neLV/) to edit the scroll area 2D chart.

## Scroll Stacked Column 2D chart

Stacked charts are the multi-series charts with the plot datasets in top of each other. Now, let's create a scroll stacked column 2D chart. The example will plot the sales comparison w.r.t. the products and services for FY 2017-FY 2018.

 To render a scroll stacked column chart in 2D, change the value of the `type` attribute to `scrollstackedcolumn2d`.

A scroll stacked column 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/t3SKj/) to edit the scroll stacked column 2D chart.

## Scroll Combination 2D chart

Now, we will create a scroll combination 2D chart to plot the revenue and the profit earned, in dollars, and the profit for FY 2017-FY 2018.

To render a scroll combination 2D chart, change the value of the `type` attribute to `scrollcombi2d`.

A scroll combination 2D chart looks like:

{% embed_all standard-charts-scroll-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/6Y3jt/) to edit the scroll stacked column 2D chart.

## Scroll Combination 2D dual y-axis chart

To create a scroll combination 2D chart with a dual y-axis, change the value of the `type` attribute to `scrollcombidy2d`. Here we will plot the revenue and the profit earned, in dollars, and the profit percent for FY 2017-FY 2018.

The scroll combination 2D chart (dual Y) chart thus created looks like this :

{% embed_all standard-charts-scroll-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/cVXNg/) to edit the scroll combination 2D chart with a dual y-axis.

Now, let's customize the appearance and properties of the charts. 

## Configure the number of visible data plots

Scroll charts are generally used to avoid cluttering. With that in FusionCharts, you can also configure the number of data plots that will be visible in the scroll pane when the chart is first loaded. To configure this specify the number of visible plots using the `numVisiblePlot` attribute.

Refer to the code given below:

```
{

  "chart": {

    "numVisiblePlot": "12"

  },

}

...

```

A scroll chart with the number of visible data plots set to twelve looks like this:

{% embed_all standard-charts-scroll-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/15tzb20e/) to edit the scroll column 2D chart.

## Render a scroll bar with the gradient effect

By default, a scroll chart has a flat scroll bar. You can opt to render a gradient scroll to visually enhance your chart. To render the scroll in gradient set the `flatScrollBars` attribute to `0`. 

Refer to the code given below:

```
{

  "chart": {

    "flatScrollBars": "0"

  },

}

...

```

A scroll chart with a gradient scroll bar looks like this:

{% embed_all standard-charts-scroll-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/ssfngtce/) to edit the scroll column 2D chart.

## Customizing the Scroll Bar

The scroll bar of the scroll chart can be customized using the cosmetic properties. To the customize the scroll bar, follow the steps below:

* Specify the hex code for the scroll color code using the `scrollColor` attribute.

* Specify the height of the scroll bar using the `scrollHeight` attribute.

* Set the distance of the scroll bar from the canvas  using the `scrollPadding` attribute.

Refer to the code given below:

```
{

  "chart": {

    "scrollColor": "#3a4660",
    "scrollHeight": "12",
    "scrollPadding": "5"

  },

}

...

```

A scroll chart with the cosmetic properties of the scroll bar customized looks like this:

{% embed_all standard-charts-scroll-chart-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/guawyxge/) to edit the scroll column 2D chart.