---
title: Create a Chart Using Django | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the Django wrapper.
heading: Create a Chart Using Django
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple **Django** wrapper for FusionCharts. The `FusionCharts Django` wrapper lets you easily add rich and interactive charts to any Django project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a chart using the `FusionCharts Django` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts Django` wrapper and all the other dependencies on your system.

### Requirements

To create a chart in a web app developed using Django, download the following wrappers and frameworks in your system:

* Django Framework - [Download Link](https://www.djangoproject.com/download/)
* FusionCharts Library - [Download Link](https://www.fusioncharts.com/download/fusioncharts-suite-xt)
* FusionCharts Django wrapper - [Download Link](https://www.fusioncharts.com/django-charts/)

> The **FusionCharts Django** wrapper requires Python 2.7 or higher.

### Step 1: Create a project

To create a project, follow the steps given below:

* Open the command prompt and run `cd` command to navigate to the required directory.

* Run the following command to create a `myproject` directory in your preferred directory.

```bash
django-admin startproject myproject
```

### Step 2: Add the dependencies

Now, we will add Django wrapper and FusionCharts javascript files required to render the charts in the web application. Steps to add the files are given below:

* Create a `template` folder inside the `myproject` directory.
* Inside the template folder, create another folder named `static`.
* Copy and paste the `fusioncharts.py` file from `integrations > django > fusioncharts-wrapper` in your project folder(`myproject`).
* Copy all javascript files extracted from the downloaded FusionCharts library into the `template/static` folder.
* Now, map the javascript files by creating an HTML file, `index.html` in the template folder. Include the `fusioncharts.js` and `fusioncharts.theme.fusion.js` using `<script>` tags from the downloaded package in this file.

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
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
{% load static %}
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

* After including the paths of all the dependencies required, update the static files by running the following command:

```bash
Python manage.py collectStatic
```

* In the `settings.py` file, update the location of the templates

```bash
'DIRS': ['myproject/templates']
```

That completes the installation of FusionCharts Suite and the Django wrapper.

## Create Your First Chart

Let's create a Column 2D chart using the `django-fusioncharts` wrapper showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

{% embed_chart getting-started-your-first-chart.js %}

To understand the chart components, click [here](/understanding-fusioncharts).

The data for the above chart is shown in the table below:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290                 |
| Saudi     | 260                 |
| Canada    | 180                 |
| Iran      | 140                 |
| Russia    | 115                 |
| UAE       | 100                 |
| US        | 30                  |
| China     | 30                  |

## Convert Tabular Data into JSON Format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format, as shown below:

```json
{
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
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

### Create the view page

The view page contains the chart constructor, attributes as well as the datasource required to render the chart.

* Add the code given below to the `view.py` file.

```python
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file which has required functions to embed the charts in html page
from .fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is a example to show a Column 2D chart where data is passed as JSON string format.
# The `chart` method is defined to load chart data from an JSON string.

def chart(request):
    # Create an object for the column2d chart using the FusionCharts class constructor
  column2d = FusionCharts("column2d", "ex1" , "700", "400", "chart-1", "json", 
        # The data is passed as a string in the `dataSource` as parameter.
    """{  
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
      },
      "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
      }""")

    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers. 
  return  render(request, 'index.html', {'output' : column2d.render()})
```

### Set up the configuration file

* Add the following code snippet to the `urls.py` file to automatically set the URL to render the chart.

```python
from django.conf.urls import url
from.import views

urlpatterns = [
    url(r'^$', views.chart, name = 'demo'),
]
```

* To update the `STATICFILES_DIRS` object, include it to the `settings.py` file.

```python
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "fc_column2d/templates/static"),
]
```

### Render the chart

With all the code in place, rum the following command to render the above chart.

```bash
python manage.py runserver
```

The consolidated code is shown below:

```python
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

That's it! Your first chart using the `FusionCharts Django wrapper` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
