---
permalink: basic-chart-configurations/titles-and-axis-names.html
title: Titles and Axis Names | FusionCharts
description: This section talks about titles and axis names on the charts. One can insert caption, sub-caption, x-axis name and y-axis name in a chart
heading: Titles and Axis Names
chartPresent: true
---

FusionCharts Suite XT allows you to add caption, sub-caption, x-axis name and y-axis name to your charts. You can configure the font properties for each of them.

The caption (also called the chart title) is the heading of your chart; a sub-caption is the text that appears just below the caption.

![Caption and Subcaption]({{ site.baseurl }}assets/images/titlesaxisnames.png)

Cartesian charts have axes that run along the left and the bottom borders of the canvas. The x-axis runs along the bottom border of the canvas, starting at the left and ending on the right. The y-axis runs along the left border of the canvas, starting at the bottom and ending at the top of the chart. You can configure names for both the axes.

This section is divided into following parts:

* <a href="{{ site.baseurl }}basic-chart-configurations/titles-and-axis-names.html#customizing-chart-caption-and-sub-caption">Customizing chart caption & sub-caption</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/titles-and-axis-names.html#customizing-x-axis-and-y-axis">Customizing X-Axis and Y-Axis</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/titles-and-axis-names.html#dual-y-axis">Customizing Dual Y-Axis</a>

## Customizing chart caption and sub-caption

### Setting the chart caption and sub-caption

A chart with both it’s caption and sub-caption set looks as below:

{% embed_all configuring-your-chart-titles-and-axis-names-example-1.js %}

Mentioned below is the list of attributes used to set the chart caption and sub-caption:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`caption`</td>
    <td>Sets the caption of the chart to a text value</td>
  </tr>
  <tr>
    <td>`subCaption`</td>
    <td>Sets the sub-caption of the chart to a text value</td>
  </tr>
</table>


### Customizing the caption and sub-caption font properties

You can customize the font properties of the chart’s caption and sub-caption.

A column 2D chart with the font colour set to maroon and with custom font size for caption and sub-caption looks as below:

{% embed_all configuring-your-chart-titles-and-axis-names-example-2.js %}

Below is the list of attributes used to customize caption and sub-caption font properties:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`captionFont`</td>
    <td>Sets the caption font family, e.g. `Arial`</td>
  </tr>
  <tr>
    <td>`captionFontColor`</td>
    <td>Sets the caption font color in hex code, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`captionFontSize`</td>
    <td>Sets the caption font size, with a range of `0` to `72`</td>
  </tr>
  <tr>
    <td>`captionFontBold`</td>
    <td>Set caption font to bold with a value of `1` (default) and use `0` to set it to normal.</td>
  </tr>
  <tr>
    <td>`subCaptionFont`</td>
    <td>Sets the sub-caption font family</td>
  </tr>
  <tr>
    <td>`subCaptionFontColor`</td>
    <td>Sets the sub-caption font color in hex code, eg. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`subCaptionFontSize`</td>
    <td>Sets the sub-caption font size in pixels, with a range of `0` to `72`</td>
  </tr>
  <tr>
    <td>`subCaptionFontBold`</td>
    <td>Set sub-caption font to bold with a value of `1` (default) and use `0` to set it to normal.</td>
  </tr>
</table>


### Configuring caption alignment

A column 2D chart with the caption aligned to the bottom right of the chart looks as shown below:

{% embed_all configuring-your-chart-titles-and-axis-names-example-3.js %}

Given below is a brief description of the attributes used to configure caption alignment:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`captionAlignment`</td>
    <td>Sets the horizontal alignment of the caption. Valid values are `left`, `center` (default), `right`.</td>
  </tr>
  <tr>
    <td>`captionOnTop`</td>
    <td>Set this to `1` (default) to show the caption on top of the chart or `0` to show at the bottom.</td>
  </tr>
  <tr>
    <td>`alignCaptionWithCanvas`</td>
    <td>Set it to `1` to align caption with the canvas area, instead of the chart area. Setting it `0` (default) will align it to the entire chart area.</td>
  </tr>
  <tr>
    <td>`captionHorizontalPadding`</td>
    <td>Configure the padding (in pixels) from either edge if the caption is not center aligned. Will be ignored if the caption is center aligned.</td>
  </tr>
</table>


## Customizing X-Axis and Y-Axis

You can configure axes names, font properties and border properties in FusionCharts Suite XT.

### Setting axes names

A column 2D chart with x-axis named "Quarter" and y-axis named “Amount (In USD)” looks as below:

