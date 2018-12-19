---
title: Create a Chart Using Django | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the Django wrapper.
heading: Create a Chart Using Django
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **Django** wrapper for FusionCharts. The `FusionCharts server-side Django` wrapper lets you easily add rich and interactive charts to any Django project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a chart using the `FusionCharts server-side Django` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts Django` wrapper and all the other dependencies on your system.

> The **FusionCharts Django** wrapper requires Python 2.7 or higher.

* Copy and paste the `fusioncharts.py` file from `integrations > django > fusioncharts-wrapper` in your project folder.

* Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).

* Include the FusionCharts theme file to apply the style to the charts.

The consolidated given below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
{% load static %}
// Include FusionCharts core file
&lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
// Include FusionCharts Theme file
&lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code>
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
{% load static %}
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code>
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

That completes the installation of FusionCharts Suite and the Django wrapper.

## Create Your First Chart

Let's create a Column 2D chart using the `django-fusioncharts` wrapper showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

{% embed_chart getting-started-your-first-chart.js %}

The data for the above chart is shown in the table below:

Country|No. of Oil Reserves||
-|-|-
Venezuela|290||
Saudi|260||
Canada|180||
Iran|140||
Russia|115||
UAE|100||
US|30||
China|30||

## Convert Tabular Data into JSON Format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format, as shown below:

```
{
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
}

```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example, [single-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[ multi-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), and [combination ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts)charts.

In the above JSON data:

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the `data` array.

Both the chart object and the data array contain a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the Chart

To render the chart, follow the steps below:

1. Import Render from `django.shortcuts`.

2. Import `HttpResponse` from `django.http`.

3. Import `OrderedDict` from collections.

4. Include the `fusioncharts.py` file.

5. Include `chartConfig` dict.

6. Include `chartData` dict.

7. Convert the data in `chartData`array into a format supported by FusionCharts.

8. Enter the data for the chart as an array, where each element is a JSON object, with `label` and `value` as keys.

9. Iterate through the data in `chartData` and insert into the `dataSource['data']` list.

10. Create the chart instance and set the following:
    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias[ here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

    * Set the chart `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the chart.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

    * Pass the chart data to the `dataSource` parameter.

11. Finally, use a container using `<div>` to render the chart.

The consolidated code is shown below:

```
from django.shortcuts import render
from django.http import HttpResponse
from collections import OrderedDict

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from fusioncharts import FusionCharts

def myFirstChart(request):

    #Chart data is passed to the `dataSource` parameter, like a dictionary in the form of key-value pairs.
    dataSource = OrderedDict()

    # The `chartConfig` dict contains key-value pairs of data for chart attribute
    chartConfig = OrderedDict()
    chartConfig["caption"] = "Countries With Most Oil Reserves [2017-18]"
    chartConfig["subCaption"] = "In MMbbl = One Million barrels"
    chartConfig["xAxisName"] = "Country"
    chartConfig["yAxisName"] = "Reserves (MMbbl)"
    chartConfig["numberSuffix"] = "K"
    chartConfig["theme"] = "fusion"

    # The `chartData` dict contains key-value pairs of data
    chartData = OrderedDict()
    chartData["Venezuela"] = 290
    chartData["Saudi"] = 260
    chartData["Canada"] = 180
    chartData["Iran"] = 140
    chartData["Russia"] = 115
    chartData["UAE"] = 100
    chartData["US"] = 30
    chartData["China"] = 30

    dataSource["chart"] = chartConfig
    dataSource["data"] = []

    # Convert the data in the `chartData`array into a format that can be consumed by FusionCharts.
    #The data for the chart should be in an array wherein each element of the array 
    #is a JSON object# having the `label` and `value` as keys.

    #Iterate through the data in `chartData` and insert into the `dataSource['data']` list.
    for key, value in chartData.items():
        data = {}
    data["label"] = key
    data["value"] = value
    dataSource["data"].append(data)


# Create an object for the column 2D chart using the FusionCharts class constructor
# The chart data is passed to the `dataSource` parameter.
column2D = FusionCharts("column2d", "myFirstChart", "600", "400", "myFirstchart-container", "json", dataSource)

return render(request, 'index.html', {
    'output': column2D.render()
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
    &lt;script type="text/javascript" src="{% static "http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js" %}"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="{% static "http://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="myFirstchart-container"&gt;{{ output|safe }}&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code>
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
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
    &lt;script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="myFirstchart-container"&gt;{{ output|safe }}&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code>
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

That's it! Your first chart using the `FusionCharts Django wrapper` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
