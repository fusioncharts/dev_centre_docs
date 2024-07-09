---
title: Lifecycle Events using Java | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using Java.
heading: Lifecycle Events using Java
---

## The full code of the sample is given below:

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart using **FusionCharts JSP wrapper**.

A chart is shown below:

{% embed_chartData lifecycle-event-server-side-example-1.js json %}

The full code of the above sample is given below:

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
    <title>FusionCharts | sample to showcase one product life cycle event attachment</title>
</head>

<body>
    <script>
        function onDataLoaded() {
            document.getElementById("dataLoaded").innerHTML = "Chart Data is Loaded Succesfully";

        }
    </script>
    <div id="chart"></div>
    <div>
        <p id="dataLoaded"></p>
    </div>
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
      
        column_chart.addEvent("dataLoaded", "onDataLoaded");
      
        %>
    <%=column_chart.render()%>
</body>

</html>
```

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within the `<body>`: 

    * Include a `<script>` tag that contains the `dataLoaded` event.

    * Include a `<div>` tag with `id` same as the value of the `renderAt` attribute of the instance of `FusionCharts` (explained in the next step), within which the chart will be rendered. 

    * Include a `<% %>` tag, where:

        * Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

        * Create a new instance named `column_chart` of the `FusionCharts` constructor, and pass the values of its arguments:

            * Set the chart `type` as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

            * Set the `id` as `column_chart`.

            * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

            * Set the `renderAt` as `column2d`.

            * Set the `dataFormat` as `json`.

            * Set the `dataSource` to `jsonData` which has been declared and defined above.

    * Include a `<%= %>` tag that contains `column_chart.render()`.
