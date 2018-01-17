---
permalink: basic-chart-configurations/vertical-lines.html
title: Vertical Lines | FusionCharts
description: Vertical separator lines or vlines are elements that can differentiate between data blocks in a chart. They can be placed between any two data points
heading: Vertical Lines
chartPresent: true
---

Vertical (or horizontal in case of bar charts) separator lines or `vlines` are elements that can differentiate between data blocks in a chart. They can be placed between any two data points, or aligned to specific data points.

![Vertical Lines](/assets/images/vertical_lines.png)

This section talks about:

* <a href="/basic-chart-configurations/vertical-lines#configuring-position-of-vertical-lines" class="smoth-scroll">Configuring positions of vertical lines</a>

* <a href="/basic-chart-configurations/vertical-lines#configuring-labels-for-vertical-lines" class="smoth-scroll">Configuring labels for vertical lines</a>

* <a href="/basic-chart-configurations/vertical-lines#customizing-vertical-line-display-properties" class="smoth-scroll">Customizing vertical line display properties</a>

* <a href="/basic-chart-configurations/vertical-lines#configuring-label-borders" class="smoth-scroll">Configuring label borders</a>

## Configuring position of vertical lines

You can configure the position where a vertical line will be rendered. A line chart with a vertical line displayed between the Friday and Saturday data points looks as below:

{% embed_all configuring-your-chart-vertical-lines-example-1.js %}

Given below is the list of attributes used to configure position of vertical separator line:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`linePosition`</td>
    <td>It is used to specify the relative position of the vertical line with value ranging from `0` to `1`. If a vertical line is to be plotted between two data points, then the first point is ‘0’ and the second point is ‘1’. By default, it is ‘0.5’ to show it between the points.</td>
  </tr>
  <tr>
    <td>`vLine`</td>
    <td>Set this to `1` to show vertical line or `0` to hide it.</td>
  </tr>
</table>






## Configuring labels for vertical lines

### Creating labels

A line 2D chart with a label ("weekend") for the vertical line between the columns for Friday and Saturday looks as below:

{% embed_all configuring-your-chart-vertical-lines-example-2.js %}

Given below is the attribute used to create labels for a vertical separator line:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the title of the specified vertical line.</td>
  </tr>
</table>






### Configuring label positions

A line chart with the label position configured to show along the middle of the vline looks as below:

{% embed_all configuring-your-chart-vertical-lines-example-2.js %}

Given below is the attribute used to set label position for vertical lines:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`labelPosition`</td>
    <td>It is used to specify the relative position of the label of the vertical line with value ranging from `0` to `1`. In vertical charts, `0` means top of canvas and `1` means bottom. In horizontal charts, `0` means left of canvas and `1` means right.</td>
  </tr>
</table>






### Configuring label alignment

A line chart with a customized label alignment looks as below:

{% embed_all configuring-your-chart-vertical-lines-example-3.js %}

{% embed_all configuring-your-chart-vertical-lines-example-4.js %}

Note that, in the first chart, the label for the vertical line is vertically aligned to the top and horizontally aligned to the left. In the second chart, the label for the vertical line is vertically aligned to the bottom and horizontally aligned to the right.

Given below is a brief description of the attributes used to align the label for a vertical line:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`labelHAlign`</td>
    <td>It is used to specify the horizontal anchor point for a `vLine` label. The possible values for this attribute are `left`, `center` (default), and `right`.</td>
  </tr>
  <tr>
    <td>`labelVAlign`</td>
    <td>It is used to specify the vertical anchor point for a `vLine` label. The possible values for this attribute are `top`, `middle` (default), and `bottom`.</td>
  </tr>
</table>








## Customizing vertical line display properties

A line chart with the appearance of the vertical line customized (in this case: dashed appearance) looks as below:

{% embed_all configuring-your-chart-vertical-lines-example-5.js %}

Given below is the list of attributes used to customize the appearance of a vertical line:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>If specifies the hex code for the color that will be used to render the vertical line. e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>Sets the thickness of the vertical line(in pixels).</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>Sets the transparency of a vertical line. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>Set this to `1` to make vertical line dashed or `0` (default) to make them normal.</td>
  </tr>
  <tr>
    <td>`dashLen`</td>
    <td>Sets the length of each dash of a vertical line(in pixels).</td>
  </tr>
  <tr>
    <td>`dashGap`</td>
    <td>Sets the gap between two consecutive dashes in a vertical line (in pixels).</td>
  </tr>
</table>






## Configuring label borders

A line chart rendered without a border for the label of the vertical line looks as below:

{% embed_all configuring-your-chart-vertical-lines-example-6.js %}

Given below is the list of attributes used to turn the label border on or off:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`showVLineLabelBorder`</td>
    <td>It is used to specify whether to display the label border for all vertical lines. The attribute can be set at the `chart` object level.</td>
  </tr>
  <tr>
    <td>`showLabelBorder`</td>
    <td>It is used to specify whether to display the label border for a specific vertical line. This attribute can be configured for a specific`vLine` and overrides the setting in the chart object.</td>
  </tr>
</table>





