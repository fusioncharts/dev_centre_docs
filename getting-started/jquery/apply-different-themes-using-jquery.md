---
title: Apply Different Themes using Jquery | FusionCharts
description: This article will showcase how to apply different themes to the chart at runtime.
heading: Apply Different Themes using Jquery
---

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`

This article focuses on how you can apply different themes to the chart at runtime using `jquery-fusioncharts` component. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

The code to render a chart using `require` is given below:

```
// Include fusioncharts
var FusionCharts = require('fusioncharts');

// Include chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

// Include the theme file
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

var $ = require('jquery');
var jQueryFusionCharts = require('jquery-fusioncharts');

// Resolve Charts as dependency for FusionCharts
Charts(FusionCharts); 

// Resolve Fusion theme as dependency for FusionCharts
FusionTheme(FusionCharts); 

// Resolve FusionCharts as dependency for jqueryFusionCharts
jQueryFusionCharts(FusionCharts); 

$('document').ready(function() {
    $('#chart-container').insertFusionCharts({
        id: 'theme-chart',
        type: 'column2d',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            // Chart configuration
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            // Chart data
            "data": [{
                "label": "Venezuela",
                "value": "290"
            }, {
                "label": "Saudi",
                "value": "260"
            }, {
                "label": "Canada",
                "value": "180"
            }, {
                "label": "Iran",
                "value": "140"
            }, {
                "label": "Russia",
                "value": "115"
            }, {
                "label": "UAE",
                "value": "100"
            }, {
                "label": "US",
                "value": "30"
            }, {
                "label": "China",
                "value": "30"
            }]
        }
    });

    // Handlers for changing the theme using setChartAttribute method
    $('#radio1').click(function() {
        FusionCharts.items['theme-chart'].setChartAttribute('theme', 'fusion');
    });
    $('#radio2').click(function() {
        FusionCharts.items['theme-chart'].setChartAttribute('theme', 'gammel');
    });
    $('#radio3').click(function() {
        FusionCharts.items['theme-chart'].setChartAttribute('theme', 'candy');
    });
    $('#radio4').click(function() {
        FusionCharts.items['theme-chart'].setChartAttribute('theme', 'zune');
    });
    $('#radio5').click(function() {
        FusionCharts.items['theme-chart'].setChartAttribute('theme', 'ocean');
    });
    $('#radio6').click(function() {
        FusionCharts.items['theme-chart'].setChartAttribute('theme', 'carbon');
    });
});
```

## The HTML template of the above sample is shown below:

```HTML
<div id="chart-container"></div>
<div style="display: flex; position: absolute; bottom: 2px;">
    <div id="select-text">Choose a theme:</div>
    <div class="change-type">
        <div id="radio1">
            <input name="theme-selecter" id="radioButton1" type="radio" checked="checked" />
            <label for="radioButton1">Fusion</label>
        </div>
        <div id="radio2">
            <input name="theme-selecter" id="radioButton2" type="radio" />
            <label for="radioButton2">Gammel</label>
        </div>
        <div id="radio3">
            <input name="theme-selecter" id="radioButton3" type="radio" />
            <label for="radioButton3">Candy</label>
        </div>
        <div id="radio4">
            <input name="theme-selecter" id="radioButton4" type="radio" />
            <label for="radioButton4">Zune</label>
        </div>
        <div id="radio5">
            <input name="theme-selecter" id="radioButton5" type="radio" />
            <label for="radioButton5">Ocean</label>
        </div>
        <div id="radio6">
            <input name="theme-selecter" id="radioButton6" type="radio" />
            <label for="radioButton6">Carbon</label>
        </div>
    </div>
</div>
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Resolve charts as dependency for `fusioncharts`, `theme` file and `jquery-fusioncharts`. 

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. Add handlers to apply selected theme to the chart.

5. Create an HTML template to render the chart.
