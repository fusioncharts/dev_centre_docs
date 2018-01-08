---
permalink: basic-chart-configurations/configuring-your-chart-data-labels.html
title: Data Labels | FusionCharts
description: Data labels are the names of the data points that are displayed on the x-axis of a chart. Label Management for line and area charts in possible.
heading: Data Labels
chartPresent: true
---

Data labels are the names of the data points that are displayed on the x-axis of a chart.

![FusionCharts data labels](/assets/images/data_labels_new.png)

In the chart shown above Jan, Feb, Mar etc. are data labels.

This section explains:

* <a href="/basic-chart-configurations/configuring-your-chart-data-labels#data-label-display-modes" class="smoth-scroll">Data label display modes</a>

* <a href="/basic-chart-configurations/configuring-your-chart-data-labels#displaying-specific-data-labels" class="smoth-scroll">Displaying specific data labels</a>

* <a href="/basic-chart-configurations/configuring-your-chart-data-labels#label-management-line-and-area-charts" class="smoth-scroll">Label management: Line and area charts</a>

## Data Label Display Modes

With FusionCharts Suite XT, you can configure the arrangement and display properties for data labels depending on what suits your needs best. There are 5 different display modes to choose from.

The attribute used for setting the data label display mode is described below:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelDisplay`</td>
    <td>Used to customize the alignment of data labels (x-axis labels). There are 5 options: `auto`, `wrap`, `stagger`, `rotate` or `none`. By default, this attribute is set to `auto` mode. Set `labelDisplay` to none if you don't want to customize x-axis labels.</td>
  </tr>
</table>


### Auto Mode

In this mode, the chart automatically chooses the most appropriate display mode for data labels - depending on space availability. If the number of data labels is greater than the available space, then the data labels are either truncated (with ellipses to indicate truncation), wrapped, or rotated.

On hovering over a truncated data label, a tooltip showing the full label text is displayed. The auto mode is active by default, but can be disabled by switching to an alternative label display mode.

A column 2D chart with data labels in auto mode looks like this:

{% embed_all configuring-your-chart-data-labels-example-1.js %}

The list of attributes used to configure data labels in Auto mode is as follows:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelDisplay`</td>
    <td>Used to customize the alignment of data labels (x-axis labels). There are 5 options: `auto`, `wrap`, `stagger`, `rotate` or `none`. By default, this attribute is set to `auto` mode.</td>
  </tr>
  <tr>
    <td>`useEllipsesWhenOverflow`</td>
    <td>When enabled in `auto` mode, long data labels are truncated by adding ellipses to prevent them from overflowing the x-axis limits. The default value is `1`.</td>
  </tr>
</table>


### Wrap Mode

In this mode, you can wrap long x-axis labels into multiple lines. If enough space is not available in a chart, this mode will automatically trim labels, add ellipses at the end, and show tooltips for such labels.

A column 2D chart with the data labels in wrap mode look like this:

{% embed_all configuring-your-chart-data-labels-example-2.js %}

The attribute used to set the data label mode to wrap mode is described below:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelDisplay`</td>
    <td>Used to customize the alignment of data labels (x-axis labels). There are 5 options: `auto`, `wrap`, `stagger`, `rotate` or `none`. By default, this attribute is set to `auto` mode.</td>
  </tr>
</table>


<p class="text-info">In horizontal bar charts, you can specify the maximum % of available width for data labels with the `maxLabelWidthPercent` attribute. This attribute takes a value between `5` and `80`.</p>

### Rotate Mode

A column 2D chart with the data labels in rotate mode with slant labels look like this

{% embed_all configuring-your-chart-data-labels-example-3.js %}

The attributes used for rotating data labels is as follows:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelDisplay`</td>
    <td>Used to customize the alignment of data labels (x-axis labels). There are 5 options: `auto`, `wrap`, `stagger`, `rotate` or `none`. By default, this attribute is set to `auto` mode.</td>
  </tr>
  <tr>
    <td>`slantLabels`</td>
    <td>In the `rotate` mode, set this to `1` to slant the axis label at 45 degrees. Setting it to `0` (default) makes the data labels vertical.</td>
  </tr>
