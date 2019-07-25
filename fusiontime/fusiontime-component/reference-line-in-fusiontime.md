---
title: Reference Lines | FusionCharts
description: This article defines the reference line.
heading: Reference Lines
---

A Reference Line is essentially an arbitrary fixed line, which runs parallel to the time axis and is mapped to a specific value of YAxis. It can help you quickly compare any data point against a fixed value line.

Refer to the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-reference-line.png" alt="Reference Line" width="700" height="420">

The salient features of the reference line:

- A `label` which is by default displayed on the opposite side of the YAxis, when you hover on the knob of the reference line.
- A `value` is by default displayed in the reflect tag when you hover on the knob of the reference line.
- A reference line can be customized in terms of shape, size, color, etc.

A chart with a reference line is shown below:

{% embed_ftChart online-sales-single-series-column-data-plot-reference-line %}

In the example given above, a reference line appears, parallel to the time axis. Hover on the knob of the reference line to see the label and the value.

## Add a Reference Line

You can add a reference line using the following attributes of the `referenceLine` object inside the YAxis object:

- Use the `value` attribute to set the value at which the reference line should appear.
- Use the `label` attribute to set the text of the label.

Refer to the code given below:

```javascript
{
    type: 'timeseries',
    dataSource: {
        data: dataStore,
            // Reference Line
            "referenceLine": [{
                "label": "Daily Target",
                "value": 300
            }],
        }
    }
}
```

## Reference Line in Multivariate chart

For multivariate charts, each chart canvas can have its own reference line. A chart with reference lines in each canvas is shown below:

{% embed_ftChart reference-line-in-multivariate-chart %}

The code to render reference lines in each canvas is given below:

```javascript
{
    data: dataStore,
    caption: {
        text: 'Pollution Control Report'
    },
    yAxis: [{
        plot: 'Temperature',
        title: 'Temperature (in °C)',
        referenceLine: [{
            label: 'Controlled Temperature',
            value: '6'
        }]
    }, {
        plot: 'Carbon mono-oxide',
        title: 'CO (in µg/m³)',
        referenceLine: [{
            label: 'Controlled Carbon mono-oxide',
            value: '3'
        }]
    }],
}
```

In the above code, the reference line is set for both the canvases of the chart.

## Multiple Reference Lines

In FusionTime, each chart canvas can have endless reference lines. A chart with multiple reference lines on a canvas is shown below:

{% embed_ftChart multiple-reference-line-in-a-chart %}

The code to render multiple reference lines in a canvas is shown below:

```javascript
{
    data: dataStore,
    caption: {
        text: 'Pollution Control Report of China Town'
    },
    yAxis: [{
        plot: [{
            value: 'NMHC'
        }, {
            value: 'Nitrogen dioxide'
        }],
        title: 'Pollutants Concentration (in µg/m³)',
        referenceLine: [{
            label: 'Controlled NMHC',
            value: '150',
            style: {
                marker: {
                    fill: '#A4A7D5',
                    stroke: '#A4A7D5'
                }
            }
        }, {
            label: 'Controlled NO₂',
            value: '80',
            style: {
                marker: {
                    fill: '#87DEDB',
                    stroke: '#87DEDB'
                }
            }
        }]
    }],
}
```

## Customize Reference Line

You can use CSS styling to set the cosmetic properties of a reference line. To set the styling, instead of creating a separate CSS file, define the style properties in the `StyleDefinition` object.

### Customize the line color

You can customize the color of the reference line by defining the `styleDefinition` object and set the color in an object. The code is shown below:

```javascript
styleDefinition: {
    "styleReferenceLine": {
        "fill": "#ff0000"
    }
}
```

> In order to understand better, we have named the object as `styleReferenceLine`. You can name the object as per your choice.

After defining the `StyleDefinition`, use the `styleReferenceLine` as the value of the `stroke` property within the `referenceLine` object to customize the cosmetic properties of the reference line.

Refer to the code below:

```javascript
{
    data: dataStore,
    styleDefinition: {
        "colorstyle": {
            "fill": "#ffff00" //color of the reference line
        }
    },
    chart: {
    },
    caption: {
        text: 'Online Sales of a SuperStore in the US'
    },
    yaxis: {
        "plot": {
            "value": "Sales",
            "type": "line"
        },
        "referenceLine": [{
            "label": "Daily Target",
            "value": 300,
            style: {
                text: "colorstyle",
                marker: "colorstyle"
            }
        }],
    }
}
```

In the above code, `styleReferenceLine` is called to set the color of the reference line.

The chart after applying the above attributes will look like as shown below:

{% embed_ftChart online-sales-single-series-column-data-plot-reference-line-style-definition %}

### Style Reference Line

You can render the reference lines as dashed lines, instead of the default continuous lines. To do so follow the steps given below:

- Set the `stroke-dash` attribute within the style object.

- To change the width of the dashed lines, set the `stroke-width` attribute in pixels.

- To set the transparency of the dashed lines, set the `stroke-opacity` attribute.

Refer to the code given below:

