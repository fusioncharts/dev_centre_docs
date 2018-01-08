---
permalink: using-with-server-side-languages/django/introduction-to-the-django-wrapper.html
title: Introduction to the FusionCharts Django Wrapper | FusionCharts
description: In this section, you will be shown how you can create a simple chart using the FusionCharts server-side Django wrapper.
heading: Introduction to the FusionCharts Django Wrapper
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts Django Wrapper can be downloaded from <a href="http://www.fusioncharts.com/django-charts/" target="_blank">here</a>.</p>

The FusionCharts Django wrapper is a Python framework which is responsible for quick web development. It is basically a subroutine within a software library whose job is to call another subroutine with minimum amount of coding. It lets you generate the required JavaScript and HTML code as a string on the server, which  is then used to render charts on a browser page.

FusionCharts Suite XT includes the FusionCharts Django wrapper that lets you create interactive, data-driven charts. You can create a simple chart using the FusionCharts server-side Django wrapper without writing any JavaScript code.

In this section, you will be shown how to:

* <a href="/using-with-server-side-languages/django/introduction-to-the-django-wrapper#installing-the-fusioncharts-django-wrapper" class="smoth-scroll">Install the FusionCharts Django wrapper</a>
* <a href="/using-with-server-side-languages/django/introduction-to-the-django-wrapper#download-the-latest-fusioncharts-library-files" class="smoth-scroll">Download the latest FusionCharts Library Files</a>
* <a href="/using-with-server-side-languages/django/introduction-to-the-django-wrapper#creating-and-rendering-a-simple-chart-using-the-fusioncharts-django-wrapper" class="smoth-scroll">Create and render a simple chart using the FusionCharts Django Wrapper</a>
* <a href="/using-with-server-side-languages/django/introduction-to-the-django-wrapper#constructor-parameters" class="smoth-scroll">Use Constructor Parameters</a>


## Installing the FusionCharts Django Wrapper

To install the FusionCharts Django wrapper, you would require Python 2.7 (or a higher version). To download Python, click <a href="https://www.python.org/downloads/" target="_blank">here</a>.

