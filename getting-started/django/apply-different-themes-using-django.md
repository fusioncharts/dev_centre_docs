---
title: Apply Different Themes using Django | FusionCharts
description: This article will showcase how to apply different themes to the chart at runtime.
heading: Apply Different Themes using django
---

## The HTML template used to render the chart is shown below:

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases, so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)

* `gammel` (since v3.13.0)

* `candy` (since v3.13.0)

* `zune`

* `ocean`

* `carbon`

This article focuses on how you can apply different themes to the chart at runtime using a Python `function`. Click any radio button, to see how the look and feel of the chart change with each theme. A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

The full code for the above sample is given below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file which has required functions to embed the charts in html page
from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is a example to show a Overlapped Bar 2D and column 2d chart where data is passed as JSON string format.
# These charts are rendering with a common theme.
# The `chart` method is defined to load chart data from an JSON string.

def chart(request):

    # Create an object for the column2d chart using the FusionCharts class constructor
    column2d = FusionCharts("column2d", "ex1" , "700", "400", "chart-1", "json", 
    # The data is passed as a string in the `dataSource` as parameter.
    """{
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
        "data": [
            {
                "label": "Venezuela",
                "value": "290"
            },
            {
                "label": "Saudi",
                "value": "260"
            },
            {
                "label": "Canada",
                "value": "180"
            },
            {
                "label": "Iran",
                "value": "140"
            },
            {
                "label": "Russia",
                "value": "115"
            },
            {
                "label": "UAE",
                "value": "100"
            },
            {
                "label": "US",
                "value": "30"
            },
            {
                "label": "China",
                "value": "30"
            }
        ]
    }""")

    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers. 
    return  render(request, 'chart-theme.html', {'output' : column2d.render(), 'chartTitle': 'Chart Themes'})

```

The HTML template used to render the chart is shown below:

```
<!DOCTYPE html>
<html>
<head>
    <title>FC-python wrapper</title>
    
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.gammel.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.zune.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.carbon.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.ocean.js"></script>

   <script type="text/javascript">
        FusionCharts && FusionCharts.ready(function () {
            
            //FusionCharts.options.defaultTheme = "fusion";
            var trans = document.getElementById("controllers").getElementsByTagName("input");
            for (var i=0, len=trans.length; i<len; i++) {                
                if (trans[i].type == "radio"){
                    trans[i].onchange = function() {
                        ChangeTheme(this.value);
                    };
                }
            }
        });
        function ChangeTheme(theme) {
            for (var k in FusionCharts.items) {
                if (FusionCharts.items.hasOwnProperty(k)) {
                    FusionCharts.items[k].setChartAttribute('theme', theme);
                }
            }
        };
   </script>
</head>
<body style="font-family:'Helvetica Neue', Arial; font-size: 16px;">

    <div style="width: 100%; display: table;">
        <div style="display: table-row">
            <div id="chart-1" style="width: 40%; display: table-cell;">{{ output|safe }}</div>
        </div>
    </div>
    <br/>
    <br/>
    
    <div align="center" style="font-family:'Helvetica Neue', Arial; font-size: 16px;">
            <label style="padding: 0px 5px !important;">Select a theme for the chart</label>
    </div>
    <br/>
    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" checked value="fusion"/> Fusion
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="gammel"/> Gammel
        </label>
        <label style="padding: 0px 5px !important;">
                <input type="radio" name="theme-options" value="zune"/> Zune
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="carbon"/> Carbon
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="ocean"/> Ocean
        </label>        
    </div>
  <br/>
  <a href="/">Back</a>
</body>
</html>

```

> In the code, note the inclusion of the theme as the value of the `theme` attribute - you can use any of the supported themes as your default/starting point. Also, in the HTML template, ensure that the theme files are included, either as static/downloaded files, or from CDN.

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

            * Set the `chartTitle` to `Chart Themes`.

> When you change the values of `id` and `renderAt`, ensure that the corresponding changes are reflected in the HTML template. The string values for `renderAt` in the code, and the corresponding `div id` in the HTML template, should be the exact same.

> Refer to [Column 2D chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.

