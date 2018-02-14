---
title: Configure Zero Plane for X-Axis | FusionCharts
description: Zero plane is a plane separating the positive/negative numbers on the y-axis. The zero plane appears in the column, line, scatter, bubble charts.
heading: Zero Plane
breadcrumb: [["Home", "/"], ["Zero Plane"]]
---

Zero plane is a plane separating the positive and negative numbers on the y-axis of a chart. It is rendered by default in any chart that plots both negative and positive values.

The zero plane is applicable to column, line, scatter, bubble and the area charts. Additionally, scatter and bubble charts also support vertical zero plane on the x-axis.

## Show/hide the zero plane

By default, the zero plane is rendered in any chart that plots both negative and positive values.  To hide the zero plane, set the `showZeroPlane	` attribute to `0`. 

Refer to the code below:

```
{
    "chart": {
        ...
        "showZeroPlane": "1",
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/pxxsdfe0/ "@@open-newtab") to edit the above chart.

## Customize zero plane in 2D chart

To customize the zero plane in a  2D chart the  following attributes are used:

* Specify the hex code for the color of the  zero plane using the `zeroPlaneColor` attribute.

* Set the thickness (in pixels) of the zero plane using the `zeroPlaneThickness` attribute.

* Set the transparency of the zero plane using the `zeroPlaneAplha` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "showZeroPlane": "1",
        "zeroPlaneColor": "#003366",
        "zeroPlaneAlpha": "100",
        "zeroPlaneThickness": "3"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/ydxdrozz/ "@@open-newtab") to edit the above chart.

## Customize zero plane in 3D chart

To customize the zero plane in a 3D chart the  following attributes are used:

* Specify the hex code for the color of the  zero plane using the `zeroPlaneColor` attribute.

* Set the transparency of the zero plane using the `zeroPlaneAplha` attribute.

* Set the `zeroPlaneShowBorder` attribute to `1` to display the border.

* Specify the hex code of the border color using the `zeroPlaneBorderColor` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "showZeroPlane": "1",
        "zeroPlaneColor": "#99ccff",
        "zeroPlaneAlpha": "100",
        "zeroPlaneShowBorder": "1",
        "zeroPlaneBorderColor": "1"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/z6mqxka9/ "@@open-newtab") to edit the above chart.

## Vertical zero plane in scatter and bubble charts

In case of XY plot charts, zero plane appears vertically at zero x-position on canvas, when negative data is being shown on the chart.

To hide the vertical zero plane set the `showVZeroPlane` attribute to `0`. Refer to the code below:

```
{
    "chart": {
        ...
        "showVZeroPlane": "0"       
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/1u4f1jpy/ "@@open-newtab") to edit the above chart.

To configure the vertical zerol plane use the following attributes:

* Specify the hex code of the color for the vertical zero plane using the `vZeroPlaneColor` attribute.

* Set the thickness (in pixels) of the vertical zero plane using the `vZeroPlaneThickness` attribute.

* Set the transparency of the vertical zero plane using the `vZeroPlaneAlpha` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "showVZeroPlane": "1",
        "vZeroPlaneColor": "#cc3300",
        "vZeroPlaneThickness": "3",
        "vZeroPlaneAlpha": "90"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/8qqeL31d/ "@@open-newtab") to edit the above chart.

## Show/hide the zero plane value

By default, the data value (`0`) where the zero plane exists on the y-axis is displayed. To hide the zero plane value set the `showZeroPlaneValue` attribute to '0'. 

Refer to the code below:

```
{
    "chart": {
        ...
        "showZeroPlaneValue": "0"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/tqr0yapk/ "@@open-newtab") to edit the above chart.

In dual y-axis charts, `showPZeroPlaneValue` (primary y-axis) and `showSZeroPlaneValue` (secondary y-axis) attributes are used to hide the zero plane values for the primary and secondary axis respectively.

Refer to the code below:

```
{
    "chart": {
        ...
        "showPZeroPlaneValue": "0",
        "showSZeroPlaneValue": "0"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-zero-plane-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/q364f9az/ "@@open-newtab") to edit the above chart.