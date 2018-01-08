---
permalink: using-with-server-side-languages/php/different-ways-of-loading-data.html
title: Different Ways of Loading Data in PHP | FusionCharts
description: The FusionCharts PHP wrapper lets you load data for a chart using a static JSON/XML string and a JSON/XML string generated from an associative array
heading: Different Ways of Loading Data in PHP
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts PHP Wrapper can be downloaded from <a href="http://www.fusioncharts.com/php-charts/" target="_blank">here</a>.</p>

The FusionCharts PHP wrapper lets you load data for a chart using:

* <a href="/using-with-server-side-languages/php/different-ways-of-loading-data#loading-data-from-a-static-json-string" class="smoth-scroll">a static JSON string</a>

* <a href="/using-with-server-side-languages/php/different-ways-of-loading-data#loading-data-from-a-static-xml-string" class="smoth-scroll">a static XML string</a>

* <a href="/using-with-server-side-languages/php/different-ways-of-loading-data#loading-data-from-a-json-string-generated-from-an-associative-array" class="smoth-scroll">a JSON string generated from an associative array</a>

* <a href="/using-with-server-side-languages/php/different-ways-of-loading-data#loading-data-from-a-json-string-generated-from-an-associative-array" class="smoth-scroll">an XML string generated from an associative array</a>

In this section, you will be shown how the FusionCharts PHP wrapper uses each of these methods to generate charts.

<p class="text-info">Before you proceed, make sure you have <a href="/using-with-server-side-languages/php/introduction.html" target="_blank">installed and set up the plugin </a> correctly.</p>

<p class="text-info"> There are two more ways for loading data - using the JSON URL and using the XML URL. These methods, however, are similar to using static strings. The only difference is that the data is loaded from a separate `.json` or `.xml` file. The URLs of the file is then passed as the value for the data source parameter of the constructor. In case of JSON data, `jsonurl` is passed as the value for the data format parameter; for XML data, it is `xmlurl`.</p>

## Loading Data from a Static JSON String

An area chart, the data for which is loaded from a static JSON string, is shown below:

{% embed_chart using-with-server-side-languages-php-different-ways-of-loading-data-example-1a.js %}

The data structure needed to render the above chart is given below:

```php
<?php
    /*
       Include the `fusioncharts.php` file that contains functions to embed the charts.
     */
    include("includes/fusioncharts.php");
?>

<html>

    <head>
        <title>FusionCharts XT - Simple Area 2D Chart with JSON Data</title>
        <!-- 
         Include the `fusioncharts.js` file. This file is needed to render the chart. Ensure that the path 
         to this JS file is correct. Otherwise, it may lead to JavaScript errors. 
         -->
        <script src="fusioncharts/fusioncharts.js"></script>
    </head>
    <body>
        <?php
            /*
                Create a `area2DChart` chart object using the FusionCharts PHP class constructor. Syntax for the constructor is `FusionCharts("type of chart", "unique chart id", "width of chart", "height of chart", "div id to render the chart", "data format", "data source")`. To load data from a JSON string, `json` is passed as the value for the data format parameter of the constructor. The actual JSON data for the chart is passed as a string to the constructor.
             */
            $area2DChart = new FusionCharts("Area2D", "myFirstChart" , 600, 300, "chart-1", "json",
                '{
                    "chart": {
                        "caption": "Sales of Liquor",
                        "subCaption": "Last week",
                        "xAxisName": "Day",
                        "yAxisName": "Sales (In USD)",
                        "numberPrefix": "$",
                        "theme": "zune"
                    },
                    "data": [
                                {"label": "Mon", "value": "4123"},
                                {"label": "Tue", "value": "4633"},
                                {"label": "Wed", "value": "5507"},
                                {"label": "Thu", "value": "4910"},
                                {"label": "Fri", "value": "5529"},
                                {"label": "Sat", "value": "5803"},
                                {"label": "Sun", "value": "6202"}
                            ] 
                }');

            // Render the chart
            $area2DChart->render();
        ?>
    <div id="chart-1">Fusion Charts will render here</div>
   </body>
</html>
```

<p class="text-info"> To know more about the attributes you can configure for the area chart, visit [this page](/chart-attributes?chart=area2d).</p>

## Loading Data from a Static XML String

A line chart, the data for which is loaded from a static XML string, is shown below:

{% embed_chart using-with-server-side-languages-php-different-ways-of-loading-data-example-1.js %}

The data structure needed to render the above chart is given below:

