---
title: Slice Data Plot using API | FusionCharts
description: This article will showcase a sample to slice data plot of the pie chart using chart specific custom API .
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offers a wide range of APIs that you can use for different stages in the ife cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using **FusionCharts PHP wrapper**. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

The full code for the above chart is shown below:

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
        plotClickHandler = function(event){
                clickedPlot = (event.data.categoryLabel).toLowerCase();
                    if (selectedItem !== clickedPlot) {
                        selectedItem = clickedPlot;
                    } else{
                        selectedItem = 'none';
                    }
            };
            selectedItem = "none";
            getFusionChart = function(){
                return FusionCharts("chart-1");
            }
            noneChecked = function(){
                    getFusionChart().slicePlotItem(0,false);
                    getFusionChart().slicePlotItem(1,false);
                    getFusionChart().slicePlotItem(2,false);
                    getFusionChart().slicePlotItem(3,false);
            }
            apacheChecked = function(){
                    getFusionChart().slicePlotItem(0,true);
            }
            microsoftChecked = function(){
                    getFusionChart().slicePlotItem(1,true);
            }
            zeusChecked = function(){
                    getFusionChart().slicePlotItem(2,true);
            }
            otherChecked = function(){
                    getFusionChart().slicePlotItem(3,true);
            }
   </script>
</head>

<body>

    <?php
        $chartData ="{  
            \"chart\": 
            { 
                \"caption\": \"Market Share of Web Servers\",
                \"plottooltext\": \"<b>\$percentValue</b> of web servers run on \$label servers\",
                \"showLegend\": \"0\",
                \"enableMultiSlicing\": \"0\",
                \"showPercentValues\": \"1\",
                \"legendPosition\": \"bottom\",
                \"useDataPlotColorForLabels\": \"1\",
                \"theme\": \"fusion\"
            },
            \"data\": [{ 
                    \"label\": \"Apache\",
                    \"value\": \"32647479\"
                }, { 
                    \"label\": \"Microsoft\", 
                    \"value\": \"22100932\" 
                }, { 
                    \"label\": \"Zeus\", 
                    \"value\": \"14376\" 
                }, { 
                    \"label\": \"Other\",
                    \"value\": \"18674221\" 
            }]
       }";
       
        // chart object
        $Chart = new FusionCharts("pie2d", "chart-1" , "700", "400", "chart-container", "json", $chartData);
        // Attach message with message string.
        $Chart->addEvent("dataplotClick", "plotClickHandler");
        // Render the chart
        $Chart->render();
?>
    <h3>Example of event(SpecialChartType API)</h3>
    <div align="center" id="chart-container">Chart will render here!</div>
    <br />
    <br />
    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" checked onClick="noneChecked()" /> None
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onClick="apacheChecked()" /> Apache
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onClick="microsoftChecked()" /> Microsoft
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onClick="zeusChecked()" /> Zeus
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="rdGrp-options" onClick="otherChecked()" /> Other
        </label>
    </div>
    <br />
    <br />
    <a href="../index.php">Go Back</a>

</body>

</html>
```

The above chart has been rendered using the following steps:

1. Import and resolve the dependency `fusioncharts.FusionCharts`

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`. 

3. Within the `<body>`: 

    * Include a `<script>` tag that contains functions for slicing the data plots (in this case, clicking radio buttons acts as the trigger).

    * Create radio buttons for slicing the data plots.

    * Include a `<div>` tag with `id` same as the value of the `renderAt` attribute of the instance of `FusionCharts` (explained in the next step), within which the chart will be rendered. 

    * Include a `<% %>` tag, where:

        * Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

        * Create a new instance named `pie_chart` of the `FusionCharts` constructor, and pass the values of its arguments:

            * Set the chart `type` as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

            * Set the `id` as `pie_chart`.

            * Set the `width` and `height` of the chart in pixels. You can also provide them as percentages.

            * Set the `renderAt` as `chart`.

            * Set the `dataFormat` as `json`.

            * Set the `dataSource` to `jsonData` which has been declared and defined above.

    * Include a `<%= %>` tag that contains `pie_chart.render()`.