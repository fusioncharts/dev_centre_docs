---
title: Adding Special Characters | FusionCharts
description: Find out how to Adding Special Characters in Django with FusionCharts. Check out our guide and simplify the process. Enhance your data visualization game now.
heading: Adding Special Characters
---

FusionCharts offers multiple options to format numbers on the chart. You can configure number prefixes and suffixes, decimal places, and scale numbers based on a predefined scale. This article focuses on how you customize the prefix and suffix of the numbers on the chart using **FusionCharts Django wrapper**.

To customize the prefix and suffix of the numbers on the chart, use the following attributes:

* Specify the prefix for all the values on the chart using the `numberPrefix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberPrefix` and `xNumberPrefix` attributes.

* Specify the prefix for all the Y-axis values on the chart using the `yNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the prefix for all the X-axis values on the chart using the `xNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the suffix for all the values on the chart using the `numberSuffix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberSuffix` and `xNumberSuffix` attributes.

* Specify the suffix for all the Y-axis values on the chart using the `yNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

* Specify the suffix for all the X-axis values on the chart using the `xNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

## A chart configured to customize the prefix of the numbers on the chart is shown below:

{% embed_chartData adding-special-character-example-1.js json %}

The full code for the above sample is given below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file which has required functions to embed the charts in html page
from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is a example to show a Column 2D chart where data is passed as JSON string format.
# The `chart` method is defined to load chart data from an JSON string.

def chart(request):
    # Create an object for the column2d chart using the FusionCharts class constructor
    column2d = FusionCharts("column2d", "ex1", '700', '400', "chart-1", "json", 
            # The chart data is passed as a string to the `dataSource` parameter.
        """{
            "chart": {
                "caption": "Monthly revenue for last year",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                "numberPrefix": "$",
                "theme": "fusion"
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
                }
            ]
        }""")
    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers. 
    return  render(request, 'index.html', {'output' : column2d.render(),'chartTitle': 'Chart using special character'})
```

The HTML template used to render the chart is shown below:

```
<!DOCTYPE html>
<html>
<head>
    <title>FC-python wrapper</title>
    
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
</head>
</html>
```

The sample code provided above corresponds to the following tasks:

1. Import and resolve dependencies:

    * `render` from `django.shortcuts`, and `HttpResponse` from `django.http`

    * `FusionCharts` from `fusioncharts` 

2. Define a function `chart`, which takes `request` as an argument:

    * Create a variable `column2d`, which is an instance of the `FusionCharts` class. As argument values for `FusionCharts`, pass the chart details and the configuration (JSON string): 

        * Set the chart `type` as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

        * Set the `id` as `ex1`.

        * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

        * Set the `renderAt` as `chart-1`.

        * Set the `dataFormat` as `json`.

        * Embed the json data (string) as the value of `dataSource`. 

        * In the `dataSource` object, add `numberPrefix` attribute in `chart` object. Set the `numberPrefix` to `$`.

    * Return the output of the `render` function (defined in `FusionCharts`):

        * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.

        * Pass the relative path of the HTML template, where the chart will be rendered.

        * Pass a dictionary:

            * Set the `output` to `column2d.render()`.

            * Set the `chartTitle` to `Chart Themes`.

> When you change the values of `id` and `renderAt`, ensure that the corresponding changes are reflected in the HTML template. The string values for `renderAt` in the code, and the corresponding `div id` in the HTML template, should be the exact same.
