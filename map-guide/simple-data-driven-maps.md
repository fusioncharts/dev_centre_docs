---
title: Simple Data Driven Maps | FusionCharts
description: In this section we will learn how to create a simple map showing the population of the different continents in the world.
heading: Simple Data Driven Maps
---

> Replace the map definition files (of v3.12.2 or older) with the latest files available in [download package](https://www.fusioncharts.com/download/fusioncharts-suite-xt) while upgrading to __v3.13.0__.

In the map given below, you can see the populations of the different continents in the world. 

{% embed_all map-guide-simple-data-driven-maps-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/jjLnb9jt/) to edit the above map.

In the sections below, you will see how to build a map like the one above and customize it using different attributes.

There are 4 simple steps to building a map using FusionCharts Suite XT, as detailed in the sections below:

## Convert data to JSON/XML format

FusionCharts Suite XT accepts both JSON and XML data formats and can read them as strings from a local or remote file. Refer to the code given below for the JSON/XML representation of the data you need, to build the map shown above.

{% embed_data map-guide-simple-data-driven-maps-example-1.js %}

### Include FusionCharts Suite XT library in your page

To include the FusionCharts Suite XT JavaScript library on your HTML page, use the `<script>` tag as shown below: 

```html
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fusion.js"></script>
</head>
```

> The theme file included in the code snippet shown above is called `fusion` (FusionCharts internal) and is present in the `themes` folder. You can use it to define chart cosmetics.

## Create a container for your map in the web page

Next, you need to create a container for your map on the form of a `<div>` element, as shown below:

```json
<body>
    <div id="chart-container">A world map will load here!</div>
</body>
```

## Create an instance of the map

In the final step, you have to create an instance of the map, initialize it with the desired width and height dimensions, and then set the JSON data source. Do the following to build an example:

* Create a variable named `populationMap`.

* Create an instance of `FusionCharts()` object in the `populationMap` variable. Each map in your HTML page needs to have a separate variable. Also, note that the initialization code is wrapped within `FusionCharts.ready()` method. This safeguards your map instantiation code from being called before FusionCharts Suite XT library is loaded and is ready to be used on the page.

* Create an instance of the world map using its alias `maps/world`. Each map in FusionCharts Suite XT has a unique alias. You can find the list of all maps and their aliases [here](/map-guide/list-of-maps).

* Next, specify the width and height of the map (in pixels), using `width` and `height` properties of the constructor.

* To specify the data format as JSON, set the `dataFormat` parameter to `json`.

* The actual JSON data is embedded as string as the value of the `dataSource` parameter. Configure the functional and cosmetic attributes of your map using the list of key-value pairs contained within the `chart` object.

* Use the `colorrange` object to define different numeric ranges, each associated with a color, to indicate progressive thresholds.

* Set the values of `showLabels` and `includeValueInLabels` attributes to `1`, to display the names and values in each continent. Next, specify the suffix of the value to be million using the `numberSuffix` attribute set to `M`.

* Call the render method to render the map on the `chartContainer` element.

Refer to the code below:

```javascript
FusionCharts.ready(function() {
    var populationMap = new FusionCharts({
        type: 'maps/world',
        renderAt: 'chart-container',
        width: '800',
        height: '550',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Global Population",
                "theme": "fusion",
                "formatNumberScale": "0",
                "numberSuffix": "M"
            },
            "colorrange": {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "100",
                    "code": "#D0DFA3",
                    "displayValue": "< 100M"
                }, {
                    "minvalue": "100",
                    "maxvalue": "500",
                    "code": "#B0BF92",
                    "displayValue": "100-500M"
                }, {
                    "minvalue": "500",
                    "maxvalue": "1000",
                    "code": "#91AF64",
                    "displayValue": "500M-1B"
                }, {
                    "minvalue": "1000",
                    "maxvalue": "5000",
                    "code": "#A9FF8D",
                    "displayValue": "> 1B"
                }]
            },
            "data": [{
                "id": "NA",
                "value": "515"
            }, {
                "id": "SA",
                "value": "373"
            }, {
                "id": "AS",
                "value": "3875"
            }, {
                "id": "EU",
                "value": "727"
            }, {
                "id": "AF",
                "value": "885"
            }, {
                "id": "AU",
                "value": "32"
            }]
        }
    });
    populationMap.render();
});
```

Now that you know how to create a simple map try customizing different map attributes. You can apply the following customizations to maps:

## Show full names in map labels

FusionCharts Suite XT shows only the short names of the entities on the map by default. You can set the map to display the full name of the entity. Use the following attributes  to do so:

* Set the value of the `showLabels` attribute to `1` to show labels on the map.

* Set the value of the `useSNameInLabels` attribute to `1` to show labels on the map.

Refer to the code below:

```json
{
    "chart": {
        "showLabels": "1",
        "useSNameInLabels": "1"
    },
}
```

The map will look as shown below:

{% embed_chart map-guide-simple-data-driven-maps-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/5Gr3N/) to edit the above map.

> In the above map, each of the continent is entities, and their full names are part of the label.

## Show values in labels

You can set the entity labels to show data values. Use the following attributes to do so:

* Set the value of the `includeValueInLabels` attribute to `1`, to display data values as part of the entity labels.

* Set the `labelSepChar` attribute to specify the character which works as a separator between the data value and the label name. Note that this character is prefixed to the data value in the label.

Refer to the code below:

```json
{
    "chart": {
        "labelSepChar": ": ",
        "includeValueInLabels": "1"
    },
}
```

The map will look as shown below:

{% embed_chart map-guide-simple-data-driven-maps-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/7rz5a/) to edit the above map.

> In the map above, the labels are configured to show the population value along with the continent short name.

## Show labels only for specific entities

By default, a map displays labels for all entities. However, you can choose to display labels only for specific entities of interest. To do so, set the value of the `showLabel` attribute to `1`, for only the entities that you want to show labels for. Note that to control display for specific entities, you need to define this value at an entity level.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorrange": {
        "color": [{
            ...
        }]
    },
    "data": [
        ...
        {
            ...
            "showLabel": "1"
    }]
}
```

The map will look as shown below:

{% embed_chart map-guide-simple-data-driven-maps-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/qb31mo1b/) to edit the above map.

> In the example given above, you can see labels displayed only for the two most populous continents (Asia and Africa).

## Customize label text

You can display customized label text for each specific entity. Use the `displayValue` attribute to do so.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorrange": {
        "color": [{
            ...
        }]
    },
    "data": [{
        ...
        "displayValue": "Moderate"
    }]
}
```

