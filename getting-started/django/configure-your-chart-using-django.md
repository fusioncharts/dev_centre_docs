---
title: Configuring your Chart using django | FusionCharts
description: Find out how to Configuring your Chart Django with FusionCharts. Check out our guide and simplify the process. Enhance your data visualization game now.
heading: Configuring your Chart using django
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and makes data visualization simpler. These features include updating **chart data**, **annotations**, **trend-lines**, and **events**.

This article focuses on how you can configure your charts using Python `functions` (which you can call from elsewhere), to perform the following:

* [Update Chart Data](/getting-started/django/configure-your-chart-using-django#update-chart-data)

* [Update Chart Attributes](/getting-started/django/configure-your-chart-using-django#update-chart-attributes)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below:

{% embed_chartData configure-charts-using-django-example-1.js json %}

The full code for the above sample is given below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file that contains functions to embed the charts.
from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# Example to create an Angular Gauge with the chart data passed as JSON string format.
# The `chart` method is defined to load chart data from a JSON string.

def chart(request):
      
    # Create an object for the angualar gauge using the FusionCharts class constructor
    angularGauge = FusionCharts("angulargauge", "ex1" , "700", "400", "chart-1", "json", 
        # The data is passed as a string in the `dataSource` as parameter.
        """{  
            "chart": { 
                "caption": "Customer Satisfaction Score", 
                "subcaption": "Los Angeles Topanga", 
                "plotToolText": "Current Score: $value", 
                "theme": "fusion", 
                "chartBottomMargin": "50", 
                "showValue": "1" 
            }, 
            "colorRange": { 
                "color": [{ 
                    "minValue": "0", 
                    "maxValue": "90", 
                    "code": "#e44a00"
                }, { 
                    "minValue": "90", 
                    "maxValue": "150", 
                    "code": "#f8bd19" 
                }, { 
                    "minValue": "150", 
                    "maxValue": "250", 
                    "code": "#6baa01" 
                }] 
            }, 
            "dials": { 
                "dial": [{ 
                    "value": "70", 
                    "id": "dial1" 
                }] 
            }
        }"""
        )
    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers.
    return  render(request, 'update-data-runtime.html', {'output' : angularGauge.render(),'chartTitle': 'Update data at runtime'})
```

The HTML template to render the above chart is given below:

```
<!DOCTYPE html>
<html>
<head>
	<title>FC-python wrapper</title>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script>
        updateData = function () {
           var value = document.getElementById("dial-val").value;
           FusionCharts("ex1").setDataForId("dial1", value);
       }
    </script>
</head>
<body style="font-family:'Helvetica Neue', Arial; font-size: 16px;">
	<h3>{{ chartTitle|safe }}</h3>
	<div id="chart-1">{{ output|safe }}</div>
	<br/>
	<div>
    <label for="dial-val">Input dial value</label>
    <input name="dial-val" id="dial-val" type= "number"/>
    <input type ="button" name ="update dial" value ="update dial" onclick ="updateData()" />
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

    * Create a variable `angularGauge`, which is an instance of the `FusionCharts` class. As argument values for `FusionCharts`, pass the chart details and the configuration (JSON string): 

        * Set the chart `type` as `angularGauge`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

        * Set the `id` as `ex1`.

        * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

        * Set the `renderAt` as `chart-1`.

        * Set the `dataFormat` as `json`.

        * Embed the json data (string) as the value of `dataSource`. 

    * Return the output of the `render` function (defined in `FusionCharts`):

        * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.

        * Pass the relative path of the HTML template, where the chart will be rendered.

        * Pass a dictionary:

            * Set the `output` to `angularGauge.render()`.

            * Set the `chartTitle` to `Update data at runtime`.

> When you change the values of `id` and `renderAt`, ensure that the corresponding changes are reflected in the HTML template. The string values for `renderAt` in the code, and the corresponding `div id` in the HTML template, should be the exact same.

> Refer to [Angular Gauge](https://www.fusioncharts.com/dev/chart-guide/gauges-and-widgets/angular-gauge) for more information on the configuration and data for this chart type.

## Update Chart Attributes

A chart configured to update the chart **caption**, **sub-caption alignment**, and chart **background** dynamically is shown below.

{% embed_chartData configure-charts-using-django-example-2.js json %}

The full code for the above sample is given below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` the file which has required functions to embed the charts in HTML page
from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is an example to show a Column 2D chart where data is passed as JSON string format.
# The `chart` method is defined to load chart data from a JSON string.

def chart(request):

    # Create an object for the column2d chart using the FusionCharts class constructor
    column2d = FusionCharts("column2d", "ex1", 700, 400, "chart-1", "json", 
        # The chart data is passed as a string to the `dataSource` parameter.
        """{  
            "chart": {  
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subcaption": "In MMbbl = One Million barrels",
                "xaxisname": "Country",
                "yaxisname": "Reserves (MMbbl)",
                "numbersuffix": "K",
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
        }"""
        )
        # returning complete JavaScript and HTML code, which is used to generate chart in the browsers.
        return  render(request, 'update-data-runtime.html', {'output' : angularGauge.render(),'chartTitle': 'Update data at runtime'})
```
The HTML template to render the above chart is shown below: 

```
<!DOCTYPE html>
<html>
<head>
  <title>FC-python wrapper</title>
  <style>
    .button {
      display:inline-block;
      margin:5px;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      color: #333;
      text-align: center;
      text-shadow: 0 1px 1px rgba(255,255,255,0.75);
      vertical-align: middle;
      cursor: pointer;
      background-color: #f5f5f5;
      background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
      background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
      background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
      background-image: -o-linear-gradient(top,#fff,#e6e6e6);
      background-image: linear-gradient(to bottom,#fff,#e6e6e6);
      background-repeat: repeat-x;
      border: 1px solid #ccc;
      border-color: #e6e6e6 #e6e6e6 #bfbfbf;
      border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
      border-bottom-color: #b3b3b3;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);
      filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
      -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
      -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    }
  </style>
    
  <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
  <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
  <script>
    changeBackground = function(e){
      FusionCharts("ex1").setChartAttribute('bgColor', '#efefef');
    }
    changeCaption = function(){
      FusionCharts("ex1").setChartAttribute('captionAlignment', 'left');
    }
    reset = function(e){
      FusionCharts("ex1").setChartAttribute('captionAlignment', 'center');
      FusionCharts("ex1").setChartAttribute('bgColor', '#ffffff');
    }
  </script>
</head>
<body style="font-family:'Helvetica Neue', Arial; font-size: 16px;">
  <h3>{{ chartTitle|safe }}</h3>
  <div align="center"  id="chart-1">{{ output|safe }}</div>
  <br/>
  <div>
    <p align="center" id ="message"></p>
  </div>
  <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
    <input type="button" class="button" onClick="changeBackground()" value='Change Chart Background'/>
    <input type="button" class="button" onClick="changeCaption()" value='Make Caption Text Left Aligned'/>
    <input type="button" class="button" onClick="reset()" value='Reset Attributes'/>
  </div>
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

            * Set the `chartTitle` to `Updating chart properties at runtime`.

> When you change the values of `id` and `renderAt`, ensure that the corresponding changes are reflected in the HTML template. The string values for `renderAt` in the code, and the corresponding `div id` in the HTML template, should be the exact same.

> Refer to [Column 2D chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
