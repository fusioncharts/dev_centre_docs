---
permalink: using-with-server-side-languages/django/creating-charts-with-data-from-a-database.html
title: Creating Charts in Django using a Database | FusionCharts
description: This section showcases how you can do this using the FusionCharts Django wrapper.
heading: Creating Charts in Django using a Database
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts Django Wrapper can be downloaded from <a href="http://www.fusioncharts.com/django-charts/" target="_blank">here</a>.</p>

In addition to directly specifying the chart data (or the URL for the file in which the chart data is stored) directly in the JSON/XML code, you can also fetch data for the chart from a database.

This section showcases how you can do this using the FusionCharts Django wrapper.

In this section, you will be shown how you can:

* <a href="/using-with-server-side-languages/django/creating-charts-with-data-from-a-database#creating-a-simple-column-chart" class="smoth-scroll">Create a simple column chart</a>
* <a href="/using-with-server-side-languages/django/creating-charts-with-data-from-a-database#creating-a-drill-down-chart" class="smoth-scroll">Create a drill-down chart</a>

<p class="text-info">Before you proceed, make sure you have <a href="/using-with-server-side-languages/django/introduction-to-the-django-wrapper.html" target="_blank">installed and set up the plugin </a> correctly.</p>


## Creating a simple Column Chart

Django models map (roughly) to a database table, and provide a place to encapsulate business logic. All models subclass the base Model class, and contain field definitions. Let’s start by creating a simple `Revenue` model for our application in `models.py`.

The `Revenue` model looks like shown below: 

```python

from django.db import models

class Revenue(models.Model):
	MonthlyRevenue = models.CharField(max_length=50)
	Month = models.CharField(max_length=50)

	def __unicode__(self):
		return u'%s %s' % (self.MonthlyRevenue, self.Month)

```

<p class="text-info">To setup your database and create your first model, go through the detailed steps from<a href="https://docs.djangoproject.com/en/1.10/intro/tutorial02/#creating-models" target="_blank"> here </a></p>

Using this data-model, we are generating column 2D chart showing monthly revenue of Harry’s Supermart in last year. 


The column 2D chart by fetching the required data from a database looks like this:

{% embed_chart using-with-server-side-languages-django-creating-charts-with-data-from-a-database-example-2.js %}

The data code required to create the above chart is given below:

```python
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from fusioncharts import FusionCharts

from ..models import *

# The `chart` function is defined to generate Column 2D chart from database.
def chart(request):
	# Chart data is passed to the `dataSource` parameter, as dict, in the form of key-value pairs.
	dataSource = {}
	dataSource['chart'] = { 
		"caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "theme": "zune"
		}
   
    # The data for the chart should be in an array where each element of the array is a JSON object
    # having the `label` and `value` as key value pair.

	dataSource['data'] = []
    # Iterate through the data in `Revenue` model and insert in to the `dataSource['data']` list.
	for key in Revenue.objects.all():
	  data = {}
	  data['label'] = key.Month
	  data['value'] = key.MonthlyRevenue
	  dataSource['data'].append(data)

    # Create an object for the Column 2D chart using the FusionCharts class constructor        	  		
	column2D = FusionCharts("column2D", "ex1" , "600", "350", "chart-1", "json", dataSource)
	return render(request, 'index.html', {'output': column2D.render()}) 

```

## Creating a Drill-down Chart

To render a drill-down chart using database, let's start creating `Country` and `City` data models for our application in `models.py`. Using this data, you want to plot a column 2D chart showing the top 10 most populous countries in the world. Furthermore, you want to render this column 2D chart as a drill-down chart, where clicking each data plot shows another chart plotting the top 10 populous cities of that country.

The models in models.py chart looks like:

```python

from django.db import models

class City(models.Model):
	Name = models.CharField(max_length=50)
	CountryCode = models.CharField(max_length=50)
	Population = models.CharField(max_length=50)

	def __unicode__(self):
		return u'%s %s %s' % (self.Name, self.CountryCode, self.Population)

class Country(models.Model):
	Name = models.CharField(max_length=50)
	Code = models.CharField(max_length=50)
	Population = models.CharField(max_length=50)

	def __unicode__(self):
		return u'%s %s %s' % (self.Name, self.Code, self.Population)

```


The column 2D chart, with the drill-down functionality, that we need to render here looks like this:

{% embed_chart using-with-server-side-languages-django-creating-charts-with-data-from-a-database-example-1.js %}

The code required to create the above chart is given below:

```python
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from fusioncharts import FusionCharts

from ..models import *

# The `chart` function is defined to load data from a `Country` Model. 
# This data will be converted to JSON and the chart will be rendered.

def chart(request):
	# Chart data is passed to the `dataSource` parameter, as dict, in the form of key-value pairs.
	dataSource = {}
	dataSource['chart'] = { 
		"caption": "Top 10 Most Populous Countries",
        "showValues": "0",
        "theme": "zune"
		}
   
    # Convert the data in the `Country` model into a format that can be consumed by FusionCharts. 
    # The data for the chart should be in an array where in each element of the array is a JSON object
    # having the `label` and `value` as keys.

	dataSource['data'] = []
	dataSource['linkeddata'] = []
    # Iterate through the data in `Country` model and insert in to the `dataSource['data']` list.
	for key in Country.objects.all():
	  data = {}
	  data['label'] = key.Name
	  data['value'] = key.Population
	  # Create link for each country when a data plot is clicked.
	  data['link'] = 'newchart-json-'+ key.Code
	  dataSource['data'].append(data)

	  # Create the linkData for cities drilldown	
	  linkData = {}
	  # Inititate the linkData for cities drilldown
	  linkData['id'] = key.Code
	  linkedchart = {}
	  linkedchart['chart'] = {
		"caption" : "Top 10 Most Populous Cities - " + key.Name ,
		"showValues": "0",
		"theme": "zune"
		}

	  # Convert the data in the `City` model into a format that can be consumed by FusionCharts. 	
	  linkedchart['data'] = []
	  # Filtering the data base on the Country Code
	  for key in City.objects.all().filter(CountryCode=key.Code):
	  	arrDara = {}
		arrDara['label'] = key.Name
		arrDara['value'] = key.Population
		linkedchart['data'].append(arrDara)

	  linkData['linkedchart'] = linkedchart
	  dataSource['linkeddata'].append(linkData)

    # Create an object for the Column 2D chart using the FusionCharts class constructor        	  		
	column2D = FusionCharts("column2D", "ex1" , "600", "350", "chart-1", "json", dataSource)
	return render(request, 'index.html', {'output': column2D.render()}) 

```


<p class="text-info">Want to try out the above sample at your local environment? You can download this sample from <a href="https://github.com/fusioncharts/django-wrapper/archive/master.zip" target="_blank">here </a>.</p>