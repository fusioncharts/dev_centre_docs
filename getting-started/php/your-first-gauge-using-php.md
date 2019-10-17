---
title: Your First Gauge in PHP using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the php wrapper.
heading: Create a Gauge Using PHP in FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **PHP** wrapper for FusionCharts. The `FusionCharts server-side PHP` wrapper lets you easily add rich and interactive charts to any PHP project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a gauge using the `FusionCharts PHP` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts PHP` wrapper and all the other dependencies on your system.

> The **FusionCharts PHP server-side wrapper** requires **PHP 5.6** or higher.

To install the FusionCharts Suite, follow the steps below:

- Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

- Copy and paste the `fusioncharts.php` file from `integrations > php > fusioncharts-wrapper` in your project folder.

- Include the FusionCharts theme file to apply the style to the charts.

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

// Include FusionCharts Theme File
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

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range | Color | Hex Code |
| ----- | ----- | -------- ||
| 0-50 | Red | #F2726F |
| 50-75 | Yellow | #FFC533 |
| 75-100 | Green | #62B58F |

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Nordstrom's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  // Chart Data
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

- Create the `chart` object to define the elements of the gauge.

- Create the `colorRange` object to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

- Set the `code` attribute to specify the hex color of respective ranges.

- Create the `dials` object to represent the customer satisfaction score.

- Create the `dial` object under `dials` object to set the value of customer satisfaction score.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Chart

To render the chart, follow the steps below:

1. Include the **FusionCharts PHP wrapper** in your project.

2. Include the `fusioncharts` library.

3. Include the FusionCharts theme file to apply the style to the charts.

4. Store the chart configurations in an associative array.

5. Store the color range in a multidimensional array.

6. Store the value of the `dial` in an array.

7. Create a data object within the chart configurations to assign the associative data array to it.

8. Convert the final chart configuration to JSON string.

9. Create the chart instance and set the following:

   - Set the chart type as `angulargauge`. Each gauge is represented with a unique alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of gauges with their respective alias [here](/chart-guide/list-of-charts#fusionwidgets-xt).

   - Set the gauge `id`.

   - Set the `width` and `height` (in pixels).

   - Set the container for the gauge.

   - Set the `dataFormat` as JSON.

   - Embed the `json` data as the value of the `dataSource`.

10. Finally, use a container using `<div>` to render the gauge.

The full code for the above sample is given below:

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
        &lt;title&gt;FusionCharts | My First Widget&lt;/title&gt;

        // Include FusionCharts core file
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

        // Include FusionCharts Theme File
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
    &lt;/head&gt;
    &lt;body&gt;

&lt;?php
// Widget appearance configuration
\$arrChartConfig = array(
"chart" =&gt; array(
"caption" =&gt; "Nordstrom's Customer Satisfaction Score for 2017",
"lowerLimit" =&gt; "0",
"upperLimit" =&gt; "100",
"showValue" =&gt; "1",
"numberSuffix" =&gt; "%",
"theme" =&gt; "fusion",
"showToolTip" =&gt; "0"
)
);

    // Widget color range data
    $colorDataObj = array("color" =&gt; array(
        ["minValue" =&gt; "0", "maxValue" =&gt; "50", "code" =&gt; "#F2726F"],
        ["minValue" =&gt; "50", "maxValue" =&gt; "75", "code" =&gt; "#FFC533"],
        ["minValue" =&gt; "75", "maxValue" =&gt; "100", "code" =&gt; "#62B58F"]
    ));

    // Dial array
    $dial = array();

    // Widget dial data in array format, multiple values can be separated by comma e.g. ["81", "23", "45",...]
    $widgetDialDataArray = array("81");
    for($i = 0; $i &lt; count($widgetDialDataArray); $i++) {
        array_push($dial,array("value" =&gt; $widgetDialDataArray[$i]));
    }

    $arrChartConfig["colorRange"] = $colorDataObj;
    $arrChartConfig["dials"] = array( "dial" =&gt; $dial);

    // JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
    $jsonEncodedData = json_encode($arrChartConfig);

    // Widget object
    $Widget = new FusionCharts("angulargauge", "MyFirstWidget" , "400", "250", "widget-container", "json", $jsonEncodedData);

    // Render the Widget
    $Widget-&gt;render();

?&gt;
&lt;center&gt;
&lt;div id="widget-container"&gt;Widget will render here!&lt;/div&gt;
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
        &lt;title&gt;FusionCharts | My First Widget&lt;/title&gt;

        // Include FusionCharts core file
        &lt;script src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

        // Include FusionCharts Theme file
        &lt;script src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;

&lt;?php
// Widget appearance configuration
\$arrChartConfig = array(
"chart" =&gt; array(
"caption" =&gt; "Nordstrom's Customer Satisfaction Score for 2017",
"lowerLimit" =&gt; "0",
"upperLimit" =&gt; "100",
"showValue" =&gt; "1",
"numberSuffix" =&gt; "%",
"theme" =&gt; "fusion",
"showToolTip" =&gt; "0"
)
);

    // Widget color range data
    $colorDataObj = array("color" =&gt; array(
        ["minValue" =&gt; "0", "maxValue" =&gt; "50", "code" =&gt; "#F2726F"],
        ["minValue" =&gt; "50", "maxValue" =&gt; "75", "code" =&gt; "#FFC533"],
        ["minValue" =&gt; "75", "maxValue" =&gt; "100", "code" =&gt; "#62B58F"]
    ));

    // Dial array
    $dial = array();

    // Widget dial data in array format, multiple values can be separated by comma e.g. ["81", "23", "45",...]
    $widgetDialDataArray = array("81");
    for($i = 0; $i &lt; count($widgetDialDataArray); $i++) {
        array_push($dial,array("value" =&gt; $widgetDialDataArray[$i]));
    }

    $arrChartConfig["colorRange"] = $colorDataObj;
    $arrChartConfig["dials"] = array( "dial" =&gt; $dial);

    // JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
    $jsonEncodedData = json_encode($arrChartConfig);

    // Widget object
    $Widget = new FusionCharts("angulargauge", "MyFirstWidget" , "400", "250", "widget-container", "json", $jsonEncodedData);

    // Render the Widget
    $Widget-&gt;render();

?&gt;
&lt;center&gt;
&lt;div id="widget-container"&gt;Widget will render here!&lt;/div&gt;
&lt;/center&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

That's it! Your first chart using the FusionCharts PHP wrapper is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if fusioncharts.js was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
