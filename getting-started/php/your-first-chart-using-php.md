---
permalink: getting-started/php/your-first-chart-using-php.html
title: Your First Chart in PHP using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the php wrapper.
heading: Your First Chart in PHP using FusionCharts
chartPresent: false
---

FusionCharts Suite XT includes the **FusionCharts PHP** wrapper that lets you create interactive, data-driven charts in your PHP website without writing any JavaScript code.

JavaScript and HTML code is used to generate charts in the browsers. The server-side PHP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts on a browser page. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/php/your-first-chart-using-php#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/java/your-first-chart-using-java#create-your-first-gauge-10) and a [map]({% site.baseurl %}/getting-started/java/your-first-chart-using-java#create-your-first-map-13).

Before going through this article, please [install]({% site.baseurl %}/getting-started/php/install-using-php '@@open-newtab') FusionCharts PHP wrapper, if not already installed.

## Create your first chart

In this section, we will create a chart using `FusionCharts PHP` server-side wrapper. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

### The data for this chart is represented in a table below:

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

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. For PHP, we recommend JSON format. The converted format will look as shown below:

> There are different formats of JSON for different groups of charts in FusionCharts - e.g., single-series (which you're seeing here), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

{% embed_data getting-started-your-first-chart.js %}

In the above code we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels or, data values. You can also set chart limits and extended properties. The functional attributes used in the above code are:

* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's data and provided fusion (default theme) as the value of it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetic Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size etc. Since we are using the `fusion`theme to customize the chart's aesthitics no cosmetic attributes are used in this sample. For a detailed list of cosmetic attributes click here.

For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Create an instance of the chart

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the data for the chart as string.

The code to initialize and render the chart is given below:

```php
// chart object
$Chart = new FusionCharts("column2d", "MyFirstChart" , "700", "400", "chart-container", "json", $jsonEncodedData);

```

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 700x400 pixels using `width` and `height`.
* The array data is embedded as the value of the `jsonEncodedData` parameter.

Then, create a container using `&lt;div&gt;`, to render the chart.

```HTML
<div id="chart-container">Chart will render here!</div>
```
The full code for the above sample is given below:

```html
<?php

   /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
   include("includes/fusioncharts.php");
?>
<html>

<head>
    <title>FusionCharts | My First Chart</title>
    <script src="path/to/local/fusioncharts.js"></script>
    <script src="path/to/local/fusioncharts.charts.js"></script>
    <script src="path/to/local/themes/fusioncharts.theme.zune.js"></script>
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
    $Chart = new FusionCharts("column2d", "MyFirstChart" , "600", "350", "chart-container", "json", $jsonEncodedData);

    // Render the chart
    $Chart->render();
    ?>

    <center>
        <div id="chart-container">Chart will render here!</div>
    </center>
</body>

</html>
```

That's it! When you run this HTML page now, you should see a chart representing your data.

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a column 2D chart.

Now, go on and explore other 95+ chart types that we have in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attributes]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## The FusionCharts Chart Class

A list of available parameters is given in the table below:

### Constructor Parameters

The syntax of the `Chart` class constructor used to initialize the chart object is:

```vb.net
Chart <object name> = new Chart (chartType, chartId, chartWidth, chartHeight, dataFormat, dataSource, bgColor, bgOpacity)

```

Given below is a brief description of the constructor parameters:

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`
</td>
    <td>String</td>
    <td>It is used to specify the type of chart to be rendered.</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>It is used to specify a unique identifier for the chart. If multiple charts are rendered on the same HTML page, each chart is referred to using its unique ID.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>It is used to specify the width of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>It is used to specify the height of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>It is used to specify the type of data that will be passed to the chart. This attribute takes the following values: `json`, `xml`, `jsonurl`, `xmlurl`. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>String</td>
    <td>It is used to specify the hex code for the background color of the chart.</td>
  </tr>
  <tr>
    <td>`bgOpacity`</td>
    <td>String</td>
    <td>It is used to specify the background opacity for the chart. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


>  It is not necessary that you assign values for all parameters during initialization. The order of parameters, however, needs to be preserved. Also, you need to make sure that all of these parameters have been assigned values using the constructor, the `Chart` class methods, or the `Render()` method before you run the application. If not, either the chart will not render at all or it will not render the way you want it to. </p>

### Methods under the Chart Class

Given below is a brief description of the methods in the `Chart` class:

<table>
  <tr>
    <th>Method Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`SetChartParameter`</td>
    <td>It is used to set or modify the values for chart parameters like `chartType`, `chartWidth`, `chartHeight`, etc. This method takes the following parameters:

`param`:
Type: enum
Description: It is used to specify the name of the chart parameter that you want to set/modify. For example, `Chart.ChartParameter.chartType`

`value`:
Type: String
Description: It is used to specify the value for the chart parameter. For example, `column2d`.</td>
  </tr>
  <tr>
    <td>`GetChartParameter`</td>
    <td>It is used to get the value of any chart parameter. This method takes the following parameters:

`param`:
Type: enum
Description: It is used to specify the name of the chart parameter whose value you want to get. For example, `Chart.ChartParameter.chartType`</td>
  </tr>
  <tr>
    <td>`SetData`</td>
    <td>It is used to set the data source for the chart. This method takes the following parameters:

`dataSource`:
Type: String
Description: It is used to specify the data for the chart. For example, `data/data.xml`.

`format`:
Type: enum
Description: It is used to specify the format of the data source. This is an optional parameter.</td>
  </tr>
</table>


## The Render() Method

Given below is a brief description of the parameters that can be passed using this method:

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`
</td>
    <td>String</td>
    <td>It is used to specify the type of chart to be rendered.</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>It is used to specify a unique identifier for the chart. If multiple charts are rendered on the same HTML page, each chart is referred to using its unique ID.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>It is used to specify the width of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>It is used to specify the height of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>It is used to specify the type of data that will be passed to the chart. This attribute takes the following values: `json`, `xml`, `jsonurl`, and `xmlurl`. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>String</td>
    <td>It is used to specify the hex code for the background color of the chart.</td>
  </tr>
  <tr>
    <td>`bgOpacity`</td>
    <td>String</td>
    <td>It is used to specify the background opacity for the chart. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>

