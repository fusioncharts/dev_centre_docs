---
title: Create a Chart Using Java | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the FusionCharts JSP wrapper.
heading: Create a Chart in Java
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side Java (**JSP**) wrapper for FusionCharts. The `FusionCharts server-side JSP` wrapper lets you easily add rich and interactive charts to any JSP project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a chart using the `FusionCharts server-side JSP` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts JSP` wrapper and all the other dependencies on your system.

> The **FusionCharts JSP wrapper** requires **JAVA 6** or higher.

* Copy and paste the `fusioncharts.java` file from `integrations > java > fusioncharts-wrapper` in your project folder.

* Include the FusionCharts JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

* Include the FusionCharts theme file to apply the style to the charts.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-java">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-java">
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

That completes the installation of FusionCharts and the `jsp-fusioncharts` component.

## Create Your First Chart

Let's create a Column 2D chart using the `jsp-fusioncharts` wrapper showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

{% embed_chart getting-started-your-first-chart.js %}

To understand the chart components, click [here](/understanding-fusioncharts).

## Chart data

The data to render the above chart is shown in the table below:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
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

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example,  [single-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts.

In the above JSON data:

- Create the `chart` object to define the elements of the chart.

- Set the `caption` and `subcaption` of the chart.

- Set the value of `xAxisName` attribute to **Country**(first column of the table).

- Set the value of `yAxisName` attribute to **Reserves**(second column of the table).

- In the `data` array, create objects for each row and specify the `label` attribute to represent the Country. For example, **Venezuela**.
  
- Similarly, specify the `value` attribute to set the value of Oil Reserves in respective countries. For example, **290K** for **Venezuela**.

- Set the `numberSuffix` attribute to set the unit of the values.

- Set the `theme` attribute to apply the predefines themes to the chart.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Chart

To render the chart, follow the steps below:

1. Include the c**FusionCharts JSP wrapper** in your project.

2. Include the `fusioncharts` library.

3. Include the FusionCharts theme file to apply the style to the charts.

4. Store label-value pairs in an object.

5. Set the JSON data as the data source for the chart.

6. Store the chart configurations in an object.

7. Convert the final chart configuration to JSON string.

8. Create the chart instance and set the following:

    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias[ here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

    * Set the chart `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the chart.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

9. Finally, use a container to render the chart.

The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-java">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%&gt;
&lt;%@page import="java.util.*" %&gt;
&lt;%@page import="fusioncharts.FusionCharts" %&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
    &lt;title&gt;FusionCharts | My First Chart&lt;/title&gt;

    // Include FusionCharts core file
    &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

    // Include FusionCharts Theme File
    &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
&lt;body&gt;
        &lt;div id="chart"&gt;&lt;/div&gt;
        &lt;%
            // store chart config name-config value pair
            Map&lt;String, String&gt; chartConfig = new HashMap&lt;String, String&gt;();
            chartConfig.put("caption", "Countries With Most Oil Reserves [2017-18]");
            chartConfig.put("subCaption", "In MMbbl = One Million barrels");
            chartConfig.put("xAxisName", "Country");
            chartConfig.put("yAxisName", "Reserves (MMbbl)");
            chartConfig.put("numberSuffix", "k");
            chartConfig.put("theme", "fusion");

            //store label-value pair
            Map&lt;String, Integer&gt; dataValuePair = new HashMap&lt;String, Integer&gt;();
            dataValuePair.put("Venezuela", 290);
            dataValuePair.put("Saudi", 260);
            dataValuePair.put("Canada", 180);
            dataValuePair.put("Iran", 140);
            dataValuePair.put("Russia", 115);
            dataValuePair.put("UAE", 100);
            dataValuePair.put("US", 30);
            dataValuePair.put("China", 30);

            StringBuilder jsonData = new StringBuilder();
            StringBuilder data = new StringBuilder();

            // json data to use as chart data source
            jsonData.append("{'chart':{");
            for(Map.Entry conf:chartConfig.entrySet())
            {
                jsonData.append("'" + conf.getKey()+"':'"+conf.getValue() + "',");
            }

            jsonData.replace(jsonData.length() - 1, jsonData.length() ,"},");

            // build  data object from label-value pair
            data.append("'data':[");

            for(Map.Entry pair:dataValuePair.entrySet())
            {
                data.append("{'label':'" + pair.getKey() + "','value':'" + pair.getValue() +"'},");
            }
            data.replace(data.length() - 1, data.length(),"]");

            jsonData.append(data.toString());
            jsonData.append("}");


            // Create chart instance
            // charttype, chartID, width, height,containerid, data format, data
            FusionCharts firstChart = new FusionCharts(
                "column2d", 
                "first_chart", 
                "700",
                "400", 
                "chart",
                "json", 
                jsonData.toString()
            );
        %&gt;
        &lt;%= firstChart.render() %&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-java">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%&gt;
&lt;%@page import="java.util.*" %&gt;
&lt;%@page import="fusioncharts.FusionCharts" %&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
        &lt;title&gt;Insert title here&lt;/title&gt;
        &lt;script src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="chart"&gt;&lt;/div&gt;
        &lt;%
            // store chart config name-config value pair
            Map&lt;String, String&gt; chartConfig = new HashMap&lt;String, String&gt;();
            chartConfig.put("caption", "Countries With Most Oil Reserves [2017-18]");
            chartConfig.put("subCaption", "In MMbbl = One Million barrels");
            chartConfig.put("xAxisName", "Country");
            chartConfig.put("yAxisName", "Reserves (MMbbl)");
            chartConfig.put("numberSuffix", "k");
            chartConfig.put("theme", "fusion");

            //store label-value pair
            Map&lt;String, Integer&gt; dataValuePair = new HashMap&lt;String, Integer&gt;();
            dataValuePair.put("Venezuela", 290);
            dataValuePair.put("Saudi", 260);
            dataValuePair.put("Canada", 180);
            dataValuePair.put("Iran", 140);
            dataValuePair.put("Russia", 115);
            dataValuePair.put("UAE", 100);
            dataValuePair.put("US", 30);
            dataValuePair.put("China", 30);

            StringBuilder jsonData = new StringBuilder();
            StringBuilder data = new StringBuilder();

            // json data to use as chart data source
            jsonData.append("{'chart':{");
            for(Map.Entry conf:chartConfig.entrySet())
            {
                jsonData.append("'" + conf.getKey()+"':'"+conf.getValue() + "',");
            }

            jsonData.replace(jsonData.length() - 1, jsonData.length() ,"},");

            // build  data object from label-value pair
            data.append("'data':[");

            for(Map.Entry pair:dataValuePair.entrySet())
            {
                data.append("{'label':'" + pair.getKey() + "','value':'" + pair.getValue() +"'},");
            }
            data.replace(data.length() - 1, data.length(),"]");

            jsonData.append(data.toString());
            jsonData.append("}");


            // Create chart instance
            // charttype, chartID, width, height,containerid, data format, data
            FusionCharts firstChart = new FusionCharts(
                "column2d", 
                "first_chart", 
                "700",
                "400", 
                "chart",
                "json", 
                jsonData.toString()
            );
        %&gt;
        &lt;%= firstChart.render() %&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first chart using the FusionCharts JSP wrapper is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if fusioncharts.js was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.