```php
<?php
    /*
        Include the `fusioncharts.php` file that contains functions to embed the charts.
     */  
    include("includes/fusioncharts.php");
?>
<html>
    <head>
        <title>FusionCharts XT - Simple Line Chart with XML Data</title>
        <!--  
            Include the `fusioncharts.js` file. This file is needed to render the chart.
             Ensure that the path to this JS file is correct. Otherwise, it may lead to JavaScript errors. 
        -->
        <script src="fusioncharts/fusioncharts.js"></script>
    </head>
    <body>
        <?php
            /*
                Create a `lineChart` chart object using the FusionCharts PHP class constructor. Syntax for the constructor is `FusionCharts("type of chart", "unique chart id", "width of chart", "height of chart", "div id to render the chart", "data format", "data source")`. To load data from an XML string, `xml` is passed as the value for the data format parameter of the constructor. The actual XML data for the chart is passed as a string to the constructor.
            */
            $lineChart = new FusionCharts("line", "myFirstChart" , 600, 300, "chart-1", "xml",
                '<chart caption="Total footfall in Bakersfield Central" subcaption="Last week" xaxisname="Day" yaxisname="No. of Visitors" theme="zune"><set label="Mon" value="15123" /><set label="Tue" value="14233" /><set label="Wed" value="23507" /><set label="Thu" value="9110" /><set label="Fri" value="15529" /><set label="Sat" value="20803" /><set label="Sun" value="19202" /></chart>');

            // Render the chart
            $lineChart->render();
        ?>
        <div id="chart-1">Fusion Charts will render here</div>
    </body>
</html>
```

<p class="text-info">To know more about the attributes you can configure for the line chart, visit [this page](/chart-attributes?chart=line)</p>

## Loading Data from a JSON String Generated from an Associative Array

A pie 2D chart, the data for which is loaded from an associative array, is shown below:

{% embed_chart using-with-server-side-languages-php-different-ways-of-loading-data-example-2.js %}

The data structure needed to render the above chart is given below:

```php

<?php
    /*
        Include the `fusioncharts.php` file that contains functions to embed the charts.
    */
    include("includes/fusioncharts.php");
?>

<!DOCTYPE html>
<html>
    <head>
        <title>FusionCharts XT - Pie 2D Chart</title>
        <!--  Include the `fusioncharts.js` file. This file is needed to render the chart. Ensure that the path to this JS file is correct. Otherwise, it may lead to JavaScript errors. -->
        <script src="fusioncharts/fusioncharts.js"></script>
    </head>
    <body>
        <?php
            /* `$arrData` is the associative array that is initialized to store the chart attributes. */
            $arrData = array(
                "chart" => array(
                    "caption"=> "Split of visitors by age group",
                    "subCaption"=> "Last year",
                    "enableSmartLabels"=> "0",
                    "showPercentValues"=> "1",
                    "showLegend"=> "1",
                    "decimals"=> "1",
                    "theme"=> "zune"
                )
            );
            /*
                The data to be plotted on the chart is stored in the `$actualData` array in the key-value form.
            */
            $actualData = array(
                "Teenage" => 1250400,
                "Adult" => 1463300,
                "Mid-age" => 1050700,
                "Senior" => 491000
            );
            /*
                Convert the data in the `$actualData` array into a format that can be consumed by FusionCharts. The data for the chart should be in an array wherein each element of the array is a JSON object having the "label" and “value” as keys.
            */
            $arrData['data'] = array();
            // Iterate through the data in `$actualData` and insert in to the `$arrData` array.
            foreach ($actualData as $key => $value) {
                array_push($arrData['data'],
                    array(
                        'label' => $key,
                        'value' => $value
                    )
                );
            }

            /*
                JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.
            */
            $jsonEncodedData = json_encode($arrData);
            /*
                Create an object for the pie chart  using the FusionCharts PHP class constructor. Syntax for the constructor is ` FusionCharts("type of chart", "unique chart id", width of the chart, height of the chart, "div id to render the chart", "data format", "data source")`. Because we are using JSON data to render the chart, the data format will be `json`. The variable `$jsonEncodeData` holds all the JSON data for the chart, and will be passed as the value for the data source parameter of the constructor.
            */
            $pieChart = new FusionCharts("pie2D", "myFirstChart" , 600, 300, "chart-1", "json", $jsonEncodedData);
            // Render the chart
            $pieChart->render();
        ?>
        <div id="chart-1">Fusion Charts will render here</div>
    </body>
</html>

```
<p class="text-info">To know more about the attributes you can configure for the pie 2D chart, visit [this page](/chart-attributes?chart=pie2d).</p>

## Loading Data from an XML String Generated from an Associative Array

A bar 2D chart, the data for which is generated from an associative array, is shown below:

{% embed_chart using-with-server-side-languages-php-different-ways-of-loading-data-example-3.js %}

The data structure needed to render the above chart is given below:

