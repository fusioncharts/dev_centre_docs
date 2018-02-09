---
title: Cross Line | FusionCharts
description: Cross line is a vertical line/area used as quick reference for the data plots. The tooltip that appears is consolidated with all the information required.
heading: Cross Line
breadcrumb: [["Home", "/"], ["Cross Line"]]
---

Cross line is a vertical line/area used as a quick reference for data plots. When you hover on the canvas, a line/area appears highlighting the data plots along with the information in a tooltip. The tooltip that appears has all the information required, for example, data values, labels of each data plot and also the color of the data plots. A cross line appears as shown in the image below:

<image>

## Show/Hide the cross line

By default, the cross line is turned off. To show the crossline set the `drawCrossLine` attribute to `1`. Refer to the code below:

```
{
    "chart": {
       ...
        "dwCrossLine": "1",
    },
 ```

A chart with crossline will look like as shown below:

<chart>

## Customize the cross line

In a multi-series charts, when you hover on the chart canvas a color band appears highlighting the corresponding data plots for that particular section of the canvas. This color band is the cross line of the chart. You can customize the color, opacity and animation of the cross line.

### Customize the color

Specify the hex code of the cross line color using the `crossLineColor` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "crosslinecolor": "cc3300",
    },

```

A multi-series column chart with a customized cross line looks like as shown below:

<chart>

### Customize opacity

Set the opacity of the crossline using the `crossLineAlpha` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "crossLineAlpha": "20",
    },

```

A multi-series column chart with a customized transparency (set to `20`) of the cross line looks like as shown below:

<image>

### Enable/Disable animation

By default, the cross line animation is disabled. Set the `crossLineAnimation` attribute to`1` to enable the animation. Refer to the code below:

```
 {
    "chart": {
       ...
        "crossLineAnimatiion": "1",
    },

```

If the animation is enabled, set the animation duration for the cross line of your chart using the `crossLineAnimationDuration` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "crossLineAnimatiionDuration": "10",
    },

```

A multi-series area chart with animation enabled looks as below:

<chart>

## Set tooltip background color

Tooltip is a common element, used to display information whenever you hover on a particular data point. A consolidated tooltip has been introduced with the cross line which can be used to get the detailed information of the hovered plots in a multi-series chart. 

By default the tooltip takes the color of the dataplot. Set the `plotColorInTooltip` attribute to `0`  to turn off the color of the plot in the tooltip. 

Refer to the code below:

```
 {
    "chart": {
       ...
        "plotColorinTooltip": "0",
    },

```

The chart will look like as shown in the image below:

<image>

Apply `tooltipGrayOutColor` attribute to specify the color of the unfocused plot in the tooltip. Refer to the code below;

```
 {
    "chart": {
       ...
        "tooltipGrayOutColor": "#3377ff",
    },

```

The chart will look like as shown below:

<image>

Specify the hex code of the tooltip background color using the `toolTipBgColor` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "toolTipBgColor": "#fffffff",
    },

```

The chart will look like as shown below:

<chart>

## Set tooltip border color

Specify the hex code of the tooltip border color using the `toolTipBorderColor` attribute. Refer to the code below: 

```
 {
    "chart": {
       ...
        "toolTipBorderColor": "#545454",
    },

```

The chart will look like as shown below:

<chart>

## Show/Hide tooltip shadow

Specify the character to separate the name and the value displayed in the tooltip using the `toolTipSepChar` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "toolTipSepChar": ":",
    },

```

The chart will look like as shown below:

<chart>

By default, the tooltip shadow is visible. To hide the tooltip shadow set the `showTooltipShadow` attribute to `0`. Refer to the code below:

```
 {
    "chart": {
       ...
        "toolTipSepChar": ":",
    },

```

The chart will look like as shown below:

<chart>