---
title: Apply Different Themes using PHP | FusionCharts
description: This article will showcase how to apply different themes to the chart at runtime.
heading: Apply Different Themes using PHP
---

## A chart configured to change the theme, is shown below:

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`

This article focuses on how you can apply different themes to the chart at runtime using FusionCharts PHP wrapper. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

The full code of the above sample is given below:

```
<!DOCTYPE html>
<?php
    /* Include the `../src/fusioncharts.php` file that contains functions to embed the charts.*/
    include("../includes/fusioncharts.php");
?>
<html>

<head>
    <!-- FusionCharts Library -->
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.gammel.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.candy.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.zune.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.ocean.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.carbon.js"></script>
</head>
<body>
    <?php
        $chartData1 = "{
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
        // Chart 1
        $Chart1 = new FusionCharts("overlappedcolumn2d", "chart-1" , "700", "400", "chart-1", "json", $chartData1);
        // Render the chart 1
        $Chart1->render();
    ?>
    <script type="text/javascript">
        FusionCharts && FusionCharts.ready(function() {
            var trans = document.getElementById("controllers").getElementsByTagName("input");
            for (var i = 0, len = trans.length; i < len; i++) {
                if (trans[i].type == "radio") {
                    trans[i].onchange = function() {
                        ChangeTheme(this.value);
                    };
                }
            }
        });

        function ChangeTheme(theme) {
            for (var k in FusionCharts.items) {
                if (FusionCharts.items.hasOwnProperty(k)) {
                    FusionCharts.items[k].setChartAttribute('theme', theme);
                }
            }
        };
    </script>

    <h3>Chart Theme Sample</h3>
    <div style="width: 100%; display: table;">
        <div style="display: table-row">
            <div id="chart-1" style="width: 40%; display: table-cell;">
                <%= getChart1.render() %>
            </div>
        </div>
    </div>

    <div align="center">
        <label style="padding: 0px 5px !important;">Select a theme for all charts</label>
    </div>
    
    <div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" checked value="fusion" /> FUSION
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="gammel" /> GAMMEL
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="candy" /> CANDY
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="zune" /> ZUNE
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="ocean" /> OCEAN
        </label>
        <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="carbon" /> CARBON
        </label>
    </div>
    
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

5. Create **Radio Buttons** and add functionalities to change themes at runtime.

6. Create the `<div>` element to render radio buttons.
