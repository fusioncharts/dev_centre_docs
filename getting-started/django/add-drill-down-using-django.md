---
title: Adding Drill Down using Django | FusionCharts
description: Find out how to Adding Drill Down using Django with FusionCharts. Check out our guide and simplify the process. Enhance your data visualization game now.
heading: Adding Drill Down using Django
---

With FusionCharts, you can create unlimited levels of drill-down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill-down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up, or it can open in a new window or frame.

To render a drill-down chart using database, let's start creating `Country` and `City` data models for our application in `models.py`. Using this data, you want to plot a column 2D chart showing the top 10 most populous countries in the world. Furthermore, you want to render this column 2D chart as a drill-down chart, where clicking each data plot shows another chart plotting the top 10 populous cities of that country.

## The models in models.py chart looks like:

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

{% embed_chart adding-drill-down-using-django.js %}

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
    column2D = FusionCharts("column2D", "ex1" , "700", "400", "chart-1", "json", dataSource)
    return render(request, 'index.html', {'output': column2D.render()}) 
```


> Want to try out the above sample at your local environment? You can download this sample from <a href="https://github.com/fusioncharts/django-wrapper/archive/master.zip" target="_blank">here </a>.</p>
