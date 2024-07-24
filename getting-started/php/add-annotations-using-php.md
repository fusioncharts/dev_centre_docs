---
title: Add Annotations | FusionCharts
description: Understand how to Add Annotations using PHP with FusionCharts. Efficiently enhance flexibility & visual appeal in your web applications.
heading: Add Annotations
---

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

In this article we'll create a **Spline** chart and add annotations using FusionCharts PHP wrapper. A spline chart using annotations to highlight a particular anchor along with text is shown below:

{% embed_chartData configure-charts-using-react-example-3.js json %}

## The full code of the above sample is given below:

```
<!DOCTYPE html>
<?php
    /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
    include("../includes/fusioncharts.php");
?>
<html>

<head>
    <title>FusionCharts | Export Chart As Image (client-side)</title>
    <!-- FusionCharts Library -->
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>

<body>
    <?php
        $chartData = "{
            \"chart\": {
                \"caption\": \"Average Monthly Temperature in Texas\",
                \"yAxisName\": \"Average Monthly Temperature\",
                \"anchorradius\": \"5\",
                \"plotToolText\": \"Average temperature in $label is <b>$dataValue</b>\",
                \"showHoverEffect\": \"1\",
                \"showvalues\": \"0\",
                \"numberSuffix\": \"°C\",
                \"theme\": \"fusion\",
                \"anchorBgColor\": \"#72D7B2\",
                \"paletteColors\": \"#72D7B2\"
            },
            \"annotations\": {
                \"groups\": [{
                    \"id\": \"anchor-highlight\",
                    \"items\": [{
                        \"id\": \"high-star\",
                        \"type\": \"circle\",
                        \"x\": \"$dataset.0.set.7.x\",
                        \"y\": \"$dataset.0.set.7.y\",
                        \"radius\": \"12\",
                        \"color\": \"#cc0000\",
                        \"border\": \"2\",
                        \"borderColor\": \"#0075c2\"
                    }, {
                        \"id\": \"label\",
                        \"type\": \"text\",
                        \"text\": \"Hottest Month\",
                        \"fillcolor\": \"#0075c2\",
                        \"rotate\": \"90\",
                        \"x\": \"$dataset.0.set.7.x+75\",
                        \"y\": \"$dataset.0.set.7.y-2\"
                    }]
                }]
            },
            \"data\": [{
                \"label\": \"Jan\",
                \"value\": \"1\"
            }, {
                \"label\": \"Feb\",
                \"value\": \"5\"
            }, {
                \"label\": \"Mar\",
                \"value\": \"10\"
            }, {
                \"label\": \"Apr\",
                \"value\": \"12\"
            }, {
                \"label\": \"May\",
                \"value\": \"14\"
            }, {
                \"label\": \"Jun\",
                \"value\": \"16\"
            }, {
                \"label\": \"Jul\",
                \"value\": \"20\"
            }, {
                \"label\": \"Aug\",
                \"value\": \"22\"
            }, {
                \"label\": \"Sep\",
                \"value\": \"20\"
            }, {
                \"label\": \"Oct\",
                \"value\": \"16\"
            }, {
                \"label\": \"Nov\",
                \"value\": \"7\"
            }, {
                \"label\": \"Dec\",
                \"value\": \"2\"
            }]
        }";
        // chart object
        $Chart = new FusionCharts("spline", "chart-1" , "700", "400", "chart-container", "json", $chartData);
        // Render the chart
        $Chart->render();
    ?>
    <h3>Using Annotations On Chart</h3>
    <div id="chart-container">Chart will render here!</div>
    <a href="../index.php">Go Back</a>

</body>
</html>
```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains functions to embed the charts.

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`.

3. Store the chart data in a JSON object.

4. Create an `annotations` object in the `dataSource`, to specify the cosmetics and functionalities of the annotation.

5. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `spline`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

6. Create the `<div>` element to render the chart using `id`.
