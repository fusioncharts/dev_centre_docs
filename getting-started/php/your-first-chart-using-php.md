---
title: Create a Chart Using PHP in FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the php wrapper.
heading: Create a Chart Using PHP in FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **PHP** wrapper for FusionCharts. The `FusionCharts server-side PHP` wrapper lets you easily add rich and interactive charts to any PHP project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

On this page, we'll see how to install FusionCharts and render a chart using the `FusionCharts server-side PHP` wrapper.

## Prerequisite

We assume that you have PHP installed in the system. You will also need a local web server for which you can use [XAMPP](https://www.apachefriends.org/index.html) (A simple, lightweight Apache distribution that makes it extremely easy for developers to create a local web server for testing and deployment purposes).

## Installation & including dependencies

Download the FusionCharts library to get the `php-fusioncharts` wrapper.

<a href='https://www.fusioncharts.com/download/fusioncharts-suite-xt?framework=php' class="btn btn-primary-grad btn-sm">Download FusionCharts library</a>

Create a project inside the new installed XAMPP. Go to `XAMPP>htdocs` and create a new empty directory (PHPfusioncharts) for you project. Now follow these steps:

- Create a new directory named as `fusioncharts` inside PHPfusioncharts directory. Now copy the `php-fusioncharts` wrapper (`fusioncharts-suite-xt > integrations > php > fusioncharts-wrapper`) to the newly created fusioncharts folder (`htdocs > PHPfusioncharts > fusioncharts`).

- Copy the `js` directory (Only for Local Files) which contains all the javascript files (fusioncharts-suite-xt > js) in `PHPfusioncharts > resources`.

- Create an index.php file in the PHP FusionCharts directory.

## Preparing the Data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as data labels along x-axis and 'No. of oil reserves' as data values along y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in **JSON** format, So, we first add the data in index.php file and then convert it into the JSON format.

```javascript
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
```

## Configure your Chart

Now that the data's ready, you've to work on the styling, the positioning and giving your chart a context. Follow the steps below:

**Step 1:** In the `index.php` file, we first include the Fusioncharts Javascript files to apply a style to the chart.

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

**Step 2:** Add the chart attributes in the index.php file. FusionCharts accepts data in JSON format, so we convert these attributes into JSON format.

```javascript
// Chart Configuration stored in Associative Array
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

$arrChartConfig["data"] = $arrLabelValueData;
// JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
$jsonEncodedData = json_encode($arrChartConfig);
```

## Create your Chart

Let's create a Column 2D Chart using the `php-fusioncharts` wrapper showing "Countries with most Oil Reserves".

The `index.php` file will have the `chart constructor`, `attributes` and the `datasource` required to render the chart. The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
&lt;?php
   /* Include the ../src/fusioncharts.php file that contains functions to embed the charts.*/
   include("fusioncharts/fusioncharts.php");
?&gt;

&lt;html&gt;
&lt;head&gt;
&lt;title&gt;FusionCharts | My First Chart&lt;/title&gt;
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
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
\$arrLabelValueData = array();

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
<pre><code class="language-javascript">
&lt;?php
   /* Include the ../src/fusioncharts.php file that contains functions to embed the charts.*/
   include("fusioncharts.php");
?&gt;

&lt;html&gt;
&lt;head&gt;
&lt;title&gt;FusionCharts | My First Chart&lt;/title&gt;
&lt;script src="resources/js/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script src="resources/js/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
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
\$Chart-&gt;render();
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

## Render the Chart

With the container for the chart created in `index.php` file and port of the localhost defined in XAMPP, open this file on the localhost, specify the location of the file, i.e, `localhost:8080/PHPfusioncharts/index.php` and you'll be able to see the chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `php-fusioncharts` wrapper is ready.