## Create your first gauge

Gauges are powerful tools that can showcase using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Scores above 75 mean good and is green.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-widget.js %}

### Create an instance of the gauge

In this step, we will create an instance of the chart type as **angulargauge**, set the width and height (in pixels or %), and finally specify the data for the chart as string.

The code to initialize and render the chart is given below:

```php
// Widget object
$Widget = new FusionCharts("angulargauge", "MyFirstWidget" , "400", "250", "widget-container", "json", $jsonEncodedData);

```

Then, create a container using &lt;div&gt; to render the gauge.

```HTML
<div id="widget-container">Widget will render here!</div>
```

The full code for the above sample is given below:

```html
<?php
    /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
    include("includes/fusioncharts.php");
?>
<html>
    <head>
        <title>FusionCharts | My First Widget</title>
        <script src="path/to/local/fusioncharts.js"></script>
        <script src="path/to/local/fusioncharts.charts.js"></script>
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

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **World**. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in a table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

> In the above table, the column **Entity Name** represents the geographical entities represnted in the map, whose full names are given in the **State** column in this example. However, when you convert the data in a format acceptable by FusionCharts, the entities are denoted by the `id` key in the `data` object (see the code snippet of the next section). For any map visualization you create, it is imperative that you provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF`, and not `AFR`. We have detailed [Map Specification Sheet]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab') for all the maps that can be rendered using FusionCharts - please refer to them for the correct `id`s of the map you want to create.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-map.js %}

### Create an instance of the map

In this step, we will create an instance of the map type as **world**, set the width and height (in pixels or %), and finally specify the data for the chart as string.

The code to initialize and render the chart is given below:

```php
// Map object
$Map = new FusionCharts("maps/world", "MyFirstMap" , "800", "500", "map-container", "json", $jsonEncodedData);
```
Then, create a container using &lt;div&gt;, to render the map.

```HTML
<div id="map-container">Map will render here!</div>
```

The full code for the above sample is given below:

```html
<?php
    // Include the `../src/fusioncharts.php` file that contains functions to embed the charts.
    include("includes/fusioncharts.php");
?>
<html>
    <head>
        <title>FusionCharts | My First Map</title>
        <script src="path/to/local/fusioncharts.js"></script>
        <script src="path/to/local/fusioncharts.charts.js"></script>
        <script src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    </head>
    <body>
        <?php
        // Widget appearance configuration
        $arrMapConfig = array(
            "chart" => array(
                "caption" => "Average Annual Population Growth",
                "subcaption" => " 1955-2015",
                "numbersuffix" => "%",
                "includevalueinlabels" => "1",
                "labelsepchar" => ": ",
                "entityFillHoverColor" => "#FFF9C4",
                "theme" => "fusion"
            )
        );

        // Widget color range data
        $colorDataObj = array("minvalue" => "0", "code" => "#FFE0B2", "gradient" => "1",
        "color" => array(
            ["minValue" => "0", "maxValue" => "50", "code" => "#F2726F"],
            ["minValue" => "50", "maxValue" => "75", "code" => "#FFC533"],
            ["minValue" => "75", "maxValue" => "100", "code" => "#62B58F"]
        ));

        // Map data array
        $mapDataArray = array(
            ["NA", ".82", "1"],
            ["SA", "2.04", "1"],
            ["AS", "1.78", "1"],
            ["EU", ".40", "1"],
            ["AF", "2.58", "1"],
            ["AU", "1.30", "1"]
        );
                      
        $mapData = array();

        for($i = 0; $i < count($mapDataArray); $i++) {
            array_push($mapData,array("id" => $mapDataArray[$i][0], "value" => $mapDataArray[$i][1], "showLabel" => $mapDataArray[$i][2]));
        }

        $arrMapConfig["colorRange"] = $colorDataObj;
        $arrMapConfig["data"] = $mapData;

        // JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
        $jsonEncodedData = json_encode($arrMapConfig);

        // Map object
        $Map = new FusionCharts("maps/world", "MyFirstMap" , "800", "500", "map-container", "json", $jsonEncodedData);

        // Render the Map
        $Map->render();
        ?>
        <center>
            div id="map-container">Map will render here!</div>
        </center>
    </body>
</html>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of world. The respective `id`, can be found [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you don't see the chart getting rendered on the browser, it might be because some browsers does not allow JavaScript files to be loaded and run from the local filesystem. In such cases, either try with a different browser, or create a local/remote server and server the webpages containing the charts from the server.

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.