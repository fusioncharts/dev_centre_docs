---
title: Adding Special Characters | FusionCharts
description: This article outlines the steps to be executed for adding special characters to the data values of your chart.
heading: Adding Special Characters
---

## A chart configured to customize the prefix of the numbers on the chart is shown below:

FusionCharts offers multiple options to format numbers on the chart. You can configure number prefixes and suffixes, decimal places, and scale numbers based on a predefined scale. This article focuses on how you customize the prefix and suffix of the numbers on the chart using **FusionCharts JSP wrapper**.

To customize the prefix and suffix of the numbers on the chart, use the following attributes:

* Specify the prefix for all the values on the chart using the `numberPrefix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberPrefix` and `xNumberPrefix` attributes.

* Specify the prefix for all the Y-axis values on the chart using the `yNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the prefix for all the X-axis values on the chart using the `xNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the suffix for all the values on the chart using the `numberSuffix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberSuffix` and `xNumberSuffix` attributes.

* Specify the suffix for all the Y-axis values on the chart using the `yNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

* Specify the suffix for all the X-axis values on the chart using the `xNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

A chart configured to customize the prefix of the numbers on the chart is shown below:

{% embed_chartData adding-special-character-example-1.js json %}

The full code for the above chart is shown below:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.util.*" %>
<%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>FusionCharts | Use of Special Character</title>
    <link href="../Styles/ChartSampleStyleSheet.css" rel="stylesheet" />
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>

<body>
    <h3>Use of Special Character</h3>
    <div id="chartContainer"></div>
    <%
            String jsonData;
            jsonData = "{"chart":{"caption":"Monthly revenue for last year","subCaption":"Harry's SuperMart","xAxisName":"Month","yAxisName":"Revenues (In USD)","numberPrefix":"$","theme":"fusion"},"data":[{"label":"Jan","value":"420000"},{"label":"Feb","value":"810000"},{"label":"Mar","value":"720000"},{"label":"April","value":"550000"},{"label":"May","value":"910000"},{"label":"Jun","value":"510000"},{"label":"Jul","value":"680000"},{"label":"Aug","value":"620000"},{"label":"Sep","value":"610000"},{"label":"Oct","value":"490000"},{"label":"Nov","value":"900000"},{"label":"Dev","value":"730000"}]}";
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
    <%=column2d.render()%>
</body>

</html>
```

Apart from the usual boilerplate, the sample code provided above corresponds to the following tasks:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within the `<body>`: 

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

            * In the `dataSource` object, add `numberPrefix` attribute in `chart` object. Set the `numberPrefix` to `$`.

    * Include a `<%= %>` tag that contains `column_chart.render()`.
