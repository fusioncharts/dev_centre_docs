---
title: Your First Gauge in Django using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the Django wrapper.
heading: Create a Gauge Using Django in FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **Django** wrapper for FusionCharts. The `FusionCharts server-side Django` wrapper lets you easily add rich and interactive charts to any Django project. Using the wrapper, you can create gauges in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a gauge using the `FusionCharts server-side Django` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts Django` wrapper and all the other dependencies on your system.

> The **FusionCharts Django** wrapper requires Python 2.7 or higher.

* Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).

* Copy and paste the `fusioncharts.py` file in your project folder.

* Include the FusionCharts theme file to apply the style to the charts.

The consolidated given below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="custom-hlc language-php">
{% load static %}
// Include FusionCharts core file
&lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
// Include FusionCharts Theme file
&lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab local-tab'>
<pre><code class="custom-hlc language-php">
{% load static %}
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>
</div>
</div>

That completes the installation of FusionCharts Suite and the Django wrapper.

## Create Your First Gauge

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

<<Gauge>>

The thresholds for the above sample have been defined using the following range.


Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So, any score less than 50 (considered bad) is presented in red. Any score between 50 and 75 (considered average) is presented in yellow. Any score above 75 (considered good) is presented in green.

## Convert Tabular Data into JSON/XML Format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. In this example, we will use the JSON format, as shown below:

```
{
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#F2726F"
            },
            {
                "minValue": "50",
                "maxValue": "75",
                "code": "#FFC533"
            },
            {
                "minValue": "75",
                "maxValue": "100",
                "code": "#62B58F"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": "81"
            }
        ]
    }
}

```
In the above JSON:

* Create the `chart` object to define the elements of the gauge.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

* Specify the hex code of the color within the `color` array.

* Create the `dials` object to represent the customer satisfaction score.

* Create the `dial` object under `dials` object to set the value of the dial in an array.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have converted the tabular data to JSON format, let's learn how to render the gauge.

## Render the Chart

1. Import Render from `django.shortcuts`.

2. Import HttpResponse from `django.http`.

3. Import `OrderedDict` from collections.

4. Include the `fusioncharts.py` file.

5. Load dial indicator values from a simple string array.

6. Pass widget data to the `dataSource` parameter, as dict, in the form of key-value pairs.

7. Configure the `widgetConfig` dict, which contains key-value pair data for the widget attribute.

8. Configure the `colorData` dict, which contains key-value pairs of data for `ColorRange` of dial.

9. Convert the data in `dialData` array into a format supported by FusionCharts.

10 Enter the data for the gauge as an array, where each element is a JSON object, with `label` and `value` as keys.

11. Iterate through the data in `dialValues` and insert into the `dialData["dial"]` list.

12. Enter data for the `dial` via an array, wherein each element is a JSON object having the `value` as keys.

13. Create an object for the angular-gauge using the FusionCharts class constructor.

    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias[ here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

    * Set the chart `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the chart.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

    * Pass the chart data to the `dataSource` parameter.

* Finally, use a container using `<div>` to render the gauge.

The full code for the above sample is:

```
from django.shortcuts import render
from django.http import HttpResponse
from collections import OrderedDict

# Include the `fusioncharts.py` file that contains functions to embed the widget.
from fusioncharts import FusionCharts

def myFirstWidget(request):

#Load dial indicator values from simple string array# e.g.dialValues = ["52", "10", "81", "95"]
    dialValues = ["81"]

    # widget data is passed to the `dataSource` parameter, as dict, in the form of key-value pairs.
    dataSource = OrderedDict()

    # The `widgetConfig` dict contains key-value pairs of data for widget attribute
    widgetConfig = OrderedDict()
    widgetConfig["caption"] = "Nordstorm's Customer Satisfaction Score for 2017"
    widgetConfig["lowerLimit"] = "0"
    widgetConfig["upperLimit"] = "100"
    widgetConfig["showValue"] = "1"
    widgetConfig["numberSuffix"] = "%"
    widgetConfig["theme"] = "fusion"
    widgetConfig["showToolTip"] = "0"

    # The `colorData` dict contains key-value pairs of data for ColorRange of dial
    colorRangeData = OrderedDict()
    colorRangeData["color"] = [{
            "minValue": "0",
            "maxValue": "50",
            "code": "#F2726F"
        },
        {
            "minValue": "50",
            "maxValue": "75",
            "code": "#FFC533"
        },
        {
            "minValue": "75",
            "maxValue": "100",
            "code": "#62B58F"
        }
    ]

    # Convert the data in the `dialData` array into a format that can be consumed by FusionCharts.
    dialData = OrderedDict()
    dialData["dial"] = []

    dataSource["chart"] = widgetConfig
    dataSource["colorRange"] = colorRangeData
    dataSource["dials"] = dialData

    # Iterate through the data in `dialValues` and insert into the `dialData["dial"]` list.
    # The data for the `dial`should be in an array wherein each element of the 
    # array is a JSON object# having the `value` as keys.
    for i in range(len(dialValues)):
        dialData["dial"].append({
        "value": dialValues[i]
    })
   # Create an object for the angular-gauge using the FusionCharts class constructor
   # The widget data is passed to the `dataSource` parameter.
   angulargaugeWidget = FusionCharts("angulargauge", "myFirstWidget", "100%", "200", "myFirstwidget-container", "json", dataSource)

   # returning complete JavaScript and HTML code, which is used to generate widget in the browsers.
   return render(request, 'index.html', {'output' : angulargaugeWidget.render()})
```

The HTML template of the above sample is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="custom-hlc language-php">
&lt;!-- Filename: app_name/templates/index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;FC-python wrapper&lt;/title&gt;
    {% load static %}
    &lt;script type="text/javascript" src="{% static "http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js" %}"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="{% static "http://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="myFirstchart-container"&gt;{{ output|safe }}&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab local-tab'>
<pre><code class="custom-hlc language-php">
&lt;!-- Filename: app_name/templates/index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;FC-python wrapper&lt;/title&gt;
    {% load static %}
    &lt;script type="text/javascript" src="{% static "path/to/local/fusioncharts.js" %}"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="myFirstchart-container"&gt;{{ output|safe }}&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>
</div>
</div>

That's it! Your first gauge using the FusionCharts Django wrapper is ready.

## Problem Rendering the Chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click <<here>> to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.

