---
permalink: gauge-and-widgets-guide/bullet-graph/configuring-bullet-graph.html
title: Configuring Bullet Graph | FusionCharts
description: FusionCharts Suite XT allows you to configure several cosmetic and functional properties for the bullet graphs.
heading: Configuring Bullet Graph
chartPresent: true
---

FusionCharts Suite XT allows you to configure several cosmetic and functional properties for the bullet graphs.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/bullet-graph/configuring-bullet-graph.html#customizing-plot-and-target-properties">Customize plot and target properties</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/bullet-graph/configuring-bullet-graph.html#customizing-color-range-properties">Customize color range properties</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/bullet-graph/configuring-bullet-graph.html#customizing-tick-marks-and-tick-values">Customize tick marks</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/bullet-graph/configuring-bullet-graph.html#rendering-a-dot-as-the-plot-instead-of-a-filled-bar">Render a dot as the data plot</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/bullet-graph/configuring-bullet-graph.html#showinghiding-chart-value">Show/hide the chart value</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/bullet-graph/configuring-bullet-graph.html#configuring-hover-effects">Configure hover effects</a>

## Customizing Plot and Target Properties

### Customizing Color Properties

A bullet graph with the color properties customized looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-1.js %}

Given below is a brief description of the attributes used to customize plot and target color properties:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotFillColor`</td>
    <td>It is used to specify the hex code for the fill color for the plot bar, e.g. #23ACB5. </td>
  </tr>
  <tr>
    <td>`plotFillAlpha`</td>
    <td>It is used to specify the transparency for the plot bar. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 20. </td>
  </tr>
  <tr>
    <td>`targetColor`</td>
    <td>It is used to specify the hex code for the color used to render the target line, e.g. #FFFFFF.</td>
  </tr>
  <tr>
    <td>`targetThickness`</td>
    <td>It is used to specify the thickness, in pixels, for the target line, e.g. 3.</td>
  </tr>
</table>


### Customizing Border Cosmetics

A bullet graph with the border properties customized looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-2.js %}

Given below is a brief description of the attributes used to customize plot and target border properties:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showPlotBorder`</td>
    <td>It is used to specify whether a border will be shown for the plot bar. Setting this attribute to `1` will show the plot border, setting it to `0` (default) will hide it. </td>
  </tr>
  <tr>
    <td>`plotBorderColor`</td>
    <td>It is used to specify the hex code of the plot border color, e.g. #456ADC. </td>
  </tr>
  <tr>
    <td>`plotBorderThickness`</td>
    <td>It is used to specify the thickness, in pixels, for the plot border, e.g. 4.</td>
  </tr>
  <tr>
    <td>`plotBorderAlpha`</td>
    <td>It is used to specify the transparency for the plot border. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50. </td>
  </tr>
</table>


### Customizing the Plot and Target Width and Height

By default, the chart automatically decides the width/height (width in case of a vertical bullet graph and height in case of the horizontal bullet graph) based on the data you provide. However, you can configure these manually.

A horizontal bullet graph with the height of the plot and target bar customized looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-3.js %}

