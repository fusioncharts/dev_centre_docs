---
permalink: using-with-server-side-languages/java/introduction.html
title: Introduction to the FusionCharts JSP Wrapper | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts JSP wrapper that lets you create interactive, data-driven charts without writing any JavaScript code.
heading: Introduction to the FusionCharts JSP Wrapper
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts JSP Wrapper can be downloaded from <a href="http://www.fusioncharts.com/jsp-charts/" target="_blank">here</a>.</p>

FusionCharts Suite XT includes the FusionCharts JSP wrapper that lets you create interactive, data-driven charts without writing any JavaScript code.

JavaScript and HTML code is used to generate charts in the browsers. The server-side JSP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts on a browser page.

In this section, you will be shown how you can create a simple chart using the FusionCharts server-side JSP wrapper.

We will create a simple column 2D chart that plots the monthly revenue for the last year at Harry’s SuperMart. The data for the chart is shown in the table below:

<table>
  <tr>
    <th>Month</th>
    <th>Revenue (In USD)</th>
  </tr>
  <tr>
    <td>Jan</td>
    <td>420000</td>
  </tr>
  <tr>
    <td>Feb</td>
    <td>810000</td>
  </tr>
  <tr>
    <td>Mar</td>
    <td>720000</td>
  </tr>
  <tr>
    <td>Apr</td>
    <td>550000</td>
  </tr>
  <tr>
    <td>May</td>
    <td>910000</td>
  </tr>
  <tr>
    <td>Jun</td>
    <td>510000</td>
  </tr>
  <tr>
    <td>Jul</td>
    <td>680000</td>
  </tr>
  <tr>
    <td>Aug</td>
    <td>620000</td>
  </tr>
  <tr>
    <td>Sep</td>
    <td>610000</td>
  </tr>
  <tr>
    <td>Oct</td>
    <td>490000</td>
  </tr>
  <tr>
    <td>Nov</td>
    <td>900000</td>
  </tr>
  <tr>
    <td>Dec</td>
    <td>730000</td>
  </tr>
</table>


The rendered column 2D chart will look like this:

{% embed_chart using-with-server-side-languages-java-introduction-example-1.js %}

The data structure to render this chart is explained below:

### Step 1:

Include the `fusioncharts.js` file, as shown in the code snippet below. 

```java

<%@page contentType="text/html" pageEncoding="UTF-8"%>
  <!DOCTYPE html>
  <html>
      <head>
         <title>Loading Data from a Static JSON String - fusioncharts.com</title>
         <script src="fusioncharts.js"></script>
      </head>
      <body>
          <div id="chart-container"></div>

```

This file is needed to render the chart. Ensure that the path to this JS file is correct. Otherwise, it may lead to JavaScript errors. Download FusionCharts from <a href="http://www.fusioncharts.com/download/" target="_blank">here</a>.

### Step 2: 

Include the `FusionCharts.java` file as a package in your project.

### Step 3: 

Include the package in the file where you want to show FusionCharts.

```java

  <%@page import="fusioncharts.FusionCharts" %>

```

### Step 4: 

Create a chart object using the FusionCharts JAVA class constructor. 
Syntax for the constructor: 

`FusionCharts("type of chart", "unique chart id", "width of chart", "height of chart", "div id to render the chart", "data format", "data source")`

<textarea style="display:none;" class='java-only'>
  <%
    FusionCharts columnChart= new FusionCharts(
    "column2d",// chartType
      "chart1",// chartId
    "600","400",// chartWidth, chartHeight
    "chart-container",// chartContainer
    "json",// dataFormat
    "{\"chart\": {  \"caption\": \"Monthly revenue for last year\",\"subCaption\": \"Harry’s SuperMart\",\"xAxisName\": \"Month\",\"yAxisName\": \"Revenues (In USD)\",\"numberPrefix\": \"$\",\"theme\": \"zune\"},\"data\": [{\"label\": \"Jan\",\"value\": \"420000\"}, {\"label\": \"Feb\",\"value\": \"810000\"}, {\"label\": \"Mar\",\"value\": \"720000\"}, {\"label\": \"Apr\",\"value\": \"550000\"}, {\"label\": \"May\",\"value\": \"910000\"}, {\"label\": \"Jun\",\"value\": \"510000\"}, {\"label\": \"Jul\",\"value\": \"680000\"}, {\"label\": \"Aug\",\"value\": \"620000\"}, {\"label\": \"Sep\",\"value\": \"610000\"}, {\"label\": \"Oct\",\"value\": \"490000\"}, {\"label\": \"Nov\",\"value\": \"900000\"}, {\"label\": \"Dec\",\"value\": \"730000\"}]}");
  %>
