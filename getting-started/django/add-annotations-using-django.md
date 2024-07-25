---
title: Add Annotations | FusionCharts
description: Find out how to Add Annotations using django with FusionCharts. Check out our guide and simplify the process. Enhance your data visualization game now.
heading: Add Annotations using django
---

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

In this article, we'll create a **spline chart** and add annotations using a Python `function`. A spline chart using annotations to highlight a particular anchor along with text is shown below:

{% embed_chartData add-annotations-using-django-example-1.js json %}

The full code for the above sample is given below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file which has required functions to embed the charts in html page
from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is a example to show a spline chart where data is passed as JSON string format.
# The `chart` method is defined to load chart data from an JSON string.

def chart(request):
    # Create an object for the spline chart using the FusionCharts class constructor
    spline = FusionCharts("spline", "ex1", 700, 400, "chart-1", "json", 
        # The chart data is passed as a string to the `dataSource` parameter.
        """{
            "chart": {
                "caption": "Average Monthly Temperature in Texas",
                "yAxisName": "Average Monthly Temperature",
                "anchorradius": "5",
                "plotToolText": "Average temperature in $label is <b>$dataValue</b>",
                "showHoverEffect": "1",
                "showvalues": "0",
                "numberSuffix": "°C",
                "theme": "fusion",
                "anchorBgColor": "#72D7B2",
                "paletteColors": "#72D7B2"
            },
            "annotations": {
                "groups": [
                    {
                        "id": "anchor-highlight",
                        "items": [
                            {
                                "id": "high-star",
                                "type": "circle",
                                "x": "$dataset.0.set.7.x",
                                "y": "$dataset.0.set.7.y",
                                "radius": "12",
                                "color": "#cc0000",
                                "border": "2",
                                "borderColor": "#0075c2"
                            },
                            {
                                "id": "label",
                                "type": "text",
                                "text": "Hottest Month",
                                "fillcolor": "#0075c2",
                                "rotate": "90",
                                "x": "$dataset.0.set.7.x+75",
                                "y": "$dataset.0.set.7.y-2"
                            }
                        ]
                    }
                ]
            },
            "data": [
                {
                    "label": "Jan",
                    "value": "1"
                },
                {
                    "label": "Feb",
                    "value": "5"
                },
                {
                    "label": "Mar",
                    "value": "10"
                },
                {
                    "label": "Apr",
                    "value": "12"
                },
                {
                    "label": "May",
                    "value": "14"
                },
                {
                    "label": "Jun",
                    "value": "16"
                },
                {
                    "label": "Jul",
                    "value": "20"
                },
                {
                    "label": "Aug",
                    "value": "22"
                },
                {
                    "label": "Sep",
                    "value": "20"
                },
                {
                    "label": "Oct",
                    "value": "16"
                },
                {
                    "label": "Nov",
                    "value": "7"
                },
                {
                    "label": "Dec",
                    "value": "2"
                }
            ]
        }""")
    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers. 
    return  render(request, 'index.html', {'output' : spline.render(), 'chartTitle': 'Chart Annotation'})

```

## The HTML template to render the above chart is shown below:

```
<!DOCTYPE html>
<html>
<head>
  <title>FC-python wrapper</title>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

</head>
<body style="font-family:'Helvetica Neue', Arial; font-size: 16px;">
  <h3>{{ chartTitle|safe }}</h3>
  <div id="chart-1">{{ output|safe }}</div>
  <br/>
  <a href="/">Back</a>
</body>
</html>

```
The sample code provided above corresponds to the following tasks:

1. Import and resolve dependencies:

    * `render` from `django.shortcuts`, and `HttpResponse` from `django.http`

    * `FusionCharts` from `fusioncharts` 

2. Define a function `chart`, which takes `request` as an argument:

    * Create a variable `spline`, which is an instance of the `FusionCharts` class. As argument values for `FusionCharts`, pass the chart details and the configuration (JSON string): 

        * Set the chart `type` as `spline`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

        * Set the `id` as `ex1`.

        * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

        * Set the `renderAt` as `chart-1`.

        * Set the `dataFormat` as `json`.

        * Embed the json data (string) as the value of `dataSource`. 

    * Return the output of the `render` function (defined in `FusionCharts`):

        * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.

        * Pass the relative path of the HTML template, where the chart will be rendered.

        * Pass a dictionary:

            * Set the `output` to `spline.render()`.

            * Set the `chartTitle` to `Chart Annotation`.

> When you change the values of `id` and `renderAt`, ensure that the corresponding changes are reflected in the HTML template. The string values for `renderAt` in the code, and the corresponding `div id` in the HTML template, should be the exact same.

> Refer to [Spline Chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/spline-charts) for more information on the configuration and data for this chart type.

