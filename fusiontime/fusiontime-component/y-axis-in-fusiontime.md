---
title: Y-axis | FusionCharts
description: This article defines the Y-axis.
heading: Y-axis
---

In FusionTime, the `yAxis` object can be specified within the `dataSource` object of the FusionCharts constructor.

Refer to the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-y-axis.png" alt="Y-axis" width="700" height="420">

The `yAxis` object accepts input in two forms of an array.

- Array of objects
- Array of strings

An example of an array of objects is shown in the code below:

```javascript
yAxis: [{
    plot: {
        value: 'Sales',
    },
}, {
    plot: {
        value: 'Quantity',
    },
}, {
    plot: {
        value: 'Shipping Cost',
    },
}],
```

In the above code an array has been created with two objects specifying Y-axes of canvases in a chart.

An example of an array of strings is shown in the code below:

```javascript
"yAxis": [{
    "plot": ["Sales", "Quantity", "Shipping Cost"]
}]
```

In the above code an array has been created with two strings specifying Y-axis of canvases in a chart.

Refer to the chart below:

{% embed_ftChart online-sales-multi-variate %}

## Y-axis on Right

By default, the position of the Y-axis is set to left. You can customize the position of the Y-axis by setting the value of `orientation` attribute to `right`. This will render a chart with Y-axis on right.

The code is given below:

```javascript
 dataSource: {
      data: dataStore,
      caption: {
        text: 'Online Sales of a SuperStore'
      },
      yAxis: [{
        plot: {
          "value": "Sales",
        },
        "title": "Sales Value",
        "orientation": "right",
      }]
    }
```

In the above code, the value of `orientation` attribute has been set to **right** under `yaxis` object.

By applying the above attribute, the chart looks like as shown in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-y-axis-on-right.png" alt="Y-axis" width="700" height="420">