</textarea>

```java

<%
    FusionCharts column2dChart = new FusionCharts(
      // type of chart
      "column2D",	    
      // unique chart ID
      "myFirstChart",
      // width and height of the chart	
      "500","300",	
      // div ID of the chart container
      "chart-container",
      // data format		
      "json",	
      // data source		
      "{              
      	\"chart\": {  
      		\"caption\": \"Monthly revenue for last year\",  
      		\"subCaption\": \"Harry's SuperMart\", 
      		\"xAxisName\": \"Month\",  
      		\"yAxisName\": \"Revenues (In USD)\",    
      		\"numberPrefix\": \"$\",   
      		\"theme\": \"zune\" 
      	},                                   
      	\"data\": [{    
      		\"label\": \"Jan\",
          \"value\": \"420000\"
      }, {
          \"label\": \"Feb\",
          \"value\": \"810000\"
      }, {
          \"label\": \"Mar\",
          \"value\": \"720000\"
      }, {
          \"label\": \"Apr\",
          \"value\": \"550000\"
      }, {
          \"label\": \"May\",
          \"value\": \"910000\"
      }, {
          \"label\": \"Jun\",
          \"value\": \"510000\"
      }, {
          \"label\": \"Jul\",
          \"value\": \"680000\"
      }, {
          \"label\": \"Aug\",
          \"value\": \"620000\"
      }, {
          \"label\": \"Sep\",
          \"value\": \"610000\"
      }, {
          \"label\": \"Oct\",
          \"value\": \"490000\"
      }, {
          \"label\": \"Nov\",
          \"value\": \"900000\"
      }, {
          \"label\": \"Dec\",
          \"value\": \"730000\"   
      	}]  
      }"
  );
        
%>

```

<p class="text-info"> __Note:__ Instead of coping the code from the code viewer, use __copy to clipboard__ button to copy the code. The reason we suggest this because in a code viewer, break lines(which is a complete  string line) has been used to display the proper method to set the chart cosmetics and how the datasource can be passed as a parameter.</p>


### Step 5:

Render the chart.

```java

		<%=column2dChart.render()%>
    </body>
</html>

```

### Final template

The full HTML code for the example looks as under:

```java
<%@page contentType="text/html" pageEncoding="UTF-8"%>
  <!DOCTYPE html>
  <html>
    <head>
        <title>Loading Data from a Static JSON String - fusioncharts.com</title>
        <script src="fusioncharts.js"></script>
    </head>
    <body>
        <div id="chart"></div>
        <%@page import="fusioncharts.FusionCharts" %>
        <%
        FusionCharts columnChart= new FusionCharts(
          // chartType
          "column2d",
          // chartId
          "chart1",
          // chartWidth, chartHeight
          "600","400",
          // chartContainer
          "chart",
          // dataFormat
          "json",
          "{\"chart\": {  \"caption\": \"Monthly revenue for last year\",\"subCaption\": \"Harry’s SuperMart\",\"xAxisName\": \"Month\",\"yAxisName\": \"Revenues (In USD)\",\"numberPrefix\": \"$\",\"theme\": \"zune\"},\"data\": [{\"label\": \"Jan\",\"value\": \"420000\"}, {\"label\": \"Feb\",\"value\": \"810000\"}, {\"label\": \"Mar\",\"value\": \"720000\"}, {\"label\": \"Apr\",\"value\": \"550000\"}, {\"label\": \"May\",\"value\": \"910000\"}, {\"label\": \"Jun\",\"value\": \"510000\"}, {\"label\": \"Jul\",\"value\": \"680000\"}, {\"label\": \"Aug\",\"value\": \"620000\"}, {\"label\": \"Sep\",\"value\": \"610000\"}, {\"label\": \"Oct\",\"value\": \"490000\"}, {\"label\": \"Nov\",\"value\": \"900000\"}, {\"label\": \"Dec\",\"value\": \"730000\"}]}");
        %>
        <%=column2dChart.render()%>
    </body>
  </html>
```