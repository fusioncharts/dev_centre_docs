---
title: Create a Map Using Django | FusionCharts
description: This article outlines the steps to be executed for creating your first map using the django wrapper.
heading: Create a Map Using Django
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **Django** wrapper for FusionCharts. The `FusionCharts server-side Django` wrapper lets you easily add rich and interactive maps to any Django project. Using the wrapper, you can create maps in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a chart using the `FusionCharts server-side Django` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts Django` wrapper and all the other dependencies on your system.

> The **FusionCharts Django** wrapper requires Python 2.7 or higher.

To install the FusionCharts Suite, follow the steps below:

* Copy and paste the `fusioncharts.py` file from `integrations > django > fusioncharts-wrapper` in your project folder.

* Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

* Include the map renderer file.

* Include the FusionCharts theme file to apply the style to the charts.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="{% "https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js" %}"&gt;&lt;/script>

// Include FusionCharts maps file
&lt;script type="text/javascript" src="{% "https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js" %}"&gt;&lt;/script>

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="{% "https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="{% "path/to/local/fusioncharts.js" %}"&gt;&lt;/script&gt;

// Include FusionCharts maps file
&lt;script type="text/javascript" src="{% "path/to/local/fusioncharts.maps.js" %}"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="{% "path/to/local/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That completes the installation of FusionCharts Suite and the Django wrapper.

## Create you First map

In this section, we will create a visualization using the **World Map** showing the average annual population growth.

The chart will look like as shown below:

{% embed_chart getting-started-your-first-map.js %}

## Map data

The data for the above map is represented in the table below:

| State | Entity Name | Value |
| ----- | ----------- | ----- ||
| North America | NA          | 82    |
| South America | SA          | 2.04  |
| Asia          | AS          | 1.78  |
| Europe        | EU          | 40    |
| Africa        | AF          | 2.58  |
| Australia     | AU          | 1.30  |

In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column.

FusionCharts accepts data in **JSON** format in which the above entities are denoted by the `id` key in the `data` object.

For any map visualization, it is important to provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF` and not `AFR`.

We have a detailed [Map Specification Sheets](https://www.fusioncharts.com/dev/maps/spec-sheets/world) for all the maps that can be rendered using FusionCharts, where you can find the correct `id` of the maps you want to create.

Following code is the JSON representation of the above table with the required attributes to render the above map.

```JSON
{
    // Map Configuration
    "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1955-2015",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
    }]
}
```

In the above JSON data:

* Create the `chart` object to define the elements of the map.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

* Create the `data` array to define the id of the continents and their corresponding values along with configurations. For example, the first object under `data` array contains the `id` and `value` of **North America** as **NA** and **.82** respectively.

The chart object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the map.

Now that you have the data in JSON format, let's learn how to render the map.

## Render the Map

To render the chart, follow the steps below:

1. Import Render from `django.shortcuts`.

2. Import HttpResponse from `django.http`.

3. Import `OrderedDict` from collections.

4. Include the `fusioncharts.py` file.

5. Load dial indicator values from a simple string array.

6. Pass widget data to the `dataSource` parameter, as dict, in the form of key-value pairs.

7. Configure the `mapConfig` dict, which contains key-value pair data for the widget attribute.

8. Configure the `colorData` dict, which contains key-value pairs of data for `ColorRange` of dial.

9. Set the data map using the `mapDataArray`. 

10. Insert the `mapDataArray` `dataSource["data"]` list.

11. Create the gauge instance and set the following:
    * Set the chart type as `world`. Each map is represented with a unique map alias. For World map, the alias is `world`. Find the complete list of map types with their respective alias[ here ](https://www.fusioncharts.com/dev/chart-guide/list-of-maps).

    * Set the map `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the chart.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

    * Pass the map data to the `dataSource` parameter.

12. Finally, use a container using `<div>` to render the gauge.

The consolidated code is given below:

```
from django.shortcuts import render
from django.http import HttpResponse
from collections import OrderedDict

# Include the `fusioncharts.py` file that contains functions to embed the maps.
from fusioncharts import FusionCharts

def myFirstMap(request):

    # Chart data is passed to the `dataSource` parameter, as dict, in the form of key - value pairs.
    dataSource = OrderedDict()

    # The `mapConfig` dict contains key - value pairs data
    for chart attribute
    mapConfig = OrderedDict()
    mapConfig["caption"] = "Average Annual Population Growth"
    mapConfig["subcaption"] = "1955-2015"
    mapConfig["numbersuffix"] = "%"
    mapConfig["includevalueinlabels"] = "1"
    mapConfig["labelsepchar"] = ":"
    mapConfig["entityFillHoverColor"] = "#FFF9C4"
    mapConfig["theme"] = "fusion"

    # Map color range data
    colorDataObj = {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
                "minValue": "0.5",
                "maxValue": "1",
                "code": "#FFD74D"
            },
            {
                "minValue": "1.0",
                "maxValue": "2.0",
                "code": "#FB8C00"
            },
            {
                "minValue": "2.0",
                "maxValue": "3.0",
                "code": "#E65100"
            }
        ]
    }

    dataSource["chart"] = mapConfig
    dataSource["colorrange"] = colorDataObj
    dataSource["data"] = []


    # Map data array
    mapDataArray = [
        ["NA", "0.82", "1"],
        ["SA", "2.04", "1"],
        ["AS", "1.78", "1"],
        ["EU", "0.40", "1"],
        ["AF", "2.58", "1"],
        ["AU", "1.30", "1"]
    ]


    # Iterate through the data in `mapDataArray` and insert in to the `dataSource["data"]` list.
    #The data for the `data` should be in an array wherein each element 
    #of the array is a JSON object# having the `id`, `value` and `showlabel` as keys.
    for i in range(len(mapDataArray)):
        dataSource["data"].append({
            "id": mapDataArray[i][0],
            "value": mapDataArray[i][1],
            "showLabel": mapDataArray[i][2]
        })

