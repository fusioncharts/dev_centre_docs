---
title: Configuring your Chart using PHP | FusionCharts
description: Understand how to Configuring your Chart using PHP with FusionCharts. Efficiently enhance flexibility & visual appeal in your web applications.
heading: Configuring your Chart using PHP
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure chart components to:

* [Update Chart Data](/getting-started/php/configure-your-chart-using-php#update-chart-data)
* [Update Chart Attributes](/getting-started/php/configure-your-chart-using-php#update-chart-attributes)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chartData update-chart-data-using-php-example-1.js json %}

The full code of the above sample is given below:

```
<?php
    /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
    include("../includes/fusioncharts.php");
?>
<html>
<head>
    <!-- FusionCharts Library -->
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script>
        updateData = function () {
           var value = document.getElementById("dial-val").value;
           FusionCharts("angulargauge-1").setDataForId("dial1",value);
       }
    </script>
</head>
<body>
    <?php
        $gaugeData = "{
            \"chart\": { 
                \"caption\": \"Customer Satisfaction Score\", 
                \"subcaption\": \"Los Angeles Topanga\", 
                \"plotToolText\": \"Current Score: \$value\", 
                \"theme\": \"fusion\", 
                \"chartBottomMargin\": \"50\", 
                \"showValue\": \"1\" 
            }, 
            \"colorRange\": { 
                \"color\": [{ 
                    \"minValue\": \"0\", 
                    \"maxValue\": \"45\", 
                    \"code\": \"#e44a00\"
                }, { 
                    \"minValue\": \"45\", 
                    \"maxValue\": \"75\", 
                    \"code\": \"#f8bd19\" 
                }, { 
                    \"minValue\": \"75\", 
                    \"maxValue\": \"100\", 
                    \"code\": \"#6baa01\" 
                }] 
            }, 
            \"dials\": { 
                \"dial\": [{ 
                    \"value\": \"70\", 
                    \"id\": \"dial1\" 
                }] 
            }
        }";
        // chart object
        $Chart = new FusionCharts("angulargauge", "angulargauge-1" ,"450", "250", "angulargauge-container", "json", $gaugeData);
        // Render the chart
        $Chart->render();
?>
    <h3>Update data at runtime</h3>
    <div id="angulargauge-container">Chart will render here!</div>
    <div>
        <label for="dial-val">Input dial value</label>
        <input name="dial-val" id="dial-val" type="number" />
        <input type="button" name="update dial" value="Update Dial" onclick="updateData()" />
    </div>
</body>
</html>
```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains functions to embed the charts.

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`.

3. Add the `updateData()` function to randomly update the value of the chart when the button is clicked.

4. Store the chart data in a JSON object.

5. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

6. Create the `<div>` elements to:
    * Render the chart using chart `id`.
    * Create button for `updateData()`.

> When you change the values of `id` and `renderAt`, ensure that the corresponding changes are reflected in the HTML template. The string values for `renderAt` in the code, and the corresponding `div id` in the HTML template, should be the exact same.

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chartData configure-charts-using-react-example-2.js json %}

The full code of the above sample is given below:

```
<!DOCTYPE html>
<?php
    /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
    include("../includes/fusioncharts.php");
?>
<html>
    <head>
        <style>
            .button {
                display:inline-block;
                margin:5px;
                padding: 4px 12px;
                margin-bottom: 0;
                font-size: 14px;
                line-height: 20px;
                color: #333;
                text-align: center;
                text-shadow: 0 1px 1px rgba(255,255,255,0.75);
                vertical-align: middle;
                cursor: pointer;
                background-color: #f5f5f5;
                background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
                background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
                background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
                background-image: -o-linear-gradient(top,#fff,#e6e6e6);
                background-image: linear-gradient(to bottom,#fff,#e6e6e6);
                background-repeat: repeat-x;
                border: 1px solid #ccc;
                border-color: #e6e6e6 #e6e6e6 #bfbfbf;
                border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
                border-bottom-color: #b3b3b3;
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);
                filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
                -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
                -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
            }
        </style>
        <!-- FusionCharts Library -->
        <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
        <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
        <script>
            changeBackground = function(){
                FusionCharts("chart-1").setChartAttribute('bgColor', '#efefef');
            }
            changeCaption = function(e){
                FusionCharts("chart-1").setChartAttribute('captionAlignment', 'left');
            }
            reset = function(e){
                FusionCharts("chart-1").setChartAttribute('bgColor', '#ffffff');
                FusionCharts("chart-1").setChartAttribute('captionAlignment', 'center');
            }
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
            $Chart = new FusionCharts("column2d", "chart-1" , "700", "400", "chart-container", "json", $chartData);
            // Render the chart
            $Chart->render();
        ?>
        <div align="center" id="chart-container">Chart will render here!</div>
            <div>
                <p align="center" id ="message"></p>
            </div>
            <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
                <input type="button" class="button" onClick="changeBackground()" value='Change Chart Background'/>
                <input type="button" class="button" onClick="changeCaption()" value='Make Caption Text Left Aligned'/>
                <input type="button" class="button" onClick="reset()" value='Reset Attributes'/>
            </div> 
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

5. Return the output of the `render` function (defined in `FusionCharts`):
    * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.
    * Pass the relative path of the HTML template, where the chart will be rendered.
    * Pass a dictionary.
