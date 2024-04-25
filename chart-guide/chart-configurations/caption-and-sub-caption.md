---
title: Caption and Sub-caption | FusionCharts
description: Enhance your charts with captivating captions and sub-captions! Dive into FusionCharts' guide now for expert tips. Optimize your data visualization. 
heading: Caption and sub-caption
---

The caption (also called the chart title) is the heading of your chart, whereas a sub-caption is the text that appears just below the caption. In the sections below, you can see how to add a caption, subcaption, x-axis name, and y-axis name to your charts, as well as configure their font properties.

![Titles and Axis Names](/images/chart-configuration-titles-and-axis-names-image-1.png)

Cartesian charts have axes that run along the left and the bottom borders of the canvas. The x-axis runs along the bottom border of the canvas, running from left to right. The y-axis runs along the left border of the canvas, going from the bottom and to the top.

## Set the Caption and Subcaption

-  Specify the caption of the chart using the `caption` attribute, which accepts text values.

-  Specify the sub-caption of the chart using the `subCaption` attribute, which accepts text values.

Refer to the code given below:

```json
{
   "chart": {
      "caption": "Monthly Revenue",
      "subCaption": "Last year"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/ubw094z3/) to edit the above chart.

## Customize Font Properties

Use the following attributes to customize the font color, size, formatting, etc., of the caption.

-  Set the caption font family using the `captionFont` attribute.

-  Set the caption font color in hex code using the `captionFontColor` attribute.

-  Set the caption font size (in `px`, `rem`, `%`, `em` or `vw`) using the `captionFontSize` attribute.

-  Set caption font to bold by setting the value of the `captionFontBold` attribute to `1`.

Refer to the code given below:

```json
{
   "chart": {
      "captionFont": "Arial",
      "captionFontSize": "18",
      "captionFontColor": "#993300",
      "captionFontBold": "1"
   }
}
```

To customize the font color, size, formatting, etc., of the subcaption, use the following attributes:

-  Set the subcaption font family using the `subCaptionFont` attribute.

-  Set the subcaption font color in hex code using the `subCaptionFontColor` attribute.

-  Set the subcaption font size (in `px`, `rem`, `%`, `em` or `vw`) using the `subCaptionFontSize` attribute.

-  Set subcaption font to bold by setting the value of the `subCaptionFontBold` attribute to `1`.

Refer to the code given below:

```json
{
   "chart": {
      "subcaptionFont": "Arial",
      "subcaptionFontSize": "14",
      "subcaptionFontColor": "#993300",
      "subcaptionFontBold": "0"
   }
}
```

The chart with customized caption and subcaption looks like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/o4xhvc0g/) to edit the above chart.

### Relative Font Sizes

The `subcaptionFontSize` and `captionFontSize` attributes can use the following relative font sizes:

-  `rem`
-  `%`
-  `em`
-  `vw`

Relative font sizes allow you to have charts where the Caption and Sub-caption can have a size relative to the size of your chart. This is specially useful when scaling text elements across different screen sizes.

## Configure Caption Alignment

Use the following attributes to configure caption alignment:

-  Specify the horizontal alignment of the caption using the `captionAlignment` attribute, which accepts the values of `left`, `center` (default), and `right`.

-  Display the caption at the top of the chart by setting the value of the `captionOnTop` attribute to `1`.

-  Align the caption with the canvas area instead of the chart area, by setting the value of the `alignCaptionWithCanvas` attribute to `1`.

-  Configure the padding (in pixels) from either edge when the caption is not center aligned, using the `captionHorizontalPadding` attribute.

Refer to the code given below:

```json
{
   "chart": {
      "alignCaptionWithCanvas": "1",
      "captionHorizontalPadding": "2",
      "captionOnTop": "0",
      "captionAlignment": "right"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/bbsmmt84/) to edit the above chart.

## Support for HTML tags across all chart text elements

FusionCharts Suite XT introduces support for inline HTML tags across all chart text elements. To define the HTML elements, even for the existing tags, FusionCharts does not support {}. The user must use the valid HTML tags. For example `<strong>`Bold text`</strong>` is supported but {strong}Bold text{/strong} is not. Use inline HTML elements to customize captions and sub-captions.

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

The chart will look like as shown below:

{% embed_chart html-tags-example.js %}

Click [here](http://https://codepen.io/chartistdev-the-vuer/pen/NWrReYa) to edit the above chart.


