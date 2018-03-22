---
permalink: map-guide/colouring-based-on-data-range.html
title: Coloring Based on Data Range | FusionCharts
description: A gradient scale allows you to specify colours associated with specific data points. This defines an automatic gradient scale across the data range.
heading: Coloring Based on Data Range
chartPresent: true
---

You have to use color ranges to define entity colors based on values, in order to set up a <<simple data driven map>>. Since the process of defining colors for individual data buckets is not scalable, you need to group data values under defined data range buckets. 

Note that you need to denote entities within these buckets with the same color. Also, you need to define colors for each data range. This can become tedious if you have to deal with a large number of buckets. In that case, you can use a gradient scale to simplify this process.

Using a gradient scale, you can specify colours associated with specific data points. This defines an automatic gradient scale across the data range. Entities appear in unique colors as per the data value position on the gradient scale.

## Build a map with a gradient scale

Here's how you can build a map with a gradient scale:

* Set the `caption` of the map and apply the `fint` theme (FusionCharts Internal Theme) to control the cosmetic properties of the map. Use the `formatNumberScale` and `showLabels` attributes to specify the formatting on labels.

* Use the `colorrange` object to define different numeric ranges of the gradient legend. Also, use the following attributes to define specific properties:

    * Use the `startLabel` and `endLabel` attributes to define the labels on the starting and ending points of the gradient scale.

    * Use the `minValue` attribute to specify the starting point of the scale.

    * Use the `color` attribute to specify the starting color of the legend.

* Use the `colorrange` object, which has an array of `color` objects, to indicate progressive thresholds. Specify the upper limit of the band with `maxValue` as key.

* Specify the color code for the upper limit of each band in the gradient with `code` as key.

* Lastly, specify the tabular data within the `data` array, with name of the new ID with key as `id`, and population with key as `value`.

Refer to the code given below:

```

{

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

        "color": [

            {

                "maxvalue": "25",

                "code": "#FFDD44",

                "displayValue": "Median"

            },

            {

                "maxvalue": "100",

                "code": "#6baa01"

            }

        ]

    },

    "data": [

        {

            "id": "NA",

            "value": "22.1",

            "showLabel": "1",

            "displayValue": "Moderate"

        },

        {

            "id": "SA",

            "value": "22.0",

            "showLabel": "1",

            "displayValue": "Moderate"

        },

        {

            "id": "AS",

            "value": "95.0",

            "showLabel": "1",

            "displayValue": "Dense"

        },

        {

            "id": "EU",

            "value": "72.5",

            "showLabel": "1",

            "displayValue": "Dense"

        },

        {

            "id": "AF",

            "value": "33.7",

            "showLabel": "1",

            "displayValue": "Moderate"

        },

        {

            "id": "AU",

            "value": "3.2",

            "showLabel": "1",

            "displayValue": "Sparse"

        }

    ]

}

```

The map will look as shown below:

<map>

> Note: You can use only one color to draw the gradient scale. Here, the scale will appear starting from the darkest shade of the color (lower limit) to the brightest shade of the color (upper limit). The map will automatically decide the numeric range taking the lowest data value present as the lower limit and the highest data value as the upper limit. In this case, however, you cannot set the upper limit using the `maxValue` attribute.

To build the map shown above, refer to the HTML code given below:

```

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