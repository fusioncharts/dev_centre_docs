---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
---

This section is for users who are using the previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.16.x.

## Tooltip customization for Sankey and Chord Tooltips

FusionCharts Suite XT introduces support for customizing the text in link and node tooltips on Chord and Sankey; to do this, Chord and Sankey now support the `plotToolText` attribute and also add two new attributes: `linkToolText` and `toolText`. This release also introduces a number of macros specific for Chord and Sankey.

A chart with custom tooltips looks like as shown below:

<iframe height="500" style="width: 100%;" scrolling="no" title="Custom Text on Tooltips" src="https://codepen.io/FCsamples/embed/ZEONemy?height=500&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/FCsamples/pen/ZEONemy'>Custom Text on Tooltips</a> by FusionCharts
  (<a href='https://codepen.io/FCsamples'>@FCsamples</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Setting legend icons opacity

FusionCharts Suite XT introduces the `inherit` value for the `legendIconAlpha` and `legendIconBgAlpha` attributes. When setting value for these attributes to `inherit` they use the values set in `plotFillAlpha` at global level and `alpha` at the local level for both data object and data series objects to configure opacity for legend icons.

Using the `inherit` value looks like as shown below:

<iframe height="500" style="width: 100%;" scrolling="no" title="Setting legend icons opacity" src="https://codepen.io/fusioncharts/embed/gOwwJGN?height=500&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fusioncharts/pen/gOwwJGN'>Setting legend icons opacity</a> by FusionCharts
  (<a href='https://codepen.io/fusioncharts'>@fusioncharts</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Setting anchor border color, background color, and alpha value

FusionCharts Suite XT introduces the `inherit` value for the `anchorAlpha`, `anchorBgAlpha`, and `anchorImageAlpha` attributes. When setting their attribute to `inherit` they use the value set in `plotFillAlpha` at global level and `alpha` at the local level for both data object and data series objects.

Using the `inherit`value looks like as shown below:

<iframe height="488" style="width: 100%;" scrolling="no" title="Inherit  Anchors Alpha" src="https://codepen.io/FCsamples/embed/NWrZPdZ?height=488&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/FCsamples/pen/NWrZPdZ'>Inherit  Anchors Alpha</a> by FusionCharts
  (<a href='https://codepen.io/FCsamples'>@FCsamples</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

FusionCharts Suite XT introduces the `inherit` value for the `anchorBorderColor`, and `anchorBgColor` attributes. When setting their attribute to `inherit` they use the value set in `paletteColors` at global level and `color` at the local level for either data object and data series objects.

Using the `inherit` value looks like as shown below:

<iframe height="500" style="width: 100%;" scrolling="no" title="Inherit Colors for Anchors" src="https://codepen.io/FCsamples/embed/LYZKYWG?height=500&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/FCsamples/pen/LYZKYWG'>Inherit Colors for Anchors</a> by FusionCharts
  (<a href='https://codepen.io/FCsamples'>@FCsamples</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Relative Font Sizes

FusionCharts Suite XT introduces relative font sizes support for text elements, the following relative font sizes are supported:

-  `rem`
-  `%`
-  `em`
-  `vw`

Using relative font sizes text elements resize relative to the size of charts. This provides more responsive charts whose text elements scale properly when displayed in different screen sizes.

Using relative font sizes looks like as shown below:

<iframe height="500" style="width: 100%;" scrolling="no" title="Relative Font Sizes" src="https://codepen.io/fusioncharts/embed/zYKKQaR?height=500&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fusioncharts/pen/zYKKQaR'>Relative Font Sizes</a> by FusionCharts
  (<a href='https://codepen.io/fusioncharts'>@fusioncharts</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

When you scale the chart display area, text elements also scale relative to the chart.

## Adding pattern fill to Data Plots

FusionCharts Suite now allows you to use patterns for filling data plots, this improves the accessibility of charts and can also help implementing charts on printed media. Currently, the following charts support patterns:

-  2D Column, Bar and Area charts.
-  Pie2D, Doughnut2d, and Multi-level Pie chart.
-  Bubble, Funnel, and Pyramid charts.
-  2D Combination charts (only for column, bar and area plot).

Newly introduced attributes allow you configure the look of patterns, you can set type, color, size, density, angle, and alpha values.

Using pattern fills looks like as shown below:

<iframe height="500" style="width: 100%;" scrolling="no" title="Pattern Fill for Data Plots" src="https://codepen.io/fusioncharts/embed/qBaaGLQ?height=500&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fusioncharts/pen/qBaaGLQ'>Pattern Fill for Data Plots</a> by FusionCharts
  (<a href='https://codepen.io/fusioncharts'>@fusioncharts</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Support for HTML tags across all chart text elements

FusionCharts Suite XT introduces support for inline HTML tags across all chart text elements. To define the HTML elements, even for the existing tags, FusionCharts does not support {}. The user must use the valid HTML tags. For example `<strong>`Bold text`</strong>` is supported but {strong}Bold text{/strong} is not.

We included support for the following elements:

-  Abbreviation `<abbr>`
-  Anchor Tag `<a>`
-  Bold Text `<b>`
-  Caption `<caption>`
-  Delete `<del>`
-  Emphasized Text `<em>`
-  Important Text `<strong>`
-  Italics Text `<i>`
-  Legend Caption `<legend>`
-  Line Break `<br>`
-  Span `<span>`
-  Strikethrough `<s>`
-  Subscript Text `<sub>`
-  Superscript `<sup>`
-  Underline Text `<u>`

Note: If any other HTML element is specified apart from the list above, it is displayed as a string on the chart.

A chart with inline HTML tags is shown below:

<iframe height="500" style="width: 100%;" scrolling="no" title="Support for HTML tags across all chart text elements" src="https://codepen.io/fusioncharts/embed/gOwwyXz?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fusioncharts/pen/gOwwyXz'>Support for HTML tags across all chart text elements</a> by FusionCharts
  (<a href='https://codepen.io/fusioncharts'>@fusioncharts</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
