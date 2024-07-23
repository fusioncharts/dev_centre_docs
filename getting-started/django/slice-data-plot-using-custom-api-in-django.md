---
title: Slice Data Plot using API | FusionCharts
description: This article will showcase a sample to slice data plot of the pie chart using chart specific custom API .
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offers a wide range of APIs that you can use for different stages in the ife cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using a Python `function`. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

The full code for the above chart is shown below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file which has required functions to embed the charts in html page
from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is a example to show how to attach event in chart.
# The `chart` method is defined to load chart data from an JSON string.

def chart(request):

    # Create an object for the pie2d chart using the FusionCharts class constructor
    pie2d = FusionCharts("pie2d", "ex1", '450', '250', "chart-1", "json", 
          # The chart data is passed as a string to the `dataSource` parameter.
        """{  
            "chart": 
            { 
                "caption": "Market Share of Web Servers",
                "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
                "showLegend": "0",
                "enableMultiSlicing": "0",
                "showPercentValues": "1",
                "legendPosition": "bottom",
                "useDataPlotColorForLabels": "1",
                "theme": "fusion"
            },
            "data": [{ 
                    "label": "Apache",
                    "value": "32647479"
                }, { 
                    "label": "Microsoft", 
                    "value": "22100932" 
                }, { 
                    "label": "Zeus", 
                    "value": "14376" 
                }, { 
                    "label": "Other",
                    "value": "18674221" 
            }]
        }""")        

    # Attach event with method name, and the callee method defined in html page.)
    pie2d.addEvent("dataplotClick", "plotClickHandler")

     # returning complete JavaScript and HTML code, which is used to generate chart in the browsers. 
    return  render(request, 'special-chart-type-api.html', {'output' : pie2d.render(),'chartTitle': 'Special chart type API'})
```

The HTML template to render the above chart is shown below:

```
<!DOCTYPE html>
<html>

<head>
    <title>FC-python wrapper</title>

    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script>
        plotClickHandler = function(event){
           clickedPlot = (event.data.categoryLabel).toLowerCase();
             if (selectedItem !== clickedPlot) {
                   selectedItem = clickedPlot;
             } else{
                   selectedItem = 'none';
             }
       };
       selectedItem = "none";
       getFusionChart = function(){
           return FusionCharts("ex1");
       }
       noneChecked = function(){
            getFusionChart().slicePlotItem(0,false);
            getFusionChart().slicePlotItem(1,false);
            getFusionChart().slicePlotItem(2,false);
            getFusionChart().slicePlotItem(3,false);
       }
       apacheChecked = function(){
            getFusionChart().slicePlotItem(0,true);
       }
       microsoftChecked = function(){
            getFusionChart().slicePlotItem(1,true);
       }
       zeusChecked = function(){
            getFusionChart().slicePlotItem(2,true);
       }
       otherChecked = function(){
            getFusionChart().slicePlotItem(3,true);
       }
   </script>
</head>

<body style="font-family:'Helvetica Neue', Arial; font-size: 16px;">
    <h3>{{ chartTitle|safe }}</h3>
    <div align="center" id="chart-1">{{ output|safe }}</div>
    <br />
    <br />
    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" checked onClick="noneChecked()" /> None
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onClick="apacheChecked()" /> Apache
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onClick="microsoftChecked()" /> Microsoft
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onClick="zeusChecked()" /> Zeus
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onClick="otherChecked()" /> Other
        </label>
    </div>
</body>

</html>
```

## The sample code provided above corresponds to the following tasks:

1. Import and resolve dependencies:

    * `render` from `django.shortcuts`, and `HttpResponse` from `django.http`

    * `FusionCharts` from `fusioncharts`

2. Define a function `chart`, which takes `request` as an argument:

    * Create a variable `pie2d`, which is an instance of the `FusionCharts` class. As argument values for `FusionCharts`, pass the chart details and the configuration (JSON string): 

        * Set the chart `type` as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

        * Set the `id` as `ex1`.

        * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

        * Set the `renderAt` as `chart-1`.

        * Set the `dataFormat` as `json`.

        * Embed the json data (string) as the value of `dataSource`. 

    * Return the output of the `render` function (defined in `FusionCharts`):

        * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.

        * Pass the relative path of the HTML template, where the chart will be rendered.

        * Pass a dictionary to set the `output` to `pie2d.render()`.

> When you change the values of `id` and `renderAt`, ensure that the corresponding changes are reflected in the HTML template. The string values for `renderAt` in the code, and the corresponding `div id` in the HTML template, should be the exact same.