```php

<?php
    /*
        Include the `fusioncharts.php` file that contains functions to embed the charts.
    */
    include("includes/fusioncharts.php");
?>
<!DOCTYPE html>
<html>
    <head>
        <title>FusionCharts XT - Bar 2D Chart</title>
        <!-- Include the `fusioncharts.js` file. This file is needed to render the chart. Ensure that the path to this JS file is correct. Otherwise, it may lead to JavaScript errors. -->
        <script src="fusioncharts/fusioncharts.js"></script>
    </head>
    <body>
    <?php
        /*
            Set up templates for the XML data. To create an XML string, using templates is an easier option that manual string concatenation.
        */
        $chartXMLTemplate = <<< CHART
        <chart __attributes__>__set__</chart>
        CHART;
        $attributeTemplate = <<<ATTRIBUTE
        __key__="__value__"
        ATTRIBUTE;
        $setXMLTemplate = <<<SET
        <set label="__label__" value="__value__" />
        SET;
        /* `$arrData` is the associative array that is initialized to store the chart attributes. */
        $arrData = array(
            "chart" => array(
                "caption" => "Top 5 Stores by Sales",
                "subCaption" => "Last month",
                "yAxisName" => "Sales (In USD)",
                "numberPrefix" => "$",
                "showAxisLines" => "1",
                "axisLineAlpha" => "25",
                "divLineAlpha" => "10",
                "alignCaptionWithCanvas" => "0",
                "theme" => "zune"
            )
        );
        // The data to be plotted on the chart is stored in the `$arrData` array.
        $arrData['data'] = array(
            "Bakersfield Central" => 880000,
            "Garden Groove harbour" => 730000,
            "Los Angeles Topanga" => 590000,
            "Compton-Rancho Dom" => 520000,
            "Daly City Serramonte" => 330000
        );
        /*
            To convert the chart attributes array, `$arrData`, to XML, we will use the templates instead of manipulating the strings. Individual attribute strings will be stored in the array; they will then be combined into one string using the `implode` method.
        */
        $chartAttributeList = array();
        // Iterate over each chart attribute and convert it into an attribute string
        foreach ($arrData['chart'] as $key => $value) {
            $tempAttributeTemplate = $attributeTemplate;
            $tempAttributeTemplate = str_replace('__key__', $key, $tempAttributeTemplate);
            $tempAttributeTemplate = str_replace('__value__', $value, $tempAttributeTemplate);
            array_push($chartAttributeList, $tempAttributeTemplate);
        }
        // Join the array using a single space as the delimiter.
        $chartAttributeString = implode(' ', $chartAttributeList);
        /*      We again use the template to convert the chart data into the XML format.     */
        $setList = array();
        // Iterate over each data and convert it into XML set
        foreach ($arrData['data'] as $key => $value) {
            $tempSetXMLTemplate = $setXMLTemplate;
            $tempSetXMLTemplate = str_replace('__label__', $key, $tempSetXMLTemplate);
            $tempSetXMLTemplate = str_replace('__value__', $value, $tempSetXMLTemplate);
            array_push($setList, $tempSetXMLTemplate);
        }
        $setString = implode('', $setList);
        $chartXML = $chartXMLTemplate;
        // Replace the chart attributes
        $chartXML = str_replace('__attributes__', $chartAttributeString, $chartXML);
        // Replace the data sets
        $chartXML = str_replace('__set__', $setString, $chartXML);
        /*
            Create an object for the bar chart using the FusionCharts PHP class constructor. Syntax for the constructor is ` FusionCharts("type of chart", "unique chart id", width of the chart, height of the chart, "div id to render the chart", "data format", "data source")`. The constructor is used to initialize the chart type, chart id, width, height, the div id of the chart container, the data format, and the data source. Because we are using XML data to render the chart, the data format will be `xml`. The variable `$chartXML` holds all the XML data for the chart, and will be passed as the value for the data source parameter of the constructor.
        */
        $barChart = new FusionCharts("bar2D", "myFirstChart" , 600, 300, "chart-1", "xml", $chartXML);
        // Render the chart
        $barChart->render();
    ?>
    <div id="chart-1"><!-- Fusion Charts will render here--></div>
    </body>
</html>

```
<p class="text-info">To know more about the attributes you can configure for the bar 2D chart, visit [this page](/chart-attributes?chart=bar2d).</p>

## Important Tips for Developers

Given below are a few tips that, although applicable while coding for the entire product, need to be paid attention to here:

* The structure in which chart data is specified, based on whether you are rendering a single-series chart or a multi-series chart.  The table below shows the difference:

<table>
<tr>
    <td><strong>Single-series Chart</strong></td>
</tr>
<tr>
{% embed_data using-with-server-side-languages-php-different-ways-of-loading-data-example-4.js %}
For an example, click [here](/chart-guide/standard-charts/creating-standard-charts) (For XML - check the data under the XML tab).
    </td>
    </tr>
    <tr>
        <td><strong>Multi-series Chart</strong></td>
    </tr>
    <tr>
{% embed_data using-with-server-side-languages-php-different-ways-of-loading-data-example-5.js %}
For an example, click [here](/chart-guide/multi-series-charts/creating-multi-series-charts) (For XML - check the data under the XML tab).
    </td>
</tr>
</table>

* Make sure that the XML strings are escaped properly, especially for instances where the data for the chart is enclosed in quotation marks. Also make sure that the entire string is enclosed in single quotes, while the attributes and corresponding values are enclosed in double quotes. Doing otherwise will break the code.

* The chart ID should be unique for all charts rendered on the same page. Otherwise, it will result in a JavaScript error.