Given below is a brief description of the attributes used to customize the plot and target height:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotfillpercent`</td>
    <td>It is used to specify the percentage of color range that the plot fill bar will occupy.</td>
  </tr>
  <tr>
    <td>`targetFillPercent`</td>
    <td>It is used to specify the percentage of color range that the target fill bar will occupy.</td>
  </tr>
</table>


## Customizing Color Range Properties

### Configuring Color

You can configure the color range to be filled with a gradient mix instead of a solid color.

A horizontal bullet graph configured for the color range properties looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-4.js %}

Given below is a brief description of the attributes used to configure the color properties for the color range:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`colorRangeFillMix`</td>
    <td>It is used to specify the gradient fill formula for the color range, e.g. {light-10}, {light-70}, {dark-10}.</td>
  </tr>
  <tr>
    <td>`colorRangeFillRatio`</td>
    <td>It is used to specify the ratio in which each color constituent in the gradient fill mix will be applied to the color range, e.g. 10, 70, 20.</td>
  </tr>
  <tr>
    <td>`showColorRangeBorder`</td>
    <td>It is used to specify whether a border will be shown for the color range. Setting this attribute to `1` will show the border, setting it to `0` (default) will hide it. </td>
  </tr>
  <tr>
    <td>`colorRangeBorderColor`</td>
    <td>It is used to specify the hex code for the border color for the color range, e.g. #444444.</td>
  </tr>
  <tr>
    <td>`colorRangeBorderThickness`</td>
    <td>It is used to specify the thickness, in pixels, for the color range border, e.g. 3.</td>
  </tr>
  <tr>
    <td>`colorRangeBorderAlpha`</td>
    <td>It is used to specify the transparency of the color range border. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 100. </td>
  </tr>
</table>


<p class="text-info">To render the bullet graph in 2D, set the `colorRangeFillMix` attribute to an empty value, like this `"colorRangeFillMix": ""`.</p>

### Configuring Shadow

A horizontal bullet graph with  the shadow effect enabled looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-5.js %}

The above chart is rendered with a __Show Shadow ?__ check box. Selecting this check box will enable the shadow effect for the bullet graph, deselecting it will disable the effect.

Given below is a brief description of the attribute used to enable the shadow effect:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showShadow`</td>
    <td>It is used to specify whether shadow effects will be enabled for the color range. Setting this attribute to `1` will enable the shadow effect, setting it to `0` (default) will disable it. </td>
  </tr>
</table>


## Customizing Tick Marks and Tick Values

### Customizing Tick/Value Visibility and Positioning

In a horizontal bullet graph, by default, the tick marks are rendered below the graph; you can opt to render it above the graph. In a vertical bullet graph, by default, the tick marks are rendered on the right; you can opt to show them on the left. You can also opt to hide the tick marks and tick values.

A horizontal bullet graph with the tick/value visibility and positioning  customized looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-6.js %}

The above chart is rendered with three check boxes: "Show Tick Mark?" - Selecting it will show the tick marks, deselecting it will hide them, “Show Tick Value?” - Selecting it will show the tick values, deselecting it will hide them, “Tick on Top?” - Selecting it will show the tick marks above the graph, deselecting it will show them below.

Given below is a brief description of the attributes used to customize the tick/value visibility and positioning:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showTickMarks`</td>
    <td>It is used to specify whether tick marks will be shown for the graph. Setting this attribute to `0` hides the tick marks, setting it to `1` (default) shows them.</td>
  </tr>
  <tr>
    <td>`showTickValues`</td>
    <td>It is used to specify whether tick values will be shown for the graph. Setting this attribute to `0` hides the tick values, setting it to `1` (default) shows them.</td>
  </tr>
  <tr>
    <td>`ticksBelowGraph`</td>
    <td>It is used to specify whether the tick marks and tick values will be shown above or below the graph. Setting this attribute to `0` will render the tick marks and values above the graph, setting it to `1` (default) will render them below the graph.</td>
  </tr>
</table>


### Customizing the Number and Cosmetics of Major and Minor Tick Marks

By default, the number of major and minor tick marks is determined by the chart automatically based on the data provided by you.

A bullet graph with the number and cosmetics of major and minor tick marks customized looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-7.js %}

Given below is a brief description of the attributes used to customize the tick marks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`majorTMNumber`</td>
    <td>It is used to specify the number of major tick marks to be rendered.</td>
  </tr>
  <tr>
    <td>`minorTMNumber`</td>
    <td>It is used to specify the number of minor tick marks to be rendered.</td>
  </tr>
  <tr>
    <td>`majorTMColor`</td>
    <td>It is used to specify the hex code of the color using which the major tick marks will be rendered on the gauge, e.g. #333333.</td>
  </tr>
  <tr>
    <td>`majorTMAlpha`</td>
    <td>It is used to specify the transparency of the major tick marks. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 100.</td>
  </tr>
  <tr>
    <td>`majorTMHeight`</td>
    <td>It is used to specify the height of the major tick marks, e.g. 15.</td>
  </tr>
  <tr>
    <td>`majorTMThickness`</td>
    <td>It is used to specify the thickness of the major tick marks, e.g. 2.</td>
  </tr>
  <tr>
    <td>`minorTMColor`</td>
    <td>It is used to specify the hex code of the color using which the minor tick marks will be rendered on the gauge, e.g. #666666.</td>
  </tr>
  <tr>
    <td>`minorTMAlpha`</td>
    <td>It is used to specify the transparency of the minor tick marks. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 100.</td>
  </tr>
  <tr>
    <td>`minorTMHeight`</td>
    <td>It is used to specify the height of the minor tick marks, e.g. 12.</td>
  </tr>
  <tr>
    <td>`minorTMThickness`</td>
    <td>It is used to specify the thickness of the minor tick marks, e.g. 1.</td>
  </tr>
</table>


## Rendering a Dot as the Plot Instead of a Filled Bar

A bullet graph rendered with a dot as the plot instead of the filled bar looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-8.js %}

Given below is a brief description of the attribute used to show a dot instead of the filled bar:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotAsDot`</td>
    <td>It is used to specify whether a dot will be shown as the plot instead of the filled bar. Setting this attribute to `1` will render a dot as the plot, setting it to `0` (default) will render a filled bar.</td>
  </tr>
