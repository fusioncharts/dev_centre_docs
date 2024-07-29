---
title: Introduction to Themes | FusionCharts
description: A theme file lets you centralize the visual appearance, behavior and intelligence aspects for a chart, gauge, or map.
heading: Introduction to Themes
---

You can use FusionCharts Suite XT to create web applications that include multiple instances of the various [charts, gauges, and maps](https://www.fusioncharts.com/charts/). However, if you need to maintain a consistent look and feel across the web apps, then you can do that using themes. 

You can manually set the cosmetic and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. That is where the Theme Manager shipped with FusionCharts Suite XT comes in. You can use the Theme Manager to create centralized theme files (similar to CSS files) and then apply those themes to any number of charts.

## In a theme file, you can centralize the following aspects of a chart, gauge, or map:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`
* `umber` (since v3.13.5)

A Column 2D chart showcasing the 6 themes mentioned above is given below:

{% embed_all themes-introduction-to-themes-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/0dtjw8a5/) to edit the above chart.

In the above chart, click any **radio** button, to see how the look and feel of the chart change with each theme.
