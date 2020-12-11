---
title: Display Customized Data Labels on Charts & Graphs
description: Customize the way data labels look like on your Charts and Graphs. Learn how to use the 5 modes of showing labels - Auto, Wrap, Stagger, Rotate and None.
heading: Display Customized Data Labels
---

Data labels are the names of the data points that are displayed on the x-axis of a chart.

![Data Labels](/images/chart-configurations-data-labels-image-1.png)

## Data Label Display Modes

You can configure the arrangement and display properties for data labels using the `labelDisplay` attribute. There are 5 display modes available (`auto`, `wrap`, `stagger`, `rotate` and `none`). We will discuss each mode respectively.

### Auto Mode

In this mode, the chart automatically chooses the most appropriate display mode for data labels - depending on space availability. If the number of data labels is greater than the available space, then the data labels are either truncated (with ellipses to indicate truncation), wrapped, or rotated. On hovering over a truncated data label, a tooltip showing the full label text is displayed. By default, the auto mode is active, but can be disabled by switching to an alternative label display mode.

In auto mode, you can set whether the long data labels be truncated by adding ellipses using the `useEllipsesWhenOverflow` attribute. By default, this attribute is set to `1` to prevent the long labels from overflowing the chart background.

Set the `useEllipsesWhenOverflow` to `0` to stop displaying the data labels as ellipses.

Refer to the code below:

```json
{
   "chart": {
      "labelDisplay": "Auto",
      "useEllipsesWhenOverflow": "0"
   }
}
```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-data-labels-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/h5d6xwyo/) to edit the above chart.

### Wrap Mode

In this mode, you can wrap long x-axis labels into multiple lines. If enough space is not available in a chart, this mode will automatically trim labels, add ellipses at the end, and show tooltips for such labels. To wrap the data labels, set the `labelDisplay` attribute as `wrap`. Refer to the code below:

> To set the `labelDisplay` as `wrap`, disable the `rotateLabels` attribute.

```json
{
   "chart": {
      "rotateLabels": "0",
      "labelDisplay": "wrap"
   }
}
```

The chart with wrapped labels will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/uofvvvv3/) to edit the above chart.

> In horizontal bar charts, you can specify the maximum % of available width for data labels with the `maxLabelWidthPercent`attribute. This attribute takes a value between `5` and `80`.

### Rotate Mode

Set the `labelDisplay` attribute as `rotate` to view the data labels in rotate mode. Refer to the code below:

