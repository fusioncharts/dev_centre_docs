---
title: Dynamically Add Chart Event Listener using PHP | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using PHP.
heading: Dynamically Add Chart Event Listener using PHP
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using FusionCharts PHP wrapper.

## A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

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
        input[type=radio], input[type=checkbox] {
                display:none;
        }
        input[type=radio] + label, input[type=checkbox] + label {
            display:inline-block;
            margin:-2px;
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
        input[type=radio]:checked + label, input[type=checkbox]:checked + label{
            background-image: none;
            outline: 0;
            -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
            -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
                background-color:#e0e0e0;
        }
    </style>
    <!-- FusionCharts Library -->
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script>
        track = function(){
                FusionCharts.addEventListener("dataplotclick", clickHandler);
                document.getElementById("message").innerHTML = "Click on the plot to see the value along with the label";
            };
            clickHandler = function(e){
                document.getElementById("message").innerHTML = "You have clicked on plot <b>"+  e.data.categoryLabel + "</b> whose value is <b>" + e.data.displayValue + "</b>";
            };
            reset = function(){
                FusionCharts.removeEventListener("dataplotclick", clickHandler);
                document.getElementById("message").innerHTML = "Click the below buttons to add an event dynamically to the chart";
            }
   </script>
</head>
<body>
    <?php
        $chartData ="{  
            \"chart\":
             {  
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
        <p align="center" id="message"></p>
    </div>

    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
        <input type="radio" id="radio1" name="radios" onClick="track()">
        <label for="radio1">LISTEN TO DATAPLOTCLICK EVENT</label>
        <input type="radio" id="radio2" name="radios" value="false" onClick="reset()">
        <label for="radio2">REMOVE DATAPLOTCLICK EVENT</label>
    </div>

    <a href="../index.php">Go Back</a>
</body>
</html>
```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains functions to embed the charts.

2. Add `<style>` for the buttons.

3. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`.

4. In the above sample:
	* Add a handler to track plot clicks.
	* Add an event listener is added for data plot click on the chart.
	* Set the default message is set when data plot tracking is enabled.
	* Add an event listener for `dataPlotClick` event when the message is updated with the values of the data plot.

5. Store the chart data in a JSON object.

6. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

7. Create the `<div>` element to render radio buttons using `<input>`.
