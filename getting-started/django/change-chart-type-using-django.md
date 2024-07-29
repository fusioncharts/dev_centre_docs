---
title: Change Chart Type at Runtime | FusionCharts
description: Find out how to Change Chart Type at Runtime in Django with FusionCharts. Check out our guide & simplify the process. Enhance your data visualization game now.
heading: Change Chart Type at Runtime
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using a Python `function`. The chart types used in the sample is:

* Column 2D

* Bar 2D

* Pie 2D

## A chart configured to change the chart type is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

The full code for the above sample is given below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` the file which has required functions to embed the charts in HTML page
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

    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers. 
    return  render(request, 'dynamic-chart-type.html', {'output' : column2d.render(), 'chartTitle': 'Dynamic Chart Type Change'})

```

The HTML template to render the above chart is shown below:

```
<!DOCTYPE html>
<html>
<head>
  <title>FC-python wrapper</title>

<!-- If you are using downloaded FusionCharts libraries, uncomment the below code   -->

   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

</head>
<body style="font-family:'Helvetica Neue', Arial; font-size: 16px;">
  <h3>{{ chartTitle|safe }}</h3>
        <script type="text/javascript">
            FusionCharts && FusionCharts.ready(function () {
            var trans = document.getElementById("controllers").getElementsByTagName("input");
            for (var i=0, len=trans.length; i<len; i++) {                
                if (trans[i].type == "radio"){
                    trans[i].onchange = function() {
                        changeChartType(this.value);
                    };
                }
            }
        });
        
        function changeChartType(chartType) {
            for (var k in FusionCharts.items) {
                if (FusionCharts.items.hasOwnProperty(k)) {
                    FusionCharts.items[k].chartType(chartType);
                }
            }
        };
    </script>
    <div align="center">
    <label style="padding: 0px 5px !important;">Select The Chart Type</label>
    </div>
    <br/>
    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
    <label style="padding: 0px 5px !important;">
        <input type="radio" name="div-size" checked value="column2d"/>Column 2D 
    </label>
    <label style="padding: 0px 5px !important;">
        <input type="radio" name="div-size" value="pie3d"/>Pie 3D
    </label>
    <label style="padding: 0px 5px !important;">
            <input type="radio" name="div-size" value="bar2d"/>Bar 2D
    </label>
    </div>
    <br/>
    <br/>
    <br/>
    <div style="width: 100%; display: block;" align="center">
    <div id="chartContainer">{{ output|safe }}</div>
    </div>
    <br/>
    <br/>
    <a href="/">Go Back</a>
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

> Refer to [Column 2D chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type. Alternatively, if your starting chart is [Bar chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts#bar-d-chart) or  [Pie chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/pie-and-doughnut-charts), you can use their respective pages as a source of detailed information for possible configuration and data.
