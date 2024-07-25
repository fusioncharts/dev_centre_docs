---
title: Change Chart Type at Runtime | FusionCharts
description: Change Chart Type at Runtime using URLs in Java effortlessly with FusionCharts. Enhance your application's data visualization capabilities and performance. Find more info.
heading: Change Chart Type at Runtime
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using **FusionCharts JSP wrapper**. The chart types used in the sample is:

* Column 2D chart (default representation)
* Bar chart
* Pie chart

## A chart configured to change the chart type is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

The full code for the above chart is shown below:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>FusionCharts | Change Chart Type at Runtime</title>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>
<body style="font-family: Helvetica Neue, Arial; font-size: 16px;">
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

    <h3>Chart type Change at Runtime</h3>
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


    <div id="chart" style="width: 100%; display: block;" align="center"></div>
    <div><span><a href="../Index.jsp">Go Back</a></span></div>
    <%
            String jsonData;
            jsonData = "{"chart":{"caption":"Countries With Most Oil Reserves [2017-18]","subCaption":"In MMbbl = One Million barrels","xAxisName":"Country","yAxisName":"Reserves (MMbbl)","numberSuffix":"K","theme":"fusion"},"data":[{"label":"Venezuela","value":"290"},{"label":"Saudi","value":"260"},{"label":"Canada","value":"180"},{"label":"Iran","value":"140"},{"label":"Russia","value":"115"},{"label":"UAE","value":"100"},{"label":"US","value":"30"},{"label":"China","value":"30"}]}";
            FusionCharts column_chart = new FusionCharts(
                  "column2d",
                  "column_chart",
                  "700", 
                  "400",
                  "chart",
                  "json",
                  jsonData                    
                    );
    %>
     
            <%=column_chart.render()%>

</body>
</html>

```

Apart from the usual boilerplate, the sample code provided above corresponds to the following tasks:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within the `<body>`: 

    * Include a `<script>` tag that contains functions for changing the chart type at runtime (in this case, clicking radio buttons acts as the trigger).

    * Create radio buttons for different representations of the same chart data. In this example, we are interested in Column 2D, Bar Chart, and Pie Chart, with the default representation being Column 2D.

    * Include a `<div>` tag with `id` same as the value of the `renderAt` attribute of the instance of `FusionCharts` (explained in the next step), within which the chart will be rendered. 

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

> Refer to [Column 2D chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type. Alternatively, you may also refer to [Bar chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts#bar-d-chart) or [Pie chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/pie-and-doughnut-charts), if you want them as defaults.