# Create an object for the world map using the FusionCharts class constructor
# The chart data is passed to the `dataSource` parameter.
fusionMap = FusionCharts("maps/world", "myFirstMap", "650", "450", "myFirstmap-container", "json", dataSource)

# returning complete JavaScript and HTML code, which is used to generate map in the browsers.
return render(request, 'index.html', {
    'output': fusionMap.render()
})
```

The HTML template of the above sample is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
&lt;!-- Filename: app_name/templates/index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;FC-python wrapper&lt;/title&gt;
    {% load static %}
    &lt;script type="text/javascript" src="{% static "https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js" %}"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="{% static "https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js" %}"&gt;&lt;/script>
    &lt;script type="text/javascript" src="{% static "https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.world.js" %}"&gt;&lt;/script>
    &lt;script type="text/javascript" src="{% static "https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="myFirstchart-container"&gt;{{ output|safe }}&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
&lt;!-- Filename: app_name/templates/index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;FC-python wrapper&lt;/title&gt;
    {% load static %}
    &lt;script type="text/javascript" src="{% static "path/to/local/fusioncharts.js" %}"&gt;&lt;/script&gt;
    &lt;script src="{% static "path/to/local/fusioncharts.maps.js" %}"&gt;&lt;/script&gt;
    &lt;script src="{% static "path/to/local/maps/fusioncharts.world.js" %}"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="myFirstchart-container"&gt;{{ output|safe }}&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

That's it! Your first map using the FusionCharts Django wrapper is ready.

## Render other maps

To reduce the size of the package FusionCharts comes with only two maps, i.e., the **World** map and the **USA** map. However, FusionCharts provide 1600+ maps for you to explore. [Download ](https://www.fusioncharts.com/download/map-definition-files)the map files separately if you want to save them locally.

Let's create a map of **California** to show the "Web visits for a particular month" as shown below:

{% embed_chart getting-started-your-first-map-california.js %}

To render the above map, the following code is used:

```
from django.shortcuts import render
from django.http import HttpResponse
from collections import OrderedDict

# Include the `fusioncharts.py` file that contains functions to embed the maps.
from fusioncharts import FusionCharts

def myFirstMap(request):

# Chart data is passed to the `dataSource` parameter, as dict, in the form of key - value pairs.
dataSource = OrderedDict()

# The `mapConfig` dict contains key - value pairs data
# for chart attribute
mapConfig = OrderedDict()
mapConfig["animation"] = "0"
mapConfig["usehovercolor"] = "1"
mapConfig["showlegend"] = "1"
mapConfig["legendposition"] = "BOTTOM"
mapConfig["legendborderalpha"] = "0"
mapConfig["legendbordercolor"] = "#ffffff"
mapConfig["legendallowdrag"] = "0"
mapConfig["legendshadow"] = "0"
mapConfig["caption"] = "Website Visits for the month of March 2018"
mapConfig["connectorcolor"]= "000000"
mapConfig["fillalpha"]= "80"
mapConfig["hovercolor"]= "CCCCCC"
mapConfig["theme"] = "fusion"

