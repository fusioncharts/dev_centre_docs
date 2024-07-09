---
title: Dynamically Add Chart Event Listener using Java | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using Java.
heading: Dynamically Add Chart Event Listener using Java
---

## The full code for the above chart is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on — using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when: 

* A chart renders successfully

* Data completes loading

* A data plot is clicked

* The mouse pointer is hovered over a data plot, etc.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using FusionCharts JSP wrapper. A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

The full code for the above chart is shown below:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <title>FusionCharts</title>
    <style>
        input[type=radio], input[type=checkbox] {
                display:none;
        }
        input[type=radio] + label, input[type=checkbox] + label {
            display:inline-block;
            margin:-2px;
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
        input[type=radio]:checked + label, input[type=checkbox]:checked + label{
            background-image: none;
            outline: 0;
            -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
            -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
                background-color:#e0e0e0;
        }
    </style>
</head>
<body style="font-family: Helvetica Neue, Arial; font-size: 16px;">
    <script>
        track = function(){
            FusionCharts.addEventListener("dataplotclick", clickHandler);
            document.getElementById("message").innerHTML = "Click on the plot to see the value along with the label";
        };
        clickHandler = function(e){
            document.getElementById("message").innerHTML = "You have clicked on plot <b>"+  e.data.categoryLabel + "</b> whose value is <b>" + e.data.displayValue + "</b>";
        };
        reset = function(){
            FusionCharts.removeEventListener("dataplotclick", clickHandler);
            document.getElementById("message").innerHTML = "Click the below buttons to add an event dynamically to the chart";
        }
    </script>
    <div align="center" id ="chart"></div>
    <div>
        <p align="center" id="message"></p>
    </div>
    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
        <input type="radio" id="radio1" name="radios" onClick="track()">
        <label for="radio1">ADD/LISTEN TO DATAPLOTCLICK EVENT</label>
        <input type="radio" id="radio2" name="radios" value="false" onClick="reset()">
        <label for="radio2">REMOVE DATAPLOTCLICK EVENT</label>
    </div>
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
      
        column_chart.addEvent("track", "track");
        column_chart.addEvent("clickHandler", "clickHandler");
        column_chart.addEvent("reset", "reset")
      
        %>
        <%=column_chart.render()%>
</body>
</html>

```

Apart from the usual boilerplate, the sample code provided above corresponds to the following tasks:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within a `<style>` tag, define some inline CSS at the page level to make things look good.

4. Within the `<body>`: 

    * Include a `<script>` tag that contains functions like `track()`, `clickHandler()`, and `reset()`.

    * Include `<input>` tags for updating tracking the click status, handling the click, and resetting to the default. The `onClick` events of these inputs should be associated with their respective functions defined in the above step.

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

> Refer to [Column 2D chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
