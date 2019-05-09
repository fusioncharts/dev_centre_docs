---
title: Configure Zero Plane for X-Axis | FusionCharts
description: Zero plane is a plane separating the positive/negative numbers on the y-axis. The zero plane appears in the column, line, scatter, bubble charts.
heading: Zero Plane
---

Zero plane is a plane separating the positive and negative numbers on the y-axis of a chart. It is rendered by default in any chart that plots both negative and positive values.

The zero plane applies to column, line, scatter, bubble and the area charts. Additionally, scatter and bubble charts also support vertical zero plane on the x-axis.

## Show/Hide the Zero Plane

By default, the zero plane is rendered in any chart that plots both negative and positive values. To hide the zero plane, set the `showZeroPlane` attribute to `0`.

Refer to the code below:

```json
{
  "chart": {
    "showZeroPlane": "0"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/pxxsdfe0/) to edit the above chart.

## Customize Zero Plane in 2D chart

To customize the zero plane in a 2D chart, the following attributes are used:

- Specify the hex code for the color of the zero plane using the `zeroPlaneColor` attribute.

- Set the thickness (in pixels) of the zero plane using the `zeroPlaneThickness` attribute.

- Set the transparency of the zero plane using the `zeroPlaneAlpha` attribute.

Refer to the code below:

```json
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

Click [here](http://jsfiddle.net/fusioncharts/ydxdrozz/) to edit the above chart.

## Customize Zero Plane in 3D chart

To customize the zero plane in a 3D chart, the following attributes are used:

- Specify the hex code for the color of the zero plane using the `zeroPlaneColor` attribute.

- Set the transparency of the zero plane using the `zeroPlaneAlpha` attribute.

- Set the `zeroPlaneShowBorder` attribute to `1` to display the border.

- Specify the hex code of the border color using the `zeroPlaneBorderColor` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
        "showZeroPlane": "1",
        "zeroPlaneColor": "#99ccff",
        "zeroPlaneAlpha": "100",
        "zeroPlaneShowBorder": "1",
        "zeroPlaneBorderColor": "#5d62b5"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/z6mqxka9/) to edit the above chart.

## Vertical Zero Plane

In case of XY plot charts, zero plane appears vertically at zero x-position on canvas, when negative data is being shown on the chart.

To hide the vertical zero plane set the `showVZeroPlane` attribute to `0`. Refer to the code below:

```json
{
  "chart": {
    "showVZeroPlane": "0"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/1u4f1jpy/) to edit the above chart.

To configure the vertical zero plane use the following attributes:

- Specify the hex code of the color for the vertical zero plane using the `vZeroPlaneColor` attribute.

- Set the thickness (in pixels) of the vertical zero plane using the `vZeroPlaneThickness` attribute.

- Set the transparency of the vertical zero plane using the `vZeroPlaneAlpha` attribute.

Refer to the code below:

```json
{
  "chart": {
    "showVZeroPlane": "1",
    "vZeroPlaneColor": "#cc3300",
    "vZeroPlaneThickness": "3",
    "vZeroPlaneAlpha": "90"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/8qqeL31d/) to edit the above chart.

## Show/Hide the Zero Plane Value

By default, the data value (`0`) where the zero plane exists on the y-axis is displayed. To hide the zero plane value set the `showZeroPlaneValue` attribute to '0'.

Refer to the code below:

```json
{
  "chart": {
    "showZeroPlaneValue": "0"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-zero-plane-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/tqr0yapk/) to edit the above chart.