```json
{
   "chart": {
      "labelDisplay": "rotate"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/11umogjk/) to edit the above chart.

While viewing the labels in the rotate mode you can also slant the labels for better visibility if required. Set the `slantLabel` attribute to `1` and the axis labels will be slanted to 45 degrees.

> Slanting the labels will only work if the labels are rotated.

Refer to the code below:

```json
{
   "chart": {
      "labelDisplay": "rotate",
      "slantLabel": "1"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/mxceLe0k/) to edit the above chart.

> In case of Scatter and Bubble charts, when the attribute** `xAxisLabelMode`** is set to `auto`, slanting of the X-axis labels is not applicable.

### Staggered Mode with Stagger Lines

In this mode, data labels are distributed on multiple levels (default is 2) to increase the inter label space available on each level. Set the `labelDisplay` attribute as 'stagger`. Refer to the code below:

```json
{
   "chart": {
      "labelDisplay": "stagger"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/z7L18vvh/) to edit the above chart.

To change the distribution levels (default is 2) specify the level using the `staggerLines` attribute. Refer to the code below:

```json
{
   "chart": {
      "labelDisplay": "stagger",
      "staggerLines": "4"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/pdbq2gmr/) to edit the above chart.

### N-th Label Mode

If your data plot consists of values representing continuous quantities such as date, time, temperature, etc. you can use the `labelstep` attribute to display every n-th label, instead of all labels on the x-axis. Refer to the code below:

```json
{
   "chart": {
      "labelStep": "3"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/Lsrdd84a/) to edit the above chart.

## Show/Hide Labels for all Dataplots

To hide the data labels set the `showLabels` attribute to `0` within the `chart` object. Refer to the code below:

```json
{
   "chart": {
      "showLabels": "0"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/fe1awqLn/) to edit the above chart.

## Hide Specific Data Labels

By default, all the data labels are displayed. You can opt to hide specific data values using the `showLabel` attribute within `data` under `chart` object.

```json
{
   "chart": {
      "caption": "Monthly Revenue",
      "subCaption": "Last year",
      "xAxisName": "Month",
      "yAxisName": "Amount (In USD)",
      "numberPrefix": "$",
      "theme": "fusion",
      "showlabels": "0"
   },
   "data": [
      {
         "label": "January",
         "value": "420000",
         "showLabel": "1"
      },
      {
         "label": "February",
         "value": "810000"
      }
   ]
}
```

In the above code, we have set the `showLabel` attribute for **Quarter 2** to `0`. So, the chart will not display the label for that value. The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/bv5f703k/) to edit the above chart.

## Label Management: Line and Area Charts

With label management, you can adjust the canvas padding (the space between the canvas border and the position where the data plot begins and ends) to accommodate long labels in line and area charts. This ensures that the first and last x-axis labels are not rendered outside the canvas border, and the labels don't overlap each other.

![Label Management](/images/chart-configurations-data-labels-image-2.png)

To accommodate long labels, the chart automatically adjusts the right and left canvas margins. A line 2D chart with automatic canvas padding set for label management looks like as shown below:

{% embed_chart chart-configurations-data-labels-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/3qoyzms4/) to edit the above chart.

Specify the space between the canvas border and first (& last data plots) using the `canvasPadding` attribute. Refer to the code below:

```json
{
   "chart": {
      "caption": "Quarterly Revenue",
      "subCaption": "Last year",
      "xAxisName": "Quarter",
      "yAxisName": "Amount (In USD)",
      "numberPrefix": "$",
      "canvasPadding": "30",
      "theme": "fusison"
   }
}
```

> If you set it `0` the first and the last anchor points will be on the canvas border.

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/m11nsrja/) to edit the above chart

Advanced x-axis label management has been implemented to achieve the following objectives:

-  All x-axis labels should get centrally aligned to the respective data-plots (columns, points on line charts, etc.)

-  X-axis labels should not overlap each other

-  X-axis labels should not overlap with other chart objects such as legends or x-axis name

-  Long labels should not go outside the chart

-  Optimized truncation of longer labels and putting ellipses at the end

> Advanced label management is not applicable to Bar, Pie, Doughnut, Marimekko, Zoom Line and Multi-series Combination 3D charts.

## Customize Data Label Properties

You can customize the cosmetic properties of data labels such as font, border, background, and alpha.

### Font Properties

To customize the font properties of the data labels, the following attributes are used:

-  `labelFont` - Set the font face for the data labels, e.g. `Arial`.

-  `labelFontColor` - Set the font color for data labels, e.g. `#00ffaa`.

-  `labelFontSize` - Specify the data label font size, in `px`, `rem`, `%`, `em` or `vw` .

-  `labelFontBold` - Set to `1` to make the label font bold.

-  `labelFontItalic` - Set to `1` to make the label font italic.

-  `labelAlpha` - Specify the transparency of the label font.

Refer to the code below:

```json
{
   "chart": {
      "labelFont": "Arial",
      "labelFontColor": "0075c2",
      "labelFontSize": "15",
      "labelFontBold": "1",
      "lableFontItalic": "1",
      "labelAlpha": "70"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/jcd7wv2x/) to edit the above chart.

### Relative Font Sizes

The `labelFontSize` attribute can use the following relative font sizes:

-  `rem`
-  `%`
-  `em`
-  `vw`

Relative font sizes allow you to have charts where data labels can have a size relative to the size of your chart. This is specially useful when scaling text elements across different screen sizes.

### Border properties

To customize the border of the data labels, the following attributes are used:

-  `labelBorderColor` - Set the border color for data labels, e.g. `#00ffaa`.

-  `labelBorderAlpha` - Specify the transparency of the border.

-  `labelBorderPadding` - Set the padding between data labels and border.

-  `labelBorderRadius` - Set the radius of the border around the data labels.

-  `labelBorderThickness` - Set the thickness of the border.

-  `labelBorderDashed` - Set to `1` to draw label borders using dashed lines.

-  `labelBorderDashGap` - Set the gap between two consecutive dashes of data label border (in pixels).

-  `labelBorderDashLen` - Set the length of each dash in data label border (in pixels).

Refer to the code below:

```json
{
   "chart": {
      "labelBorderPadding": "5",
      "labelBorderRadius": "2",
      "labelBorderDashed": "1",
      "labelBorderDashGap": "2",
      "labelBorderDashLen": "3",
      "labelBorderThickness": "2",
      "labelBorderColor": "#00ffaa",
      "labelBorderAlpha": "60"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/qvjdz1Lw/) to edit the above chart.

### Background Properties

To change the background of the data labels, the following attributes are used:

-  `labelBgColor` - Set the background color of data labels, e.g. `#00ffaa`.

-  `lableBgAlpha` - Set the transparency of background of the data labels.

Refer to the code below:

```json
{
    {
    "chart": {
        "labelBgColor": "eeeeee",
        "labelBgAlpha":"30"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/usa7yuo1/) to edit the above chart.

## Configure Height of the Data Label

Shown below is a chart with some very long data labels, where the data plots are getting reduced to a fraction of the chart.

You can limit the maximum height of the data labels using the `maxLabelHeight` attribute. This will truncate the data labels (add ellipsis) according to the maximum height set.

Refer to the code below:

```json
{
    {
    "chart": {
        "maxLabelHeight": "50"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/0zufrdbb/) to edit the above chart.

## Add Links to Data Labels

You can add links to the data labels. Set the link you want to add to the data label using the `labelLink` attribute. Refer to the code below:

```json
{
    {
    "chart": {
        "labelLink": "http://www.fusioncharts.com/"
    }
}
```

The chart with data label linked will look like as shown below:

{% embed_chart chart-configurations-data-labels-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/ferd2app/) to edit the above chart.

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
