---
title: Configuring your Chart using Java | FusionCharts
description: Configuring your Chart using Java effortlessly with FusionCharts. Enhance your application's data visualization capabilities and performance. Find more info.
heading: Configuring your Chart using Java
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and makes data visualization simpler. These features include updating **chart data**, **annotations**, **trend-lines**, and **events**.

This article focuses on how you can configure your charts using FusionCharts JSP wrapper to perform the following:

* [Update Chart Data](/getting-started/java/configure-your-chart-using-java#update-chart-data)

* [Update Chart Attributes](/getting-started/java/configure-your-chart-using-java#update-chart-attributes)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below:

{% embed_chartData update-chart-data-using-php-example-1.js json %}

The full code for the above sample is given below:

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
 <title>FusionCharts | update dial value on runtime</title>
</head>
<body style="font-family: Helvetica Neue, Arial; font-size: 16px;">
   <script>
       updateData = function () {
           var value = document.getElementById("dial-val").value;
           FusionCharts("angular_gauge").setDataForId("dial1",value);
       }
   </script>
   <h3>update dial value on runtime</h3>
   <label for="dial-val">Input dial value</label>
        <input name="dial-val" id="dial-val" type= "number"/><input type ="button" name ="update dial" value ="update dial" onclick ="updateData()" />
        <br />
        <br />
    <div id ="gauge"></div>
    <div>
            <p id="plotclick"></p>
        </div>
        <div><span><a href="../Index.jsp">Go Back</a></span></div>
    <%
        String jsonData;
        jsonData = "{ 'chart': { 'caption': 'Customer Satisfaction Score', 'subcaption': 'Los Angeles Topanga', 'plotToolText': 'Current Score: $value', 'theme': 'fint', 'chartBottomMargin': '50', 'showValue': '1' }, 'colorRange': { 'color': [{ 'minValue': '0', 'maxValue': '45', 'code': '#e44a00' }, { 'minValue': '45', 'maxValue': '75', 'code': '#f8bd19' }, { 'minValue': '75', 'maxValue': '100', 'code': '#6baa01' }] }, 'dials': { 'dial': [{ 'value': '70', 'id': 'dial1' }] } }";
        FusionCharts angulargauge = new FusionCharts(
              "angulargauge",
              "angular_gauge",
              "700", 
              "400",
              "gauge",
              "json",
              jsonData                    
        );   
      
    %>
    <%=angulargauge.render()%>
</body>
</html>

```
The sample code provided above corresponds to the following tasks:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within the `<body>`: 

    * Include a `<script>` tag that contains the `updateData()` function.

    * Include a `<label>` and an `<input>` for the new dial value, and whose `onClick` event executes `updateData()` when triggered.

    * Include a `<div>` tag with `id` same as the value of the `renderAt` attribute of the instance of `FusionCharts` (explained in the next step), within which the chart will be rendered. 

    * Include a `<% %>` tag, where:

        * Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

        * Create a new instance named `angulargauge` of the `FusionCharts` constructor, and pass the values of its arguments:

            * Set the chart `type` as `angulargauge`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

            * Set the `id` as `angular_gauge`.

            * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

            * Set the `renderAt` as `gauge`.

            * Set the `dataFormat` as `json`.

            * Set the `dataSource` to `jsonData` which has been declared and defined above.

    * Include a `<%= %>` tag that contains `angulargauge.render()`.

> Refer to [Angular Gauge](https://www.fusioncharts.com/dev/chart-guide/gauges-and-widgets/angular-gauge) for more information on the configuration and data for this chart type.

## Update Chart Attributes

A chart configured to update the chart **caption**, **sub-caption alignment**, and chart **background** dynamically is shown below.

{% embed_chartData configure-charts-using-react-example-2.js json %}

The full code for the above sample is given below:

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
 <title>FusionCharts | Change chart properties dynamically</title>
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
<body style = "font-family: Helvetica Neue, Arial; font-size: 16px;">
    <script>
        changeBackground = function(){
            FusionCharts("column_chart").setChartAttribute('bgColor', '#efefef');
        };
        changeCaption = function(){
           FusionCharts("column_chart").setChartAttribute('captionAlignment', 'left');
        };
        reset = function(){
            FusionCharts("column_chart").setChartAttribute('captionAlignment', 'center');
            FusionCharts("column_chart").setChartAttribute('bgColor', '#ffffff');
        };
    </script>
   <h3>Change chart properties dynamically</h3>
    <div id ="chart"></div>
   <div>
            <p align="center" id ="message"></p>
        </div>

        <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
            <input type="button" class="button" onClick="changeBackground()" value='Change Chart Background'/>
            <input type="button" class="button" onClick="changeCaption()" value='Make Caption Text Left Aligned'/>
            <input type="button" class="button" onClick="reset()" value='Reset Attributes'/>
        </div> 
        <div><span><a href="../Index.jsp">Go Back</a></span></div>
    <%
        String jsonData;
        jsonData = "{      'chart': {        'caption': 'Countries With Most Oil Reserves [2017-18]',        'subCaption': 'In MMbbl = One Million barrels',        'xAxisName': 'Country',        'yAxisName': 'Reserves (MMbbl)',        'numberSuffix': 'K',        'theme': 'fusion',  },      'data': [{        'label': 'Venezuela',        'value': '290'      }, {        'label': 'Saudi',        'value': '260'      }, {        'label': 'Canada',        'value': '180'      }, {        'label': 'Iran',        'value': '140'      }, {        'label': 'Russia',        'value': '115'      }, {        'label': 'UAE',        'value': '100'      }, {        'label': 'US',        'value': '30'      }, {        'label': 'China',        'value': '30'      }]    }";
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

The sample code provided above corresponds to the following tasks:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within a `<style>` tag, define some inline CSS at the page level to make things look good.

4. Within the `<body>`: 

    * Include a `<script>` tag that contains functions like `updateBackground()`, `changeCaption()`, and `reset()`.

    * Include `<input>` tags for updating chart background, changing caption, and resetting to original attribute values. The `onClick` events of these inputs should be associated with their respective functions defined in the above step.

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