</table>


## Showing/hiding Chart Value

A horizontal bullet graph with the chart value hidden looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-9.js %}

The chart above is rendered with a Show Value? check box. Selecting this check box will show the chart value, deselecting it will hide the value.

Given below is a brief description of the attribute used to show/hide the data value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>It is used to specify whether the chart value will be shown. Setting this attribute to `0` will hide the value, setting it to `1` (default) will show the value. </td>
  </tr>
</table>


## Configuring Hover Effects

You can use hover effects to improve the visual representation of your gauge.

A horizontal bullet graph with hover effects enabled looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-configuring-bullet-graph-example-10.js %}

Given below is a brief description of the attributes used to enable and configure the hover effect:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be configured for the chart elements. Setting this attribute to `1` enables the hover effects, setting it to `0` (default) disables them. </td>
  </tr>
  <tr>
    <td>`targetHoverColor`</td>
    <td>It is used to specify the hex code for the target line color when the mouse pointer is hovered over it, e.g. #234ACD. </td>
  </tr>
  <tr>
    <td>`targetHoverAlpha`</td>
    <td>It specifies the transparency for the target line when the mouse pointer is hovered over it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 55. </td>
  </tr>
  <tr>
    <td>`targetHoverThickness`</td>
    <td>It is used to specify the thickness of the target line when the mouse pointer is hovered over it, e.g. 5.</td>
  </tr>
  <tr>
    <td>`showPlotBorderOnHover`</td>
    <td>It is used to specify whether the plot border will be shown when the mouse pointer is hovered over it. Setting this attribute to `1` will show the plot border on hover, setting it `0` will not.<br/>
    <p class="text-info">If you set the `showPlotBorder` attribute to `0` but configure the other hover properties for the plot border, the border is still rendered.</p></td>
  </tr>
  <tr>
    <td>`plotBorderHoverColor`</td>
    <td>It is used to specify the hex code for the plot border when the mouse pointer is hovered over it, e.g. #34ACDB. </td>
  </tr>
  <tr>
    <td>`plotBorderHoverAlpha`</td>
    <td>It is used to specify the transparency for the plot border when the mouse pointer is hovered over it. This attribute takes values between 0 (transparent) and 100 (opaque), e. g. 100. </td>
  </tr>
  <tr>
    <td>`plotBorderHoverThickness`</td>
    <td>It is used to specify the thickness for the plot border when the mouse pointer is hovered over it, e.g. 4.  </td>
  </tr>
</table>