---
title: Your First Map in PHP using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first map using the php wrapper.
heading: Create a Map Using PHP in FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **PHP** wrapper for FusionCharts. The `FusionCharts server-side PHP` wrapper lets you easily add rich and interactive charts to any PHP project. Using the wrapper, you can create maps in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a map using the `FusionCharts PHP` wrapper.

## Installation


In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts PHP` wrapper and all the other dependencies on your system.

> The **FusionCharts PHP server-side wrapper** requires **PHP 5** or higher.

To install the FusionCharts Suite, follow the steps below:

* Include the **FusionCharts PHP wrapper** in your project.

* Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).

* Include the map renderer file.

* Include the FusionCharts theme file to apply the style to the charts.

```
<?php
       /* Include the `fusioncharts.php` file that contains functions to embed the charts. */
       include("path/to/local/fusioncharts.php");
?>
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

That completes the installation of FusionCharts Suite and the PHP wrapper.

## Create you First map

In this section, we will create a visualization using the **World Map** showing the average annual population growth.

The chart will look like as shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in the table below:

State|Entity Name|Value|||
-|-|-|-|-
North America|NA|82|||
South America|SA|2.04|||
Asia|AS|1.78|||
Europe|EU|40|||
Africa|AF|2.58|||
Australia|AU|1.30|||

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format.

In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column.

However, when you convert the data into a format (JSON or XML) supported by FusionCharts, the entities are denoted by the id key in the data object.

For any map visualization, it is important to provide the correct value for the id keys. For example, if you want to denote Africa, the value for the corresponding id must be AF and not AFR.