Click [here](https://jsfiddle.net/fusioncharts/gykep2q4/) to edit the above chart.

## Set Chart Limits Explicitly

You can set the custom Y-axis limits as per your requirement. To do so, apply the following attributes under the `yAxis` object.

- Set the lower limit of the Y-axis using the `min` attribute.
- Set the upper limit of the Y-axis using the `max` attribute.

The code is given below:

```javascript
{
      data: dataStore,
      caption: {
        text: 'Online Sales of a SuperStore'
      },
      yAxis: [{
        plot: {
          "value": "Sales",
          "type": "column",
        },
        "title": "Total Sales",
        "min": "0",
        "max": "350"
      }]
    }
```

The chart with custom Y-axis limits looks as shown in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-y-axis-min-max.png" alt="Y-axis" width="700" height="420">

Click [here](https://jsfiddle.net/fusioncharts/pswnohk9/) to edit the above chart.

## Add Prefix & Suffix

To specify the prefix and suffix of the Y-axis values, set the suffix and prefix of the Y-axis values using the `suffix` and `prefix` attributes under the `format` object within the `yAxis` object.

The code is given below:

```javascript
{
      data: dataStore,
      caption: {
        text: 'Online Sales of a SuperStore'
      },
      yAxis: [{
        plot: {
          "value": "Sales",
        },
        "title": "Total Sales",
        format: {
          "prefix": "$",
          "suffix": "k"
        }
      }]
    }
```

In the above code, the prefix has been set as `$` and the suffix as `k`.

Click [here](https://jsfiddle.net/fusioncharts/xto4hp0n/) to see it live.

## Dual Y-axis

In some scenarios, you might have data with two measures of different units. For example - temperature in `degree Celsius` and energy in `kilowatt`. This is where a dual Y-axis comes handy. You can opt to show both the measures on two different Y-axis in the same canvas. A chart with dual Y-axis is shown below:

{% embed_ftChart dual-y-axis-chart %}

The chart above shows a dual Y-axis chart created to compare energy consumed with the temperature for the year 2018.

To render a chart with dual Y-axis refer to the code below:

```javascript
{
    data: dataStore,
    chart: {
        multiCanvas: false
    },
    caption: {
        text: 'Energy & Temperature Measurements'
    },
    yAxis: [{
        plot: [{
            value: 'Energy',
            connectNullData: true,
            type: 'line'
        }],
        format: {
            suffix: ' kWh'
        }
    }, {
        plot: [{
            value: 'Temperature',
            connectNullData: true,
            type: 'line'
        }],
        format: {
            suffix: ' °C'
        }
    }],
}
```
Click [here](https://jsfiddle.net/fusioncharts/n0axvrf8/) to see it in a live chart.

In the above code:

- Set the `multiCanvas` attribute to `false`, which renders the chart with dual Y-axis.
- Set the column name using the `value` attribute under the `plot` object to specify the column which is mapped to the Y-axis.
- Set the Y-axis title for both the Y-axis using the `title` attribute under the `yAxis` object.

## Log Y-axis

In some scenarios, you might also have data for which instead of a usual linear axis you want a `logarithmic` axis. Logarithmic Y-axis means log scale of any base greater than 1. The default base is 10. You can also opt to change the base if required. The charts with logarithmic Y-axis are perfect for plotting data that comprises of both small and large values. You can use this to plot data like sales comparison, election results, population growth, etc. A chart with logarithmic Y-axis is shown below:

{% embed_ftChart log-y-axis-chart %}

The chart is a logarithmic Y-axis chart created to showcase the **Thermal flow of machinery observed** from the east region thermal sensor.

To render a chart with logarithmic Y-axis refer to the code below:

```javascript
{
      data: dataStore,
    caption: {
        text: 'Thermal flow of machinery'
    },
    subcaption: {
        text: 'Observation from east region thermal sensor'
    },
    yAxis: [{
        plot: {
            value: 'Heat Flux'
        },
        title: 'Heat Flux (in W/m²)',
        type: 'log'
    }]
}
```

Click [here](https://jsfiddle.net/fusioncharts/rcbm1pg6/) to see it in a live chart.

In the above code, the value of the `type` attribute of `yAxis` object has been set to `log` which renders a chart with the logarithmic Y-axis.

## Change Log Base

By default, the base of a chart with logarithmic Y-axis is set to 10. You can, however, set the base to any value of your requirement. Just ensure that the base value is any natural number. Set the base attribute to specify the base value for the logarithmic chart.

A chart with logarithmic y-axis with `base` set to 50 is shown below:

{% embed_ftChart log-y-axis-chart-different-base %}

The code to set the base of the logarithmic Y-axis is shown below:

```javascript
{
      data: dataStore,
    caption: {
        text: 'Thermal flow of machinery'
    },
    subcaption: {
        text: 'Observation from east region thermal sensor'
    },
    yAxis: [{
        plot: {
            value: 'Heat Flux'
        },
        title: 'Heat Flux (in W/m²)',
        type: 'log',
        base: '50'
    }]
}
```

Click [here](https://jsfiddle.net/fusioncharts/f8akhcjt/) to see it in a live chart.

## Style Definition

You can add CSS styling to set the cosmetic properties of Y-axis. To set the styling, instead of creating a separate CSS file, you can define the styling using `StyleDefinition` object.

Now, let's define the `styleDefinition` object and set the **font color** in an object. The code is given below:

```json
styleDefinition: {
    "colorstyle": {
        "fill": "#ff0000"
    }
}
```

Once the `StyleDefinition` is defined, you can refer it for the various components using `colorstyle` attribute.

> In order to understand better, we have named the object as `colorstyle`. You can name the object as per your choice.

The syntax to set the `StyleDefintion` to the Y-axis label is given below:

```json
{
  "yAxis": [
    {
      "plot": "Sales",
      "title": "Sales",
      "style": {
        "title": "colorstyle"
      }
    }
  ]
}
```

In the above code, `colorStyle` object is called to set the color of the caption.

The chart after applying the above attributes will look as shown below:

{% embed_ftChart online-sales-single-series-style-definition-y-axis %}

In the above sample, **font color** of the Y-axis label has been changed.

The code to update the cosmetic properties of other elements in **y-axis** is given below:

```json
{
        data: dataStore,
        styleDefinition: {
            "colorstyle": {
                "fill": "#ff0000"
            }
        },
        chart: {
        },
        yAxis: {
            "plot": "Sales",
            "title": "Sales",
            style: {
                title: "colorstyle"
            }
        },
        caption: {
            text: "Online Sales of a SuperStore"
        }
    }
```

Click [here](https://jsfiddle.net/fusioncharts/v6zmn8p2/) to see it in a live chart.
