---
permalink: using-with-server-side-languages/php/introduction.html
title: Introduction to the FusionCharts PHP Wrapper | FusionCharts
description: The wrapper includes several built-in PHP functions that reduce the time and effort that goes into generating, rendering, and configuring charts.
heading: Introduction to the FusionCharts PHP Wrapper
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts PHP Wrapper can be downloaded from <a href="http://www.fusioncharts.com/php-charts/" target="_blank">here</a>.</p>

FusionCharts Suite XT includes the FusionCharts PHP wrapper that lets you create interactive, data-driven charts in your PHP website without writing any JavaScript code.

JavaScript and HTML code is used to generate charts in the browsers. The server-side PHP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts on a browser page.

In this section, you will be shown how you can create a simple chart using the FusionCharts server-side PHP wrapper.

We will create a simple column 2D chart that plots the monthly revenue for the last year at Harry’s SuperMart. The data for the chart is shown in the table below:

<table>
  <tr>
    <th>Month</th>
    <th>Revenue (In USD)</th>
  </tr>
  <tr>
    <td>Jan</td>
    <td>420000</td>
  </tr>
  <tr>
    <td>Feb</td>
    <td>810000</td>
  </tr>
  <tr>
    <td>Mar</td>
    <td>720000</td>
  </tr>
  <tr>
    <td>Apr</td>
    <td>550000</td>
  </tr>
  <tr>
    <td>May</td>
    <td>910000</td>
  </tr>
  <tr>
    <td>Jun</td>
    <td>510000</td>
  </tr>
  <tr>
    <td>Jul</td>
    <td>680000</td>
  </tr>
  <tr>
    <td>Aug</td>
    <td>620000</td>
  </tr>
  <tr>
    <td>Sep</td>
    <td>610000</td>
  </tr>
  <tr>
    <td>Oct</td>
    <td>490000</td>
  </tr>
  <tr>
    <td>Nov</td>
    <td>900000</td>
  </tr>
  <tr>
    <td>Dec</td>
    <td>730000</td>
  </tr>
</table>


The rendered column 2D chart will look like this:

{% embed_chart using-with-server-side-languages-php-introduction-example-1.js %}

The data structure, with the steps in comments, that shows how you can use the FusionCharts PHP wrapper to plot the above chart is given below:

```php
<?php
   /**
    * step 1: Include the `fusioncharts.php` file that contains functions to embed the charts.
    */
   include("includes/fusioncharts.php");
?>
<html>

   <head>
    <title>FusionCharts XT - Simple Column 2D Chart</title>
    <!--
        Step 2:  Include the `fusioncharts.js` file. This file is needed to render the chart.
         Ensure that the path to this JS file is correct. Otherwise, it may lead to JavaScript errors.
    -->
    <script src="fusioncharts/fusioncharts.js"></script>
   </head>
   <body>
    <?php
        /**
         *  Step 3: Create a `columnChart` chart object using the FusionCharts PHP class constructor. 
         *  Syntax for the constructor: `FusionCharts("type of * chart", "unique chart id", "width of chart", 
         *  "height of chart", "div id to render the chart", "data format", "data source")`
         */
        $columnChart = new FusionCharts("Column2D", "myFirstChart" , 600, 300, "chart-1", "json",
            '{
                "chart": {
                    "caption": "Monthly revenue for last year",
                    "subCaption": "Harry\’s SuperMart",
                    "xAxisName": "Month",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "theme": "zune"
                },
                "data": [
                        {"label": "Jan", "value": "420000"}, 
                        {"label": "Feb", "value": "810000"},
                        {"label": "Mar", "value": "720000"},
                        {"label": "Apr", "value": "550000"},
                        {"label": "May", "value": "910000"},
                        {"label": "Jun", "value": "510000"},
                        {"label": "Jul", "value": "680000"},
                        {"label": "Aug", "value": "620000"},
                        {"label": "Sep", "value": "610000"},
                        {"label": "Oct", "value": "490000"},
                        {"label": "Nov", "value": "900000"},
                        {"label": "Dec", "value": "730000"}
                    ]
                }');
        /**
         *  Because we are using JSON/XML to specify chart data, `json` is passed as the value for the data
         *   format parameter of the constructor. The actual chart data, in string format, is passed as the value
         *   for the data source parameter of the constructor. Alternatively, you can store this string in a 
         *   variable and pass the variable to the constructor.
         */

        /**
         * Step 4: Render the chart
         */
        $columnChart->render();
    ?>
    <div id="chart-1"><!-- Fusion Charts will render here--></div>
   </body>
</html>
```