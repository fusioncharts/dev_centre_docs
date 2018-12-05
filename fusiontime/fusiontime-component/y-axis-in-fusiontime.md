---
title: Y-Axis | FusionCharts
description: This article defines the y-axis.
heading: Y-Axis
---

In FusionTime, the `yAxis` object can be specified within the `dataSource` object of the FusionCharts constructor.

It will accept inputs in two forms -  an array of `yAxis` objects or an array of Strings.

An example of array of `yAxis` objects is shown in the code below:

```
yAxis: [{
    plot: {
        value: 'Sales',
    },
}, {
    plot: {
        value: 'Shipping Cost',
    }
}],

```
Refer to the image below:

<img src="{% site.baseurl %}/images/fusiontime-component-y-axis.png" alt="Y-axis" width="700" height="420">

An array of strings is applicable when you want to provide different configurations for multiple canvases. Refer to the code below:

```
"yAxis": [{
    "plot": ["Sales", "Shipping Cost"]
  }]

```
Refer to the image below:

<img src="{% site.baseurl %}/images/fusiontime-component-y-axis.png" alt="Y-axis" width="700" height="420">

To configure the y-axis you can:

* Set the column name using the `value` attribute under the `plot` object to specify the column which is mapped to the y-axis.
* Set the y-axis title using the `title attribute under the `yAxis` object.
* Set the suffix and prefix of the y-axis values using the suffix and prefix attributes under the `format` object within the `yAxis` object.

Refer to the code below:

```
yAxis: [{
    plot: {
        value: 'Sales',
    },
    "title": "Total Sales"
}, {
    format: {
        prefix: '$',
    }
}],

```