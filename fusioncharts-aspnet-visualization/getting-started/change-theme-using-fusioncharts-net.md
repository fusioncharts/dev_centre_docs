---
title: Change Theme | FusionCharts
description: This article outlines the steps to set common theme in a single page
heading: Change Theme
---

In `FusionCharts.NET` you can manually set the cosmetics and functional attributes for each chart and its components. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. `FusionCharts.NET` ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

`FusionCharts.NET` ships with the following predefined themes:

 * fusion
 * gammel
 * candy
 * zune
 * ocean
 * carbon

This article focuses on how to change the theme of a chart.

A chart configured to change the theme is shown below:

{% embed_chart fusioncharts-net-visualization-change-theme-example-1.js %}

To change the theme refer to the code below:

```
// Instantiate Pie Chart
Charts.PieChart pie = new Charts.PieChart("piecharts");

// Set DataModel instance as the data source of the chart
pie.Data.Source = pieModel;

// Instantiate Pyramid Chart
Widget.PyramidChart pyramid = new Widget.PyramidChart("pyramidchart");

// Set DataModel instance as the data source of the chart
pyramid.Data.Source = pyramidModel;

// Set theme at page level
PageLevelTheme.Theme = FusionChartsTheme.ThemeName.Gammel;
```

In the above code:

* Instantiate a Pie chart.

* Instantiate a Pyramid chart.

* Set the page level theme as `Gammel` using the `Themes` properties of the `PageLevelTheme` object. By default, the theme is set as `Fusion`.

A chart with the Gammel theme applied is shown below:

{% embed_chart fusioncharts-net-visualization-change-theme-example-2.js %}