</table>


<p class="text-info">In case of Scatter and Bubble charts, when the attribute` xAxisLabelMode` is set to auto, slanting of the X-axis labels is not applicable</p>

### Staggered Mode with Stagger Lines

In this mode, data labels are distributed on multiple levels (default is 2) to increase the inter label space available on each level. For example, a column 2D chart with month labels in staggered mode looks like this:

{% embed_all configuring-your-chart-data-labels-example-4.js %}

Please reference attributes table from 'Auto Mode' section above.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelDisplay`</td>
    <td>Using this attribute, you can customize the alignment of data labels (x-axis labels). There are 5 options: `auto`, `wrap`, `stagger`, `rotate` or `none`. By default, this attribute is set to `auto` mode.</td>
  </tr>
  <tr>
    <td>`staggerLines`</td>
    <td>Specifies the number of levels used for staggering labels. Set to `2` by default.</td>
  </tr>
</table>


### N-th Label Mode

If your data plot consists of values representing continuous quantities such as date, time, temperature etc. you can use the `labelstep` attribute to display every n-th label, instead of all labels on the x-axis.

A column 2D chart with the data labels using n-th label mode looks like this:

{% embed_all configuring-your-chart-data-labels-example-5.js %}

The list of attributes used to configure N-th Label Mode for data labels is as follows:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelDisplay`</td>
    <td>Used to customize the alignment of data labels (x-axis labels). There are 5 options: `auto`, `wrap`, `stagger`, `rotate` or `none`. By default, this attribute is set to `auto` mode.</td>
  </tr>
  <tr>
    <td>`labelStep`</td>
    <td>Setting this variable to `n` will show the first label (from left) and every n-th label after that. e.g., a chart showing data for 12 months and set with `labelStep`: `3` will show labels for January, April, July and October. The rest of the labels will be skipped.</td>
  </tr>
</table>


## Displaying Specific Data Labels

You can display specific data labels with the help of the `showLabels` and the `showLabel` attributes. A column 2D chart showing only specific data label look like this:

{% embed_all configuring-your-chart-data-labels-example-6.js %}

Given below is a brief description of the attributes used to show specific data labels:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showLabels`</td>
    <td>Whether to show or hide labels at chart / dataset level. Set it to `1` to show all labels and `0` to hide them.</td>
  </tr>
  <tr>
    <td>`showLabel`</td>
    <td>Use this to show/hide labels of individual data values at the data level. This overrides the setting of the 'showLabels' attribute.</td>
  </tr>
</table>


## Label Management: Line and Area Charts

With label management, you can adjust the canvas padding (the space between the canvas border and the position where the data plot begins and ends) to accommodate long labels in line and area charts. This ensures that the first and last x-axis labels are not rendered outside the canvas border and the labels donâ€™t overlap each other.

![FusionCharts data labels canvas padding](/assets/images/data_labels_canvas_padding.png)

To accommodate long labels, the chart automatically adjusts the right and left canvas margins. A line 2D chart with automatic canvas padding set for label management look like this:

{% embed_all configuring-your-chart-data-labels-example-7.js %}

An Area 2D chart with `canvasPadding` attribute configured looks like this:

{% embed_all configuring-your-chart-data-labels-example-8.js %}

Given below is a brief description of the attributes used to set the canvas padding in a chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`canvasPadding`</td>
    <td>Lets you set the space between the canvas border and first (& last data plots). If you set it `0` the first and the last anchor points will be on the canvas border. </td>
  </tr>
</table>


Advanced x-axis label management has been implemented to achieve the following objectives:

* All x-axis labels should get centrally aligned to the respective data-plots (columns, points on line charts etc.)

* X-axis labels should not overlap each other

* X-axis labels should not overlap with other chart objects such as legends or x-axis name

* Long labels should not go outside the chart

* Optimized truncation of longer labels and putting ellipses at the end

<p class="text-info">Advanced label management is not applicable to Bar, Pie, Doughnut, Marimekko, Zoom Line and Multi-series Combination 3D charts.</p>

## Customizing Data Label Properties

You can customize the cosmetic properties of data labels such as font, border, background, and alpha. Let us understand each of them in detail.

### Font Properties

A column 2D chart with custom font, font-color and font-size of data labels looks like:

{% embed_all configuring-your-chart-data-labels-example-11.js %}

Given below is the list of attributes used to customize the font for data labels.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelFont`</td>
    <td>Sets the font face for the data labels, e.g. `Arial`</td>
  </tr>
  <tr>
    <td>`labelFontColor`</td>
    <td>Sets the font color for data labels, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`labelFontSize`</td>
    <td>Specifies the data label font size, with a range of `0` to `72`.</td>
  </tr>
  <tr>
    <td>`labelFontBold`</td>
    <td>Set to `1` to make data label font bold.</td>
  </tr>
  <tr>
    <td>`labelFontItalic`</td>
    <td>Set to `1` to italicizes the data label font.</td>
  </tr>
  <tr>
    <td>`labelAlpha`</td>
    <td>Sets the transparency for text, background and border of the data labels. Value ranges from `0`(transparent) to `100`(opaque).</td>
  </tr>
