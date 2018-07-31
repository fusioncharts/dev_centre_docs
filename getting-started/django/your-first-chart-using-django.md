---
permalink: getting-started/django/your-first-chart-using-django.html
title: Your First Chart in Django using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating charts using FusionCHarts Django wrapper.
heading: Your First Chart in Django using FusionCharts
chartPresent: false
---

FusionCharts Suite XT includes the **FusionCharts Django** wrapper that lets you create interactive, data-driven charts. You can create a simple chart using the FusionCharts server-side Django wrapper without writing any JavaScript code.

The server-side Django wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts on a browser page. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/django/your-first-chart-using-django#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/django/your-first-chart-using-django#create-your-first-gauge-11) and a [map]({% site.baseurl %}/getting-started/django/your-first-chart-using-django#create-your-first-map-14).

Before going through this article, please [install]({% site.baseurl %}/getting-started/django/install-using-django '@@open-newtab') FusionCharts Django wrapper, if you haven’t installed it already.

## Create your first chart

In this section, we will create a chart using `FusionCharts Django` server-side wrapper. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

For this example, we have created a view named `views.py`. To keep things simple, we have placed all the chart rendering logics in the `views.py` view only.

> The example view we created is `app_name/views.py`.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

### The data for this chart is represented in a table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format is shown below:

