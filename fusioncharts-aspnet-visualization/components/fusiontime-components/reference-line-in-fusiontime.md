---
title: Reference Line | FusionCharts
description: This article defines the reference line.
heading: Reference Line
---

A Reference Line is essentially an arbitrary fixed line (mapped to the Y-axis), which indicates a specific value. It can help you quickly compare any data value against a fixed value represented by a line. For multivariate charts, each chart canvas can have it's own reference line.

<img src="{% site.BASE_URL %}/images/fusiontime-component-reference-line.png" alt="Reference Line" width="700" height="420">

The salient features of the reference line:

- A label which is by default displayed on the right side of the refernce the line, when you hover on the knob.

- A value which is by default displayed on the left side (y-axis) whenyou hover on the reference line.

A chart with a reference line is shown below:

{% embed_ftChart online-sales-single-series-column-data-plot-reference-line %}

In the example given above, a reference line appears, parallel to the time axis. Hover on the knob of the reference line to see the label and the value.

## Configure the Reference Line

You can configure the reference line using the following attributes of the `referenceLine` object:

- Use the `label` attribute to set the text of the label.

- Use the `value` attribute to set the value at which the reference line should appear.

Refer to the code given below:

```
{
    type: 'timeseries',
    ...
    dataSource: {
        data: dataStore,
        ...
            // Reference Line
            "referenceLine": [{
                "label": "Daily Target",
                "value": 300
            }],
        }
    }
}
```

## Style Definition

You can add CSS styling to set the cosmetic properties for reference line. To set the styling, instead of creating a separate CSS file, you can define the styling using `StyleDefinition` object.

Now, let's define the `styleDefinition` object and set the **font color** in an object. The code is given below:

```json
styleDefinition: {
    "colorstyle": {
        "fill": "#ff0000"
    }
}
```

Once the `StyleDefinition` is defined, you can refer it for the various components using `colorstyle` attribute.

The syntax to set the `StyleDefintion` to the label of the reference line is given below:

```json
"referenceLine": [{
    "label": "Daily Target",
    "value": 300,
    style: {
        text: "colorstyle",
        marker: "colorstyle"
    }
}],
```

In the above code, `colorStyle` object is called to set the color of the caption.

The chart after applying the above attributes will look like as shown below:

{% embed_ftChart online-sales-single-series-column-data-plot-reference-line-style-definition %}

In the above sample, **font color** of the y-axis label has been changed.

# Reference Line

A Reference Line is essentially an arbitrary fixed line (mapped to the Y-axis), which indicates a specific value. It can help you quickly compare any data value against a fixed value represented by a line. For multivariate charts, you can set separate reference lines for each chart canvas.

A Reference Line looks as shown in the image below:

<<Screenshot>>

### Configure Reference Line

To include a Reference Line in a chart, you need to use the `Add` method of the `ReferenceLine` object. The `Add` method accepts the following two parameters:

- `label` - It is of type string, and accepts the label text for the Reference Line.

- `value` - It is of type double, and accepts the value of the point of the Y-axis at which the Reference Line will originate.

If you want to include more than one Reference Line in a chart, you need to invoke `Add` separately for each of them, along with the parameters.

Refer to the code given below:

```
/* add reference line */
timeSeries.ReferenceLine.Add("label1", 500);|
```

The Reference Line will look as shown below:

<<Live Chart>>
