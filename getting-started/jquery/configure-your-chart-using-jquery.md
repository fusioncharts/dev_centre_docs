---
title: Configuring your Chart using jQuery | FusionCharts
description: This article focuses on different type of configurations possible using jQuery.
heading: Configuring your Chart using jQuery
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization easy. These features include chart update, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `jquery-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#update-chart-attributes-2)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update chart** data to update the chart data):

{% embed_chart configure-charts-using-angular-example-1.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
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
},
```

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart using `require` is given below:

```
let FusionCharts = require('fusioncharts');
let Charts = require('fusioncharts/fusioncharts.charts');
let FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
let $ = require('jquery');
let jQFc = require('jquery-fusioncharts');

Charts(FusionCharts);
FusionTheme(FusionCharts);

FusionCharts.ready(function() {
    var dataSource = { /* see data tab */ };
    var btn = document.getElementById('update');

    // This function generates random number.
    function getRandomNumber() {
        var max = 300,
            min = 50;
        return Math.round(((max - min) * Math.random()) + min);
    }

    // Handler for update button.
    // Randomly updates the values of the chart.
    btn.addEventListener('click', function() {
        var dataArrayNew = $.extend({}, dataSource);
        dataArrayNew.data[2].value = getRandomNumber();
        dataArrayNew.data[3].value = getRandomNumber();
        $('#chart-container').updateFusionCharts({
            dataFormat: 'json',
            dataSource: dataArrayNew
        });
    });

    // Using FusionChart's jQuery method insertFusionCharts() to create FusionCharts.
    $('#chart-container').insertFusionCharts({
        type: 'column2d',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: dataSource
    })
});
```

The HTML template of the above sample is shown below:

```
<div id='chart-container'>
    FusionCharts will render here
</div>
<center><button id='update' style="padding: 5px 10px; background: rgb(251, 251, 251);">Change Chart Data</button></center>
```

## Update Chart Attributes

A chart, configured to update the **chart caption** and **sub-caption** alignment dynamically, is shown below (click any one of the radio buttons shown below the chart to change the caption and sub-caption alignment):

{% embed_chart configure-charts-using-react-example-2.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
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
},
```

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart using `require` is given below:

```
let FusionCharts = require('fusioncharts');
let Charts = require('fusioncharts/fusioncharts.charts');
let FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
let $ = require('jquery');
let jQFc = require('jquery-fusioncharts');

Charts(FusionCharts);
FusionTheme(FusionCharts);

FusionCharts.ready(function() {
    var btn = document.getElementById('update');
    var dataSource = { /* see data tab */ };

    // Handler for 'Change Background' button.
    // Changes the chart background color.
    btn.addEventListener('click', function() {
        var dataArrayNew = $.extend({}, dataSource);
        dataArrayNew.chart.bgColor = '#efefef';
        $('#chart-container').updateFusionCharts({
            dataFormat: 'json',
            dataSource: dataArrayNew
        });
    });

    // Using FusionChart's jQuery method insertFusionCharts() to create FusionCharts.
    $('#chart-container').insertFusionCharts({
        type: 'column2d',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: dataSource
    })
});
```

The HTML template of the above sample is shown below:

```
<div id='chart-container'>
    FusionCharts will render here
</div>
<center>
    <button id='update' style='padding: 5px 10px; margin: 0px 2px; background: rgb(251, 251, 251);'>Change Background</button>
</center>
```