The map will look as shown below:

{% embed_chart map-guide-simple-data-driven-maps-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/qb31mo1b/) to edit the above map.

> In the map above, you can see the data label of each continent customized as `sparse`, `moderate` or `dense`, based on the population density.

### Customize fonts

You can customize font-related properties for each entity. Use the following attributes to do so:

* Use the `font` attribute to specify the font to be used in the entity.

* Use the `fontSize` attribute to specify the font size to be used in the entity.

* Use the `fontColor` attribute to specify the font color to be used in the entity.

* Use the `fontBold` attribute to specify whether the font should be bold formatted.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorrange": {
        "color": [{
            ...
        }]
    },
    "data": [
        ...
        {
            "Font": "Helvetica",
            "FontSize": "10",
            "FontColor": "#383838",
            "FontBold": "1"
        }
    ]
}
```

The map will look as shown below:

{% embed_chart map-guide-simple-data-driven-maps-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/QffVn/) to edit the above map.

> In the example above, the font is set to `Helvetica` and the size of the label name is proportional to the value of each entity.

## Use short names in tooltips

By default, tooltips in maps show the full name of the entity along with the value. However, you can configure the tooltips to show only the short names. To do so, set the value of the `useSNameInToolTip` attribute to `1`.

Refer to the code below:

```json
{
    "chart": {
        "useSNameInToolTip": "1"
    },
}
```

The map will look as shown below:

{% embed_chart map-guide-simple-data-driven-maps-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/E7jNV/) to edit the above map.

## Turn off entity tooltips

In FusionCharts Suite XT, tooltips are on by default. However, you can turn them off for entities. To do so, set the value of the `showEntityToolTip` attribute to `0`. 

Refer to the code below:

```json
{
    "chart": {
        "showEntityToolTip": "0"
    },
}
```

The map will look as shown below:

{% embed_chart map-guide-simple-data-driven-maps-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/G9SNX/) to edit the above map.

## Handle null entities

There are times when you may have to work with datasets, in which one or more entities have the null value. You can customize such entities by modifying the transparency, color and hover effects. To do so, use the following attributes:

* Use the `nullEntityColor` attribute to set the font color for all entities with null value.

* Use the `nullEntityAlpha` attribute to set the transparency (between `0` for transparent and `100` for opaque) for entities with null value.

* Set the value of the `hoverOnNull` attribute to `1`, to enable hover effects for entities with null value.

Refer to the code below:

```json
{
    "chart": {
        "nullEntityColor": "#C2C2D6",
        "nullEntityAlpha": "50",
        "hoverOnNull": "0"
    },
}
```

The map will look as shown below:

{% embed_chart map-guide-simple-data-driven-maps-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/BP3G5/) to edit the above map.

## Troubleshoot

In case something goes wrong and you are unable to see the map, check for the following:

* If you get a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check whether the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see whether `fusioncharts.js` has loaded properly.

* If you get a **Loading data** or an **Error in loading data** message, check whether your JSON data structure is correct, and ensure there are no conflicts related to quotation marks in your code.
