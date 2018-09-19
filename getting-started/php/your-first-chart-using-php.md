---
title: Your First Chart in PHP using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the php wrapper.
heading: Create a Chart Using PHP in FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **PHP** wrapper for FusionCharts. The `FusionCharts server-side PHP` wrapper lets you easily add rich and interactive charts to any PHP project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a chart using the `FusionCharts server-side PHP` wrapper.

## Installation

Install FusionCharts and the **PHP** wrapper component using any of the following methods:

> The **FusionCharts PHP server-side wrapper** requires **PHP 5** or higher.

* Include the **FusionCharts PHP wrapper** in your project.

* Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).

* Include the FusionCharts theme file to apply the style to the charts.

```

<?php
    /* Include the `fusioncharts.php` file that contains functions to embed the charts. */
    include("path/to/local/fusioncharts.php");
?>

<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>

<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>

```

That completes the installation of FusionCharts Suite and the PHP wrapper.

## Create Your First Chart

Let's create a Column 2D chart using the `php-fusioncharts` wrapper showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

{% embed_chart getting-started-your-first-chart.js %}

The data for the above chart is shown in the table below:

Country|No. of Oil Reserves||
-|-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

## Convert Tabular Data into JSON Format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format, as shown below:

```
{
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
}

```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example, [single-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[ multi-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts)charts.

In the above JSON data:

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the data array.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the Chart

To render the chart, follow the steps below:

* Include the **FusionCharts PHP wrapper** in your project.

* Include the `fusioncharts` library.

* Include the FusionCharts theme file to apply the style to the charts.

* Store the chart configurations in an associative array.

* Store the data in a multidimensional array.

* Create an associative array with `label` and `values` derived from the `data` array.

* Create a data object within the chart configurations to assign the associative data array to it.

* Convert the final chart configuration to JSON string.

* Create the chart instance and set the following:

    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias[ here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

    * Set the chart `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the chart.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

* Finally, create a container using `<div>` to render the chart.

The consolidated code is shown below:

```
<?php

   /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
   include("includes/fusioncharts.php");
?>
<html>

<head>
    <title>FusionCharts | My First Chart</title>
    <script src="path/to/local/fusioncharts.js"></script>
    <script src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>

<body>
    <?php
    $arrChartConfig = array(
        "chart" => array(
            "caption" => "Countries With Most Oil Reserves [2017-18]",
            "subCaption" => "In MMbbl = One Million barrels",
            "xAxisName" => "Country",
            "yAxisName" => "Reserves (MMbbl)",
            "numberSuffix" => "K",
            "theme" => "fusion"
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
    for($i = 0; $i < count($arrChartData); $i++) {
        array_push($arrLabelValueData, array(
            "label" => $arrChartData[$i][0], "value" => $arrChartData[$i][1]
        ));
    }

    $arrChartConfig["data"] = $arrLabelValueData;

    // JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
    $jsonEncodedData = json_encode($arrChartConfig);

    // chart object
    $Chart = new FusionCharts("column2d", "MyFirstChart" , "700", "400", "chart-container", "json", $jsonEncodedData);

    // Render the chart
    $Chart->render();
    ?>

    <center>
        <div id="chart-container">Chart will render here!</div>
    </center>
</body>

</html>

```

That's it! Your first chart using the **FusionCharts PHP** wrapper is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.