```javascript
{
    data: dataStore,
    caption: {
        text: 'Temperature readings of an Italian Town'
    },
    yAxis: [{
        plot: 'Temperature',
        title: 'Temperature',
        format:{
            suffix: '°C',
        },
        referenceLine: [{
            label: 'Controlled Temperature',
            value: '10',
            style: {
                marker: {
                    'stroke-dasharray': '4 3'
                }
            }
        }]
    }],
}
```

A chart with a dashed reference line looks like as shown below:

{% embed_ftChart dashed-reference-line-in-a-chart %}

In the above example:

- The reference line has been rendered as dashed. The length of the dash has been set to `4` whereas the dash gap has been set to `3`.
- The width of the dashed lines has been set to `4px`.

## Reference Zone

Reference zones are similar to reference lines, except that it marks out an entire zone rather than just a line. Reference zones help you identify data plots that fall under the zone. In FusionTime, a reference zone has two fixed values filled by a color. You can use `n` number of reference zones in a canvas.

Refer to the image below:

<img src="{% site.BASE_URL %}/images/reference-zone-in-a-single-series-chart.png" alt="Reference Line" width="700" height="420">

The salient features of a reference zone are:

- You can specify a minimum value and a maximum value to draw a reference zone.

- You can create one or more reference zones on canvas for each y-axis (in case the chart has multiple y-axes).

- You can customize the color and other cosmetic properties to each reference zone.

- When you hover over the reference zone, the data plots falling in the zone get highlighted.

A chart with a reference zone looks like as shown below:

temperature-reading-line-plot-reference-zone

{% embed_ftChart temperature-reading-line-plot-reference-zone %}

In the above chart, a reference zone appears parallel to the time axis. Hover on the zone to see the label and the value.

## Add a Reference Zone

You can add a reference zone using the following attributes of the `referenceZone` object inside the `YAxis` object:

* Use the `valueMax` attribute to set the value from where you want to render the reference zone.

* Use the `valueMin` attribute to set the value up to which you want to render the reference zone.

* Use the `label` attribute to set the text of the label.

Refer to the code given below:

```json
{
    type: 'timeseries',
    dataSource: {
        yAxis: [{
            // Reference Line
            "referenceLine": [{
                "label": "Target",
                "valueMax": 3000,
                "valueMin": 2000
            }],
        }]
    }
}
```

## Reference Zone in Dual Y-axis Chart

For a time-series chart with dual y-axis, you can add reference zones for each y-axis on the canvas. A chart with multiple reference zones for dual y-axis is shown below:

{% embed_ftChart reference-zone-in-dual-y-axis %}

In the above chart, if you hover over the notch of each reference zone, you will notice that the minimum and maximum values of the zone will be visible on the axis for which the reference zone has been drawn.

The code to render the reference zone in a dual Y-Axis chart is given below:

```json
dataSource: {
    yAxis: [{
        plot: 'Temperature',
        title: 'Temperature (in °C)',
        referenceLine: [{
            label: 'Controlled Temperature',
            value: '6'
        }]
    }, {
        plot: 'Carbon mono-oxide',
        title: 'CO (in µg/m³)',
        referenceLine: [{
            label: 'Controlled Carbon mono-oxide',
            value: '3'
        }]
    }],
}
```

## Customize a reference zone

You can use CSS styling to the cosmetic properties of the reference zone. To set the styling, use the familiar CSS styling approach of specifying the different style parameters in the `style` object of the `referenceZone` object. Even the cosmetic properties for the hover effect of each reference zone can be specified.

Refer to the code given below:

```json
referenceZone: [{
    label: 'Label',
    valueMin: '2000',
    valueMax: '3000',
    style: {
        'marker': { },
        'marker:hover': { },
        'marker-zone': { },
        'marker-zone:hover': { },
        'marker-tag': { },
        'text': { },
        'marker-text': { },
        'marker-notch': { },
        'marker-notch:hover': { },
        'marker-notch-connector': { },
        'marker-notch-connector:hover': { }    
    }
}]

```

In the above code:

* Create `style` object under `referenceZone` object to add styling to the different elements of the reference zone.

* In the `style` object:

    * `marker` is used to style the zone, label, values, and notch.

    * `marker:hover` is used to style the zone, label, values, and notch when hovered.

    * `marker:zone` is used to style the fill zone of the reference zone.

    * `marker-zone:hover` is used to style the fill zone of the reference zone when hovered.

    * `marker-tag` is used to style the tags which occur when we hover over the reference zone to view values and labels.

    * `text` is used to style all the texts of the reference zone.

    * `marker-text` is used to style the values (min and max) of the reference zone. The style applied using this attribute overrides the style applied using the `text` attribute.

    * `marker-notch` is used to style the notch of the reference zone.

    * `marker-notch:hover` is used to style the notch of the reference zone when hovered.

    * `marker-notch-connector` is used to style the connector of the notch at the end of the reference zone.

    * `marker-notch-connector:hover` is used to style the connector of the notch at the end of the reference zone when hovered.

## Reference zone in a multivariate chart


