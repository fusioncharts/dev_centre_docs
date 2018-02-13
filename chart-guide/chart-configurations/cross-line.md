---
title: Cross Line | FusionCharts
description: Cross line is a vertical line/area used as quick reference for the data plots. The tooltip that appears is consolidated with all the information required.
heading: Cross Line
breadcrumb: [["Home", "/"], ["Cross Line"]]
---

Cross line is a vertical line/area used as a quick reference for data plots. When you hover on the canvas, a line/area appears highlighting the data plots along with the information in a tooltip. The tooltip that appears has all the information required, for example, data values, labels of each data plot and also the color of the data plots. A cross line appears as shown in the image below:

![Cross Line]({% site.baseurl %}/images/chart-configurations-cross-line-image-1.png)

## Show/Hide the cross line

By default, the cross line is turned off. To show the crossline set the `drawCrossLine` attribute to `1`. Refer to the code below:

```
{
    "chart": {
       ...
        "drawCrossLine": "1",
    }
}
 ```

A chart with crossline will look like as shown below:

![Cross Line]({% site.baseurl %}/gif/configurations-crossline-gif-1.gif)

Click [here](http://jsfiddle.net/fusioncharts/sh917yad/) to edit the above chart.

## Customize crossline color

Specify the hex code of the cross line color using the `crossLineColor` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "crosslinecolor": "cc3300",
    }
 ... 
  }

```

A multi-series column chart with a customized cross line looks like as shown below:

![Cross Line]({% site.baseurl %}/gif/configurations-crossline-gif-2.gif)

Click [here](http://jsfiddle.net/fusioncharts/7yvjb38s/) to edit the above chart.

### Customize opacity

Set the opacity of the crossline using the `crossLineAlpha` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "crossLineAlpha": "20",
    }
  }

```

A multi-series column chart with a customized transparency (set to `20`) of the cross line looks like as shown below:

![Cross Line]({% site.baseurl %}/gif/configurations-crossline-gif-3.gif)

Click [here](http://jsfiddle.net/fusioncharts/e94enLv1/) to edit the above chart.

### Enable/Disable animation

By default, the cross line animation is disabled. Set the `crossLineAnimation` attribute to`1` to enable the animation. Refer to the code below:

```
 {
    "chart": {
       ...
        "crossLineAnimatiion": "1",
    }
  }

```

If the animation is enabled, set the animation duration for the cross line of your chart using the `crossLineAnimationDuration` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "crossLineAnimatiionDuration": "10",
    }
  }
```

A multi-series area chart with animation enabled looks as below:

{% embed_chart chart-configurations-cross-line-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/jLcL5eaz/) to edit the above chart.

## Set tooltip background color

Tooltip is a common element, used to display information whenever you hover on a particular data point. A consolidated tooltip has been introduced with the cross line which can be used to get the detailed information of the hovered plots in a multi-series chart. 

By default the tooltip takes the color of the dataplot. Set the `plotColorInTooltip` attribute to `0`  to turn off the color of the plot in the tooltip. 

Refer to the code below:

```
 {
    "chart": {
       ...
        "plotColorinTooltip": "0",
    }
  }
```

The chart will look like as shown in the image below:

![Cross Line]({% site.baseurl %}/images/chart-configurations-cross-line-image-2.png)

Click [here](http://jsfiddle.net/fusioncharts/uyymusv0/) to edit the above chart.

Set `tooltipGrayOutColor` attribute to specify the color of the unfocused plot in the tooltip. Refer to the code below:

```
 {
    "chart": {
       ...
        "tooltipGrayOutColor": "#3377ff",
    }
  }
```

The chart will look like as shown below:

![Cross Line]({% site.baseurl %}/gif/chart-configurations-cross-line-image-4.gif)

Click [here](http://jsfiddle.net/fusioncharts/46por5dL/) to edit the above chart.

Specify the hex code of the tooltip background color using the `toolTipBgColor` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "toolTipBgColor": "#323232",
    }
  }
```

The chart will look like as shown below:

![Cross Line]({% site.baseurl %}/images/chart-configurations-cross-line-image-2.png)

Click [here](http://jsfiddle.net/fusioncharts/x2jvt5rh/) to edit the above chart.

## Customize tooltip border

To customize the tooltip border the following attributes are used:

* Specify the hex code of the tooltip border color using the `toolTipBorderColor` attribute. 

* Set the thickness of the border using the `toolTipBorderThicknes` attribute.

Refer to the code below: 

```
 {
    "chart": {
       ...
        "toolTipBorderColor": "#545454",
        "toolTipBorderThickness": "5"
    }
  }
```

The chart will look like as shown below:

![Cross Line]({% site.baseurl %}/images/chart-configurations-cross-line-image-3.png)

Click [here](http://jsfiddle.net/fusioncharts/zn0aqdze/) to edit the above chart.

## Set Separator Character for tooltip

Specify the character to separate the name and the value displayed in the tooltip using the `toolTipSepChar` attribute. Refer to the code below:

```
 {
    "chart": {
       ...
        "toolTipSepChar": ":",
    }
  }
```

The chart will look like as shown below:

![Cross Line]({% site.baseurl %}/images/chart-configurations-cross-line-image-4.png)

Click [here](http://jsfiddle.net/fusioncharts/xjbv3pq8/) to edit the above chart.

## Show/Hide tooltip shadow

By default, the tooltip shadow is visible. To hide the tooltip shadow set the `showTooltipShadow` attribute to `0`. Refer to the code below:

```
 {
    "chart": {
       ...
        "showTooltipShadow": "1",
    }
  }
```

The chart will look like as shown below:

![Cross Line]({% site.baseurl %}/images/chart-configurations-cross-line-image-5.png)

Click [here](http://jsfiddle.net/fusioncharts/1rbzf7q7/) to edit the above chart.