> There are different formats of JSON/XML for different groups of charts in FusionCharts - e.g., [single-series]({% site.baseurl %}/chart-guide/standard-charts/line-area-and-column-charts '@@open-newtab') (which you're seeing here), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

{% embed_data getting-started-your-first-chart.js %}

In the above code we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels or, data values. You can also set chart limits and extended properties. The functional attributes used in the above code are:

* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds a prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's data and provided fusion (default theme) as the value of it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetic Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size, etc. Since we are using the `fusion` theme to customize the chart's look and feel no cosmetic attributes are used in this sample. For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Create an instance for the chart

In this step, we will create an object for the chart type as **column2d** using FusionCharts class constructor, set the width and height (in pixels or %), and finally specify the data for the chart as a string.

The code to create an object of the chart is given below:

```javascript
# dataSource = “JSON data of the chart”
column2D = FusionCharts("column2d", "myFirstChart" , "600", "400", "myFirstchart-container", "json", dataSource)
```

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 600x400 pixels using `width` and `height`.
* To specify the data format as JSON, we have set the `dataFormat` parameter to json. You can also provide the data in [XML format]({% site.baseurl %}/chart-guide/getting-started/using-xml-as-data-format '@@open-newtab'). 
* The JSON data is embedded as the value of the `dataSource` parameter.

The full code for the above sample is:

```
from django.shortcuts import render
from django.http import HttpResponse
from collections import OrderedDict

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from fusioncharts import FusionCharts

def myFirstChart(request):

	#Chart data is passed to the `dataSource` parameter, as dictionary in the form of key - value pairs.
	dataSource = OrderedDict()

	# The `chartConfig` dict contains key - value pairs data for chart attribute
	chartConfig = OrderedDict()
	chartConfig["caption"] = "Countries With Most Oil Reserves [2017-18]"
	chartConfig["subCaption"] = "In MMbbl = One Million barrels"
	chartConfig["xAxisName"] = "Country"
	chartConfig["yAxisName"] = "Reserves (MMbbl)"
	chartConfig["numberSuffix"] = "K"
	chartConfig["theme"] = "fusion"

	# The `chartData` dict contains key - value pairs data
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

	#Iterate through the data in `chartData` and insert in to the `dataSource['data']` list.
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

```HTML
<!-- Filename: app_name/templates/index.html -->
<!DOCTYPE html>
<html>

<head>
    <title>FC-python wrapper</title>
    {% load static %}
    <script type="text/javascript" src="{% static "path/to/local/fusioncharts.js" %}"></script>
    <script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"></script>
</head>

<body>
    <div id="myFirstchart-container">{{ output|safe }}</div>
</body>

</html>
```

That's it! When you run this HTML page now, you should see a chart representing your data.

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a column 2D chart.

Now, go on and explore other 95+ chart types that we have in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attributes]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## The FusionCharts Chart Class

A list of available parameters is given in the table below:

### Constructor Parameters

The syntax of the `Chart` class constructor used to initialize the chart object is:

```vb.net
Chart <object name> = new Chart (chartType, chartId, chartWidth, chartHeight, dataFormat, dataSource, bgColor, bgOpacity)
```

Given below is a brief description of the constructor parameters:

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`
</td>
    <td>String</td>
    <td>It is used to specify the type of chart to be rendered.</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>It is used to specify a unique identifier for the chart. If multiple charts are rendered on the same HTML page, each chart is referred to using its unique ID.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>It is used to specify the width of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>It is used to specify the height of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>It is used to specify the type of data that will be passed to the chart. This attribute takes the following values: `json`, `xml`, `jsonurl`, `xmlurl`. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>String</td>
    <td>It is used to specify the hex code for the background color of the chart.</td>
  </tr>
  <tr>
    <td>`bgOpacity`</td>
    <td>String</td>
    <td>It is used to specify the background opacity for the chart. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>

>  It is not necessary that you assign values for all parameters during initialization. The order of parameters, however, needs to be preserved. Also, you need to make sure that all of these parameters have been assigned values using the constructor, the `Chart` class methods, or the `Render()` method before you run the application. If not, either the chart will not render at all or it will not render the way you want it to. </p>

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

For this example, we have created a view named `views.py`. To keep things simple, we have placed all the chart rendering logics in the `views.py` view only.

> The example view we created is `app_name/views.py`.

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 meansgood and is green.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format is shown below:

{% embed_data getting-started-your-first-widget.js %}

### Create an instance for the gauge

In this step, we will create an object for the chart type as **angularGauge** using FusionCharts class constructor, set the width and height (in pixels or %), and finally specify the data for the chart as a string.

The code to create an instance of the gauge is given below:

```javascript
# dataSource = “JSON data of the gauge”
angulargaugeWidget = FusionCharts("angulargauge", "myFirstWidget", "100%", "200", "myFirstwidget-container", "json", dataSource)
```

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

	# widget data is passed to the `dataSource` parameter, as dict, in the form of key - value pairs.
	dataSource = OrderedDict()

	# The `widgetConfig` dict contains key - value pairs data for widget attribute
	widgetConfig = OrderedDict()
	widgetConfig["caption"] = "Nordstorm's Customer Satisfaction Score for 2017"
	widgetConfig["lowerLimit"] = "0"
	widgetConfig["upperLimit"] = "100"
	widgetConfig["showValue"] = "1"
	widgetConfig["numberSuffix"] = "%"
	widgetConfig["theme"] = "fusion"
	widgetConfig["showToolTip"] = "0"


	# The `colorData` dict contains key - value pairs data for ColorRange of dial
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

	# Iterate through the data in `dialValues` and insert in to the `dialData["dial"]` list.
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

```HTML
<!-- Filename: app_name/templates/index.html -->
<!DOCTYPE html>
<html>

<head>
    <title>FC-python wrapper</title>
    {% load static %}
    <script type="text/javascript" src="{% static "path/to/local/fusioncharts.js" %}"></script>
    <script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"></script>
</head>

<body>
    <div id="myFirstwidget-container">{{ output|safe }}</div>
</body>

</html>
```

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

For this example, we have created a view named `views.py`. To keep things simple, we have placed all the chart rendering logics in the `views.py` view only.

In this section, we will create a visualization using the map of **World**. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in a table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

> In the above table, the column **Entity Name** represents the geographical entities represnted in the map, whose full names are given in the **State** column in this example. However, when you convert the data in a format acceptable by FusionCharts, the entities are denoted by the `id` key in the `data` object (see the code snippet of the next section). For any map visualization you create, it is imperative that you provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF`, and not `AFR`. We have detailed [Map Specification Sheet]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab') for all the maps that can be rendered using FusionCharts - please refer to them for the correct `id`s of the map you want to create.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format is shown below:

{% embed_data getting-started-your-first-map.js %}

### Create an instance for the map

In this step, we will create an object for the map type as **world** using FusionCharts class constructor, set the width and height (in pixels or %), and finally specify the data for the chart as a string.

The code to create an object of the gauge is given below:

```javascript
# dataSource = “JSON data of the map”
fusionMap = FusionCharts("maps/world", "myFirstMap" , "650", "450", "myFirstmap-container", "json", dataSource)
```
The full code for the above sample is:

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

```HTML
<!-- Filename: app_name/templates/index.html -->
<!DOCTYPE html>
<html>

<head>
    <title>FC-python wrapper</title>
    {% load static %}
    <script type="text/javascript" src="{% static "path/to/local/fusioncharts.js" %}"></script>
    <script type="text/javascript" src="{% static "path/to/local/maps/fusioncharts.world.js" %}"></script>
    <script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"></script>
</head>

<body>
    <div id="myFirstmap-container">{{ output|safe }}</div>
</body>

</html>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of world. The respective `id`, can be found [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you don't see the chart getting rendered on the browser, it might be because some browsers does not allow JavaScript files to be loaded and run from the local filesystem. In such cases, either try with a different browser, or create a local/remote server and server the webpages containing the charts from the server.

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.