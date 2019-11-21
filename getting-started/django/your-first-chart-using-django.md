---
title: Create a Chart Using Django | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the Django wrapper.
heading: Create a Chart Using Django
---

## Quick Start

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple **Django** wrapper for FusionCharts. The `FusionCharts Django` wrapper lets you easily add rich and interactive charts to any Django project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

Let us see how to install FusionCharts and render a chart using the django-fusioncharts wrapper.

The FusionCharts Django wrapper requires Python 2.7 or higher.

### Prerequisite

You need to have a django project setup before proceeding any further. If not, you can follow the below steps to initiate the project. Find more about how to configure Django [here](https://docs.djangoproject.com/en/2.2/topics/install/).

Open the terminal and enter the following commands:

- Create a new django project (Eg. - FusionChartsProject):

```javascript
django-admin startproject FusionChartsProject
cd FusionChartsProject
```

- Create a new django app (Eg.- fusioncharts) in the project directory:

```javascript
python manage.py startapp fusioncharts
```

- Open the `settings.py` file and add the name of the django app in the `'INSTALLED_APPS'` .

### Installation & Including Dependencies

Download the FusionCharts library to get the `django-fusioncharts` wrapper from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt?framework=django).

The trial version does not have any feature or time restriction. It just includes a link to [www.fusioncharts.com](http://www.fusioncharts.com/) in your chart. If you would like to use charts for commercial usage, without this link, [please purchase a license](https://fusioncharts.com/buy). If you're an existing customer, you can [download your licensed version here](https://puc.fusioncharts.com/).

After downloading the fusioncharts components, add `django-fusioncharts` wrapper and Fusioncharts Javascript files in your project as below:

- Copy the `fusioncharts.py` file from your downloaded FusionCharts Library. It is present at - `Integrations > django > fusioncharts-wrapper` . Paste it in the fusioncharts app directory.

- Create a `static` folder inside fusioncharts (app) directory. Within the static folder, create another folder with the same name as that of the app (`fusioncharts`) and copy all the Javascript files from the downloaded FusionCharts library (`fusioncharts-suite-xt > js`) in it.

- Create a `template` folder inside the fusioncharts (app) directory.

The directory structure will look like this:

<img src="{% site.BASE_URL %}/images/django-folder-structure.png" width="300" height="500" alt="Django Folder Structure">

### Preparing the Data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as data labels along x-axis and 'No. of oil reserves' as data values along y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in **JSON** format. First let's create a dictionary in `views.py` file where we will store all the values and then it will get converted to a JSON object.

```javascript
// Preparing the chart data
dataSource = OrderedDict()

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

dataSource["data"] = []

# Convert the data in the `chartData`array into a format that can be consumed by FusionCharts.

# The data for the chart should be in an array wherein each element of the array

# is a JSON object# having the `label` and `value` as keys.

# Insert the data in `chartData` into the `dataSource['data']` list.

dataSource["data"].append({"label": 'Venezuela', "value": '290'})

dataSource["data"].append({"label": 'Saudi', "value": '290'})

dataSource["data"].append({"label": 'Canada', "value": '180'})

dataSource["data"].append({"label": 'Iran', "value": '140'})

dataSource["data"].append({"label": 'Russia', "value": '115'})

dataSource["data"].append({"label": 'Russia', "value": '115'})

dataSource["data"].append({"label": 'UAE', "value": '100'})

dataSource["data"].append({"label": 'US', "value": '30'})

dataSource["data"].append({"label": 'China', "value": '30'})
```

### Configure your Chart

Now that the data's ready, you've to work on the styling, the positioning and giving your chart a context. First, we add the chart attributes in the views.py file.

```javascript
# The `chartConfig` dict contains key-value pairs of data for chart attribute

chartConfig = OrderedDict()

chartConfig["caption"] = "Countries With Most Oil Reserves [2017-18]"

chartConfig["subCaption"] = "In MMbbl = One Million barrels"

chartConfig["xAxisName"] = "Country"

chartConfig["yAxisName"] = "Reserves (MMbbl)"

chartConfig["numberSuffix"] = "K"

chartConfig["theme"] = "fusion"

dataSource["chart"] = chartConfig
```

- Create an `index.html` file inside the `template` folder (created previously in the fusioncharts directory) to create the **container** for the chart and to include the FusionCharts Javascript files and FusionCharts theme file to apply the style to the charts.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='local'>Local</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab local-tab active'>
<pre><code class="language-javascript">
&lt;!DOCTYPE html%gt;
&lt;html%gt;
&lt;head%gt;
    &lt;title%gt;FC-python wrapper&lt;/title%gt;
    {% load static %}
    &lt;script type="text/javascript" src="{% static "fusioncharts/fusioncharts.js" %}"%gt;&lt;/script%gt;
    &lt;script type="text/javascript" src="{% static "fusioncharts/fusioncharts.charts.js" %}"%gt;&lt;/script%gt;
    &lt;script type="text/javascript" src="{% static "fusioncharts/themes/fusioncharts.theme.fusion.js" %}"%gt;&lt;/script%gt;
    &lt;/head%gt;
    &lt;body%gt;
        &lt;div id="myFirstchart-container"%gt;{{ output|safe }}&lt;/div%gt;
    &lt;/body%gt;
&lt;/html%gt;

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
<div class='tab cdn-tab'>
<pre><code class="language-javascript">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;FC-python wrapper&lt;/title&gt;
        &lt;script type="text/javascript" src="[https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js](https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js)"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
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

- Update the path of static files and templates in the `settings.py` file. Add the template location in the `DIRS` in `TEMPLATES` list on the `settings.py` file. Refer to the code below:

```javascript
'DIRS': ['FusionChartsProject/fusioncharts/templates'],
```

Create a new variable as `STATIC_ROOT` and Update the location of static files in the `settings.py` file. Refer to the code below:

```javascript
STATIC_ROOT = "FusionChartsProject/fusioncharts/static";
```

- Run the collectstatic command to collect the static files from the installed apps and copy them in STATICFILE_STORAGE defined in `STATIC_ROOT` :

```javascript
python manage.py collectstatic
```

### Create your Chart

Let's create a Column 2D Chart using the `django-fusioncharts` wrapper showing "Countries with most Oil Reserves".

- Add the following code in the `views.py` file.

- The `views.py` file will have the `chart constructor`, `attributes` and the `datasource` required to render the chart. The consolidated code is shown below:

```javascript
from django.shortcuts import render

from django.http import HttpResponse

from collections import OrderedDict

# Include the `fusioncharts.py` file that contains functions to embed the charts.

from .fusioncharts import FusionCharts

def myFirstChart(request):

   # Chart data is passed to the `dataSource` parameter, like a dictionary in the form of key-value pairs.

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

   # The data for the chart should be in an array wherein each element of the array

   # is a JSON object# having the `label` and `value` as keys.

   # Insert the data in `chartData` into the `dataSource['data']` list.

dataSource["data"].append({"label": 'Venezuela', "value": '290'})

dataSource["data"].append({"label": 'Saudi', "value": '290'})

dataSource["data"].append({"label": 'Canada', "value": '180'})

dataSource["data"].append({"label": 'Iran', "value": '140'})

dataSource["data"].append({"label": 'Russia', "value": '115'})

dataSource["data"].append({"label": 'Russia', "value": '115'})

dataSource["data"].append({"label": 'UAE', "value": '100'})

dataSource["data"].append({"label": 'US', "value": '30'})

dataSource["data"].append({"label": 'China', "value": '30'})

   # Create an object for the column 2D chart using the FusionCharts class constructor

   # The chart data is passed to the `dataSource` parameter.

   column2D = FusionCharts("column2d", "myFirstChart", "600", "400", "myFirstchart-container", "json", dataSource)

   return render(request, 'index.html', {

       'output': column2D.render()

   })
```

- Create a new file `urls.py` in the `fusioncharts` (app) directory and add the following code to automatically set the URL to render the chart.

```javascript
from django.contrib import admin

from django.urls import path

from . import views

urlpatterns = [

   path('', views.myFirstChart , name="demo"),

]
```

> This will call the function `myFirstChart()` from `views.py` file and will create a location to display the chart at this particular address.

- If you look into your main project directory (`FusionChartsProject`), there is another `urls.py` file. In that file, add another path which points to `urls.py` file in the app (`fusioncharts`) directory.

```javascript
from django.contrib import admin

from django.urls import path, include

urlpatterns = [

   path('admin/', admin.site.urls),

   path('', include('fusioncharts.urls'))
]
```

### Render the Chart

With the container for the chart created in the `index.html`, run the following command to render the chart:

```javascript
python manage.py runserver
```

Now go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) and that's it!

### See your Chart

You should be able to see the chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

That's it! Your first chart using `django-fusioncharts` wrapper is ready.
