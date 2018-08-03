---
title: Configuring your Chart using jQuery | FusionCharts
description: This article focuses on different type of configurations possible using jQuery.
heading: Configuring your Chart using jQuery
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `jquery-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#update-chart-attributes-2)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to see changes):

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

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

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

```html
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

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

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

```html
<div id='chart-container'>
    FusionCharts will render here
</div>
<center>
    <button id='update' style='padding: 5px 10px; margin: 0px 2px; background: rgb(251, 251, 251);'>Change Background</button>
</center>
```

{% embed_chart configure-charts-using-jquery-example-3.js %}

{% embed_chart configure-charts-using-jquery-example-4.js %}

The code snippet for selecting all charts is shown below:

```javascript
$('#applyTheme').click(function() {
    // Use `FusionCharts` jQuery selector and apply theme to the charts
    $(':FusionCharts').attrFusionCharts({
        "theme": "fusion"
    });
});

```

The `:FusionCharts` selector selects all the charts in the specified context, which in this case is the current page. You can use it as a conventional jQuery selector.

## Selecting  Charts in a Specific Scope

To select all charts in a limited scope, such as an HTML element, you can use the element `id` or the `class` as the selector.

Given below are a few code snippets that show how you can select charts in specific HTML elements:

For applying a common theme to all charts inside all the `<div>` elements in the page, use the code snippet given below:

```javascript
$('div').attrFusionCharts({"theme": "fusion"});

```

For applying a common theme to only those charts that belong to HTML elements having the `selectorExample` class, use the code snippet given below:

```javascript
$('.selectorExample’).attrFusionCharts({"theme": "fusion"});

```

## Handling Events Using jQuery

The FusionCharts jQuery helper enables you to bind FusionCharts events using the jQuery `bind`/`on` methods. The event handler needs to be attached to an HTML element containing the `FusionCharts` object.

In this section, you will learn how to work with FusionCharts events using the jQuery helper.

A chart with the `dataPlotClick` event configured using the jQuery helper looks like this:

{% embed_chart configure-charts-using-jquery-example-5.js %}

<div id='messageView' style='width:250px; text-align:center; font-size:12px; color:#333; padding:10px; margin:20px 100px'>Click on a data plot to trigger event</div>

When a data plot on the chart is clicked, the `dataPlotClick` event is fired and the event listener displays the corresponding message in the div container.

The code snippet for this chart is shown below:

```javascript
$('#chart-container').insertFusionCharts({
    type: 'column2d',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            ...
        },
        "data": [
            ...
        ]
    }
});

// Display text when data plot is clicked
$('#chart-container').bind('fusionchartsdataplotclick', function(event, args) {
    $('#messageView').text("You selected " + args.toolText);
});
```

>  The complete list of events exposed by FusionCharts is available [here](/api/fusioncharts/fusioncharts-events). These events can be used with the FusionCharts jQuery helper by prefixing them with the text "fusioncharts" and using the lowercase representation of the event name. For example, the `beforeRender` event will be named as `fusionchartsbeforerender`. This is done to avoid conflict with the existing jQuery events that might have the same names. The parameters passed to the event handler function, however, are the same.