---
title: Adding Special Characters | FusionCharts
description: Understand how to Adding Special Characters using PHP with FusionCharts. Efficiently enhance flexibility & visual appeal in your web applications.
heading: Adding Special Characters
---

FusionCharts offers multiple options to format numbers on the chart. You can configure number prefixes and suffixes, decimal places, and scale numbers based on a predefined scale. This article focuses on how you customize the prefix and suffix of the numbers on the chart using **FusionCharts PHP wrapper**.

To customize the prefix and suffix of the numbers on the chart, use the following attributes:

* Specify the prefix for all the values on the chart using the `numberPrefix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberPrefix` and `xNumberPrefix` attributes.

* Specify the prefix for all the Y-axis values on the chart using the `yNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the prefix for all the X-axis values on the chart using the `xNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the suffix for all the values on the chart using the `numberSuffix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberSuffix` and `xNumberSuffix` attributes.

* Specify the suffix for all the Y-axis values on the chart using the `yNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

* Specify the suffix for all the X-axis values on the chart using the `xNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

## A chart configured to customize the prefix of the numbers on the chart is shown below:

{% embed_chartData adding-special-character-example-1.js json %}

The full code of the above sample is given below:

```
<!DOCTYPE html>
<?php
    /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
    include("../includes/fusioncharts.php");
?>
<html>
<head>
    <title>FusionCharts | Adding Special Characters</title>
    <!-- FusionCharts Library -->
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>

<body>

    <?php
        $chartData = "{
            \"chart\": {
                \"caption\": \"Monthly revenue for last year\",
                \"subCaption\": \"Harry's SuperMart\",
                \"xAxisName\": \"Month\",
                \"yAxisName\": \"Revenues (In USD)\",
                \"numberPrefix\": \"$\",
                \"theme\": \"fusion\"
            },
            \"data\": [{
                \"label\": \"Jan\",
                \"value\": \"420000\"
            }, {
                \"label\": \"Feb\",
                \"value\": \"810000\"
            }, {
                \"label\": \"Mar\",
                \"value\": \"720000\"
            }, {
                \"label\": \"Apr\",
                \"value\": \"550000\"
            }, {
                \"label\": \"May\",
                \"value\": \"910000\"
            }, {
                \"label\": \"Jun\",
                \"value\": \"510000\"
            }, {
                \"label\": \"Jul\",
                \"value\": \"680000\"
            }, {
                \"label\": \"Aug\",
                \"value\": \"620000\"
            }, {
                \"label\": \"Sep\",
                \"value\": \"610000\"
            }, {
                \"label\": \"Oct\",
                \"value\": \"490000\"
            }, {
                \"label\": \"Nov\",
                \"value\": \"900000\"
            }, {
                \"label\": \"Dec\",
                \"value\": \"730000\"
            }]
        }";
        // chart object
        $Chart = new FusionCharts("column2d", "chart-1" , "700", "400", "chartContainer", "json", $chartData);
        // Render the chart
        $Chart->render();
?>
    <h3>Chart using Special Character</h3>
    <div id="chart-container">Chart will render here!</div>
</body>

</html>
```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains functions to embed the charts.

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`.

3. Store the chart data in a JSON object.

4. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

5. In the `dataSource` object, add `numberPrefix` attribute in `chart` object. Set the `numberPrefix` to `$`.

6. Create the `<div>` element to render the chart.         