# Map color range data
colorDataObj = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
        "minValue": "0.5",
        "maxValue": "1",
        "code": "#FFD74D"
    }, {
        "minValue": "1.0",
        "maxValue": "2.0",
        "code": "#FB8C00"
    }, {
        "minValue": "2.0",
        "maxValue": "3.0",
        "code": "#E65100"
    }]
}

dataSource["chart"] = mapConfig
dataSource["colorrange"] = colorDataObj
dataSource["data"] = []

# Map data array
mapDataArray = [
    ["001", "2834", "1"],
    ["003", "3182", "1"],
    ["005", "3280", "1"],
    ["007", "911", "1"],
    ["009", "292", "1"],
    ["011", "530", "1"],
    ["013", "2515", "1"],
    ["015", "728", "1"],
    ["017", "1974", "1"],
    ["019", "848", "1"],
    ["021", "3278", "1"],
    ["023", "4463", "1"],
    ["025", "1198", "1"],
    ["027", "378", "1"],
    ["029", "2610", "1"],
    ["031", "1200", "1"],
    ["033", "3820", "1"],
    ["035", "940", "1"],
    ["037", "3416", "1"],
    ["039", "4004", "1"],
    ["041", "1604", "1"],
    ["043", "4011", "1"],
    ["045", "3203", "1"],
    ["047", "3775", "1"],
    ["049", "2721", "1"],
    ["051", "3417", "1"],
    ["053", "1530", "1"],
    ["055", "412", "1"],
    ["057", "3434", "1"],
    ["059", "1670", "1"],
    ["061", "1274", "1"],
    ["063", "4339", "1"],
    ["065", "2073", "1"],
    ["067", "1018", "1"],
    ["069", "3967", "1"],
    ["071", "3401", "1"],
    ["073", "3307", "1"],
    ["075", "1938", "1"],
    ["077", "489", "1"],
    ["079", "3207", "1"],
    ["081", "2295", "1"],
    ["083", "2747", "1"],
    ["085", "1114", "1"],
    ["087", "3400", "1"],
    ["089", "784", "1"],
    ["091", "1673", "1"],
    ["093", "4274", "1"],
    ["095", "4509", "1"],
    ["097", "3862", "1"],
    ["099", "1356", "1"],
    ["101", "4126", "1"],
    ["103", "1314", "1"],
    ["105", "1807", "1"],
    ["107", "4026", "1"],
    ["109", "3456", "1"],
    ["111", "1393", "1"],
    ["113", "1500", "1"],
    ["115", "2218", "1"]
]

# Iterate through the data in `mapDataArray` and insert in to the `dataSource["data"]` list.
#The data for the `data` should be in an array wherein each element 
#of the array is a JSON object# having the `id`, `value` and `showlabel` as keys.
for i in range(len(mapDataArray)):
    dataSource["data"].append({
        "id": mapDataArray[i][0],
        "value": mapDataArray[i][1],
        "showLabel": mapDataArray[i][2]
    })

# Create an object for the world map using the FusionCharts class constructor
# The chart data is passed to the `dataSource` parameter.
fusionMap = FusionCharts("maps/world", "myFirstMap", "650", "450", "myFirstmap-container", "json", dataSource)

# returning complete JavaScript and HTML code, which is used to generate map in the browsers.
return render(request, 'index.html', {
    'output': fusionMap.render()
})
```

The HTML template of the above sample is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
&lt;!-- Filename: app_name/templates/index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;FC-python wrapper&lt;/title&gt;
    {% load static %}
    &lt;script type="text/javascript" src="{% static "https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js" %}"&gt;&lt;/script>
    &lt;script type="text/javascript" src="{% static "https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js" %}"&gt;&lt;/script>
    &lt;script type="text/javascript" src="{% static "https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.world.js" %}"&gt;&lt;/script>
    &lt;script type="text/javascript" src="{% static "https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script>
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="myFirstchart-container"&gt;{{ output|safe }}&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
&lt;!-- Filename: app_name/templates/index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;FC-python wrapper&lt;/title&gt;
    {% load static %}
    &lt;script type="text/javascript" src="{% static "path/to/local/fusioncharts.js" %}"&gt;&lt;/script&gt;
    &lt;script src="{% static "path/to/local/fusioncharts.maps.js" %}"&gt;&lt;/script&gt;
    &lt;script src="{% static "path/to/local/maps/fusioncharts.world.js" %}"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="myFirstchart-container"&gt;{{ output|safe }}&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

## Problem Rendering the Chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click <<here>> to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.