{% embed_all configuring-your-chart-titles-and-axis-names-example-4.js %}

Given below is a description of the attributes used to configure axes names:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`xAxisName`</td>
    <td>Used to set the X-axis title of the chart</td>
  </tr>
  <tr>
    <td>`yAxisName`</td>
    <td>Used to set the Y-axis title of the chart</td>
  </tr>
</table>


### Configuring the font cosmetic properties for the axes names

You can configure the cosmetic properties like font, color and size of the x-axis name using attributes described in this sub-section.

A column 2D chart with the font cosmetic properties configured looks like this:

{% embed_all configuring-your-chart-titles-and-axis-names-example-5.js %}

Given below is the list of attributes used to configure fonts for the x-axis and y-axis:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`xAxisNameFont` (`yAxisNameFont`)</td>
    <td>Sets the x-axis (y-axis) font family, e.g. `Arial`.</td>
  </tr>
  <tr>
    <td>`xAxisNameFontColor` (`yAxisNameFontColor`)</td>
    <td>Sets the x-axis (y-axis) font color in hex code, e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`xAxisNameFontSize` (`yAxisNameFontSize`)</td>
    <td>Specifies the x-axis (y-axis) font size, with a range of `0` to `72`.</td>
  </tr>
  <tr>
    <td>`xAxisNameFontBold` (`yAxisNameFontBold`)</td>
    <td>Use `1` (default) to set x-axis (y-axis) font to bold and `0` to set it to normal.</td>
  </tr>
  <tr>
    <td>`xAxisNameFontItalic` (`yAxisNameFontItalic`)</td>
    <td>Use `1` to set x-axis (y-axis) font to italics and `0` (default) to set it to normal.</td>
  </tr>
</table>


### Configuring the border cosmetic properties of axes names

You can configure the border cosmetic properties of names using attributes described in this sub-section.

A column 2D chart with dashed borders around the axes names looks like this:

{% embed_all configuring-your-chart-titles-and-axis-names-example-6.js %}

Given below is the list of attributes used for configuring axes border properties:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`xAxisNameBorderColor` (`yAxisNameBorderColor`)</td>
    <td>Sets the border color of x-axis (y-axis) name in hex code, e.g. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`xAxisNameBorderAlpha` (`yAxisNameBorderAlpha`)</td>
    <td>Sets the transparency of x-axis (y-axis) name border. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`xAxisNameBorderPadding` (`yAxisNameBorderPadding`)</td>
    <td>Sets the x-axis (y-axis) name border padding (in pixels).</td>
  </tr>
  <tr>
    <td>`xAxisNameBorderRadius` (`yAxisNameBorderRadius`)</td>
    <td>Sets the x-axis (y-axis) name border radius (in pixels).</td>
  </tr>
  <tr>
    <td>`xAxisNameBorderThickness` (`yAxisNameBorderThickness`)</td>
    <td>Sets the x-axis (y-axis) name border thickness (in pixels).</td>
  </tr>
  <tr>
    <td>`xAxisNameBorderDashed` (`yAxisNameBorderDashed`)</td>
    <td>Set this to `1` to make the x-axis (y-axis) border dashed and `0` (default) to remove borders.</td>
  </tr>
  <tr>
    <td>`xAxisNameBorderDashLen` (`yAxisNameBorderDashLen`)</td>
    <td>Sets the length of each dash in x-axis (y-axis) name border (in pixels).</td>
  </tr>
  <tr>
    <td>`xAxisNameBorderDashGap` (`yAxisNameBorderDashGap`)</td>
    <td>Sets the gap between two consecutive dashes in x-axis (y-axis) name border (in pixels).</td>
  </tr>
</table>


### Configuring the font opacity and font background for axes names

A column 2D chart with the axes name background colour set to blue and high transparency configuration looks as below:

{% embed_all configuring-your-chart-titles-and-axis-names-example-7.js %}

The list of attributes used to configure the background for axis names is mentioned below:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`xAxisNameFontAlpha` (`yAxisNameFontAlpha`)</td>
    <td>Sets the transparency of x-axis (y-axis) font. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`xAxisNameBgColor` (`yAxisNameBgColor`)</td>
    <td>Sets the background color of x-axis (y-axis) name in hex code, e.g. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`xAxisNameBgAlpha` (`yAxisNameBgAlpha`)</td>
    <td>Sets the transparency of x-axis (y-axis) name's background. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`xAxisNameAlpha` (`yAxisNameAlpha`)</td>
    <td>Sets the transparency of x-axis (y-axis) name. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>