Include the `FusionCharts.py`(present in the [django-wrapper](https://github.com/fusioncharts/django-wrapper/blob/master/fusioncharts/fusioncharts.py) repository) file into your project. Once done, you can start rendering the charts using the classes and methods under the FusionCharts namespace.


## Download the Latest FusionCharts Library Files

To download the FusionCharts library using files placed in the folder of your project, you need to:

* Place the FusionCharts library inside the "static/FusionCharts" folder in your project.
* Insert the ``<script>`` tag where you want to include the source of the FusionCharts library link from the specific local folder in the project. The ``<script>`` tag looks like as shown below:

```javascript
{% load static %} 
<script type="text/javascript" src="{% static "fusioncharts/fusioncharts.js" %}"></script>
```

__Note__: Set your STATIC_ROOT path and run the command given below to update the static files:

```python
python manage.py collectstatic
```

Now, you are ready to render charts using our Django wrapper.


## Creating and Rendering a Simple Chart using the FusionCharts Django Wrapper

As an example, we will create a simple column 2D chart that plots the monthly revenue for the last year at Harry’s SuperMart. The data for the chart is shown in the table below:

<table>
  <tr>
    <th>Month</th>
    <th>Revenue (In USD)</th>
  </tr>
  <tr>
    <td>Jan</td>
    <td>420000</td>
  </tr>
  <tr>
    <td>Feb</td>
    <td>810000</td>
  </tr>
  <tr>
    <td>Mar</td>
    <td>720000</td>
  </tr>
  <tr>
    <td>Apr</td>
    <td>550000</td>
  </tr>
  <tr>
    <td>May</td>
    <td>910000</td>
  </tr>
  <tr>
    <td>Jun</td>
    <td>510000</td>
  </tr>
  <tr>
    <td>Jul</td>
    <td>680000</td>
  </tr>
  <tr>
    <td>Aug</td>
    <td>620000</td>
  </tr>
  <tr>
    <td>Sep</td>
    <td>610000</td>
  </tr>
  <tr>
    <td>Oct</td>
    <td>490000</td>
  </tr>
  <tr>
    <td>Nov</td>
    <td>900000</td>
  </tr>
  <tr>
    <td>Dec</td>
    <td>730000</td>
  </tr>
</table>

The column 2D chart generated from above data will look like this:

{% embed_chart using-with-server-side-languages-django-introduction-example-1.js %}


### Creating the chart | The view

```python
#Filename: app_name / views.py

from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# Example to create a Column 2D chart with the chart data passed in JSON string format.
# The `fc_json` method is defined to load chart data from a JSON string.
# **Step 1:** Create the FusionCharts object in a view action

def chart(request):
    column2d = FusionCharts("column2d", "ex1", "600", "400", "chart-1", "json",
        """{  
        "chart": {
            "caption": "Monthly Revenue for last year",
            "subCaption": "Harry\'s Supermart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "theme": "zune"
        },
        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    }""")

  # Alternatively, you can assign this string to a string variable in a separate JSON file and
  # pass the URL of that file to the `dataSource` parameter.

  return render(request, 'index.html', {'output': column2d.render()})

```


<p class="text-info">
 <span style="font-size: 13px; font-weight: bold; font-family: monospace;">return render(request, <span style="color: #d14;">'index.html'</span>, {<span style="color: #d14;">'output'</span>: column2d.render()})</span> </p>

__Note:__ Do not forget to include the above line in your code, as it calls the `index.html` template and sets the data in the variable named `output`. This template file captures the variable(_output_) and renders the chart in its respective location.


### Rendering the Chart | The template

The code for rendering the chart is written in the view file, i.e. -.py file. The HTMl code to render the charts is given below:

```html
<!-- Filename: app_name/templates/index.html -->
<!-- **Step 2** Render the chart -->
<div id = "chartContainer" > </div>
{ { output|safe } } 
```

<p class="text-info">In the above code, `output|safe` has been used to turn off the auto-escaping of data, on a per-site, per-template, or per-variable level.</p>


### Final template

The full HTML code for the example looks as under:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>FC-python wrapper</title>
    {% load static %} 
    <script type="text/javascript" src="{% static "fusioncharts/fusioncharts.js" %}"></script>
    <script type="text/javascript" src="{% static "fusioncharts/themes/fusioncharts.theme.fint.js" %}"></script>
  </head>
  <body>
    <div id="chart-1">{{ output|safe }}</div>
  </body>
</html>
```


### URL Configuration

To design URLs, create a `URL.conf` python module. It is a table of contents which contains the mapping between a Python function(or a class-based view) and the URl patterns. Django runs through URL pattern and stops at the first one that matches the requested URL. Once one of the regular expressions matches, Django imports and calls the given view, which is a simple Python function.

An example of a URL design is shown below:

```python
#Filename: app_name / urls.py

from django.conf.urls import url
from.import views

urlpatterns = [
    url(r '^$', views.chart, name = 'demo'),
]
```

<p class="text-info">As the regular expressions are compiled at load time, the above process happens at lightening speed.</p>


Data for the chart can be in any one of the following formats:

* <a href="/using-with-server-side-languages/django/different-ways-of-loading-data#loading-data-from-a-static-json-string" class="smoth-scroll">JSON String</a>
* <a href="/using-with-server-side-languages/django/different-ways-of-loading-data#loading-data-from-a-static-xml-string" class="smoth-scroll">XML String</a>
* <a href="/using-with-server-side-languages/django/different-ways-of-loading-data#loading-data-from-a-valid-python-dictionary" class="smoth-scroll">Valid Python Dictionary</a>



## Constructor parameters

Following parameters can be used in `FusionCharts` Python class constructor in the order they are described in the table below. This function assumes that you've already included the FusionCharts JavaScript library to your page.

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`</td>
    <td>String</td>
    <td>Type of chart that you intend to plot. e.g. Column3D, Column2D, Pie2D, etc</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>ID for the chart, using which it will be recognized in the HTML page. Each chart on the page needs to have a unique Id.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>Intended width for the chart. e.g. 400</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>Intended height for the chart. e.g. 300</td>
  </tr>
  <tr>
    <td>`containerId`</td>
    <td>String</td>
    <td>The id of the chart container. e.g. chart-1</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>Type of the data that is given to the chart. e.g. json, jsonurl, xml, xmlurl</td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>Actual data for the chart. e.g. {"chart":{},"data":[{"label":"Jan","value":"420000"}]}

Note: If the format is jsonurl or xmlurl, a file with .json or .xml extension respectively is passed as value to the attribute. To know more visit <a href="/getting-started/setting-data-source-using-url.html" target="_blank">this page</a>.</td>
  </tr>
</table>