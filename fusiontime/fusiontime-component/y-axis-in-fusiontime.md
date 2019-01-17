---
title: Y-Axis | FusionCharts
description: This article defines the y-axis.
heading: Y-Axis
---

In FusionTime, the `yAxis` object can be specified within the `dataSource` object of the FusionCharts constructor.

It will accept inputs in two forms - an array of `yAxis` objects or an array of Strings.

An example of array of `yAxis` objects is shown in the code below:

```json
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

<img src="{% site.BASE_URL %}/images/fusiontime-component-y-axis.png" alt="Y-axis" width="700" height="420">

An array of strings is applicable when you want to provide different configurations for multiple canvases. Refer to the code below:

```json
"yAxis": [{
    "plot": ["Sales", "Shipping Cost"]
}]
```
Refer to the chart below:

{% embed_ftChart online-sales-multi-variate %}

To configure the y-axis you can:

* Set the column name using the `value` attribute under the `plot` object to specify the column which is mapped to the y-axis.
* Set the y-axis title using the `title` attribute under the `yAxis` object.
* Set the suffix and prefix of the y-axis values using the `suffix` and `prefix` attributes under the `format` object within the `yAxis` object.

Refer to the code below:

```json
yAxis: [{
    plot: {
        "value": "Sales",
    },
    "title": "Total Sales",
}, {
    format: {
        "prefix": "$",
    }
}],
```

## Style Definition

You can add CSS styling to set the cosmetic properties of y-axis. To set the styling, instead of creating a separate CSS file, you can define the styling using `StyleDefinition` object.

Now, let's define the `styleDefinition` object and set the **font color** in an object. The code is given below:

```json
styleDefinition: {
    "colorstyle": {
        "fill": "#ff0000"
    }
}
```

Once the `StyleDefinition` is defined, you can refer it for the various components using `colorstyle` attribute.

The syntax to set the `StyleDefintion` to the y-axis label is given below:

```json
{
    yAxis: [{
        "plot": "Sales",
        "title": "Sales",
        style: {
            title: "colorstyle"
        }
    }],
}
```

In the above code, `colorStyle` object is called to set the color of the caption.

The chart after applying the above attributes will look like as shown below:

{% embed_ftChart online-sales-single-series-style-definition-y-axis %}

In the above sample, **font color** of the y-axis label has been changed. 

The code to update the cosmetic properties of other elements in **y-axis** is given below:

```json
{
    yAxis: [{
        "title": "Sales",
        style: {
            "ticks": {
                major: Style,
                minor: Style,
                context: Style
            },
            "text": {
                major: Style,
                minor: Style,
                context: Style
            },
            "line": Style,
            "gridLine": Style,
            "gridBand": Style
        }
    }],
}
```