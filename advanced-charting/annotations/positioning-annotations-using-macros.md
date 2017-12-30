---
permalink: advanced-chart-configurations/annotations/positioning-annotations-using-macros.html
title: Positioning Annotations Using Macros | FusionCharts
description: This article discusses positioning annotations at runtime using macros. Dynamic positioning using macros with respect to the canvas, the dataset, and the axes.
heading: Positioning Annotations Using Macros
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT]{% linkTo tutorials/getting-started/building-your-first-chart.md %}

* [Introduction to annotations]{% linkTo tutorials/advanced-charting/annotations/introduction.md %}

* [Creating simple annotations]{% linkTo tutorials/advanced-charting/annotations/creating-annotations/introduction.md %}

This article discusses positioning annotations at runtime using macros.

It describes:

* <a href="{{ site.baseurl }}advanced-chart-configurations/annotations/positioning-annotations-using-macros.html#annotation-macros">Annotation macros</a>

* <a href="{{ site.baseurl }}advanced-chart-configurations/annotations/positioning-annotations-using-macros.html#dynamic-positioning-using-macros">Dynamic positioning using macros with respect to the canvas, the dataset, and the axes</a>

* <a href="{{ site.baseurl }}advanced-chart-configurations/annotations/positioning-annotations-using-macros.html#annotation-macros-for-positioning-with-respect-to-other-chart-elements">Annotation Macros for positioning with respect to other chart elements</a>

<p class="text-info"> Annotations can also be [positioned statically]{% linkTo tutorials/advanced-charting/annotations/positioning-annotations-using-absolute-values.md %} in the chart constructor.</p>

## Annotation Macros

Annotation macros are predefined variables used to dynamically position individual annotation items. Macros assume values at run-time and can be used with all annotation positioning attributes to position annotations relative to chart/gauge elements, like the caption, legend, and so on. For example, for an annotation item, if you set `"x": "$captionStartX"”"`, `x` will be assigned the value of the starting x coordinate of the chart caption.

You can use any number of macros as variables with the positioning attributes. Using the **+** or **-** operators, you can add or subtract the macro values from each other or from a fixed number.  For example, for an annotation item, assume that you set `"x": "$canvasStartX + $chartLeftMargin + 2"`. The starting x coordinate of the item will now be set to a value that is the starting x coordinate of the chart canvas, the chart’s left margin, and a fixed two pixels added to together.

<p class="text-info">You can use only the `+` or `-` operators to create a macro expression. There should be at least one macro name to create a macro expression. Common mathematical expressions like `30 + 10 - 5`, which do not contain a macro, will not work.</p>

When a chart or a gauge is resized, the values provided by macros are not scaled. Instead, they are replaced with the new values provided by the resized chart. However, the numeric values present in the macro expressions are scaled. For example, the value `10` in the expression `$chartStartY + 10` is scaled when the chart is dynamically resized. To avoid this, prefix the number with the `$` symbol. For example, the value `10` in the expression `$chartStartY + $10` is NOT scaled when you dynamically resize the chart.

## Dynamic Positioning using Macros

Annotations can be positioned dynamically with respect to the chart itself and chart elements like the legend, caption, canvas, axes, as well as the datasets.

### Positioning Annotations with Respect to the Canvas

A spline chart configured to position annotations with respect to the chart canvas is shown below:

{% embed_chart advanced-charting-annotations-positioning-annotations-using-macros-example-1.js %}



In the chart above, the annotation items (a rectangle and a text label) showing the total footfall at Bakersfield Central are positioned at the top-right corner of the canvas. The values of the attributes `x`, `y`,`toX`, and `toY` are specified with respect to the canvas start and end position, using annotation macros.

The list of canvas-related macros is given below:

<table>
  <tr>
    <th>Macro Name</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>`$canvasStartX`, `$canvasStartY`, `$canvasEndX`, `$canvasEndY`, `$canvasWidth`, `$canvasHeight`</td>
    <td>For charts that have a canvas (primarily, cartesian charts), these macros are used to position annotations with respect to the canvas.</td>
  </tr>
</table>


The data structure needed to render the above chart is given below:

{% embed_data advanced-charting-annotations-positioning-annotations-using-macros-example-1.js %}

### Positioning Annotations with Respect to Datasets

A spline chart configured to position annotations with respect to datasets is shown below:

{% embed_chart advanced-charting-annotations-positioning-annotations-using-macros-example-2.js %}

