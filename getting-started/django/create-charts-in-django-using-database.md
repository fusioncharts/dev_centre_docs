---
title: Create Charts in Django using Database | FusionCharts
description: This section showcases how you can do this using the FusionCharts Django wrapper.
heading: Create Charts in Django using Database
chartPresent: true
---

In addition to directly specifying the chart data (or the URL for the file in which the chart data is stored) directly in the JSON/XML code, you can also fetch data for the chart from a database.

This section showcases how you can do this using the FusionCharts Django wrapper.

> Before you proceed, make sure you have [installed and set up the plugin](getting-started/django/your-first-chart-using-django) correctly.

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

> To setup your database and create your first model, go through the detailed steps from<a href="https://docs.djangoproject.com/en/1.10/intro/tutorial02/#creating-models" target="_blank"> here </a></p>

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
