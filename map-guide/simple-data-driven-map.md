---
permalink: map-guide/simple-data-driven-map.html
title: Simple Data Driven Map | FusionCharts
description: In this section we will learn how to create a simple map showing the population of the different continents in the world.
heading: Simple Data Driven Map
chartPresent: true
---

In this section we will learn how to create a simple map showing the population of the different continents in the world. The output would look like the chart below.

{% embed_chart map-guide-simple-data-driven-map.js %}

There are 4 simple steps to building a map using FusionCharts Suite XT:

* <a href="/map-guide/simple-data-driven-map#convert-data-to-jsonxml-format" class="smoth-scroll">Convert your data to FusionCharts Suite JSON or XML format</a>

* <a href="/map-guide/simple-data-driven-map#include-fusioncharts-suite-xt-library-in-your-page" class="smoth-scroll">Include the FusionCharts Suite XT JavaScript library in your HTML page</a>

* <a href="/map-guide/simple-data-driven-map#create-a-container-for-your-map-in-the-web-page" class="smoth-scroll">Create a container `<div>` for the map</a>

* <a href="/map-guide/simple-data-driven-map#create-an-instance-of-the-map" class="smoth-scroll">Use the `FusionCharts()` constructor to create the map instance, and then call the `render()` method</a>

## Convert data to JSON/XML format

FusionCharts Suite XT accepts both JSON and XML data formats, and can read it as a string from a local or remote file. Here is the JSON/XML representation of the data to build the map above.

{% embed_data map-guide-simple-data-driven-map.js %}

## Include FusionCharts Suite XT library in your page

To include the FusionCharts Suite XT JavaScript library in your HTML page, you use the `<script>` tag as under. You will notice that we have also included a theme file to define chart cosmetics. The theme is called `fint` (FusionCharts internal) and is present in the `themes` folder.

```html
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
</head>
```

## Create a container for your map in the web page

Next, you will need to create a container for your map in the form of a `<div>` element, as under.

```html
<body>
<div id="chart-container">A world map will load here!</div>
</body>
```

## Create an instance of the map

The final step is to create an instance of the map, initialize with the desired `width`, `height` dimensions and then set the JSON data source as shown below:

```html
<script>
FusionCharts.ready(function() {
    var populationMap = new FusionCharts({
        type: 'maps/world',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Global Population",
                "theme": "fint",
                "formatNumberScale": "0",
                "numberSuffix": "M"
            },
            "colorrange": {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "100",
                    "code": "#E0F0E0",
                    "displayValue": "Below 100M"
                }, {
                    "minvalue": "100",
                    "maxvalue": "500",
                    "code": "#D0DFA3",
                    "displayValue": "100-500M"
                }, {
                    "minvalue": "500",
                    "maxvalue": "1000",
                    "code": "#B0BF92",
                    "displayValue": "500-1000M"
                }, {
                    "minvalue": "1000",
                    "maxvalue": "5000",
                    "code": "#91AF64",
                    "displayValue": "Above 1B"
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
    }).render();
});
</script>
```

This is what we did in the above code

* We created an instance of `FusionCharts()` object in the `populationMap` variable. Each map in your HTML page needs to have a separate variable. The initialization code is wrapped within `FusionCharts.ready()` method. This safeguards your map instantiation code from being called before FusionCharts Suite XT library is loaded and is ready to be used on the page.

* We instantiated the world map using its alias `maps/world`. Each map in FusionCharts Suite XT has a unique alias. You can find the list of all maps and their aliases [here](/getting-started/list-of-charts).

* Next, we specified the width and height of the map (in pixels) using `width` and `height` property of the constructor.

* To specify the data format as JSON, we set the `dataFormat` parameter to `json`.

* The actual JSON data is embedded as string as value of `dataSource` parameter. The `chart` object contains a list of key-value pairs that lets you configure the functional and cosmetic attributes of your map.

* The `colorrange` object lets you define different numeric ranges, each associated with a color, to indicate progressive thresholds.

* We then set the `showLabels` and `includeValueInLabels` attributes to `1` to display the names and values in each continent, next we specified the suffix of the value to be million using the `numberSuffix` attribute set to `M`.

* Call the `render` method to render the map on the `chartContainer` element.

With that you have created your first data driven world map.

The full HTML code to build this map is shown here

```html
<html>
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
<script>
FusionCharts.ready(function () {
    var populationMap = new FusionCharts({
        type: 'maps/world',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
                "chart": {
                "caption": "Global Population",
                "theme": "fint",
                "formatNumberScale":"0",
                "numberSuffix":"M"
            },
            "colorrange": {
                "color": [
                    {
                        "minvalue": "0",
                        "maxvalue": "100",
                        "code": "#E0F0E0",
                        "displayValue" : "Below 100M"
                    },
                    {
                        "minvalue": "100",
                        "maxvalue": "500",
                        "code": "#D0DFA3",
                        "displayValue" : "100-500M"
                    },
                    {
                        "minvalue": "500",
                        "maxvalue": "1000",
                        "code": "#B0BF92",
                        "displayValue" : "500-1000M"
                    },
                    {
                        "minvalue": "1000",
                        "maxvalue": "5000",
                        "code": "#91AF64",
                        "displayValue" : "Above 1B"
                    }
                ]
            },
            "data": [
                {
                    "id": "NA",
                    "value": "515"
                },
                {
                    "id": "SA",
                    "value": "373"
                },
                {
                    "id": "AS",
                    "value": "3875"
                },
                {
                    "id": "EU",
                    "value": "727"
                },
                {
                    "id": "AF",
                    "value": "885"
                },
                {
                    "id": "AU",
                    "value": "32"
                }
            ]
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

### Was there a problem rendering the map?

In case something went wrong and you are unable to see the map, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

* If you get a **Loading Data** or **a Error in loading data** message, check whether your JSON data structure is correct, and there are no conflicts related to quotation marks in your code.

Click here for more information on [Troubleshooting](/troubleshooting/debugger).

