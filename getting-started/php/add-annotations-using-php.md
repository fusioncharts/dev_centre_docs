---
title: Add Annotations | FusionCharts
description: This article focuses on different type of configurations possible using the PHP.
heading: Add Annotations
---

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

In this article we'll create a **Spline** chart and add annotations using FusionCharts PHP wrapper. A spline chart using annotations to highlight a particular anchor along with text is shown below:

{% embed_chartData configure-charts-using-react-example-3.js json %}

The full code of the above sample is given below:

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
                \"caption\": \"Bakersfield Central - Total footfalls\",
                \"subCaption\": \"Last week\",
                \"xAxisName\": \"Day\",
                \"yAxisName\": \"No. of Visitors (In 1000s)\",
                \"showValues\": \"0\",
                \"theme\": \"fusion\"
            },
            \"annotations\":{
                \"groups\": [{
                    \"id\": \"anchor-highlight\",
                    \"items\": [{
                        \"id\": \"high-star\",
                        \"type\": \"circle\",
                        \"x\": \"\$\dataset.0.set.2.x\",
                        \"y\": \"\$\dataset.0.set.2.y\",
                        \"radius\": \"12\",
                        \"color\": \"#6baa01\",
                        \"border\": \"2\",
                        \"borderColor\": \"#f8bd19\"
                    }, {
                        \"id\": \"label\",
                        \"type\": \"text\",
                        \"text\": \"Highest footfall 25.5K\",
                        \"fillcolor\": \"#6baa01\",
                        \"rotate\": \"90\",
                        \"x\": \"\$\dataset.0.set.2.x+75\",
                        \"y\": \"\$\dataset.0.set.2.y-2\"
                    }]
                }]
            },
            \"data\": [{
                \"label\": \"Mon\",
                \"value\": \"15123\"
            }, {
                \"label\": \"Tue\",
                \"value\": \"14233\"
            }, {
                \"label\": \"Wed\",
                \"value\": \"25507\"
            }, {
                \"label\": \"Thu\",
                \"value\": \"9110\"
            }, {
                \"label\": \"Fri\",
                \"value\": \"15529\"
            }, {
                \"label\": \"Sat\",
                \"value\": \"20803\"
            }, {
                \"label\": \"Sun\",
                \"value\": \"19202\"
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

4. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.
    * Create an `annotations` object in the `dataSource`, to specify the cosmetics and functionalities of the annotation.

5. Create the `<div>` element to render radio buttons.