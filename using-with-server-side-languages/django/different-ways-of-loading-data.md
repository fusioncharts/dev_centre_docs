---
permalink: using-with-server-side-languages/django/different-ways-of-loading-data.html
title: Different Ways of Loading Data in Django | FusionCharts
description: The FusionCharts Django wrapper lets you load data for a chart using a static JSON string, a static XML string
heading: Different Ways of Loading Data in Django
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts Django Wrapper can be downloaded from <a href="http://www.fusioncharts.com/django-charts/" target="_blank">here</a>.</p>

The FusionCharts Django wrapper lets you load data for a chart using:

* <a href="{{ site.baseurl }}using-with-server-side-languages/django/different-ways-of-loading-data.html#loading-data-from-a-static-json-string">a static JSON string</a>
* <a href="{{ site.baseurl }}using-with-server-side-languages/django/different-ways-of-loading-data.html#loading-data-from-a-static-xml-string">a static XML string</a>
* <a href="{{ site.baseurl }}using-with-server-side-languages/django/different-ways-of-loading-data.html#loading-data-from-a-valid-python-dictionary">a valid Python dictionary</a>


In this section, you will be shown how the Django wrapper uses each of these methods to generate charts.

<p class="text-info">Before you proceed, make sure you have <a href="{{ site.baseurl }}using-with-server-side-languages/django/introduction-to-the-django-wrapper.html" target="_blank">installed and set up the plugin </a> correctly.</p>

## Loading Data from a Static JSON String

A column chart, the data for which is loaded using a static JSON string, is shown below:

{% embed_chart using-with-server-side-languages-django-different-ways-of-loading-data-example-1.js %}

The data structure needed to create the above chart is given below:

```python
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# Example to create a Column 2D chart with the chart data passed in JSON string format.
# The `chart` method is defined to load chart data from a JSON string.

def chart(request):
    # Create an object for the Column 2D chart using the FusionCharts class constructor
	coolumn2D = FusionCharts("column2D", "ex1" , "600", "400", "chart-1", "json", 
		# The chart data is passed as a string to the `dataSource` parameter.
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
	
 	return  render(request, 'index.html', {'output' : column2D.render()})

```

To know more about the attributes that you can configure for the column 2D chart, visit <a href="{{ site.baseurl }}chart-attributes.html?chart=column2d" target="_blank">this page</a>.


## Loading Data from a Static XML String

Next, we will look at how you can render the column chart shown above using XML data.

The data structure needed to create the above chart is given below:


```python
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from fusioncharts import FusionCharts

#Loading Data from a Static XML String
# Example to create a Line chart with the chart data passed in XML string format.
# The `chart` method is defined to load chart data from an XML string.

def chart(request):
    # Create an object for the Line chart using the FusionCharts class constructor
	line = FusionCharts("line", "ex1" , "600", "400", "chart-1", "xml", 
        # The chart data is passed as a string to the `dataSource` parameter.
		"""<chart caption="Monthly Revenue for last year" subcaption="harry\'s Supermart" xaxisname="Month" yaxisname="Revenues (In USD)" numberPrefix="$" theme="zune">
                <set label="Jan" value="420000" />
                <set label="Feb" value="810000" />
                <set label="Mar" value="720000" />
                <set label="Apr" value="550000" />
                <set label="May" value="910000" />
                <set label="Jun" value="510000" />
                <set label="Jul" value="680000" />
                <set label="Aug" value="620000" />
                <set label="Sep" value="610000" />
                <set label="Oct" value="490000" />
                <set label="Nov" value="900000" />
                <set label="Dec" value="730000" />
            </chart>""")
	
	# Alternatively, you can assign this string to a string variable in a separate XML file and
	# pass the URL of that file to the `dataSource` parameter.
	
 	return  render(request, 'index.html', {'output' : line.render()})
```


## Loading Data from a Valid Python Dictionary

A Python dictionary contains a series of key-value mappings. The conceptual implementation is like that of a hash table, so checks for existence are quite fast. That means we can determine if a specific key is present in the dictionary without needing to examine every element. The Python interpreter can just go to the location the key "_should be_" at and see if the key is actually there.

As an example, we will create a multi-series column 2D chart that compares the quarterly revenue for the current year and the previous year at Harry’s SuperMart.

The multi-series column 2D chart thus rendered is shown below:

{% embed_chart using-with-server-side-languages-django-different-ways-of-loading-data-example-2.js %}

The data structure needed to create the above chart is given below:

```python
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from fusioncharts import FusionCharts

# The `chart` function is defined to load data from a Python Dictionary. This data will be converted to
# JSON and the chart will be rendered in the browser.

def chart(request):
    
    dataSource = {}
    
    # Chart data is passed to the `dataSource` parameter, as hashes, in the form of
    # key-value pairs.
    dataSource['chart'] = { 
        "caption": "Comparison of Quarterly Revenue",
        "subCaption": "Harry's SuperMart",
        "xAxisname": "Quarter",
        "yAxisName": "Amount ($)",
        "numberPrefix": "$",
        "theme": "zune"
        }

    # The `category` dict is defined inside the `categories` array with four key-value pairs
    # that represent the x-axis labels for the four quarters.
    dataSource["categories"] = [{
                "category": [
                    { "label": "Q1" },
                    { "label": "Q2" },
                    { "label": "Q3" },
                    { "label": "Q4" }
                ]
            }]
    
    # The `data` hash contains four key-value pairs that are the values for the revenue
    # generated in the previous year.

        dataSource["dataset"] = [{
                "seriesname": "Previous Year",
                "data": [
                        { "value": "10000" },
                        { "value": "11500" },
                        { "value": "12500" },
                        { "value": "15000" }
                    ]
                }, {
                "seriesname": "Current Year",
                "data": [
                        { "value": "25400" },
                        { "value": "29800" },
                        { "value": "21800" },
                        { "value": "26800" }
                    ]
                }    
            ]

    # Create an object for the Multiseries column 2D charts using the FusionCharts class constructor
    mscol2D = FusionCharts("mscolumn2d", "ex1" , "600", "400", "chart-1", "json", dataSource)
    return render(request, 'index.html', {'output': mscol2D.render()}) 

```

To know more about the attributes that you can configure for the multi-series column 2D chart, visit <a href="{{ site.baseurl }}chart-attributes.html?chart=mscolumn2d" target="_blank">this page</a>.


## Important Tips for Developers

Given below are a few tips that, although applicable while using FusionCharts, need to be specifically paid attention to here:

* The structure of chart data is different based on whether you are rendering a single-series chart or a multi-series chart. The table below shows the difference:

<table>
  <tr>
     <td><strong>Single-series Chart</strong></td>
  </tr>
  <tr>
{% embed_data using-with-server-side-languages-django-different-ways-of-loading-data-example-3.js %}
For an example, click [here]{% linkTo tutorials/chart-guide/standard-charts/creating-standard-charts.md %}.
    </td>
  </tr>
  <tr>
    <td><strong>Multi-series Chart</strong></td>
  </tr>
  <tr>  
{% embed_data using-with-server-side-languages-django-different-ways-of-loading-data-example-4.js %}
For an example, click [here]{% linkTo tutorials/chart-guide/multi-series-charts/creating-multi-series-charts.md %}.
    </td>
  </tr>
</table>

* Make sure that the XML strings are escaped properly, especially for instances where the data for the chart is enclosed in quotation marks. Also make sure that the entire string is enclosed in single quotes, while the attributes and corresponding values are enclosed in double quotes. Doing otherwise will break the code.

* The chart ID should be unique for all charts rendered on the same page. Otherwise, it will result in a JavaScript error.