---
title: Adding Special Characters | FusionCharts
description: This article outlines the steps to be executed for adding special characters to the data values of your chart.
heading: Adding Special Characters
---

FusionCharts offers multiple options to format numbers on the chart. You can configure number prefixes and suffixes, decimal places, and scale numbers based on a predefined scale. This article focuses on how you customize the prefix and suffix of the numbers on the chart using `jquery-fusioncharts` component.

To customize the prefix and suffix of the numbers on the chart, use the following attributes:

* Specify the prefix for all the values on the chart using the `numberPrefix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberPrefix` and `xNumberPrefix` attributes.

* Specify the prefix for all the Y-axis values on the chart using the `yNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the prefix for all the X-axis values on the chart using the `xNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the suffix for all the values on the chart using the `numberSuffix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberSuffix` and `xNumberSuffix` attributes.

* Specify the suffix for all the Y-axis values on the chart using the `yNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

* Specify the suffix for all the X-axis values on the chart using the `xNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

## A chart configured to customize the prefix of the numbers on the chart is shown below:

{% embed_chartData adding-special-character-example-1.js json %}

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

$('document').ready(function () {
    $('#chart-container').insertFusionCharts({
    id: 'change-chart',
    type: 'column2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Monthly revenue for last year",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                "numberPrefix": "$",
                "theme": "fusion"
            },
            "data": [{
                "label": "Jan",
                "value": "420000"
            }, {
                "label": "Feb",
                "value": "810000"
            }, {
                "label": "Mar",
                "value": "720000"
            }, {
                "label": "Apr",
                "value": "550000"
            }, {
                "label": "May",
                "value": "910000"
            }, {
                "label": "Jun",
                "value": "510000"
            }, {
                "label": "Jul",
                "value": "680000"
            }, {
                "label": "Aug",
                "value": "620000"
            }, {
                "label": "Sep",
                "value": "610000"
            }, {
                "label": "Oct",
                "value": "490000"
            }, {
                "label": "Nov",
                "value": "900000"
            }, {
                "label": "Dec",
                "value": "730000"
            }]
        }
    });
});
```

The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
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

4. In the `dataSource` object, add `numberPrefix` attribute in `chart` object. Set the `numberPrefix` to `$`.

5. Create an HTML template to render the chart.
