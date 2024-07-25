---
title: Slice Data Plot using API | FusionCharts
description: Slice Data Plots using URLs in Java effortlessly with FusionCharts. Enhance your application's data visualization capabilities and performance. Find more info here.
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offer a wide range of APIs that you can use for different stages in the life cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using **FusionCharts JSP wrapper**. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

## The full code for the above chart is shown below:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <link href="../Styles/ChartSampleStyleSheet.css" rel="stylesheet" />
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <title>FusionCharts | shocasing use special chart type API</title>

</head>

<body>
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
        noneChecked = function(){
            FusionCharts("pie_chart").slicePlotItem(0,false);
            FusionCharts("pie_chart").slicePlotItem(1,false);
            FusionCharts("pie_chart").slicePlotItem(2,false);
            FusionCharts("pie_chart").slicePlotItem(3,false);
        }
        apacheChecked = function(){
            FusionCharts("pie_chart").slicePlotItem(0,true);
        }
        microsoftChecked = function(){
            FusionCharts("pie_chart").slicePlotItem(1,true);
        }
        zeusChecked = function(){
            FusionCharts("pie_chart").slicePlotItem(2,true);
        }
        otherChecked = function(){
            FusionCharts("pie_chart").slicePlotItem(3,true);
        }
    </script>
    <h3>shocasing use special chart type API</h3>
    <div id="chart"></div>
    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" checked="checked" onclick="noneChecked()" /> None
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onclick="apacheChecked()" /> Apache
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onclick="microsoftChecked()" /> Microsoft
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onclick="zeusChecked()" /> Zeus
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onclick="otherChecked()" /> Other
        </label>
    </div>
    <%
        String jsonData;
        jsonData = "{ 'chart': { 'caption': 'Market Share of Web Servers', 'plottooltext': '<b>$percentValue</b> of web servers run on $label servers', 'showLegend': '0', 'enableMultiSlicing': '0', 'showPercentValues': '1', 'legendPosition': 'bottom', 'useDataPlotColorForLabels': '1', 'theme': 'fusion', }, 'data': [{ 'label': 'Apache', 'value': '32647479' }, { 'label': 'Microsoft', 'value': '22100932' }, { 'label': 'Zeus', 'value': '14376' }, { 'label': 'Other', 'value': '18674221' }] }";
        FusionCharts pie_chart = new FusionCharts(
          "pie2d",
            "pie_chart",
            "450", 
            "250",
            "chart",
            "json",
            jsonData                
          );
      
       
        %>
    <%=pie_chart.render()%>
</body>

</html>
```

The above chart has been rendered using the following steps:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within the `<body>`: 

    * Include a `<script>` tag that contains functions for slicing the data plots (in this case, clicking radio buttons acts as the trigger).

    * Create radio buttons for slicing the data plots.

    * Include a `<div>` tag with `id` same as the value of the `renderAt` attribute of the instance of `FusionCharts` (explained in the next step), within which the chart will be rendered. 

    * Include a `<% %>` tag, where:

        * Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

        * Create a new instance named `pie_chart` of the `FusionCharts` constructor, and pass the values of its arguments:

            * Set the chart `type` as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

            * Set the `id` as `pie_chart`.

            * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

            * Set the `renderAt` as `chart`.

            * Set the `dataFormat` as `json`.

            * Set the `dataSource` to `jsonData` which has been declared and defined above.

    * Include a `<%= %>` tag that contains `pie_chart.render()`.
