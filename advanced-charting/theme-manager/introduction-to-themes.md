---
permalink: advanced-chart-configurations/theme-manager/introduction-to-themes.html
title: Introduction to Themes | FusionCharts
description: A theme file lets you centralize the visual appearance, behavior and intelligence aspects for a chart, gauge, or map.
heading: Introduction to Themes
chartPresent: true
---

<script defer type="text/javascript" src="{{ site.baseurl | append:'assets/fusioncharts/themes/fusioncharts.theme.carbon.js'}}"></script>

<script defer type="text/javascript" src="{{ site.baseurl | append:'assets/fusioncharts/themes/fusioncharts.theme.ocean.js'}}"></script>

<script defer type="text/javascript" src="{{ site.baseurl | append:'assets/fusioncharts/themes/fusioncharts.theme.zune.js'}}"></script>

Using FusionCharts Suite XT you can create web applications that include multiple instances of the various [charts, gauges, and maps](http://www.fusioncharts.com/charts/) that the product offers. For all such instances, however, it becomes imperative to maintain a consistent look and feel across the application.
While you can set the cosmetic and functional attributes to the required values in the JSON/XML data for each chart, this solution is feasible only if you have a small application with fewer number of charts. For large applications, replicating a single change across all charts will be a cumbersome task.
To solve this problem, without making the solution implementation a time- and effort-consuming task, FusionCharts Suite XT is shipped with the all new __theme manager__—a powerful feature that helps you configure and manage your application centrally and with ease. Using the theme manager, you can create centralized theme files (similar to CSS files) and then apply those themes to any number of charts.

A theme file lets you centralize the following aspects for a chart, gauge, or map:

* Visual appearance (for example, the data plot color, font color, font size, and so on)
* Behavior (for example, hover effects for data plots)
* Intelligence (for example, applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

FusionCharts Suite XT is shipped with the following predefined themes:

* zune
* ocean
* carbon

A column 2D chart showcasing each theme is shown below:

{% embed_chart advanced-charting-theme-manager-introduction-to-themes-example-1.js %}

Click any radio button, followed by the __Apply Theme__ button, to see how the look and feel of the chart changes with each theme.

Now that you have seen a small demonstration of how these themes look, read on to understand how you can use them to consistently customize your charts. The articles in this section cover the different ways of applying themes, modifying existing themes, and creating new ones.