---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
---

This section is for users who are using the previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.16.x.

## Custom Text for Sankey and Chord Tooltips

FusionCharts Suite XT introduces support for customizing the text in link and node tooltips on Chord and Sankey; to do this, Chord and Sankey now support the `plotToolText` attribute and also add two new attributes: `linkToolText` and `toolText`. This release also introduces a number of macros specific for Chord and Sankey.

 A chart with custom tooltips looks like as shown below:
<iframe width="100%" height="300" src="//jsfiddle.net/fusioncharts/d6hcoz8g/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## Settting label icons opacity.

FusionCharts Suite XT introduces the `inherit` value for the `legendIconAlpha` and `legendIconBgAlpha`attributes.  When setting their attribute to `inherit` they use the value set in `plotFillAlpha` at global level and `alpha` at the local level for both data object and data series objects.

Using the `inherit`value looks like as shown below:

<iframe width="100%" height="300" src="//jsfiddle.net/fusioncharts/d6hcoz8g/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## Setting anchor border color, background color, and alpha value

FusionCharts Suite XT introduces the `inherit` value for the `anchorAlpha`, `anchorBgAlpha`, and `anchorImageAlpha` attributes.  When setting their attribute to `inherit` they use the value set in `plotFillAlpha` at global level and `alpha` at the local level for both data object and data series objects.

Using the `inherit`value looks like as shown below:


FusionCharts Suite XT introduces the `inherit` value for the `anchorBorderColor`, and `anchorBgColor` attributes. When setting their attribute to `inherit` they use the value set in `paletteColors` at global level and `color` at the local level for either data object and data series objects.
 
Using the `inherit` value looks like as shown below:


## Relative Font Sizes

FusionCharts Suite XT introduces relative font sizes support for text elements, the following relative font sizes are supported: 

*`rem`
*`%`
*`em`
*`vw`

Using relative font sizes text elements resize relative to the size of charts. This provides more responsive charts whose text elements scale properly when displayed in different screen sizes.

Using relative font sizes looks like as shown below:

When you scale the chart display area, text elements also scale relative to the chart.


## Adding pattern fill to Data Plots
FusionCharts Suite now allows you to use patterns for filling data plots, this improves the accessibility of charts and can also help implementing charts on printed media. Currently, the following charts support patterns:

* 2D Column and Area charts.
* Pie2D, Doughnut2d, and Multi-level Pie chart.
* Bubble, Funnel, and Pyramid charts.
* 2D Combination charts (only for column and area plot).

Newly introduced attributes allow you configure the look of patterns, you can set type, color, size, density, angle, and alpha values.

Using relative font sizes looks like as shown below:
