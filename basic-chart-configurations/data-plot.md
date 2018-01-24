---
permalink: basic-chart-configurations/data-plot.html
title: Configuring Data Plot | FusionCharts
description: Data plot is column in column chart, line in line chart. You can enhance the way your data plot looks with the help of colors, gradients and hover effects
heading: Data Plot
chartPresent: true
---

Data plot refers to the column in column chart, lines in a line chart, pie/doughnut slices in a pie/doughnut chart. This section shows how you can enhance the way your data plot looks with the help of colors, gradients and hover effects.

This section talks about:

* <a href="/basic-chart-configurations/data-plot#configuring-colors-for-data-plots" class="smoth-scroll">Configuring colors for data plots</a>

* <a href="/basic-chart-configurations/data-plot#customizing-gradient-effects-for-data-plots" class="smoth-scroll">Customizing gradient effect for data plots</a>

* <a href="/basic-chart-configurations/data-plot#customizing-data-plot-transparency" class="smoth-scroll">Configuring plot transparency</a>

* <a href="/basic-chart-configurations/data-plot#customizing-plot-border" class="smoth-scroll">Configuring plot border</a>

* <a href="/basic-chart-configurations/data-plot#configuring-plot-hover-effects" class="smoth-scroll">Configuring plot hover effects</a>

## Configuring colors for data plots

### Specifying color for individual data plots

Using FusionCharts Suite XT you can specify a custom color for each data plot. A column 2D chart with colors based on the quarter of the year is shown below:

{% embed_all configuring-your-chart-data-plot-example-1.js %}

Given below is the list of attributes used to define custom colors for individual data plots:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`color`</td>
    <td>Sets the data-plot color in hex code, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`paletteColors`</td>
    <td>Specifies custom list of hex colors for the data items. The list of colors have to be separated by comma e.g., `"paletteColors" : "#eed17f, #97cbe7,  #b0d67a"`. </td>
  </tr>
</table>


### Specifying a list of colors for different data series/data plots:

You can also specify a comma separated list of colors for use in different data series (or in case of single series charts, different data plots). The colors are selected from the list in a round-robin way for each data series.

A multi-series 2D chart configured with a comma separated list of colors looks as below:



Given below is the attribute used to specify a comma separated list of colors for coloring data series:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`paletteColors`</td>
    <td>Specifies custom list of hex colors for the data items. The list of colors have to be separated by comma e.g., `"paletteColors" : "#eed17f, #97cbe7,  #b0d67a"`. </td>
  </tr>
</table>


## Customizing gradient effects for data plots

### Adding gradient effect to data plots

You can apply a global gradient color for an entire data plot as described in this sub-section.

A column 2D chart with global gradient color specified for individual data plots is shown below:

{% embed_all configuring-your-chart-data-plot-example-3.js %}

The list of attributes used to configure gradient color for data plots is shown below:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`usePlotGradientColor`</td>
    <td>Set this to `1` to use gradient effect, or to `0` (default) to remove it.</td>
  </tr>
  <tr>
    <td>`plotGradientColor`</td>
    <td>You can globally add a gradient color to the entire plot of chart by specifying the second color as this attribute. For example, if you've specified individual colors for your columns and now you want a gradient that ends in white, you need to specify `#ffffff` (white) as the value of this attribute and the chart will now draw plots as gradient. </td>
  </tr>
</table>


### Customizing gradient properties

Apart from a basic gradient effect, you can also customize the gradient angle, and fill ratio for a data plot. A column 2D chart with customized gradient properties used for data plots looks as below:

{% embed_all configuring-your-chart-data-plot-example-4.js %}

Given below is the list of attributes used to configure gradient effects:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotFillAngle`</td>
    <td>Sets the fill angle for gradient (for column, area and pie charts). Values can range from `0` - `360`.</td>
  </tr>
  <tr>
    <td>`plotFillRatio`</td>
    <td>Specifies the start and end of the gradient effect in a comma separated format. For example a setting of "20, 40" would cause the gradient effect to start at 20% of width and end at 40% of width. The colour before gradient start would be set to the data plot color and after gradient end would get set to the gradient fill color.  </td>
  </tr>
</table>


## Customizing data plot transparency

You can set the transparency of a data plot fill colour. A column 2D chart with data plot transparency property applied looks as below:

{% embed_all configuring-your-chart-data-plot-example-5.js %}

Given below is the list of attributes used to customize transparency of a data plot:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotFillAlpha`</td>
    <td>Used to set the transparency of all data plots in chart object. In case of gradients we can provide more than one alpha in a comma separated format. Values ranges from `0` (completely transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>Sets the transparency for specific dataset / data plot using `alpha` attribute. This overrides the transparency setting at the chart object level. Values ranges from `0` (completely transparent) to `100` (opaque).</td>
  </tr>
</table>


## Customizing plot border

### Showing or hiding plot border

Every data plot (column, area, or pie) has a border by default.You can choose to either retain the border or remove it. A chart with the ability to configure plot borders is shown below:

{% embed_all configuring-your-chart-data-plot-example-6.js %}

Given below is the attribute used to hide the plot border:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showPlotBorder`</td>
    <td>Set the value to `1` (default) to show borders or `0` to hide it.</td>
  </tr>
</table>


### Using a dashed data plot border

You can set a dashed border for the data plot and can also customize dash-length and the gap between dashes. A column 2D chart with a black dashed border around the data plots looks as below:

{% embed_all configuring-your-chart-data-plot-example-7.js %}

Given below is a brief description of the attributes used to change the data plot border:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotBorderDashed`</td>
    <td>Set this to `1` to make plot border dashed and `0` (default) to remove borders. This is applicable at a chart object level.</td>
  </tr>
  <tr>
    <td>`plotBorderDashLen`</td>
    <td>Sets the length of each dash in plot-border (in pixels). This is applicable at a chart object level.</td>
  </tr>
  <tr>
    <td>`plotBorderDashGap`</td>
    <td>Sets the gap between two consecutive dashes in plot border (in pixels). This is applicable at a chart object level.</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>Set this to `1` to make plot border dashed and `0` (default) to remove borders for an individual data plot or series. This overrides the setting at the chart object level.</td>
  </tr>
  <tr>
    <td>`dashlen`</td>
    <td>Sets the length of each dash in plot-border (in pixels). Affects an individual data-plot.</td>
  </tr>
  <tr>
    <td>`dashgap`</td>
    <td>Sets the gap between two consecutive dashes in plot border (in pixels). Affects an individual data-plot.</td>
  </tr>
</table>



### Using rounded edges

You can configure data plots with rounded edges in 2D Column or Bar charts. A chart with the data plots having round edges is shown below:

{% embed_all configuring-your-chart-data-plot-example-8.js %}

Given below is a brief description of the attributes used to apply round edges for data plots:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useRoundEdges`</td>
    <td>Set this attribute to `1` to display plot columns with rounded edges (with a glass effect gradient). </td>
  </tr>
</table>


## Configuring plot hover effects

You can display hover effects for data plots to add an interactive element to the charts. Shown below is a chart with hover effects enabled:

{% embed_all configuring-your-chart-data-plot-example-9.js %}

Given below is the list of attributes used to configure hover effects at a chart level. These settings are used in the chart object and will apply to all data plots in a chart.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotHoverEffect`</td>
    <td>Set this to `1` to enable hover effect for data plots (e.g., column, pie only) or `0` to disable it.</td>
  </tr>
  <tr>
    <td>`plotFillHoverColor`</td>
    <td>Sets the hover color for data plots. Value should be in hex code format, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`plotFillHoverAlpha`</td>
    <td>Sets the transparency for hover colour for data plots. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`plotBorderHoverColor`</td>
    <td>Sets the hover border color. Value should be in hex code format, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`plotBorderHoverAlpha`</td>
    <td>Sets the transparency of hover borders. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`plotBorderHoverThickness`</td>
    <td>Sets the hover border thickness (in pixels).</td>
  </tr>
  <tr>
    <td>`plotBorderHoverDashed`</td>
    <td>Set this to `1` to make data plot borders appear dashed on hover and `0` (default) to keep them normal.</td>
  </tr>
  <tr>
    <td>`plotBorderHoverDashLen`</td>
    <td>Sets the length of each dash for all data plots on hover(in pixels).</td>
  </tr>
  <tr>
    <td>`plotBorderHoverDashGap`</td>
    <td>Sets the gap between two consecutive dashes for all data plots on hover(in pixels).</td>
  </tr>
</table>


Given below is the list of attributes used to configure hover effects for individual data plots.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`hoverColor`</td>
    <td>Sets the hover color for data plots. Value should be in hex code format, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`hoverAlpha`</td>
    <td>Sets the transparency for hover colour for data plots. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`borderHoverColor`</td>
    <td>Sets the hover border color. Value should be in hex code format, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`borderHoverAlpha`</td>
    <td>Sets the transparency of hover borders. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`borderHoverThickness`</td>
    <td>Sets the hover border thickness (in pixels).</td>
  </tr>
  <tr>
    <td>`borderHoverDashed`</td>
    <td>Set this to `1` to make data plot borders appear dashed on hover and `0` (default) to keep them normal.</td>
  </tr>
  <tr>
    <td>`borderHoverDashLen`</td>
    <td>Sets the length of each dash for all data plots on hover(in pixels).</td>
  </tr>
  <tr>
    <td>`borderHoverDashGap`</td>
    <td>Sets the gap between two consecutive dashes for all data plots on hover(in pixels).</td>
  </tr>
</table>






