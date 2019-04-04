---
title: Create a Chart Using PHP in FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the php wrapper.
heading: Create a Chart Using PHP in FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **PHP** wrapper for FusionCharts. The `FusionCharts server-side PHP` wrapper lets you easily add rich and interactive charts to any PHP project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a chart using the `FusionCharts server-side PHP` wrapper.

## Installation

Install FusionCharts and the **PHP** wrapper component using any of the following methods:

> The **FusionCharts PHP server-side wrapper** requires **PHP 5.6** or higher.

* Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

* Copy and paste the `fusioncharts.php` file from `integrations > php > fusioncharts-wrapper` in your project folder.

* Include the FusionCharts theme file to apply the style to the charts.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

That completes the installation of FusionCharts Suite and the PHP wrapper.

## Create Your First Chart

Let's create a Column 2D chart using the `php-fusioncharts` wrapper showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

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

1. Include the **FusionCharts PHP wrapper** in your project.

2. Include the `fusioncharts` library.

3. Include the FusionCharts theme file to apply the style to the charts.

4. Store the chart configurations in an associative array.

5. Store the data in a multidimensional array.

6. Create an associative array with `label` and `values` derived from the `data` array.

7. Create a data object within the chart configurations to assign the associative data array to it.

8. Convert the final chart configuration to JSON string.

9. Create the chart instance and set the following:

    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

    * Set the chart `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the chart.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

10. Finally, create a container using `<div>` to render the chart.

The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
&lt;?php

   /\* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.\*/
   include("includes/fusioncharts.php");
?&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;FusionCharts | My First Chart&lt;/title&gt;

    // Include FusionCharts core file
    &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

    // Include FusionCharts Theme File
    &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;

&lt;body&gt;
    &lt;?php
    // Chart Configuration stored in Associative Array
    $arrChartConfig = array(
        "chart" =&gt; array(
            "caption" =&gt; "Countries With Most Oil Reserves [2017-18]",
            "subCaption" =&gt; "In MMbbl = One Million barrels",
            "xAxisName" =&gt; "Country",
            "yAxisName" =&gt; "Reserves (MMbbl)",
            "numberSuffix" =&gt; "K",
            "theme" =&gt; "fusion"
        )
    );
    // An array of hash objects which stores data
    $arrChartData = array(
        ["Venezuela", "290"],
        ["Saudi", "260"],
        ["Canada", "180"],
        ["Iran", "140"],
        ["Russia", "115"],
        ["UAE", "100"],
        ["US", "30"],
        ["China", "30"]
    );

    $arrLabelValueData = array();

    // Pushing labels and values
    for($i = 0; $i &lt; count($arrChartData); $i++) {
        array_push($arrLabelValueData, array(
            "label" =&gt; $arrChartData[$i][0], "value" =&gt; $arrChartData[$i][1]
        ));
    }

    $arrChartConfig["data"] = $arrLabelValueData;

    // JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
    $jsonEncodedData = json_encode($arrChartConfig);

    // chart object
    $Chart = new FusionCharts("column2d", "MyFirstChart" , "700", "400", "chart-container", "json", $jsonEncodedData);

    // Render the chart
    $Chart-&gt;render();
    ?&gt;

    &lt;center&gt;
        &lt;div id="chart-container"&gt;Chart will render here!&lt;/div&gt;
    &lt;/center&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
&lt;?php

   /\* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.\*/
   include("includes/fusioncharts.php");
?&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;FusionCharts | My First Chart&lt;/title&gt;

    // Include the FusionCharts core file
    &lt;script src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

    // Include the FusionCharts Theme file
    &lt;script src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;?php
    $arrChartConfig = array(
        "chart" =&gt; array(
            "caption" =&gt; "Countries With Most Oil Reserves [2017-18]",
            "subCaption" =&gt; "In MMbbl = One Million barrels",
            "xAxisName" =&gt; "Country",
            "yAxisName" =&gt; "Reserves (MMbbl)",
            "numberSuffix" =&gt; "K",
            "theme" =&gt; "fusion"
        )
    );
    // An array of hash objects which stores data
    $arrChartData = array(
        ["Venezuela", "290"],
        ["Saudi", "260"],
        ["Canada", "180"],
        ["Iran", "140"],
        ["Russia", "115"],
        ["UAE", "100"],
        ["US", "30"],
        ["China", "30"]
    );

    $arrLabelValueData = array();

    // Pushing labels and values
    for($i = 0; $i &lt; count($arrChartData); $i++) {
        array_push($arrLabelValueData, array(
            "label" =&gt; $arrChartData[$i][0], "value" =&gt; $arrChartData[$i][1]
        ));
    }

    $arrChartConfig["data"] = $arrLabelValueData;

    // JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
    $jsonEncodedData = json_encode($arrChartConfig);

    // chart object
    $Chart = new FusionCharts("column2d", "MyFirstChart" , "700", "400", "chart-container", "json", $jsonEncodedData);

    // Render the chart
    $Chart-&gt;render();
    ?&gt;

    &lt;center&gt;
        &lt;div id="chart-container"&gt;Chart will render here!&lt;/div&gt;
    &lt;/center&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first chart using the **FusionCharts PHP** wrapper is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
