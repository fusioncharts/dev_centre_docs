---
title: Dynamically Add Chart Event Listener using django | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using django
heading: Dynamically Add Chart Event Listener using django
---

## The HTML template to render the chart is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions — such as manipulating the DOM, sending data to the server, and so on — using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when:

* A chart renders successfully

* Data completes loading

* A data plot is clicked

* The mouse pointer is hovered over a data plot, etc.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using a Python `function`. A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

The full code for the above sample is given below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file which has required functions to embed the charts in html page
from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is an example to show how to attach event in the chart.
# The `chart` method is defined to load chart data from a JSON string.

def chart(request):

    # Create an object for the column2d chart using the FusionCharts class constructor
    column2d = FusionCharts("column2d", "ex1", '700', '400', "chart-1", "json", 
        # The chart data is passed as a string to the `dataSource` parameter.
        """{  
             "chart":
             {  
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
        }""")        

    # Attach event with method name, and the callee method defined in html page.
    column2d.addEvent("dataplotClick", "onDataplotClick")

    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers. 
    return  render(request, 'interactive-event.html', {'output' : column2d.render(), 'chartTitle': 'Example of event (interactive event)'})

```
The HTML template to render the chart is shown below:

```
<!DOCTYPE html>
<html>
<head>
  <title>FC-python wrapper</title>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script>
        function onDataplotClick(eventObj) {
            var dataValue = eventObj.data.dataValue;
            var categoryLabel = eventObj.data.categoryLabel;
            document.getElementById("plotclick").innerHTML = "category: " + categoryLabel + "\n" + "value: " + dataValue;
            
        }
    </script>
</head>
<body style="font-family:'Helvetica Neue', Arial; font-size: 16px;">
  <h3>{{ chartTitle|safe }}</h3>
  <div id="chart-1">{{ output|safe }}</div>
  <br/>
  <div>
            <p id ="plotclick"></p>
  </div>
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

    * Create a variable `column2d`, which is an instance of the `FusionCharts` class. As argument values for `FusionCharts`, pass the chart details and the configuration (JSON string): 

        * Set the chart `type` as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

        * Set the `id` as `ex1`.

        * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

        * Set the `renderAt` as `chart-1`.

        * Set the `dataFormat` as `json`.

        * Embed the json data (string) as the value of `dataSource`. 

    * Return the output of the `render` function (defined in `FusionCharts`):

        * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.

        * Pass the relative path of the HTML template, where the chart will be rendered.

        * Pass a dictionary:

            * Set the `output` to `column2d.render()`.

            * Set the `chartTitle` to `Example of event (product life cycle event)`.

> When you change the values of `id` and `renderAt`, ensure that the corresponding changes are reflected in the HTML template. The string values for `renderAt` in the code, and the corresponding `div id` in the HTML template, should be the exact same.

> Refer to [Column 2D chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