In the chart above,  the annotation items (the horizontal dashed line, a text label on a rectangle  at extreme left of the dashed line, and the label with the store name and the total number of  visitors on the extreme right side of the line) are dynamically positioned such that they appear when you hover the mouse pointer over the corresponding anchor.  This is done by specifying values for the `x`, `y`,`tox, and `toy` attributes with respect to the dataset position, using annotation macros.

A brief description of the sub-token macros used to position annotations with respect to datasets is given below:

<table>
  <tr>
    <th>Macro Name</th>
    <th>Sub Tokens Applicable</th>
    <th>Description</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>$dataset</td>
    <td>dataset_index [separator] set [separator] set_index [separator] position_key</td>
    <td>Lets  you add the position information of the plots in a dataset to the annotation.</td>
    <td>Possible position_key values are X, Y, STARTX, STARTY, ENDX, ENDY, CENTERX, CENTERY.

For example, to position a rectangle above the second column in a column chart, the possible values could be:
x: $dataset.0.set.1.STARTX,
y:$dataset.0.set.1.STARTY,
tox: $dataset.0.set.1.STARTX+100,
toy:$dataset.0.set.1.STARTY-40 </td>
  </tr>
</table>


The data structure to render the above chart is given below::

{% embed_data advanced-charting-annotations-positioning-annotations-using-macros-example-2.js %}

### Positioning Annotations with Respect to the Axes

A spline chart with three rectangle and three text annotations positioned with respect to the y-axis is shown below:

{% embed_chart advanced-charting-annotations-positioning-annotations-using-macros-example-3.js %}

The annotation items, showing the low, moderate, and high footfall ranges, are dynamically positioned over the y-axis using annotation sub-token macros.

A brief description of the sub-token macros used to position annotations with respect to the axes is given below:

<table>
  <tr>
    <th>Macro Name</th>
    <th>Subtokens</th>
    <th>Description</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>$yaxis</td>
    <td>yaxis_index [separator] label [separator] label_index [separator] position_key</td>
    <td>Lets you add the position information of the y-axis labels to the annotation.</td>
    <td>Possible position_key values are X, Y, STARTX, STARTY, ENDX, ENDY, CENTERX, CENTERY.

For example, to position a text on the y axis, the possible values could be:
x: $yaxis.0.label.1.startx -12,
y: $yaxis.0.label.0.starty - 5
</td>
  </tr>
  <tr>
    <td>$xaxis</td>
    <td>xaxis_index [separator] label [separator] label_index [separator] position_key</td>
    <td>Lets you add the position information of the x-axis labels to the annotation.</td>
    <td>Possible position_key values for this macro are the same as that for the `$yaxis` macro.

For example, to position a text on the x axis, the possible values could be:
x: $xaxis.label.1.startx+2,
y: $xaxis.label.0.starty+3,

</td>
  </tr>
</table>


The data structure to render the above chart is given below::

{% embed_data advanced-charting-annotations-positioning-annotations-using-macros-example-3.js %}

## Annotation Macros for Positioning with Respect to Other Chart Elements

Given below is the list and a brief description of the annotation macros used for dynamic positioning with respect to the chart,

<table>
  <tr>
    <th>Macro Name</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>$chartStartX, $chartStartY, $chartEndX, $chartEndY, $chartCenterX, $chartCenterY, $chartWidth, $chartHeight</td>
    <td>Define the annotation position attributes - `x`, `y`, `toX`, `toY`, etc  relative to the chart.</td>
  </tr>
  <tr>
    <td>$chartTopMargin, $chartBottomMargin, $chartLeftMargin, $chartRightMargin</td>
    <td>Position the annotations with respect to the chart margins..</td>
  </tr>
  <tr>
    <td>$captionStartX, $captionStartY, $captionEndX, $captionEndY, $captionWidth, $captionHeight, $subCaptionStartX, $subCaptionStartY, $subCaptionEndX, $subCaptionEndY, $subCaptionWidth, $subCaptionHeight</td>
    <td>Position the annotation relative to the chart caption and sub-caption.</td>
  </tr>
  <tr>
    <td>$legendStartX, $legendStartY, $legendEndX, $legendEndY, $legendWidth, $legendHeight</td>
    <td>Position annotations around a legend. These macros are applicable to cartesian charts.
</td>
  </tr>
  <tr>
    <td>$gaugeStartX, $gaugeStartY, $gaugeEndX, $gaugeEndY, $gaugeCenterX, $gaugeCenterY</td>
    <td>Position annotations around gauges. </td>
  </tr>
  <tr>
    <td>$gaugeStartAngle, $gaugeEndAngle</td>
    <td>Position annotations with respect to the start angle and end angle of an angular gauge.</td>
  </tr>
  <tr>
    <td>$gaugeRadius</td>
    <td>Position annotations with respect to the radius of a bulb gauge.</td>
  </tr>
  <tr>
    <td>$plotWidth</td>
    <td>Position annotations with respect to the width of the entire funnel or pyramid plot.</td>
  </tr>
  <tr>
    <td>$plotSemiWidth</td>
    <td>Position annotations with respect to half-width of the entire funnel or pyramid plot.</td>
  </tr>
</table>
