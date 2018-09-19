---
title: Your First Gauge in PHP using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the php wrapper.
heading: Create a Gauge Using PHP in FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **PHP** wrapper for FusionCharts. The `FusionCharts server-side PHP` wrapper lets you easily add rich and interactive charts to any PHP project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a gauge using the `FusionCharts PHP` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts PHP` wrapper and all the other dependencies on your system.

> The **FusionCharts PHP server-side wrapper** requires **PHP 5** or higher.

To install the FusionCharts Suite, follow the steps below:

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

## **Create your first gauge**

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstorm's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}
The thresholds for the above sample have been defined using the following range.

Range|Color|Hex Code||
-|-|-|-
0-50|Red|#F2726F||
50-75|Yellow|#FFC533||
75-100|Green|#62B58F||

So, any score less than 50 (considered bad) is presented in red. Any score between 50 and 75 (considered average) is presented in yellow. Any score above 75 (considered good) is presented in green.

## Convert Tabular Data into JSON/XML Format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. In this example, we will use the JSON format, as shown below:

```
{
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#F2726F"
            },
            {
                "minValue": "50",
                "maxValue": "75",
                "code": "#FFC533"
            },
            {
                "minValue": "75",
                "maxValue": "100",
                "code": "#62B58F"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": "81"
            }
        ]
    }
}

```

In the above JSON:

* Create the `chart` object to define the elements of the gauge.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

* Specify the hex code of the color within the `color` array.

* Create the `dials` object to represent the customer satisfaction score.

* Create the `dial` object under `dials` object to set the value of the dial in an array.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have converted the tabular data to JSON format, let's learn how to render the gauge.

## Render the Chart

To render the chart, follow the steps below:

* Include the **FusionCharts PHP wrapper** in your project.

* Include the `fusioncharts` library.

* Include the FusionCharts theme file to apply the style to the charts.

* Store the chart configurations in an associative array.

* Store the color range in a multidimensional array.

* Store the value of the `dial` in an array. 

* Create a data object within the chart configurations to assign the associative data array to it.

* Convert the final chart configuration to JSON string.

* Create the chart instance and set the following:

    * Set the chart type as `angulargauge`. Each chart type is represented with a unique chart alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of chart types with their respective alias[ here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

    * Set the gauge `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the gauge.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

* Finally, use a container using `<div>` to render the gauge.

The full code for the above sample is given below:

```

<?php
    /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
    include("includes/fusioncharts.php");
?>
<html>
    <head>
        <title>FusionCharts | My First Widget</title>
        <script src="path/to/local/fusioncharts.js"></script>
        <script src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    </head>
    <body>
<?php
    // Widget appearance configuration
    $arrChartConfig = array(
        "chart" => array(
            "caption" => "Nordstorm's Customer Satisfaction Score for 2017",
            "lowerLimit" => "0",
            "upperLimit" => "100",
            "showValue" => "1",
            "numberSuffix" => "%",
            "theme" => "fusion",
            "showToolTip" => "0"
        )
    );

    // Widget color range data
    $colorDataObj = array("color" => array(
        ["minValue" => "0", "maxValue" => "50", "code" => "#F2726F"],
        ["minValue" => "50", "maxValue" => "75", "code" => "#FFC533"],
        ["minValue" => "75", "maxValue" => "100", "code" => "#62B58F"]
    ));

    // Dial array    
    $dial = array();

    // Widget dial data in array format, multiple values can be separated by comma e.g. ["81", "23", "45",...]
    $widgetDialDataArray = array("81");
    for($i = 0; $i < count($widgetDialDataArray); $i++) {
        array_push($dial,array("value" => $widgetDialDataArray[$i]));
    }

    $arrChartConfig["colorRange"] = $colorDataObj;
    $arrChartConfig["dials"] = array( "dial" => $dial);

    // JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
    $jsonEncodedData = json_encode($arrChartConfig);

    // Widget object
    $Widget = new FusionCharts("angulargauge", "MyFirstWidget" , "400", "250", "widget-container", "json", $jsonEncodedData);

    // Render the Widget
    $Widget->render();
?>
    <center>
        <div id="widget-container">Widget will render here!</div>
    </center>
</body>

</html>
```

That's it! Your first chart using the FusionCharts PHP wrapper is ready.

## **Problem rendering the chart?**

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if fusioncharts.js was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.