We have a detailed [Map Specification Sheets ](https://www.fusioncharts.com/dev/maps/spec-sheets/world)for all the maps that can be rendered using FusionCharts, where you can find the correct id of the maps you want to create.

In this example, we will use the JSON format, as shown below:

```
{
    // Map Configuration
    "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1955-2015",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
    }]
}

```

In the above JSON data:

* Create the `chart` object to define the elements of the map.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

* Create the `data` array to define the id of the continents and their corresponding values along with configurations.

The chart object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the map.

Now that you have converted the tabular data to JSON format, let's learn how to render the map.

## Render the Map

To render the chart, follow the steps below:

1. Include the **FusionCharts PHP wrapper** in your project.

2. Include the `fusioncharts` library.

3. Include the map renderer file.

4. Include the map definition file.

5. Include the FusionCharts theme file to apply the style to the charts.

6. Store the map configurations in an associative array.

7. Store the color range in a multidimensional array.

8. Create a data object within the map configurations to assign the associative data array to it.

9. Convert the final map configuration to JSON string.

10. Create the map instance and set the following:

    * Set the map type as `world`. Each chart type is represented with a unique chart alias. For World map, the alias is `world`. Find the complete list of map types with their respective alias[ here](https://www.fusioncharts.com/dev/map-guide/list-of-maps).

    * Set the map `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the map.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

11. Finally, use a container using `<div>` to render the map.

The full code for the above sample is given below:

```
<?php
    // Include the `../src/fusioncharts.php` file that contains functions to embed the charts.
    include("includes/fusioncharts.php");
?>
<html>
    <head>
        <title>FusionCharts | My First Map</title>
        <script src="path/to/local/fusioncharts.js"></script>

<script src="path/to/local/fusioncharts.maps.js"></script>
        <script src="path/to/local/maps/fusioncharts.world.js"></script>
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
## Render other maps

To reduce the size of the package FusionCharts comes with only two maps, i.e., the **World** map and the **USA** map. However, FusionCharts provide 1600+ maps for you to explore. [Download ](https://www.fusioncharts.com/download/map-definition-files)the map files separately if you want to save them locally.

Let's create a map of California to show the "Web visits for a particular month" as shown below:

{% embed_chart getting-started-your-first-map-california.js %}

To render the above map, the following code is used:

```
<?php
    // Include the `../src/fusioncharts.php` file that contains functions to embed the charts.
    include("includes/fusioncharts.php");
?>
<html>
    <head>
        <title>FusionCharts | My First Map</title>
        <script src="path/to/local/fusioncharts.js"></script>

<script src="path/to/local/fusioncharts.maps.js"></script>
<script src="path/to/local/maps/fusioncharts.california.js"></script>
<script src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>
    <body>
        <?php
        // Widget appearance configuration
        $arrMapConfig = array(
            "chart" => array(
                "animation"=> "0",
                "showbevel"=> "0",
                "usehovercolor"=> "1",
                "showlegend"=> "1",
                "legendposition"=> "BOTTOM",
                "legendborderalpha"=> "0",
                "legendbordercolor"=> "ffffff",
                "legendallowdrag"=> "0",
                "legendshadow"=> "0",
                "caption"=> "Website Visits for the month of March 2018",
                "connectorcolor"=> "000000",
                "fillalpha"=> "80",
                "hovercolor"=> "CCCCCC",
                "theme"=> "fusion"
            )
        );

        // Widget color range data
        $colorDataObj = array("minvalue" => "0", "code" => "#FFE0B2", "gradient" => "1",
        "color" => array(
            ["maxvalue"=> "2500", "code"=> "f8bd19"}, {"maxvalue"=> "5000", "code"=> "6baa01"]
        ));

        // Map data array
        $mapDataArray = array(
            ["001", "2834", "1"],

                    ["003", "3182", "1"],

                    ["005", "3280", "1"],

                    ["007", "911", "1"],

                    ["009", "292", "1"],

                    ["011", "530", "1"],

                    ["013", "2515", "1"],

                    ["015", "728", "1"],

                    ["017", "1974", "1"],

                    ["019", "848", "1"],

                    ["021", "3278", "1"],

                    ["023", "4463", "1"],

                    ["025", "1198", "1"],

                    ["027", "378", "1"],

                    ["029", "2610", "1"],

                    ["031", "1200", "1"],

                    ["033", "3820", "1"],

                    ["035", "940", "1"],

                    ["037", "3416", "1"],

                    ["039", "4004", "1"],

                    ["041", "1604", "1"],

                    ["043", "4011", "1"],

                    ["045", "3203", "1"],

                    ["047", "3775", "1"],

                    ["049", "2721", "1"],

                    ["051", "3417", "1"],

                    ["053", "1530", "1"],

                    ["055", "412", "1"],

                    ["057", "3434", "1"],

                    ["059", "1670", "1"],

                    ["061", "1274", "1"],

                    ["063", "4339", "1"],

                    ["065", "2073", "1"],

                    ["067", "1018", "1"],

                    ["069", "3967", "1"],

                    ["071", "3401", "1"],

                    ["073", "3307", "1"],

                    ["075", "1938", "1"],

                    ["077", "489", "1"],

                    ["079", "3207", "1"],

                    ["081", "2295", "1"],

                    ["083", "2747", "1"],

                    ["085", "1114", "1"],

                    ["087", "3400", "1"],

                    ["089", "784", "1"],

                    ["091", "1673", "1"],

                    ["093", "4274", "1"],

                    ["095", "4509", "1"],

                    ["097", "3862", "1"],

                    ["099", "1356", "1"],

                    ["101", "4126", "1"],

                    ["103", "1314", "1"],

                    ["105", "1807", "1"],

                    ["107", "4026", "1"],

                    ["109", "3456", "1"],

                    ["111", "1393", "1"],

                    ["113", "1500", "1"],

                    ["115", "2218", "1"]
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
        $Map = new FusionCharts("maps/california", "MyFirstMap" , "800", "500", "map-container", "json", $jsonEncodedData);

        // Render the Map
        $Map->render();
        ?>
        <center>
            div id="map-container">Map will render here!</div>
        </center>
</body>
</html>

```
That's it! The California map is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if fusioncharts.js was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.

