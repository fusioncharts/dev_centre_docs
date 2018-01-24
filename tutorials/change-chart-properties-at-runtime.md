---
permalink: api/tutorials/change-chart-properties-at-runtime.html
title: Change Chart Properties at Runtime | FusionCharts
description: This section shows you how you can change properties once the chart has been drawn.
heading: Change Chart Properties at Runtime
chartPresent: true
layout: page
---

This section shows you how you can change properties once the chart has been drawn. It is possible to configure the following

* [Height and width of the chart]({{ site.baseurl }}api/tutorials/change-chart-properties-at-runtime.html#changing-height-and-width-of-the-chart)
* [Chart type]({{ site.baseurl }}api/tutorials/change-chart-properties-at-runtime.html#changing-chart-type)
* [Chart Properties like Fonts and Caption and Sub Caption Text]({{ site.baseurl }}api/tutorials/change-chart-properties-at-runtime.html#changing-chart-properties)

## Changing height and width of the chart

Once you have initialized a chart, you can change the dimensions, at the client-side, through a JavaScript API using the `resizeTo()` method.

You can call the 'resizeTo()' method specifying the new `width` and `height` of your chart (in pixels) like this:

```java
	revenueChart.resizeTo(width, height);	
```

You can call this method anytime after the chart has finished rendering.

The following chart shows you how a chart can be resized during runtime

{% embed_chart change-chart-properties-at-runtime-example-1.js %}
## Changing chart type

FusionCharts Suite XT makes it simple for you to change chart types using the 'chartType()' method. This method lets you convert from one chart type to another (as long as its the same type of data e.g., single-series).

The following snippet shows you how to call the 'chartType()' method.

```java
	revenueChart.chartType(newcharttype)
```

This API is useful when you want your users to be able to select the right view for their data, without you having to re-build the entire chart. You can call this method anytime after the chart has finished rendering.

Shown below is a sample where a simple column chart can be changed to a bar chart or a line chart.

{% embed_chart change-chart-properties-at-runtime-example-2.js %}

## Changing Chart properties

FusionCharts Suite XT makes it simple for you to change properties of a chart at the 'chart' level like Caption, Sub-Caption, Fonts, Themes etc using the 'setChartAttribute' method.

The following snippet shows you how to call the 'setChartAttribute()' method. The 'caption' and 'subCaption' are changed in this example

```java
revenueChart.setChartAttribute({
    caption: "Chart Caption Text",
    subCaption: "Chart Sub Caption Text"
});
```

Shown here is a chart that allows you to change the Caption and Sub Caption text.

{% embed_chart change-chart-properties-at-runtime-example-3.js %}

Similarly you can set the font size of the chart using the 'baseFontSize' attribute like this

```java
	revenueChart.setChartAttribute('baseFontSize', 24) ;
```

Shown here is a chart that allows you to change the font size at runtime.

{% embed_chart {"source": "change-chart-properties-at-runtime-example-4.js", "id": "4"} %}