## Dual Y-Axis

### Configuring font cosmetic properties for the primary and secondary y-axis names

A multi-series combination 2D chart with the primary and secondary y-axis names italicized looks as shown below:

{% embed_all configuring-your-chart-titles-and-axis-names-example-8.js %}

Following is the list of attributes used to configure font properties for dual y-axes names:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`pYAxisName` (`sYAxisName`)</td>
    <td>Used to set the primary (secondary) y-axis title in dual y-axis chart</td>
  </tr>
  <tr>
    <td>`pYAxisNameFont` (`sYAxisNameFont`)</td>
    <td>Sets the primary (secondary) y-axis font family, e.g. `Arial`</td>
  </tr>
  <tr>
    <td>`pYAxisNameFontColor` (`sYAxisNameFontColor`)</td>
    <td>Sets the primary (secondary) y-axis font color in hex code, e.g. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`pYAxisNameFontSize` (`sYAxisNameFontSize`)</td>
    <td>Specifies the primary (secondary) y-axis font size, with a range of `0` to `72`.</td>
  </tr>
  <tr>
    <td>`pYAxisNameFontBold` (`sYAxisNameFontBold`)</td>
    <td>Use `1` (default) to set primary (secondary) y-axis font to bold and `0` to set it to normal.</td>
  </tr>
  <tr>
    <td>`pYAxisNameFontItalic` (`sYAxisNameFontItalic`)</td>
    <td>Use `1` to italicize primary (secondary) y-axis font and `0` (default) to set it to normal.</td>
  </tr>
</table>


### Configuring background properties for the primary and secondary y-axis names

A multi-series combination 2D chart with a blue and semi transparent background for the primary and secondary y-axis names looks as below:

{% embed_all configuring-your-chart-titles-and-axis-names-example-9.js %}

Given below is the list of attributes used to configure background for dual y-axes:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`pYAxisNameFontAlpha` (`sYAxisNameFontAlpha`)</td>
    <td>Sets the transparency of primary (secondary) y-axis font. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`pYAxisNameBgColor` (`sYAxisNameBgColor`)</td>
    <td>Sets the background color of primary (secondary) y-axis name in hex code, e.g. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`pYAxisNameBgAlpha` (`sYAxisNameBgAlpha`)</td>
    <td>Sets the transparency of primary (secondary) y-axis background. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>


### Configuring the border cosmetic properties for the primary and secondary y-axis names

A Multi-series combination 2D chart with a purple coloured dashed border around the primary and secondary y-axis names looks as below:

{% embed_all configuring-your-chart-titles-and-axis-names-example-10.js %}

Given below is the list of attributes used to configure border properties for primary and secondary y-axes names:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`pYAxisNameBorderColor` (`sYAxisNameBorderColor`)</td>
    <td>Sets the border color of primary (secondary) y-axis name in hex code, e.g. `#00ffaa`</td>
  </tr>
  <tr>
    <td>`pYAxisNameBorderAlpha` (`sYAxisNameBorderAlpha`)</td>
    <td>Sets the transparency of primary (secondary) y-axis border. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`pYAxisNameBorderPadding` (`sYAxisNameBorderPadding`)</td>
    <td>Sets the primary (secondary) y-axis name border padding (in pixels).</td>
  </tr>
  <tr>
    <td>`pYAxisNameBorderRadius` (`sYAxisNameBorderRadius`)</td>
    <td>Sets the primary (secondary) y-axis name border radius in pixels (in pixels).</td>
  </tr>
  <tr>
    <td>`pYAxisNameBorderThickness` (`sYAxisNameBorderThickness`)</td>
    <td>Sets the primary (secondary) y-axis name border thickness (in pixels).</td>
  </tr>
  <tr>
    <td>`pYAxisNameBorderDashed` (`sYAxisNameBorderDashed`)</td>
    <td>Set to `1` to make the primary (secondary) y-axis border dashed and `0` (default) to set it to normal.</td>
  </tr>
  <tr>
    <td>`pYAxisNameBorderDashLen` (`sYAxisNameBorderDashLen`)</td>
    <td>Sets the length (in pixels) of each dash in primary (secondary) y-axis name border.</td>
  </tr>
  <tr>
    <td>`pYAxisNameBorderDashGap` (`sYAxisNameBorderDashGap`)</td>
    <td>Sets the gap between two consecutive dashes in primary (secondary) y-axis name border (in pixels).</td>
  </tr>
</table>