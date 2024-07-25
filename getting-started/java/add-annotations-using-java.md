---
title: Add Annotations | FusionCharts
description: Add Annotations using Java effortlessly with FusionCharts. Enhance your application's data visualization capabilities and performance. Find more info here.
heading: Add Annotations
---

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative while making it visually appealing.

In this article, we'll create a **Spline** chart and add annotations to highlight a particular anchor along with text using the FusionCharts JSP wrapper. A sample chart is shown below:

{% embed_chartData configure-charts-using-react-example-3.js json %}

The full code for the above sample is given below:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>FusionCharts | Using Annotations On Chart</title>
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>
<body style="font-family: Helvetica Neue, Arial; font-size: 16px;">
<h3>Using Annotations On Chart</h3>
<div id="chart"></div>
<div><span><a href="../Index.jsp">Go Back</a></span></div>
<%
        String jsonData;
        jsonData = "{"chart":{"caption":"Average Monthly Temperature in Texas","yAxisName":"Average Monthly Temperature","anchorradius":"5","plotToolText":"Average temperature in $label is <b>$dataValue<\/b>","showHoverEffect":"1","showvalues":"0","numberSuffix":"°C","theme":"fusion","anchorBgColor":"#72D7B2","paletteColors":"#72D7B2"},"annotations":{"groups":[{"id":"anchor-highlight","items":[{"id":"high-star","type":"circle","x":"$dataset.0.set.7.x","y":"$dataset.0.set.7.y","radius":"12","color":"#cc0000","border":"2","borderColor":"#0075c2"},{"id":"label","type":"text","text":"Hottest Month","fillcolor":"#0075c2","rotate":"90","x":"$dataset.0.set.7.x+75","y":"$dataset.0.set.7.y-2"}]}]},"data":[{"label":"Jan","value":"1"},{"label":"Feb","value":"5"},{"label":"Mar","value":"10"},{"label":"Apr","value":"12"},{"label":"May","value":"14"},{"label":"Jun","value":"16"},{"label":"Jul","value":"20"},{"label":"Aug","value":"22"},{"label":"Sep","value":"20"},{"label":"Oct","value":"16"},{"label":"Nov","value":"7"},{"label":"Dec","value":"2"}]}";
        FusionCharts spline_chart = new FusionCharts(
              "spline",
              "spline_chart",
              "700", 
              "400",
              "chart",
              "json",
              jsonData                    
                );
      %>
 
        <%=spline_chart.render()%>
</body>
</html>

```

## The sample code provided above corresponds to the following tasks:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within the `<body>`: 

    * Include a `<div>` tag with `id` same as the value of the `renderAt` attribute of the instance of `FusionCharts` (explained in the next step), within which the chart will be rendered. 

    * Include a `<% %>` tag, where:

        * Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

        * Create a new instance named `spline_chart` of the `FusionCharts` constructor, and pass the values of its arguments:

            * Set the chart `type` as `spline`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

            * Set the `id` as `spline_chart`.

            * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

            * Set the `renderAt` as `chart`.

            * Set the `dataFormat` as `json`.

            * Set the `dataSource` to `jsonData` which has been declared and defined above.

    * Include a `<%= %>` tag that contains `spline_chart.render()`.

> Refer to [Spline chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/spline-charts) for more information on the configuration and data for this chart type.
