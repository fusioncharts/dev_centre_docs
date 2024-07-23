---
title: Change Chart Type at Runtime | FusionCharts
description: This article will showcase a sample to change the chart type at runtime.
heading: Change Chart Type at Runtime
---

## A chart configured to change the chart type, is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using FusionCharts PHP wrapper. The chart types used in the sample is:

* Column 2D
* Bar 2D
* Pie 2D

A chart configured to change the chart type, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

The full code of the above sample is given below:

```
<!DOCTYPE html>
<?php
    /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
    include("../includes/fusioncharts.php");
?>
<html>

<head>
    <title>FusionCharts | Change Chart Type</title>
    <!-- FusionCharts Library -->
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript">
        FusionCharts && FusionCharts.ready(function() {
            var trans = document.getElementById("controllers").getElementsByTagName("input");
            for (var i = 0, len = trans.length; i < len; i++) {
                if (trans[i].type == "radio") {
                    trans[i].onchange = function() {
                        changeChartType(this.value);
                    };
                }
            }
        });
        function changeChartType(chartType) {
            for (var k in FusionCharts.items) {
                if (FusionCharts.items.hasOwnProperty(k)) {
                    FusionCharts.items[k].chartType(chartType);
                }
            }
        };
    </script>
</head>
<body>
    <?php
        $chartData = "{
            \"chart\": {  
                \"caption\": \"Countries With Most Oil Reserves [2017-18]\",
                \"subcaption\": \"In MMbbl = One Million barrels\",
                \"xaxisname\": \"Country\",
                \"yaxisname\": \"Reserves (MMbbl)\",
                \"numbersuffix\": \"K\",
                \"theme\": \"fusion\"
            },
            \"data\": [{
                \"label\": \"Venezuela\",
                \"value\": \"290\"
            }, {
                \"label\": \"Saudi\",
                \"value\": \"260\"
            }, {
                \"label\": \"Canada\",
                \"value\": \"180\"
            }, {
                \"label\": \"Iran\",
                \"value\": \"140\"
            }, {
                \"label\": \"Russia\",
                \"value\": \"115\"
            }, {
                \"label\": \"UAE\",
                \"value\": \"100\"
            }, {
                \"label\": \"US\",
                \"value\": \"30\"
            }, {
                \"label\": \"China\",
                \"value\": \"30\"
            }]
        }";
        // chart object
        $Chart = new FusionCharts("column2d", "chart-1" , "700", "400", "chartContainer", "json", $chartData);
        // Render the chart
        $Chart->render();
    ?>
    <div align="center">
    </div>
    <br />
    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="div-size" checked value="column2d" />Column 2D
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="div-size" value="bar2d" />Bar 2D
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="div-size" value="pie3d" />Pie 3D
        </label>
    </div>
    <div style="width: 100%; display: block;" align="center">
        <div id="chartContainer">Chart will render here!</div>
    </div>
</body>
</html>
```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains functions to embed the charts.

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`.

3. Create **Radio Buttons** and add functionalities to update the chart type to:
    * Column 2D
    * Bar 2D
    * Pie 2D

4. Store the chart data in a JSON object.

5. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

6. Create the `<div>` element to render radio buttons.
