---
permalink: map-guide/colouring-based-on-data-range.html
title: Coloring Based on Data Range | FusionCharts
description: A gradient scale allows you to specify colours associated with specific data points. This defines an automatic gradient scale across the data range.
heading: Coloring Based on Data Range
chartPresent: true
---

In setting up a (/map-guide/simple-data-driven-map) we used color ranges to define entity colors based on values. This process of defining colors for individual data buckets is not scalable, it requires grouping of data values under defined data range buckets. The entities within these buckets are denoted with the same color. Secondly, you need to define colours for each data range. This becomes tedious if the number of such buckets is large. You can use a gradient scale to simplify this process.

A gradient scale allows you to specify colours associated with specific data points. This defines an automatic gradient scale across the data range. Entities appear in unique colors as per the data value position on the gradient scale.

The following chart shows a map with a gradient legend:

{% embed_chart map-guide-colouring-based-on-data-range.js %}

Observe that you can drag the legend pointers from both ends and set thresholds such that only those entities that are within the threshold are visible.


The data structure of the map will look like this will look like this

{% embed_data map-guide-colouring-based-on-data-range.js %}

This is what we did in the above data structure

* Set the `caption` of the map and applied the `fint` theme (FusionCharts Internal Theme) to control the cosmetic properties of the map. The `formatNumberScale`  and `showLabels` attributes were are used to specify the formatting on labels.

* The `colorrange` object defines different numeric ranges of the gradient legend, the `startLabel` and `endLabel` define the label on the starting and end points of the gradient scale. The `minValue` attribute specifies the starting point of the scale and the `color` attribute specifies the starting color of the legend.

* The `colorrange` object has an array of `color` objects, to indicate progressive thresholds. Here the upper limit of the band is specified with `maxValue` as key.

* The color code for the upper limit of each band in the gradient is specified with `code` as key.

* Lastly the tabular data is specified within the `data` array, with name of the new ID with key as `id`, and population with key as `value`.

<p class="text-info">It is possible to use only one color to draw the gradient scale. Here, the scale will appear starting from the darkest shade of the color (lower limit) to the brightest shade of the color (upper limit). The map will automatically decide the numeric range taking the lowest data value present as the lower limit and the highest data value as the upper limit. There is no scope however of setting the upper limit using the `maxValue` attribute.</p>

The full HTML code to build this example is shown below

```html
<html>
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
<script>
FusionCharts.ready(function() {
    var salesMap = new FusionCharts({
        type: 'maps/world',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Global Population Density",
                "theme": "fint",
                "showLabels": "1",
                "formatNumberScale": "0"
            },
            "colorrange": {
                "minvalue": "0",
                "startlabel": "Low",
                "endlabel": "High",
                "code": "#FF4411",
                "gradient": "1",
                "color": [{
                    "maxvalue": "25",
                    "code": "#FFDD44",
                    "displayValue": "Median"
                }, {
                    "maxvalue": "100",
                    "code": "#6baa01"
                }]
            },
            "data": [{
                "id": "NA",
                "value": "22.1",
                "showLabel": "1",
                "displayValue": "Moderate"
            }, {
                "id": "SA",
                "value": "22.0",
                "showLabel": "1",
                "displayValue": "Moderate"
            }, {
                "id": "AS",
                "value": "95.0",
                "showLabel": "1",
                "displayValue": "Dense"
            }, {
                "id": "EU",
                "value": "72.5",
                "showLabel": "1",
                "displayValue": "Dense"
            }, {
                "id": "AF",
                "value": "33.7",
                "showLabel": "1",
                "displayValue": "Moderate"
            }, {
                "id": "AU",
                "value": "3.2",
                "showLabel": "1",
                "displayValue": "Sparse"
            }]
        }
    }).render();
});
</script>
</head>
<body>
    <div id="chart-container">A world map will load here!</div>
</body>
</html>
```

