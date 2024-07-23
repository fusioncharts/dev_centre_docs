---
title: Apply Different Themes using Java | FusionCharts
description: This article will showcase how to apply different themes to the chart at runtime.
heading: Apply Different Themes using Java
---

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

## FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)

* `gammel` (since v3.13.0)

* `candy` (since v3.13.0)

* `zune`

* `ocean`

* `carbon`

This article focuses on how you can apply different themes to the chart at runtime using FusionCharts JSP wrapper. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

The full code for the above sample chart is given below:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@page import="java.util.*" %>
<%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>FusionCharts | Apply Different Themes</title>
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.gammel.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.candy.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.zune.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.ocean.js"></script>
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.carbon.js"></script>
   
</head>
<body style="font-family: Helvetica Neue, Arial; font-size: 16px;">
<script type="text/javascript">
        FusionCharts && FusionCharts.ready(function () {
            FusionCharts.options.defaultTheme="fusion";
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
            // FusionCharts.options.defaultTheme=theme;
        };
    </script>
    <h3>Use of Common Theme</h3>
    <div id="chart" style="width: 100%; display: block;" align="center"></div>
    <br/>
    <br/>
    
    <div align="center" style="font-family:'Helvetica Neue', Arial; font-size: 16px;">
        <label style="padding: 0px 5px !important;">Select a theme for all charts</label>
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
           <input type="radio" name="theme-options" value="candy"/> Candy
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="zune"/> Zune
        </label>
        <label style="padding: 0px 5px !important;">
           <input type="radio" name="theme-options" value="ocean"/> Ocean
        </label>
        <label style="padding: 0px 5px !important;">
           <input type="radio" name="theme-options" value="carbon"/> Carbon
        </label>
        
    </div>
<div><span><a href="../Index.jsp">Go Back</a></span></div>
<%
String jsonData = "{"chart":{"caption":"Countries With Most Oil Reserves [2017-18]","subCaption":"In MMbbl = One Million barrels","xAxisName":"Country","yAxisName":"Reserves (MMbbl)","numberSuffix":"K","theme":"fusion"},"data":[{"label":"Venezuela","value":"290"},{"label":"Saudi","value":"260"},{"label":"Canada","value":"180"},{"label":"Iran","value":"140"},{"label":"Russia","value":"115"},{"label":"UAE","value":"100"},{"label":"US","value":"30"},{"label":"China","value":"30"}]}";

//Create chart instance
// charttype, chartID, width, height,containerid, data format, data
FusionCharts column_chart = new FusionCharts(
          "column2d", 
          "column_chart", 
          "700",
          "400", 
          "second_chart",
          "json", 
          jsonData
);
%>
<%=column_chart.render() %>
</body>
</html>

```

Apart from the usual boilerplate, the sample code provided above corresponds to the following tasks:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`, and **all the other theme files**. 

3. Within the `<body>`: 

    * Include a `<script>` tag that contains functions for applying themes dynamically.

    * Include a `<div>` tag with `id` same as the value of the `renderAt` attribute of the instance of `FusionCharts` (explained in the next step), within which the chart will be rendered. 

    * Create radio buttons for different themes - `fusion`, `gammel`, `candy`, `zune`, `ocean`, `carbon`.

    * Include a `<% %>` tag, where:

        * Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

        * Create a new instance named `column_chart` of the `FusionCharts` constructor, and pass the values of its arguments:

            * Set the chart `type` as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

            * Set the `id` as `column_chart`.

            * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

            * Set the `renderAt` as `chart`.

            * Set the `dataFormat` as `json`.

            * Set the `dataSource` to `jsonData` which has been declared and defined above.

    * Include a `<%= %>` tag that contains `column_chart.render()`.

> Refer to [Column 2D chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
