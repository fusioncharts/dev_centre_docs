---
title: Setting Data Source Using URL | FusionCharts
description: Set data sources using URLs in Java effortlessly with FusionCharts. Enhance application's data visualization capabilities and performance. Find more info here.
heading: Setting Data Source Using URL
---

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the `dataSource` attribute. Alternatively, you can also save the chart data in a `.json` or `.xml` file and then pass the relative URL of this file as value to the `dataSource` attribute. 

The only difference between the two methods is the value that is passed to the `dataFormat` attribute. For the first method, the `dataFormat` attribute takes `json` or `xml` as values, depending on the chart data. For the second method, the values will be `jsonurl` and `xmlurl`.

This article explains how you can set the chart data using the URL of the corresponding file using **FusionCharts JSP wrapper**.

## Load data using JSON as URL

Let's build the same revenue chart which we built in the [first example](/getting-started/react/your-first-chart-using-react) using JSON, and use a .json file as the data source.

{% embed_chartData plain-js-setting-data-using-url-example-1.js json %}

The data for this chart is represented in the table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

The JSON representation for the above table looks as shown below:

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
}
```

Copy this into a file, name it `oilReserves.json`, and store it in the same folder as your page.

> If you are using multilingual characters in your JSON, make sure that you save the JSON data with UTF-8 encoding.

The full code of the above sample is given below:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.util.*" %>
<%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>FusionCharts | Chart using data from JSON URL</title>
<link href="../Styles/ChartSampleStyleSheet.css" rel="stylesheet" />
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

</head>

<body>
    <h3>Chart using data from JSON URL</h3>
    <div><span><a href="../Index.jsp">Go Back</a></span></div>
    <div id="column_chart"></div>
    <%
        String jsonDataUrl;
        jsonDataUrl = "../oilReserves.json";
        
        FusionCharts column_chart = new FusionCharts(
                  "column2d",
                  "column",
                  "700", 
                  "400",
                  "column_chart",
                  "jsonurl",
                 jsonDataUrl                  
                );
        %>

    <%=column_chart.render()%>
</body>

</html>
```

The above chart has been rendered using the following steps:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`, and **all the other theme files**. 

3. Store the chart data in the JSON file.

4. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

5. To set the datasource using URL:
    * Set the value of the `dataFormat` to **jsonurl**.
    * Set the static URL to `dataSource` to render the above chart.

6. Include a `<%= %>` tag that contains `column_chart.render()`.

> When rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive. This is due to security restrictions enforced by most modern browsers.

## Load data using XML as URL

The XML representation for the above chart looks as shown below:

```
<chart caption='Countries With Most Oil Reserves [2017-18] ' subcaption='In MMbbl = One Million barrels ' xaxisname='Country ' yaxisname='Reserves (MMbbl) ' numberprefix='K ' theme='fusion '>
    <set label='Venezuela ' value='290 ' />
    <set label='Saudi ' value='260 ' />
    <set label='Canada ' value='180 ' />
    <set label='Iran ' value='140 ' />
    <set label='Russia ' value='115 ' />
    <set label='UAE ' value='100 ' />
    <set label='US ' value='30 ' />
    <set label='China ' value='30 ' />
</chart>
```
Copy this into a file called `oilReserves.xml` and store it in the same folder as your HTML page.

> If you are using multilingual characters in your XML, make sure you save the XML data with UTF-8 encoding.

The full code of the above sample is:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.util.*" %>
<%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>FusionCharts | Chart using data from XML URL</title>
<link href="../Styles/ChartSampleStyleSheet.css" rel="stylesheet" />
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

</head>

<body>
    <h3>Chart using data from XML URL</h3>
    <div id="column_chart"></div>
    <div><span><a href="../Index.jsp">Go Back</a></span></div>
    <%
        String xmlDataUrl;
        xmlDataUrl = "../oilReserves.xml";
        
        FusionCharts column_chart = new FusionCharts(
                  "column2d",
                  "column",
                  "700", 
                  "400",
                  "column_chart",
                  "xmlurl",
                 xmlDataUrl                   
                );
        %>

    <%=column_chart.render()%>
</body>

</html>
```

The above chart has been rendered using the following steps:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`, and **all the other theme files**. 

3. Store the chart data in the XML file.

4. Store the chart configuration in a XML object. In the XML object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as XML.
    * Embed the xml data as the value of `dataSource`.

5. To set the datasource using URL:
    * Set the value of the `dataFormat` to **xmlurl**.
    * Set the static URL to `dataSource` to render the above chart.

6. Include a `<%= %>` tag that contains `column_chart.render()`.