</table>


### Border Properties

A column 2D chart with a dashed border around the data labels looks like:

{% embed_all configuring-your-chart-data-labels-example-12.js %}

Given below is the list of attributes used to customize the border for data labels.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelBorderColor`</td>
    <td>Sets the border color of data label, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`labelBorderAlpha`</td>
    <td>Sets the transparency of border of the data labels. Value ranges from `0`(transparent) to `100`(opaque).</td>
  </tr>
  <tr>
    <td>`labelBorderPadding`</td>
    <td>Sets the padding between data labels and border.</td>
  </tr>
  <tr>
    <td>`labelBorderRadius`</td>
    <td>Sets the radius of border around the data labels (in pixels).</td>
  </tr>
  <tr>
    <td>`labelBorderThickness`</td>
    <td>Sets data label border thickness (in pixels).</td>
  </tr>
  <tr>
    <td>`labelBorderDashed`</td>
    <td>Set to `1` to draw label borders using dashed lines.</td>
  </tr>
  <tr>
    <td>`labelBorderDashGap`</td>
    <td>Sets the gap between two consecutive dashes of data label border (in pixels).</td>
  </tr>
  <tr>
    <td>`labelBorderDashLen`</td>
    <td>Sets the length of each dash in data label border (in pixels).</td>
  </tr>
</table>


### Background Properties

A column 2D chart with custom background for data labels is shown below:

{% embed_all configuring-your-chart-data-labels-example-13.js %}

Given below is the list of attributes used to customize the background for data labels.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelBgColor`</td>
    <td>Sets the background color of data labels, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`labelBgAlpha`</td>
    <td>Sets the transparency of background of the data labels. Value ranges from `0`(transparent) to `100`(opaque).</td>
  </tr>
</table>


## Configuring Data Label Height

Shown below is a chart with some very long data labels. As a result of this, the data plots get reduced to a fraction of the chart.

{% embed_all configuring-your-chart-data-labels-example-14.js %}

<br />

Using the `maxLabelHeight` attribute, you can limit the maximum height of the data labels. This will truncate the data labels (add ellipsis) according to the maximum height. Applying `maxLabelHeight` to the above chart yields the following result:

{% embed_all configuring-your-chart-data-labels-example-15.js %}

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`maxLabelHeight`</td>
    <td>Sets the maximum height (in pixels) that data labels can occupy.</td>
  </tr>
</table>

<br />


## Adding Data Label Links

A column 2D chart with x-axis labels linked to `http://www.fusioncharts.com/` is shown below:

{% embed_all configuring-your-chart-data-labels-example-16.js %}

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelLink`</td>
    <td>Sets the link for each x-axis label. e.g. `http://www.fusioncharts.com/`</td>
  </tr>
</table>