---
title: Lifecycle Events using PHP | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using PHP.
heading: Lifecycle Events using PHP
---

## The chart has been rendered using the following steps:

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart using **FusionCharts PHP wrapper**.

A chart is shown below:

{% embed_chartData lifecycle-event-server-side-example-1.js json %}

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
    <script>
        function onDataLoaded() {
            document.getElementById("dataLoaded").innerHTML = "Chart Data is Loaded Succesfully";
        }
    </script>
</head>

<body>
    <?php
        $chartData ="{  
            \"chart\":
             {  
                \"caption\": \"Countries With Most Oil Reserves [2017-18]\",
                \"subCaption\": \"In MMbbl = One Million barrels\",
                \"xAxisName\": \"Country\",
                \"yAxisName\": \"Reserves (MMbbl)\",
                \"numberSuffix\": \"K\",
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
        $Chart = new FusionCharts("column2d", "chart-1" , "600", "400", "chart-container", "json", $chartData);
        # Attach event with method name
        $Chart->addEvent("dataLoaded", "onDataLoaded");
        // Render the chart
        $Chart->render();
?>
    <h3>Example of event(product life cycle event)</h3>
    <div id="chart-container">Chart will render here!</div>
    <br />
    <br />
    <div>
        <p id="dataLoaded"></p>
    </div>
    <br />
</body>
</html>
```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains functions to embed the charts.

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`.

3. Add event `dataLoaded` which will be called when the data of the chart is loaded.

4. Store the chart data in a JSON object.

5. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

6. Create the `<div>` element to render the chart.
