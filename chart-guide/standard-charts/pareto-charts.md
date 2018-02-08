---
title: Pareto Chart | FusionCharts
description: In this section of Pareto chart you will be introduced to the basics of the Pareto chart and how you can create a simple one.
heading: Pareto Chart
---

A Pareto chart, named after Vilfredo Pareto, is a type of chart that combines the column chart with the line chart. The data values in a Pareto chart are represented by columns, which are arranged in descending order of magnitude. The cumulative total of these values is shown by an upward curving line. Pareto charts are used for isolating the key causes of a problem. They can also be used for determining the key factors of success.

The left vertical axis or the primary axis shows the frequency of occurrence, the cost, or other important units of measurement. The right vertical axis or the secondary axis shows the cumulative percentage of the total number of occurrences, the total cost, or the total of a specific unit of measurement.

The two types of Pareto charts available are:

* Pareto 2D

* Pareto 3D

## Pareto 2D

In this example, let's create a pareto 2D chart showcasing the late arrivals of the employee by their respective reported cause. The primary y-axis shows the number of occurrences of the employee per month whereas the secondary y-axis shows the cumulative percentage.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a pareto chart in 2D, set the `type` attribute to `pareto2d`.

For a detailed list of attributes you can check the API reference page of pareto 2D chart .

The pareto chart in 2D for the above code looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/Qc4Gp/) to edit the pareto 2D chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Pareto 3D

To render a pareto chart in 3D, change the value of the `type` attribute from `pareto2D` to `pareto3D`. The rest of the data structure remains the same.

A simple Pareto 3D chart looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/qEc4w/) to edit the pareto 3D chart.

> The data for the above two charts is single series. Values provided are only for the column plots. The percentage values for the line are automatically calculated and added to the chart.

Now, let's customize the appearance and properties of the charts. 

## Display values for the line series

By default, the auto-generated percentage values for the line chart are not rendered. To specify the percentage data values for the line chart, set the `showLineValues` attribute to `1`. Setting this attribute to `0` (default) will hide them.

Refer to the code given below:

```
{

  "chart": {

    "showLineValues": "1"

  },

}

...

```

A pareto chart configured to render the percentage values for the line chart looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/zr2mdz3t/) to edit the pareto 2D chart.

## Customize the line dataset

In a pareto chart, you can customize the cosmetic of the line rendered. Given below are the cosmetic which can be applied to customize the line dataset.

* Set the hex color code to `lineColor` attribute to specify the color of the rendered line.

* Specify the thickness of the line (in pixels), using `lineThinkness` attribute.

* Set the transparency of the line segments using `lineAlpha` attribute. This attribute takes values between `0` (transparent) and `100` (opaque).

* Set the value of `lineDashed` attribute as `1` to render the line segments as dashed lines. Setting this attribute to `0` will render them as whole lines.

* If the line segments are rendered as dashed lines, set the length of each dash using `lineDashLen` attribute.

* If the line segments are rendered as dashed lines, set the gap between each dash using `lineDashGap` attribute.

Refer to the code given below:

```
{

    "chart": {

        "lineColor": "#8e0000",

        "lineThickness": "2",

        "lineAlpha": "80",

        "lineDashed": "1",

        "lineDashLen": "5",

        "lineDashGap": "3"

    },

}

...

```

A pareto chart with the line segments customized looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/nmf6af24/) to edit the pareto 2D chart.

## Hide secondary axis values

Depending on the use case, you can hide the secondary y-axis of the pareto chart by following the steps given below:

* Specify the `showSecondaryLimits` attribute to set the upper and lower limits for the secondary y-axis. Setting this attribute to `0` will hide the limits, whereas setting it to `1` (default) will show them.

* Specify the `showDivLineSecondaryValue` attribute to set whether the divisional line values for the secondary y-axis will be shown. Setting this attribute to `0` will hide the values whereas setting it to `1` (default) will show them.

Refer to the code given below:

```
{

  "chart": {

    "showSecondaryLimits": "0",

    "showDivLineSecondaryValue": "0"

  },

}

...

```

A pareto chart with hidden secondary y-axis looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/zm25ufqu/) to edit the pareto 2D chart.