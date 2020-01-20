---
title: Vertical Lines | FusionCharts
description: Vertical separator lines or vlines are elements that can differentiate between data blocks in a chart. They can be placed between any two data points
heading: Vertical Lines
---

Vertical (or horizontal in case of bar charts) separator lines or `vlines` are elements that can help differentiate between data blocks in a chart. They can be placed between any two data points, or aligned to specific data points.

![Vertical lines](/images/chart-configurations-vertical-lines-image-1.png)

## Set Vertical Lines

By default, the vertical lines do not appear. To display a vertical line follow the steps below:

- Create an object under `data` between the data values where you want to render the vertical line.

- Set the `vLine` attribute to `1`.

- Set the value of `showOnTop` attribute to `1`.

- Specify the display text of the vertical line using the `label` attribute.

- Set the position of the vertical line using the `linePosition` attribute.

Refer to the code below:

```json
{
    "chart": {
       ...
    },
    "data": [{
        "label": "Fri",
        "value": "5529"
    },
    {
        "vLine": "true",
        "showOnTop": "1",
        "label": "Weekend Start",
        "linePosition": "0.7"
    },
    {
        "label": "Sat",
        "value": "5803"
    },
    {
        "label": "Sun",
        "value": "6202"
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-lines-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/L5dfydco/) to edit the above chart.

### Configure Label Positions

To set the position of the label, specify the position using the `labelPosition` attribute. Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        "label": "Fri",
        "value": "5529"
    },
    {
        "vline": "true",
        "showOnTop": "1",
        "label": "Weekend Start",
        "linePosition": "0.7",
        "labelPosition": "0.5"
    },
    {
        "label": "Sat",
        "value": "5803"
    },
    {
        "label": "Sun",
        "value": "6202"
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-lines-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/kLwfdgL0/) to edit the above chart.

### Configure Label Alignment

To configure the alignment of the label, the following attributes are used:

- Set the horizontal alignment of the label using the `labelHAlign` attribute. The possible values for this attribute are `left`, `center` (default), and `right`.

- Set the vertical alignment of the label using the `labelVAlign` attribute. The possible values for this attribute are `top`, `middle` (default), and `bottom`.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        "label": "Fri",
        "value": "5529"
    },
    {
        "vline": "true",
        "showOnTop": "1",
        "label": "Weekend Start",
        "linePosition": "0.5",
        "labelPosition": "0",
        "labelVAlign": "middle",
        "labelHAlign": "right"
    },
    {
        "label": "Sat",
        "value": "5803"
    },
    {
        "label": "Sun",
        "value": "6202"
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-lines-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/2ht3njrb/) to edit the above chart.

## Show Label Borders

To add borders to the label set the `showVLineLabelBorder` to `1` within the `chart` object. This attribute is used to show borders for the labels of all the vertical lines.

Refer to the code below:

```json
{
  "chart": {
    "showVLineLabelBorder": "1"
  },
  "data": [
    {
      "label": "Fri",
      "value": "5529"
    },
    {
      "vline": "true",
      "showOnTop": "1",
      "label": "Weekend Start",
      "linePosition": "0.7",
      "labelPosition": "0.5",
      "labelVAlign": "middle",
      "labelHAlign": "right"
    },
    {
      "label": "Sat",
      "value": "5803"
    },
    {
      "label": "Sun",
      "value": "6202"
    }
  ]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-lines-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/oo7wx0jg/) to edit the above chart.

In order to show label borders for specific vertical lines, set the `showLabelBorder` attribute to `1` for a particular vertical line under `data`. This attribute overrides the setting in the chart object.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        "label": "Fri",
        "value": "5529"
    },
    {
        "vline": "true",
        "showOnTop": "1",
        "label": "Weekend Start",
        "linePosition": "0.7",
        "labelPosition": "0.5",
        "labelVAlign": "middle",
        "labelHAlign": "right",
        "showLabelBorder": "1"
    },
    {
        "label": "Sat",
        "value": "5803"
    },
    {
        "label": "Sun",
        "value": "6202"
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-lines-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/6zL3r5d1/) to edit the above chart.

## Customize Visual Properties

To customize the visual properties of the vertical line, the following attributes are used:

- Specify the hex code for the color of the vertical line using the `color` attribute.

- Set the thickness (in pixels) of the vertical line using the `thickness` attribute.

- Set the transparency of the vertical line using the `alpha` attribute.

- Set the `dashed` attribute to `1` to view the vertical line as dashed.

- Specify the length of each dash using the `dashLen` attribute.

- Set the gap between each dash using the `dashGap` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        "label": "Fri",
        "value": "5529"
    },
    {
        "vline": "true",
        "showOnTop": "1",
        "label": "Weekend Start",
        "linePosition": "0.7",
        "labelPosition": "0.5",
        "labelVAlign": "middle",
        "labelHAlign": "right"
        "color": "#6da81e",
        "thickness": "2",
        "alpha": "50",
        "dashed": "1",
        "dashLen": "4",
        "dashGap": "2"
    },
    {
        "label": "Sat",
        "value": "5803"
    },
    {
        "label": "Sun",
        "value": "6202"
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-lines-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/r4y6ysb7/) to edit the above chart.
